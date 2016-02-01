import React from 'react';
import Nav from './Nav';

class Header extends React.Component {
    render() {
        return (
            <div className="page-header">
                <div className="logo">
                    <span className="edu">Edu</span>caci<span className="icon-o">&nbsp;&nbsp;</span>n</div>
                <Nav />
            </div>
        );
    }
}

export default Header;
