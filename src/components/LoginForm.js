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

import * as actions from '../actions'

class LoginForm extends Component(){
    onEmailChange(text){
        actions.emailChanged(text);
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeHolder='example@gamil.com'
                        onTextChange={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        secureTextEntry
                        placeHolder='password'
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
    }
}

export default connect(mapStateToProps,actions)(LoginForm) ;