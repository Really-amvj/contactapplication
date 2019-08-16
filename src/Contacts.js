import React from 'react';
import ListContact from "./ListContact";
import {connect} from 'react-redux';

class Contacts extends React.Component {
    render() {
        return (
            <div>
                {this.props.contacts.map(contact =>
                    <ListContact contacts={contact}/>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    contacts: state.contactReducer.contacts
});
export default connect(mapStateToProps)(Contacts);