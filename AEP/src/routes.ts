
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'
import productController from './controller/productController'

const routes = Router()
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.findUsers)
routes.post('/users', userController.createUser)

routes.post('/products', productController.createProducts)
routes.get('/products', productController.findProducts)

routes.get('/products-stock', productController.getStock)

export default routes