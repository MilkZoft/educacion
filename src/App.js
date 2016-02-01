import React from 'react';
import Header from './components/site/Header';
import Content from './components/site/Content';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Content>
                    <h1>Page title</h1>
                </Content>
            </div>
        );
    }
}

export default App;
