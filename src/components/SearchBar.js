import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
    return (
        <TextInput
            placeholder="Search users by name or email..." 
            onChangeText={onSearch}
            style={styles.input}
        />
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    input: {
        margin: 10,
        padding: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        backgroundColor: '#f9f9f9',
    },
});