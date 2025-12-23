import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'

import Logo from '../assets/img/logo_light.png'
//themed components
import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />

            <Spacer height={20} />

            <ThemedText style={styles.title} title={true}>Home</ThemedText>

            <Spacer height={10} />
            <ThemedText> Hello World </ThemedText>
            <Spacer />

            <Link style={styles.link} href="/about">
                <ThemedText>About Page</ThemedText>
            </Link>

            <Link style={styles.link} href="/contact">
                <ThemedText>Contact Page</ThemedText>
            </Link>
        </ThemedView>


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
    link: {
        marginVertical: 10,
        borderBottomWidth: 1
    }
})