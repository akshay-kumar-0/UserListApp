import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserCard = ({ user, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.label}>Email:</Text>
            <Text>{user.email}</Text>

            <Text style={styles.label}>Phone:</Text>
            <Text>{user.phone}</Text>

            <Text style={styles.label}>Company:</Text>
            <Text>{user.company.name}</Text>
        </TouchableOpacity>
    );
};

export default UserCard;

const styles = StyleSheet.create({
    label: {
        fontWeight: '600',
        marginTop: 5,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 6,
    },

    card: {
        backgroundColor: '#fff',
        marginHorizontal: 12,
        marginVertical: 8,
        padding: 16,
        borderRadius: 14,
        elevation: 5,
    },
});