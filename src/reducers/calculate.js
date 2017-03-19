import {
  DIGITAL_TYPED,
  DIGITAL_RESET,
} from '../actions/types';

const inital_state = {
  display: '0'
};

export default ( state = inital_state, action ) => {
  switch (action.type) {
    case DIGITAL_TYPED:
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

        return {...state, display: state.display + action.payload}
      }

      if(action.payload === '.') { return {...state, display: state.display + action.payload } }
      if(action.payload === '00') { return {...state, display: state.display } }
      return { ...state, display: action.payload }

    case DIGITAL_RESET: 
      return { ...state, display: action.payload } 

    default: 
      return inital_state
  }
}