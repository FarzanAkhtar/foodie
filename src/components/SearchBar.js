import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    return(
        <View style={styles.background}>
            <Ionicons name='ios-search-outline' style={styles.icon} size={35}/>
            <TextInput 
                style={styles.textInput}
                autoCapitalize='none'
                autoCorrect={false}
                input={query}
                onChangeText={ (input) => {setQuery(input)}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'gainsboro',
        height: 50,
        borderRadius: 10,
        margin: 15,
        flexDirection: 'row'
    },
    textInput: {
        height: 50,
        flex: 1,
        fontSize: 20,
        marginRight: 15,
        left: 10
    },
    icon: {
        alignSelf: 'center',
        left: 5
    }
});

export default SearchBar;