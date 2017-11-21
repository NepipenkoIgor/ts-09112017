import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/root.store';
import Header from './containers/header';
import Content from './containers/content';


class App extends React.Component {
    public render(): JSX.Element {
        return (
            <Provider store={store}>
                <div>
                    <Header />
                    <Content />
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);