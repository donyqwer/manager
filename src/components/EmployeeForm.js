import React, { Component } from 'react';
import { View, } from 'react-native';
import { CardItem, Item, Label, Input, Picker, Icon } from 'native-base';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = ({ employeeForm }) => {
  const { name, phone, shift } = employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
