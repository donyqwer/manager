import React, { Component } from 'react';
import { Text, Modal, View, StyleSheet } from 'react-native';
import { CardItem, Body, Button, Title } from 'native-base';

export default class Confirm extends Component {
  render() {
    return (
      <Modal
				visible={this.props.visible}
				transparent
				animationType="slide"
				onRequestClose={() => {}}
      >
				<View style={styles.containerStyle}>
					<CardItem>
						<Body>
							<Text style={styles.textStyle}>
								{this.props.children}
							</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Button block block style={{ flex: 1, marginRight: 2 }} onPress={this.props.onAccept}>
							<Title>Yes</Title>
						</Button>
						<Button block block style={{ flex: 1, marginLeft: 2 }} onPress={this.props.onDecline}>
							<Title>No</Title>
						</Button>
					</CardItem>
				</View>
			</Modal>
    );
  }
}

const styles = StyleSheet.create({
	cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
		color: '#000',
    fontSize: 18,
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});
