import {GET_CONTACTS,ADD_CONTACT,DELETE_CONTACT,EDIT_CONTACT} from "./ContactActions";
export const getContacts = () =>{
    return{
        type: GET_CONTACTS
    };
};
export const deleteContact = (id) =>{
    return{
        type: DELETE_CONTACT,
        payload: id
    };
};

export const addContact = (contact) =>{
    return{
        type: ADD_CONTACT,
        payload: contact
    };
};

