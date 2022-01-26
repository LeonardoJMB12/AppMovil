import {Router} from 'express';
import { getCliente, getClienteCount, getClientes, saveClientes, deleteCliente, updateCliente } from '../controllers/clientes';

const router = Router();

/**
 * @swagger
 * /clientes:
 * get:
 *  summary: GET all clients
 */
router.get('/clientes', getClientes);

/**
 * @swagger
 * /clientes/count:
 * get:
 *  summary: GET all clients counter
 */
router.get('/clientes/count', getClienteCount)

/**
 * @swagger
 * /clientes/{id}:
 * get:
 *  summary: GET a client by id
 */
router.get('/clientes/:id', getCliente)


/**
 * @swagger
 * /clientes/{id}:
 * post:
 *  summary: save a new client
 */

router.post('/clientes', saveClientes)

/**
 * @swagger
 * /clientes/{id}:
 * delete:
 *  summary: delete a client by id
 */
router.delete('/clientes/:id', deleteCliente)

/**
 * @swagger
 * /clientes/{id}:
 * put:
 *  summary: update a client by id
 */
router.put('/clientes/:id', updateCliente)


export default router