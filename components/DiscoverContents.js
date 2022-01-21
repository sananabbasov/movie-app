import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, Image, Dimensions, Button, Modal } from 'react-native'
import { GET } from '../Services/Api'
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { Ionicons } from '@expo/vector-icons';
import Constants from './Constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");
const height = width * 0.5;



const DiscoverContents = ({ navigation }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const response = await GET('Content/Az/getallcontent');
            setMovies(response)
        }

        getMovies();
    }, [])

    


    return (
        <View>
            
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                {
                    movies.map((item, index) => (

                        <Image
                            style={styles.logo}
                            source={{
                                uri: item.photoUrl,
                            }}
                        />

                    ))
                }
            </ScrollView>
        </View>
    )
}

export default DiscoverContents

const styles = StyleSheet.create({
    logo: {
        width: width,
        height: height,
        resizeMode: 'cover'
    },
})