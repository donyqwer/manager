import React, { Component } from 'react';
import { Card, CardItem, Item, Label, Input } from 'native-base';

export default class EmployeeCreate extends Component {
  render() {
    return (
      <Card style={{ flex: 0, paddingBottom: 10 }}>
        <CardItem style={{ flexDirection: 'column' }}>
          <Item fixedLabel>
            <Label>Name</Label>
            <Input
              placeholder={'John Doe'} 
            />
          </Item>
          <Item fixedLabel>
            <Label>Phone</Label>
            <Input
              placeholder={'+601234xxxx'} 
            />
          </Item>
        </CardItem>
      </Card>
    );
  }
}
