import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class EmployeeListItem extends Component {
  onRowPress() {
    Actions.employeeEdit({ employee: this.props.employee });
    console.log(this.props.employee.name);
  }

  render() {
		const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <ListItem>
          <Text>{name}</Text>
        </ListItem>
      </TouchableWithoutFeedback>
    );
  }
}
