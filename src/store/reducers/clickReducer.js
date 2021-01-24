import { LOGADO, IDS} from '../actions/actionTypes'


const ESTADO_INICIAL = []

export function NomeReducer( state = ESTADO_INICIAL, action ) {
  switch (action.type){
    case LOGADO:
      return {
        ...state,
        novoNome: action.novoNome
      }
    default:
      return state;
  }
}

export function IdReducer(state = ESTADO_INICIAL,action){
  switch (action.type){
    case IDS:
      return {
      ...state,
      novoId: action.novoId
    }
    default:
      return state;
  }
}

