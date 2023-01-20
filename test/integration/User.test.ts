// User -> email, password

import supertest from 'supertest'
import app from '../../src/api/app'

describe('UserController', () => {
  describe('#add', () => {
    describe('quando o email nao é informado', () => {
      it('deve retornar um status 400', async () => {
        const httpResponse = await supertest(app)
          .post('/users')
          .send({})
        expect(httpResponse.status).toEqual(400)
        expect(httpResponse.body).toStrictEqual({ error: 'email is required' })
      })
    })
  })
})
