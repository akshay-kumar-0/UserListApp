import React, { useEffect, useState } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    StyleSheet,
} from 'react-native';
import { fetchUsers } from '../services/api';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadUsers = async () => {
        try {
            const data = await fetchUsers();
            setUsers(data);
            setFilteredUsers(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleSearch = (text) => {
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(text.toLowerCase()) ||
            user.email.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <SearchBar onSearch={handleSearch} />

            <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <UserCard
                        user={item}
                        onPress={() =>
                            navigation.navigate('Detail', { user: item })
                        }
                    />
                )}
                ListEmptyComponent={
                    <Text style={{ textAlign: 'center' }}>
                        No users found
                    </Text>
                }
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});