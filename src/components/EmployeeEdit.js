import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Spinner, Button, Title } from 'native-base';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate } from '../actions';

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonSave() {
		const { name, phone, shift, loading } = this.props;
		console.log(name, phone, shift, loading);
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner color='green' style={{ justifyContent: 'center', flex: 1 }} />;
		}

		return (
			<Button block style={{ flex: 1 }} onPress={this.onButtonSave.bind(this)}>
        <Title>Save</Title>
      </Button>
		);
	}

  render() {
    return (
      <Card style={{ flex: 0, paddingBottom: 10 }}>
        <EmployeeForm {...this.props} />
        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift, loading } = employeeForm;

  return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeEdit);
