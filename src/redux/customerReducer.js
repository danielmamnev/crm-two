import {
  GET_CUSTOMERS,
  FILTER_CUSTOMER,
  CLEAR_FILTER,
  CUSTOMER_ERROR,
} from './types';

const initialState = {
  customers: [],
  current: [],
  filtered: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: [...state.customers , ...action.payload],
      };

    case FILTER_CUSTOMER:
      return {
        ...state,
        filtered: state.customers.filter((customer) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return (
            customer.firstname.match(regex) || customer.lastname.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: [],
      };
    case CUSTOMER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
