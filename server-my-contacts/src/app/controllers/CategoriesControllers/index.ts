import { categoriesRepository } from '@/app/repositories/CategoriesRepository'
import { randomUUID } from 'crypto'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

class CategoriesControllers {
  async index(request: FastifyRequest, reply: FastifyReply) {
    const requestQuerySchema = z.object({
      orderby: z.string(),
    })

    const { orderby } = requestQuerySchema.parse(request.query)

    const categories = await categoriesRepository.findAll(orderby)

    return reply.status(200).send(categories)
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const requestBodySchema = z.object({
      name: z.string(),
    })

    const { name } = requestBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24, // 24 houres
      })
    }

    await categoriesRepository.create({
      name,
      session_id: sessionId,
    })

    return reply.status(201).send()
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const requestParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const requestBodySchema = z.object({
      name: z.string(),
    })

    const { id } = requestParamsSchema.parse(request.params)
    const updatedData = requestBodySchema.parse(request.body)

    await categoriesRepository.update(id, { ...updatedData })

    return reply.status(204).send()
  }

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const requestParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = requestParamsSchema.parse(request.params)

    const category = await categoriesRepository.findById(id)

    return reply.status(200).send(category)
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const requestParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = requestParamsSchema.parse(request.params)

    await categoriesRepository.delete(id)

    return reply.status(200).send()
  }
}

export const categoriesControllers = new CategoriesControllers()
