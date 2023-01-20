// User -> email, password

import supertest from 'supertest'
import app from '../../src/api/app'

describe('User Controller', () => {
  describe('#add', () => {
    describe('quando o campo email não é informado', () => {
      it('deve retornar um status 400', async () => {
        const httpRequest = await supertest(app).post('/users').send({ password: 'any_password' })
        expect(httpRequest.statusCode).toEqual(400)
      })
    })

    describe('quando o campo password não é informado', () => {
      it('deve retornar um status 400', async () => {
        const httpRequest = await supertest(app).post('/users').send({ email: 'any_email' })
        expect(httpRequest.statusCode).toEqual(400)
      })
    })
  })
})
