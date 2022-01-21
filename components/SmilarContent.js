import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { GET } from '../Services/Api'
const SmilarContent = (props) => {

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
            <Text style={styles.headerText}>Cinema Lab</Text>
            {/* <ScrollView
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                horizontal
            >
                {
                    movies
                        .filter(movies => movies.contentType == "SmilarContent")
                        .map((item, props) => (
                            <TouchableOpacity onPress={()=>{props.navigation.navigate('contentDetails', {movieId: item.Id})}}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.logo}
                                        source={{
                                            uri: item.photoUrl,
                                        }}
                                    />
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                }
            </ScrollView> */}


            <FlatList 
                keyExtractor={item=>item.id}
                showsHorizontalScrollIndicator={false}
                data={movies}
                horizontal
                renderItem={item=> displayMovies(item, props)}
            
            
            />
        </View>
    )
}

const displayMovies = ({item}, props) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.push('contentDetails', {movieId: item.id});
        }}
        style={{marginHorizontal: 10,alignItems: 'center' }}>
        <Image
          source={{
            uri: item.photoUrl,
        }}
          style={styles.logo}
        />
         <Text style={styles.text}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

export default SmilarContent

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 20
    },
    headerText: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 20
    },
    logo: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        margin: 10
    },
    text: {
        color: "#fff",
        textAlign: 'center',
        fontSize: 18,
        width: 200
    },
    categories: {
        color: "#fff"
    }
})
