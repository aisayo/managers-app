import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './common';


class LoginForm extends Component {

    onEmailChange(text) {
        
    }

    render() {
        return(
            <Card>
                <CardItem>
                    <Input 
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardItem>
                   

                <CardItem>
                    <Input 
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                    />
                </CardItem>

                <CardItem>
                    <Button>
                        Login
                    </Button>

                </CardItem>
            </Card>
        );
    }
}

export default LoginForm;