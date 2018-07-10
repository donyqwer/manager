import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, CardItem, Spinner, Button, Title, View } from 'native-base';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import Confirm from './Confirm';

class EmployeeEdit extends Component {
	state = { showModal: false };
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

	onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
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
					<Button 
						block 
						style={{ flex: 1 }} 
						onPress={() => this.setState({ showModal: !this.state.showModal })}
					>
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
				<Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
				>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift, loading } = employeeForm;

  return { name, phone, shift, loading };
};

export default 
connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
