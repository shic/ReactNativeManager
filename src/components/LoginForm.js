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

class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);  
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='example@gamil.com'
                        onTextChange={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        secureTextEntry
                        placeholder='password'
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