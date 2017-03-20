import { 
  DIGITAL_TYPED,
  DIGITAL_RESET,
  OPERATOR_TYPED,
  EXCUTED_CALCULATE,
  TIP_CALCULATE,
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

export const operatorEnter = (text) => {
  return {
    type: OPERATOR_TYPED,
    payload: text
  }
}

export const excutedEnter = () => {
  return {
    type: EXCUTED_CALCULATE,
  }
}

export const tipEnter = (text) => {
  return {
    type: TIP_CALCULATE,
    payload: text
  }
}