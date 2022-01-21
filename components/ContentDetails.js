import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput } from 'react-native'
import Loader from '../Loader';
import { GET } from '../Services/Api';
import Styles from './Styles';
import { Video, AVPlaybackStatus } from 'expo-av';
import SmilarContent from './SmilarContent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LANGUAGE } from '../config/Config';



const ContentDetails = props => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState();
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});


    const getData = async () => {
        // get Data from Storage
        try {
          const data = await AsyncStorage.getItem('language');
          if (data !== null) {
            return data;
          }
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        const getDetails = async () => {
            getData()

            const data = await GET(`Content/${LANGUAGE}/getsubscribercontentbyid/${props.route.params.movieId}`);
            setDetails(...data);
            setLoading(false);
        }

        getDetails();
    }, [])



   

    const getCategories = () => {
        return details.categories.map(category => (
            <View style={Styles.categoriesContainer}>
                <Text style={Styles.categories}>{category}</Text>
            </View>
        ))
    }

    const getComment = () => {
        return details.comments.map(commnet => (
            <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View>
                    <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
                        }}
                    />
                </View>
                <View style={Styles.commentText}>
                    <Text style={Styles.commentText}>{commnet.name}</Text>
                    <Text style={Styles.commentText}>{commnet.text}</Text>
                </View>


            </View>
        ))
    } 

    // storage 

 

    return (
        <ScrollView style={Styles.sectionBg}>
            {loading ? <Loader /> : <View>
                <Image
                    style={Styles.imageBg}
                    source={{
                        uri: details.photoUrl,
                    }}
                />
                <Text style={Styles.detailsMovieTitle}>{details.name}</Text>
                <Text></Text>
                <Text style={Styles.heading}>Categories</Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    {getCategories()}
                </View>
                <View style={Styles.detailsContainer}>
                    <View>
                        <Text style={Styles.heading}>Budget</Text>
                        <Text style={Styles.details}>1000 $</Text>
                    </View>

                    <View>
                        <Text style={Styles.heading}>Duration</Text>
                        <Text style={Styles.details}>240</Text>
                    </View>

                    <View>
                        <Text style={Styles.heading}>Relaase date</Text>
                        <Text style={Styles.details}>19.01.2022</Text>
                    </View>



                </View>
                <Text style={Styles.heading}>Overview</Text>
                <Text style={Styles.overview}>{details.description}</Text>

                <View style={Styles.videoContainer}>
                    <Video
                        ref={video}
                        style={Styles.video}
                        source={{
                            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                        }}
                        useNativeControls
                        resizeMode="contain"
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </View>
              
                 

                <View >
                    {getComment()}
                    <TextInput style={Styles.textInput}
                        numberOfLines={5}
                        editable
                        placeholder='Comment yazmaq'
                        maxLength={40}
                    />
                    <Button
                        title="Comment yaz"
                    />
                </View>

            </View>}



        </ScrollView>
    )
}

export default ContentDetails

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        margin: 10
    },

    video: {

        width: 320,
        height: 200,
    },

})
