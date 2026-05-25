import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function EmployeeDetailsScreen({
  route,
}: any) {
  const { employee } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: employee.profile_image }}
          style={styles.image}
        />

        <Text style={styles.name}>
          {employee.name}
        </Text>

        <Text style={styles.designation}>
          {employee.designation}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <DetailItem
          label="Email"
          value={employee.email}
        />

        <DetailItem
          label="Phone"
          value={employee.phone}
        />

        <DetailItem
          label="Department"
          value={employee.department}
        />

        <DetailItem
          label="Address"
          value={employee.address}
        />

        <DetailItem
          label="Joining Date"
          value={employee.joining_date}
        />
      </View>
    </ScrollView>
  );
}

function DetailItem({
  label,
  value,
}: any) {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  imageContainer: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },

  name: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 14,
  },

  designation: {
    color: '#666',
    marginTop: 6,
    fontSize: 16,
  },

  detailsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },

  detailItem: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  label: {
    fontSize: 14,
    color: '#777',
    marginBottom: 6,
  },

  value: {
    fontSize: 16,
    fontWeight: '500',
  },
});