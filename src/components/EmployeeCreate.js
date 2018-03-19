import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardItem, Input, Button } from './common'

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        label="Name"
                        placeHolder="Jane"
                        value={this.props.name.value}
                        onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardItem>

                <CardItem>
                    <Input 
                        label="Phone"
                        placeHolder="555-555-555"
                        value={this.props.phone.value}
                        onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}

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

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);