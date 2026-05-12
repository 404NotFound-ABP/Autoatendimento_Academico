import type { Request, Response } from 'express';
import { pool } from '@/server/config/database.js';


export const getPublicNodes = async (req: Request, res: Response) => {
    const { id } = req.params;
  try {
        // 1. Buscamos se existem "filhos" para este ID
        const childrenQuery = id 
            ? 'SELECT id, title, display_order FROM navigation_nodes WHERE is_active = true AND parent_id = $1 ORDER BY title ASC'
            : 'SELECT id, title, display_order FROM navigation_nodes WHERE is_active = true AND parent_id IS NULL ORDER BY title ASC';
        
        const params = id ? [id] : [];
        const result = await pool.query(childrenQuery, params);

        // Lógica de Parada: Se não houver filhos, este nó é uma RESPOSTA (Folha)
        if (result.rows.length === 0 && id) {
            const leafQuery = 'SELECT title, content, chunk_path, link FROM navigation_nodes WHERE id = $1 AND is_active = true';
            const leafResult = await pool.query(leafQuery, [id]);

            if (leafResult.rows.length === 0) {
                return res.status(404).json({ error: "Conteúdo não encontrado." });
            }

            // Retornamos a resposta final para o chat exibir
            return res.json({
                type: 'answer',
                data: leafResult.rows[0]
            });
        }

        // Caso contrário, retornamos um MENU de opções
        res.json({
            type: 'menu',
            options: result.rows
        });

    } catch (err) {
        console.error('Erro na navegação do chat:', err);
        res.status(500).json({ error: "Erro interno ao processar navegação." });
    }
  
}

export const deleteALL = async (_req: Request, res: Response) => {
  try{
    const query=`
      DELETE FROM navigation_nodes;
    `;
    await pool.query(query);
    res.status(200).json({message: "Banco deletado com sucesso!"})

  }catch (error){
    console.error('Erro ao deletar banco:', error);
    res.status(500).json({erro: "Falha so deletar banco."});
  }
}