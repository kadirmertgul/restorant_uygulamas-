// Import necessary components here
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useNavigation, useLocalSearchParams } from "expo-router";
import yelp from "@/api/yelp";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// Create Details screen
const ResultShowScreen = () => {
    const [result, setResult] = useState(null);
    const navigation = useNavigation();
    const params = useLocalSearchParams();
    const id = params.id;
    const getResult = async (id) => {
        const response = await yelp.get(`/${ id }`);
        console.log(JSON.stringify(response.data, 0, 4));
        setResult(response.data);
    }
    useEffect(() => {
        navigation.setOptions({
            title: 'Restorant Detayı',
            headerShown: true,
        })
        getResult(id)
    }, [navigation]);
    return (
        <View>
            <Text style={ styles.title }>{ result?.name } </Text>
            <Text style={ styles.phone }>{ result?.phone } </Text>
            <View style={styles.icon}>
                {
                    result?.is_closed ? <AntDesign name="closecircleo" size={30} color="red" /> :
                        <MaterialIcons name="delivery-dining" size={30} color="green" />
                }
            </View>



            <Image style={ styles.image } source={ result?.image_url ? { uri: result?.image_url } : null }/>
        </View>
    );
};
const styles = StyleSheet.create({
    image: {
        height: 180,
        margin: 10,
        borderRadius: 10,
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    phone: {
        alignSelf: 'center',
        fontSize: 25,
    },
    icon: {
        alignSelf: 'center',
    }
});
// Export this component for use in other files
export default ResultShowScreen;
