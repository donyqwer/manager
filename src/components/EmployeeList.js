import React, { Component } from 'react';
import { Content, Container, Spinner, } from 'native-base';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { employeeFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <EmployeeListItem employee={employee} />;
  }

  renderList() {
    if (this.props.loading) {
      return <Spinner color='green' />;
    }
    return (
      <ListView
        style={{ backgroundColor: '#ffffff' }}
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }

  render() {
    return (
      <Container>
        <Content>          
          {this.renderList()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { loading } = state.employees;
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid };
  });
  return { employees, loading };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
