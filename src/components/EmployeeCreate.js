import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, Item, Label, Input, Button, Title, Picker, Icon } from 'native-base';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {
 
  render() {
    return (
      <Card style={{ flex: 0, paddingBottom: 10 }}>
        <CardItem style={{ flexDirection: 'column' }}>
          <Item fixedLabel>
            <Label>Name</Label>
            <Input
              placeholder={'John Doe'} 
              value={this.props.name}
              onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            />
          </Item>
          <Item fixedLabel>
            <Label>Phone</Label>
            <Input
              placeholder={'+601234xxxx'}
              value={this.props.phone}
              onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            />
          </Item>
        </CardItem>
        <CardItem style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Label>Shift</Label>
          <Item picker>
            <Picker
              mode='dropdown'
              iosIcon={<Icon name='ios-arrow-down-outline' />}
              style={{ width: 1 }}
              placeholder='Select your SIM'
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor='#007aff'
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label='Monday' value='monday' />
              <Picker.Item label='Tuesday' value='tuesday' />
              <Picker.Item label='Wednesday' value='wednesday' />
              <Picker.Item label='Thursday' value='thursday' />
              <Picker.Item label='Friday' value='friday' />
            </Picker>
          </Item>
        </CardItem>
        <CardItem>
          <Button block style={{ flex: 1 }} onPress={() => console.log(this.props)}>
            <Title>Create</Title>
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
