import { Router } from 'express';
import { upload } from '@/server/config/multer.js';
import { getAllNodes, filterNodes, deleteNode, updateNode, creatNode } from '@/controllers/adminController.js';

const routerADMIN = Router();

// GET all para o admin
routerADMIN.get('/nodes/all', getAllNodes);
    
//GET filter por ID das classes principais (1, 2 ,3 e 4)
routerADMIN.get('/nodes/filter/:id', filterNodes);

//DELETE por ID para o admin
routerADMIN.delete('/nodes/:id', deleteNode);

//UPDATE por ID para o admin
routerADMIN.put('/nodes/:id', upload.single('file'), updateNode);


//CREATE para o admin AJUSTAR O UPLOAD VIA MULTER
routerADMIN.post('/nodes/create', upload.single('file'), creatNode);


export default routerADMIN;