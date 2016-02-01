import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav className="main-nav">
                <a>Dashboard</a>
                <a className="current">Orders</a>
                <a>Catalog</a>
            </nav>
        );
    }
}

export default Nav;
