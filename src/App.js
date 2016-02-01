import React from 'react';
import Header from './components/site/Header';
import Content from './components/site/Content';
import Orders from './components/orders/Orders';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Content>
                    <Orders />
                </Content>
            </div>
        );
    }
}

export default App;
