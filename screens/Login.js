import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Modal, Image, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from '../components/Constants';
import Styles from '../components/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
    const [modalOpen, setModalOpen] = useState(false)
    const [user, setUser] = useState()
    
const userInfo = {usename: 'admin', password: '123456'}

const _login = async() => {
    if (userInfo.usename === 'admin') {
        await AsyncStorage.setItem('isLogged', '1')
        alert('Logged in')
        const value = await AsyncStorage.getItem('isLogged')
        console.log(value);
    }else{
        alert('User name is incorrect')
    }
}


    return (
        <View>
            <Modal
                visible={modalOpen}
                animationType='slide'
            >
                <View style={Styles.sectionBg}>
                    <Text style={Constants.textColor} ><Ionicons color={Constants.textColor} name="close-circle-outline" size={24} onPress={() => setModalOpen(false)} /></Text>

                    <View style={styles.logoContainer}>
                        <Text style={styles.logoFirst}>Meta</Text>
                        <Text style={styles.logoSecond}>Flix</Text>
                    </View>

                    <View style={styles.inputContainer} >
                        <Ionicons style={styles.textInputDesing} color={Constants.textColor} name="mail-unread-outline" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor={'#fff'}
                        />
                    </View>

                    <View style={styles.inputContainer} >
                        <Ionicons style={styles.textInputDesing} color={Constants.textColor} name="key" size={24} />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                            secureTextEntry
                            placeholderTextColor={'#fff'}
                        />
                    </View>


                    <View style={styles.buttonDesing}>
                        <Text onPress={() => _login()} style={styles.buttonText}>Login</Text>
                        <Text style={styles.buttonText}>Register</Text>
                    </View>
                </View>



            </Modal>
            <Ionicons name="log-out-sharp" size={24} onPress={() => setModalOpen(true)} color={Constants.textColor} />
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    logoContainer: {
        textAlign: 'center',
        alignItems: 'center',
        marginTop: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 50
    },
    logoFirst: {
        backgroundColor: 'red',
        width: 81,
        fontSize: 35,
        color: '#fff',

    },
    logoSecond: {
        fontSize: 35,
        color: '#fff'
    },
    textColor: {
        color: 'red'
    },
    input: {
        height: 40,
        margin: 12,
        width: '70%',
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderLeftWidth: 0,
        color: '#fff'
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInputDesing: {
        borderColor: '#fff',
        borderWidth: 1,
        padding: 6.3,
        marginRight: -13,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderRightWidth: 0
    },
    buttonDesing:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: '10%'
    },
    buttonText:{
        color: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        width: '40%',
        marginTop: 20

    }
});
