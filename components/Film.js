import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView, Image, } from 'react-native'
import { GET } from '../Services/Api'

const Film = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getMovies = async () => {
            const response = await GET('Content/Az/getallcontent');
            setMovies(response)
        }

        getMovies();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Film</Text>
            <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                {
                    movies
                    .filter(movies=>movies.contentType == "Film")
                    .map((item, index) => (
                        <View style={{alignItems: 'center'}}>
                        <Image
                            style={styles.logo}
                            source={{
                                uri: item.photoUrl,
                            }}
                        />
                        <Text style={styles.text}>{item.name}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Film

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        marginBottom:20
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        marginBottom:20
    },
    logo: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        margin: 10
    },
    text:{
        color: "#fff",
        textAlign: 'center',
        fontSize: 18,
        width: 200
    },
    categories:{
        color: "#fff"
    }
})
