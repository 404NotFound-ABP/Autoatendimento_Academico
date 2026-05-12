import { Router } from 'express';
import { getPublicNodes, deleteALL } from '@/controllers/publicController.js';

const routerPUBLIC = Router();


//GET para o user a cada clique (com o id do nó atual)
// Clica e passa o node pega o id e faz um quary que retorna todas opções que tem o idparante igual ao id
routerPUBLIC.get('/options/:id', getPublicNodes);

//DELETE ALL
routerPUBLIC.delete('/deve/deletall', deleteALL);

export default routerPUBLIC;