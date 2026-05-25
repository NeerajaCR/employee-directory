import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

type Props = {
    employee: any;
    onPress: () => void;
};

export default function EmployeeCard({
    employee,
    onPress,
}: Props) {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >
            <Image
                source={{ uri: employee.profile_image }}
                style={styles.image}
                defaultSource={require('../../assets/icon.png')}
            />

            <View style={styles.infoContainer}>
                <Text style={styles.name}>
                    {employee.name}
                </Text>

                <Text style={styles.designation}>
                    {employee.designation}
                </Text>

                <Text style={styles.department}>
                    {employee.department}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        marginVertical: 8,
        padding: 12,
        borderRadius: 12,
        alignItems: 'center',

        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    infoContainer: {
        marginLeft: 12,
        flex: 1,
    },

    name: {
        fontSize: 18,
        fontWeight: '600',
    },

    designation: {
        color: '#555',
        marginTop: 4,
    },

    department: {
        color: '#777',
        marginTop: 2,
    },
});