import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardItem, Spinner, Button, Title, View } from 'native-base';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

class EmployeeEdit extends Component {
	componentWillMount() {
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({ prop, value });
		});
	}

	onButtonSave() {
		const { name, phone, shift } = this.props;
		this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
	}

	onTextPress() {
		const	{ phone, shift } = this.props;
		text(phone, `Your schedule is on ${shift}`);
	}

	onFirePress() {
		
	}

	renderButton() {
		if (this.props.loading) {
			return (
				<CardItem>
					<Spinner color='green' style={{ justifyContent: 'center', flex: 1 }} />
				</CardItem>
			);
		}

		return (
			<View>
				<CardItem>
					<Button block style={{ flex: 1 }} onPress={this.onButtonSave.bind(this)}>
						<Title>Save</Title>
					</Button>
				</CardItem>
				<CardItem>
					<Button block style={{ flex: 1 }} onPress={this.onTextPress.bind(this)}>
						<Title>Text Schedule</Title>
					</Button>
				</CardItem>
				<CardItem>
					<Button block style={{ flex: 1 }} onPress={this.onFirePress.bind(this)}>
						<Title>Fire</Title>
					</Button>
				</CardItem>
			</View>
		);
	}

  render() {
    return (
      <Card style={{ flex: 0, paddingBottom: 10 }}>
        <EmployeeForm {...this.props} />
        {this.renderButton()}
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift, loading } = employeeForm;

  return { name, phone, shift, loading };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
