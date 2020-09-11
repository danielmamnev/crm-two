import {
  GET_CUSTOMERS,
  FILTER_CUSTOMER,
  CLEAR_FILTER,
} from './types';


export async function getCustomers(dispatch) {
  const response = await fetch(`http://localhost:3001/customers`);
  const json = await response.json();
  dispatch({ type: GET_CUSTOMERS, payload: json.customers });
}


//Filter Customers
export const filterCustomers = (text) => (dispatch) => {
  dispatch({ type: FILTER_CUSTOMER, payload: text });
};
//Clear Filter
export const clearFilter = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};
