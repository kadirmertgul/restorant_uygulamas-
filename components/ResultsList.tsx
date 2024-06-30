// Import necessary components here
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import ResultDetail from "@/components/ResultDetail";
import { Link, useNavigation } from "expo-router";

// Create Details screen
const ResultsList = ({ title, results }) => {
    const navigation = useNavigation()
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={ false }
                data={ results }
                renderItem={ ({ item }) => {
                    return (
                        <TouchableOpacity>
                            <Link
                                href={{
                                    pathname: "/ResultShowScreen/[id]",
                                    params: { id : item.id }
                                }}
                            >
                                <ResultDetail result={item} />
                            </Link>
                        </TouchableOpacity>
                    );
                }} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
})
// Export this component for use in other files
export default ResultsList;
