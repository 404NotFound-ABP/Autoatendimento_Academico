import routerADMIN from '@/routes/routes_crud_ADMIN.js';
import { Router } from 'express';
import routerPUBLIC from './routes_crud_PUBLIC.js';

const routes = Router();

routes.use('/admin', routerADMIN);
routes.use('/api', routerPUBLIC);


export default routes;

