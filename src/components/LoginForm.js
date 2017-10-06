import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

import {connect} from 'react-redux'

import {
    Card,
    CardSection,
    Input,
    Button
} from './common'

import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions'

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);  
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='example@gamil.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        secureTextEntry
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state =>{
    return{
        email:state.auth.email,
        password:state.auth.password
    }
}

export default connect(mapStateToProps,{emailChanged, passwordChanged})(LoginForm) ;