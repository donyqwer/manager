import React, { Component } from 'react';
import { Card, CardItem, Form, Item, Label, Input, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';

class LoginForm extends Component {
	onEmailChange(text) {
		this.props.emailChanged(text);
	}
	
  render() {
    return (
			<Card>
				<CardItem>
					<Content>
						<Form>
							<Item floatingLabel>
								<Label>Email</Label>
								<Input 
									onChangeText={this.onEmailChange.bind(this)}
								/>
							</Item>
							<Item floatingLabel last>
								<Label>Password</Label>
								<Input 
									secureTextEntry
								/>
							</Item>
						</Form>
					</Content>
				</CardItem>
				<CardItem>
					<Content>
						<Button block>
							<Text>SIGN IN</Text>
						</Button>
					</Content>
				</CardItem>
			</Card>
    );
  }
}

export default connect(null, { emailChanged })(LoginForm);
