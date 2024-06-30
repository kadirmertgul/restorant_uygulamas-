// Import necessary components here
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Stack, useNavigation } from "expo-router";
import SearchBar from '../components/SearchBar';
import useResults from "@/hooks/useResults";
import ResultsList from "@/components/ResultsList";

// Create Details screen
const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            title: 'Restorant',
            headerShown: true,
        })
    }, [navigation]);

    const [searchApi, results, errorMessage] = useResults()
    /*useEffect(() => {
        if (results.businesses?.length) {
            const businesses = [...results.businesses];
            const sorted = businesses.sort((a, b) => a.price.length > b.price.length ? 1 : -1);
            console.log('sorted', JSON.stringify(sorted, 0, 4));
        }
    }, [results]);*/

    const filterResultByPrice = (price: string) => {
        return results.filter((result: string) => {
            return result.price === price;
        });
    }

    return (
        <View>
            <SearchBar
                term={ term }
                onTermChange={ setTerm }
                onTermSubmit={ () => searchApi(term) }
            />
            {errorMessage ? <Text>{errorMessage}</Text> :   <View>
                {results.length == 0 ? (
                    <></>
                ) : (
                    <>
                        <ResultsList
                            title='Ucuz Restorantlar'
                            results={ filterResultByPrice('₺') }/>
                        <ResultsList
                            title='Uygun Restorantlar'
                            results={ filterResultByPrice('₺₺') }/>
                        <ResultsList
                            title='Pahalı Restorantlar'
                            results={ filterResultByPrice('₺₺₺') }/>
                    </>
                )}
            </View>}

        </View>
    );
};

// Export this component for use in other files
export default SearchScreen;

