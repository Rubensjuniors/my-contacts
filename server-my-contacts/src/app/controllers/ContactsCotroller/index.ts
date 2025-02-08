import { contactsRepository } from '@/app/repositories/ContactRepository'
import { randomUUID } from 'crypto'
import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'

class ContactsCotroller {
  async index(request: FastifyRequest, reply: FastifyReply) {
    const requestQuerySchema = z.object({
      orderby: z.string().default('asc'),
    })

    const { orderby } = requestQuerySchema.parse(request.query)

    const contacts = await contactsRepository.findAll(orderby)

    return reply.status(200).send(contacts)
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const requestBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      phone_number: z.string(),
      category_id: z.string().uuid(),
    })

    const {
      name,
      category_id: categoryId,
      email,
      phone_number: phoneNumber,
    } = requestBodySchema.parse(request.body)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      reply.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24, // 24 houres
      })
    }

    await contactsRepository.create({
      name,
      email,
      category_id: categoryId,
      phone_number: phoneNumber,
      session_id: sessionId,
    })

    return reply.status(201).send()
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const requestParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const requestBodySchema = z
      .object({
        name: z.string(),
        email: z.string().email(),
        phone_number: z.string(),
        category_id: z.string().uuid(),
      })
      .partial()

    const { id } = requestParamsSchema.parse(request.params)
    const updatedData = requestBodySchema.parse(request.body)

    await contactsRepository.update(id, { ...updatedData })

    return reply.status(204).send()
  }

  async findById(request: FastifyRequest, reply: FastifyReply) {
    const requestParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = requestParamsSchema.parse(request.params)

    const contacts = await contactsRepository.findById(id)

    return reply.status(200).send(contacts)
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const requestParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = requestParamsSchema.parse(request.params)

    await contactsRepository.delete(id)

    return reply.status(200).send()
  }
}

export const contactsCotroller = new ContactsCotroller()
