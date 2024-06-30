// Import necessary components here
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

// Create Details screen
const SearchBar = ({ onTermChange, onTermSubmit, term }) => {
    return (
        <View style={ styles.backgroundStyle }>
            <AntDesign style={ styles.iconStyle }
                       name="search1"
                       size={ 30 }
                       color="black"/>
            <TextInput
                style={ styles.inputStyle }
                placeholder="ara"
                autoCorrect={ false }
                autoCapitalize="none"
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                value={term}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20,
    },

    iconStyle: {
        marginHorizontal: 15,
    },

    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
});
// Export this component for use in other files
export default SearchBar;

