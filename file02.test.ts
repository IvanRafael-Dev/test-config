import { sayGoodbye } from './file02'

describe('#sayGoodbye', () => {
  describe('quando chamada com "Turma 21"', () => {
    it('deve retornar "Goodbye Turma 21!', () => {
      const response = sayGoodbye('Turma 21')
      expect(response).toEqual('Goodbye Turma 21!')
    })
  })
})
