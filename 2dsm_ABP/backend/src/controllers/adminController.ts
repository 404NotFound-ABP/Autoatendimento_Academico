import type { Request, Response } from 'express';
import { pool } from '@/server/config/database.js';

export const getAllNodes = async (req: Request, res: Response) => {
    try {
        const query = 'SELECT id, parent_id, title, content, display_order, chunk_path, link, is_active, created_at, updated_at FROM navigation_nodes ORDER BY title ASC'
        const result = await pool.query(query);
        
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar todos os nós:', error);
        res.status(500).json({ error: 'Erro ao buscar todos os nós' });
    }
};

export const filterNodes = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const query = `
            WITH RECURSIVE tree_view AS (
                -- Parte Inicial: O curso selecionado
                SELECT id, parent_id, title, content, chunk_path, link, 1 AS nivel
                FROM navigation_nodes
                WHERE id = $1 AND parent_id IS NULL
                
                UNION ALL
                
                -- Parte Recursiva: Os filhos deste curso
                SELECT n.id, n.parent_id, n.title, n.content, n.chunk_path, n.link, tv.nivel + 1
                FROM navigation_nodes n
                INNER JOIN tree_view tv ON n.parent_id = tv.id
            )
            SELECT * FROM tree_view ORDER BY nivel ASC, id ASC;
        `;

        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "Classe principal não encontrada ou sem ramos." });
        }
        
        // Retorna a lista plana, mas com a informação de "nivel" e "parent_id"
        // para o frontend montar a árvore visualmente
        res.json(result.rows);

    } catch (error) {
        console.error('Erro ao buscar árvore:', error);
        res.status(500).json({ error: 'Erro ao processar estrutura da árvore' });
    }
}

export const deleteNode = async (req: Request, res: Response) => {
    const { id } = req.params;
    try{
        const result = await pool.query('DELETE FROM navigation_nodes WHERE id = $1', [id]);
        res.json(result.rows);
    }catch(error){
        console.error('Erro ao deletar nó:', error);
        res.status(500).json({ error: 'Erro ao deletar nó' });
    }
}

export const updateNode = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { parent_id, title, content, display_order, link, is_active } = req.body;
    const chunk_path = req.file ? req.file.path : null;

    try{
        const currentNode = await pool.query('SELECT chunk_path FROM navigation_nodes WHERE id = $1', [id]);
        
        if (currentNode.rows.length === 0) {
            return res.status(404).json({ error: 'Nó não encontrado' });
        }

        // Se um novo arquivo foi enviado, usamos o novo path. 
        // Caso contrário, mantemos o que já estava no banco.
        const chunk_path = req.file ? req.file.path : currentNode.rows[0].chunk_path;
        const query = `
            UPDATE navigation_nodes 
            SET parent_id = $1, title = $2, content = $3, display_order = $4, chunk_path = $5, link = $6, is_active = $7, updated_at = NOW()
            WHERE id = $8
            RETURNING *`;
        
        const values = [
            parent_id, 
            title, 
            content || null, 
            display_order || 0, 
            chunk_path, 
            (link && link.trim() !== '' && link !== 'null') ? link : null, 
            is_active !== undefined ? is_active : true,
            id 
        ];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);

    }catch(error){
        console.error('Erro ao atualizar nó:', error);
        res.status(500).json({ error: 'Erro ao atualizar nó' });
    }
}

export const creatNode = async (req: Request, res: Response) => {
    const { parent_id, title, content, display_order, link, is_active } = req.body;
    const chunk_path = req.file ? req.file.path : null;

    try{
        const query = `
            INSERT INTO navigation_nodes 
            (parent_id, title, content, display_order, chunk_path, link, is_active)
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *`;
        
        const values = [
            parent_id, 
            title, 
            content || null, 
            display_order || 0, 
            chunk_path, 
            (link && link.trim() !== '' && link !== 'null') ? link : null, 
            is_active !== undefined ? is_active : true
        ];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    }catch(error){
        console.error('Erro ao criar nó:', error);
        res.status(500).json({ error: 'Erro ao criar nó' });
    }
}