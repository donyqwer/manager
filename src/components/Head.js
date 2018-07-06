import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';

export default class Head extends Component {
  render() {
    return (
      <Header noLeft>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
