import { 
  DIGITAL_TYPED,
  DIGITAL_RESET
} from './types';  

export const digitalEnter = (text) => {
  return {
    type: DIGITAL_TYPED,
    payload: text
  }
}

export const digitalReset = () => {
  return {
    type: DIGITAL_RESET,
    payload: '0'
  }
}