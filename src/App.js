import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    Provider
} from 'react-redux'
import ReduxThunk from 'redux-thunk';

import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

class App extends Component{
    componentWillMount(){
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyCCSkqhyJ7bpq0eZyC4LFjZDl_5CBjUqIU",
            authDomain: "reactnativemanager-de154.firebaseapp.com",
            databaseURL: "https://reactnativemanager-de154.firebaseio.com",
            projectId: "reactnativemanager-de154",
            storageBucket: "",
            messagingSenderId: "837286276529"
        };
        firebase.initializeApp(config);

    };
    render(){
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <View>
                    <LoginForm>

                    </LoginForm>
                    <Text>
                        Hello
                    </Text>
                </View>
            </Provider>
        )
    }
}

export default App;