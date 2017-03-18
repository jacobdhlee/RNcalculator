import {
  DIGITAL_TYPED,
} from '../actions/types';

const inital_state = {
  display: '0'
};

export default ( state = inital_state, action ) => {
  switch (action.type) {
    case DIGITAL_TYPED: 
      return { ...state, display: action.payload }
    default: 
      return inital_state
  }
}