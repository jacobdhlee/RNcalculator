import {
  DIGITAL_TYPED,
  DIGITAL_RESET,
  OPERATOR_TYPED,
  EXCUTED_CALCULATE,
  TIP_CALCULATE,
} from '../actions/types';

const inital_state = {
  display: '0',
  operation: false,
  operatorValue: [],
  previousValue: [],
  nextValue: '',
  nextOperator: '',
};

const operatorCal = {
  '+': (prev, next) => prev + next,
  '-': (prev, next) => prev - next,
  '*': (prev, next) => prev * next,
  '/': (prev, next) => prev / next,
}

const calculateValue = (operator, prev, next) => {
  for(key in operatorCal) {
    if (operator === key) {
      return operatorCal[key](parseFloat(prev), parseFloat(next))
    }
  }
}

export default ( state = inital_state, action ) => {
  switch (action.type) {
    case DIGITAL_TYPED:
      if(state.operation) {
        state = { ...state, display: '', operation: false}
      }
      if( state.display !== '0' ) {
        if( action.payload === '.' && state.display.indexOf('.') !== -1 ) {
          return { ...state, display: state.display }
        }
        if(action.payload === '-' && state.display.indexOf('-') === -1) { 
          return { ...state, display: action.payload + state.display }
        }

        if(action.payload === '-' && state.display.indexOf('-') !== -1) { 
          return { ...state, display: state.display.slice(1) }
        }

        if(action.payload === '%') { return {...state, display: String(state.display / 100)} }

        return {...state, display: state.display + action.payload}
      }

      if(action.payload === '.') { return {...state, display: state.display + action.payload } }
      if(action.payload === '00') { return {...state, display: state.display } }

      return { ...state, display: action.payload }

    case DIGITAL_RESET: 
      return { ...inital_state }

    case OPERATOR_TYPED:
      if(state.previousValue.length > 0) {
        // if( ((state.operatorValue[0] === '+' || state.operatorValue[0] === '-') && (action.payload === '+' || action.payload === '-'))  || ((state.operatorValue[0] === '*' || state.operatorValue[0] === '/') && (action.payload === '*' || action.payload === '/')) ) {
          const value = calculateValue(state.operatorValue[0], state.previousValue[0], state.display)
          return {...state, display: String(value), operation: true, operatorValue: [ action.payload ], previousValue: [ value ]}
        // }
        
        // if( ((state.operatorValue[0] === '+' || state.operatorValue[0] === '-') && (action.payload === '*' || action.payload === '/')) || ((state.operatorValue[0] === '*' || state.operatorValue[0] === '/') && (action.payload === '+' || action.payload === '-')) ) {
        //   const valueStored = state.display;
        //   const operationStored = state.operatorValue[0]
        //   if(state.nextValue) {
        //     const values = calculateValue(state.operatorValue[0], state.nextValue, state.display)
        //     const finalValue = calculateValue(state.nextOperator, state.previousValue[0], values)
        //     return {...state, operation: true, previousValue: [ finalValue ], display: finalValue ,nextValue: '', nextOperator: '', operatorValue: [ action.payload ]}
        //   }
        //   return {...state, operation: true, operatorValue: [ action.payload ], nextValue: valueStored, nextOperator: operationStored}
        // }
      }
      const previousValue = [ ...state.previousValue, parseFloat(state.display) ]
      const operatorValue = [ ...state.operatorValue, action.payload ]
      return { ...state, operation: true, previousValue, operatorValue}

    case EXCUTED_CALCULATE:
      if(!state.previousValue[0]) {
        return {...state}
      }
      const value = calculateValue(state.operatorValue[0], state.previousValue[0], state.display)
      return {...inital_state, display: String(value)}
    
    case TIP_CALCULATE:
      const tipValue = calculateValue('*', state.display, action.payload)
      return {...inital_state, display: String(tipValue)}

    default: 
      return inital_state
  }
}