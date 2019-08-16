import React from 'react';
import {connect} from 'react-redux';
import {deleteContact} from "./Action/ActionCreator";



class ListContact extends React.Component {
    constructor() {
        super();
        this.state = {
            contactInformation: false,
            arrowChange: true,
        };
    }

    expandContact = (event) => {
        this.setState({arrowChange: !this.state.arrowChange})
        this.setState({contactInformation: !this.state.contactInformation})
    }
    deleteContact = (id) => {
        this.props.deleteContact(id);
    }


    render() {
        const {contacts} = this.props;
        const {contactInformation, arrowChange} = this.state;
        return (
            <div class="card bg-primary text-white ml-5  mt-2" style={styleWidth}>
                <div class="card-body">
                    {contacts.name}
                    <i onClick={this.expandContact}
                       className={arrowChange ? (" ml-2 fas fa-caret-down") : ("ml-2 fas fa-sort-up")}></i>

                    <div className="float-right">
                        <i onClick={() => this.deleteContact(contacts.id)} className="fas fa-trash"></i>
                    </div>
                </div>
                {
                    contactInformation ? (
                        <div className="bg-secondary card-text px-3">
                            <i className="far fa-envelope my-2"></i>{"  " + contacts.email}
                            <br/>
                            <i className="fas fa-phone-square-alt my-2"></i>{"   " + contacts.phone}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

const styleWidth = {
    width: '25%'
}
export default connect(null, {deleteContact})(ListContact);