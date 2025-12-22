import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/logo_light.png'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img} />
            <Text style={styles.title}>Home</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}> Hello World </Text>
            <Link style={styles.link} href="/about">
                About Page
            </Link>
            <Link style={styles.link} href="/contact">
                Contact Page
            </Link>
        </View>


    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    img: {
        marginVertical: 20,
    },
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})