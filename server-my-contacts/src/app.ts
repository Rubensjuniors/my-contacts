import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import {
  validatorCompiler,
  serializerCompiler,
} from 'fastify-type-provider-zod'
import cookie from '@fastify/cookie'

import { categoriesControllers } from './app/controllers/CategoriesControllers'
import { contactsCotroller } from './app/controllers/ContactsCotroller'

export const app = fastify().withTypeProvider()

app.register(cookie)
app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  origin: '*',
})

app.get('/categories', categoriesControllers.index)
app.get('/categories/:id', categoriesControllers.findById)
app.post('/categories', categoriesControllers.create)
app.put('/categories/:id', categoriesControllers.update)
app.delete('/categories/:id', categoriesControllers.delete)

app.get('/contacts', contactsCotroller.index)
app.get('/contacts/:id', contactsCotroller.findById)
app.post('/contacts', contactsCotroller.create)
app.put('/contacts/:id', contactsCotroller.update)
app.delete('/contacts/:id', contactsCotroller.delete)
