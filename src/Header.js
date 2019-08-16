import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <a href='/' className="navbar-brand">ContactManager</a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="/Home" className="nav-item nav-link active">Home</a>
                            <a href="/AddContact" className="nav-item nav-link">AddContact</a>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}

export default Header;