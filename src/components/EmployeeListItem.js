import React, { Component } from 'react';
import { ListItem, Text } from 'native-base';

export default class EmployeeListItem extends Component {
  render() {
		const { name } = this.props.employee;
    return (
			<ListItem>
				<Text>{name}</Text>
			</ListItem>
    );
  }
}
