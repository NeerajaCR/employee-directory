import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { useEffect, useState } from 'react';

import employeesData from '../data/employees.json';

import EmployeeCard from '../components/EmployeeCard';

export default function EmployeeListScreen({
  navigation,
}: any) {
  const [employees, setEmployees] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEmployees(employeesData as any[]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator
          size="large"
          color="blue"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search employee..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      {filteredEmployees.length === 0 ? (
        <View style={styles.center}>
          <Text>No employees found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredEmployees}
          keyExtractor={item =>
            item.id.toString()
          }
          renderItem={({ item }) => (
            <EmployeeCard
              employee={item}
              onPress={() =>
                navigation.navigate(
                  'EmployeeDetails',
                  {
                    employee: item,
                  }
                )
              }
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 10,
  },

  searchInput: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});