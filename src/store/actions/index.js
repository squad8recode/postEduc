import { LOGADO, IDS} from './actionTypes'


export const NomeLogin = value => ({
  type: LOGADO,
  novoNome: value
})

export const IdLogin = value => ({
  type: IDS,
  novoId: value
})