import React from 'react';
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import Header from "./Header";
import { Switch, Route} from "react-router-dom";


class ApplicationName extends React.Component {
    render() {
        return (
            <Switch>
                <div>
                    <Route  path='/' component={Header}/>
                    <Route exact path='/Home' component={Contacts}/>
                    <Route exact path='/AddContact' component={AddContact}/>

                </div>
            </Switch>
        );
    }
}


export default ApplicationName;
