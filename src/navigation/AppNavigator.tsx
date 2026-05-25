import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EmployeeListScreen from '../screens/EmployeeListScreen';
import EmployeeDetailsScreen from '../screens/EmployeeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmployeeList"
        component={EmployeeListScreen}
        options={{ title: '' }}
      />

      <Stack.Screen
        name="EmployeeDetails"
        component={EmployeeDetailsScreen}
        options={{ title: 'Employee Details' }}
      />
    </Stack.Navigator>
  );
}