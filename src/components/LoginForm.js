import React, { Component } from 'react';
import { Card, CardItem, Form, Item, Label, Input, Content, Button, Text } from 'native-base';

export default class LoginForm extends Component {
  render() {
    return (
			<Card>
				<CardItem>
					<Content>
						<Form>
							<Item floatingLabel>
								<Label>Email</Label>
								<Input />
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
