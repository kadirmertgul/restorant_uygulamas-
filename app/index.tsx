import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
            <View style={ styles.content }>
                <Link href="/SearchScreen">
                    <Text style={ styles.text }>Search Screen</Text>
                </Link>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'rgba(242, 51, 44, .8)',
        marginVertical: 10,
        padding: 20,
        width: '50%',
        borderRadius: 12,
    },
    text: {
        fontSize: 22,
        color: '#FFF',
        textAlign: 'center',
    }
});
