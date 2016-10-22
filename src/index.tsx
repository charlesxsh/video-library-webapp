import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

import VideoArea from './components/VideoArea';
import ListArea from './components/ListArea';
import {reducers} from './reducers';

let store = createStore(reducers);
store.subscribe(()=>{
    console.log(store.getState());
});

class App extends React.Component<{}, {}> {
    public render() {
        return (
            <Provider store={store}>
            <div id="app-layout" className="ui two column doubling stackable grid">
                <VideoArea />
                <ListArea />
            </div>
            </Provider>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);