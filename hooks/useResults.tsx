// Import necessary components here
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useEffect } from "react";
import yelp from "@/api/yelp";

export default () => {
    const [result, setResults] = useState([])

    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerm: string) => {
        try {
            const { data: response } = await yelp.get('/search',
                {
                    params: {
                        limit: 50,
                        term: searchTerm,
                        location: 'Ankara',
                        sort_by: 'best_match',
                    },
                });
            setResults(response.businesses);
            setErrorMessage('');
        }
        catch(error) {
            setErrorMessage('Bağlantı Hatası')
            console.log(JSON.stringify(error, 0, 4));
        }
    }


    useEffect(() => {
        searchApi('kebab');
    }, []);

    return [searchApi, result, errorMessage];

}
