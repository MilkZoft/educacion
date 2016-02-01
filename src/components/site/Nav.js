import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <a href="#">Dashboard</a>
                <a href="#" className="current">Orders</a>
                <a href="#">Catalog</a>
            </nav>
        );
    }
}

export default Nav;
