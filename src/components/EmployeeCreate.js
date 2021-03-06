import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Button, Title, Spinner } from 'native-base';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'monday' });
  }

  renderButton() {
		if (this.props.loading) {
			return <Spinner color='green' style={{ justifyContent: 'center', flex: 1 }} />;
		}

		return (
			<Button block style={{ flex: 1 }} onPress={this.onButtonPress.bind(this)}>
        <Title>Create</Title>
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

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
