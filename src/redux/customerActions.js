import { GET_CUSTOMERS, FILTER_CUSTOMER, CLEAR_FILTER, GET_ALL } from './types';

// Get Paginated Customers
export async function getCustomers(dispatch, limit, offset) {
  const response = await fetch(
    `http://localhost:3001/customers/${offset}/${limit}`
  );
  const json = await response.json();
  dispatch({ type: GET_CUSTOMERS, payload: json.customers });
}

// get all customers

export async function getAll(dispatch) {
  const response = await fetch(`http://localhost:3001/customers/all`);
  const json = await response.json();

  dispatch({ type: GET_ALL, payload: json.customers });
}

//Filter Customers
export const filterCustomers = (text) => (dispatch) => {
console.log('filter text input', text)
  dispatch({ type: FILTER_CUSTOMER, payload: text });
};
//Clear Filter
export const clearFilter = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};
