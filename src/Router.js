import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={LoginForm} title="Please login" hideNavBar />
				</Scene>
				<Scene key="main" initial>
					<Scene 
					rightTitle=" Add"
					onRight={() => console.log('Right!')}
					key="employeeList" 
					component={EmployeeList} 
					title="Employee List" 
					
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
