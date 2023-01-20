import { sayHello } from './file01'

describe('#sayHello', () => {
  describe('quando chamada com "Turma 21"', () => {
    it('deve retornar "Hello Turma 21!', () => {
      const response = sayHello('Turma 21')
      expect(response).toEqual('Hello Turma 21!')
    })
  })
})
