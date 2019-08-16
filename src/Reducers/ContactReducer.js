import {GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from "../Action/ContactActions";
import * as uuid from "uuid";

const initialState = {
    contacts: [
        {
            id: uuid(),
            name: 'vijay',
            email: 'vijayj1997@gmail.com',
            phone: 7299253817
        },
        {
            id: uuid(),
            name: 'jagan',
            email: 'vijay.jagan@gmail.com',
            phone: 123456789
        }
    ]
};
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload,
                    ...state.contacts]
            };
        default:
            return state;
    }
}
export default contactReducer;