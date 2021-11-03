import actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = data => {
  return {
    type: actionTypes.ADD,
    payload: {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    },
  };
};
// export const deleteContact = data => {
//   return {
//     type: actionTypes.DELETE,
//     payload: data,
//   };
// };

const action = { addContact };

export default action;
