import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>

            {/* Header Card */}
            <View style={styles.card}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.email}>{user.email}</Text>
            </View>

            {/* Info Card */}
            <View style={styles.card}>
                <Text style={styles.label}>Phone</Text>
                <Text>{user.phone}</Text>

                <Text style={styles.label}>Website</Text>
                <Text>{user.website}</Text>

                <Text style={styles.label}>Company</Text>
                <Text>{user.company.name}</Text>
            </View>

            {/* Address Card */}
            <View style={styles.card}>
                <Text style={styles.label}>Address</Text>
                <Text>
                    {user.address.street}, {user.address.city}
                </Text>
            </View>

        </View>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 15,
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 4,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 5,
        color: 'gray',
    },
    label: {
        marginTop: 10,
        fontWeight: 'bold',
    },
});