import React, { Component } from 'react';
import { Card, CardItem, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label="Name"
                        placeHolder="Jane"
                    />
                </CardItem>

                <CardItem>
                    <Input 
                        label="Phone"
                        placeHolder="555-555-555"
                    />
                </CardItem>

                <CardItem></CardItem>

                <CardItem>
                    <Button>
                        Create
                    </Button>
                </CardItem>
            </Card>
        )
    }
}

export default EmployeeCreate;