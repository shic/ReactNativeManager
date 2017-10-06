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

class EmployeeList extends Component{

    render(){
        return(
            <View>
                <Text>
                    Employee list 1
                </Text>
                <Text>
                    Employee list
                </Text>
                <Text>
                    Employee list
                </Text>
                <Text>
                    Employee list
                </Text>
                <Text>
                    Employee list
                </Text>
                <Text>
                    Employee list
                </Text>
                <Text>
                    Employee list
                </Text>
            </View>
        );
    }
}

const mapStateToProps = state =>{
    return{
        email:state.auth.email,
        password:state.auth.password
    }
}

//export default connect(mapStateToProps,{emailChanged, passwordChanged})(EmployeeList) ;
export default EmployeeList;