import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Form, Item, Label,
	Input, Content, Button, Text, View, Spinner, Container } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import Head from './Head';

class LoginForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }

	onEmailChange(text) {
		this.props.emailChanged(text);
	}

	onPasswordChange(text) {
		this.props.passwordChanged(text);
	}

	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderError() {
		if (this.props.error) {
			return (
				<View style={{ alignItems: 'center' }}>
					<Text style={styles.txtError}>{this.props.error}</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner color='green' />;
		}

		return (
			<Button block onPress={this.onButtonPress.bind(this)}>
				<Text>SIGN IN</Text>
			</Button>
		);
	}
	
  render() {
    return (
			<Container>
          <Head title={'Manager'} />
          <Content padder>
						<Card>
							<CardItem>
								<Content>
									<Form>
										<Item fixedLabel>
											<Label style={{ color: 'black' }}>Email</Label>
											<Input 
												placeholder={'john@example.com'}
												onChangeText={this.onEmailChange.bind(this)}
												value={this.props.email}
											/>
										</Item>
										<Item fixedLabel last>
											<Label style={{ color: 'black' }}>Password</Label>
											<Input 
												placeholder={'password'}
												secureTextEntry
												onChangeText={this.onPasswordChange.bind(this)}
												value={this.props.password}
											/>
										</Item>
									</Form>
								</Content>
							</CardItem>
							{this.renderError()}
							<CardItem>
								<Content>
									{this.renderButton()}
								</Content>
							</CardItem>
						</Card>
          </Content>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
	const { email, password, error, loading } = auth;

	return { email, password, error, loading };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);

const styles = StyleSheet.create({
	txtError: {
		fontSize: 20,
		color: 'red',
		fontWeight: 'bold',
	},
});
