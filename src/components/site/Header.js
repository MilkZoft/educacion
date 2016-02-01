import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            <div className="page-header">
                <div className="logo">Educación.io</div>
                <Nav />
            </div>
        );
    }
}

export default Header;
