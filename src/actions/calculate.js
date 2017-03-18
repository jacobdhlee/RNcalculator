import { 
  DIGITAL_TYPED
} from './types';  

export const digitalEnter = (text) => {
  return {
    type: DIGITAL_TYPED,
    payload: text
  }
}