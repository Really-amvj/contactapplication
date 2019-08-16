import React from 'react';
import {connect} from 'react-redux';
import {addContact} from "./Action/ActionCreator";
import * as uuid from "uuid";

class AddContact extends React.Component {
    state = {
        id: '',
        name: '',
        phone: '',
        email: '',
    };
    submit = (event) => {
        event.preventDefault();
        const {name, phone, email} = this.state;
        if (name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }

        if (email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }

        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }
        const newContact = {
            id: uuid(),
            name,
            phone,
            email
        }
        this.props.addContact(newContact);
        console.log(this.props);
        this.props.history.push('/Home');
    };
    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        const {name, phone, email} = this.state;
        return (
            <div className={"container"}>
                <h2>
                    <center>Enter Contact Details</center>
                </h2>
                <center>
                    <form style={style} onSubmit={this.submit}>
                        <div className="form-group">
                            Name :
                            <input type="text" className="form-control" name="name" value={name} placeholder="Name"
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            EmailId:
                            <input type="text" className="form-control" name="email" value={email} placeholder="EmailId"
                                   onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            Phone Number :
                            <input type="number" className="form-control" name="phone" value={phone}
                                   placeholder="PhoneNumber" onChange={this.onChange}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </center>
            </div>
        );
    }
}

const style = {
    width: '300px'
}
export default connect(null, {addContact})(AddContact);