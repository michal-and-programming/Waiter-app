import { API_URL } from '../config';

export const getAllTables = state => state.tables;

const EDIT_TABLE = 'app/tables/EDIT_TABLE';
const LOAD_TABLES = 'app/tables/LOAD_TABLES';

export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const loadTables = payload => ({ type: LOAD_TABLES, payload });

export const fetchTables = () => {
  return dispatch => {
    return fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => dispatch(loadTables(tables)))
      .catch(err => console.error(err));
  };
};

export const editTableRequest = (tableData) => {
  return dispatch => {
    return fetch(`${API_URL}/tables/${tableData.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tableData),
    })
      .then(res => res.json())
      .then(updatedTable => {
        dispatch(editTable(updatedTable));
      })
      .catch(err => console.error(err));
  };
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_TABLES:
      return [...action.payload];
    case EDIT_TABLE:
      return statePart.map(table =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  }
};

export default tablesReducer;