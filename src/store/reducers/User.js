import { ActionTypes } from '../actions';

const initialState = {
  id: null,
  name: null,
  email: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_REGISTER_DATA:
      return {
        ...initialState,
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
      };
    case ActionTypes.USER_CLEAR_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
