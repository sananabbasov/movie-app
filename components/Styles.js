import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Constants from './Constants';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    sectionBg: {
        backgroundColor: Constants.baseColor,
        height: deviceHeight,
      },
      imageBg: {
        width: deviceWidth,
        height: 250,
      },
      detailsMovieTitle: {
        fontSize: 28,
        color: Constants.textColor,
        textAlign: 'center',
      },
      heading: {
        fontSize: 19,
        color: Constants.fadedColor,
        margin: 10,
      },
      overview:{
        color: Constants.textColor,
        fontSize: 16,
        textAlign: 'justify',
        marginHorizontal: 10,
      },
      details: {
        color: Constants.secondaryColor,
        fontSize: 15,
        marginLeft: 10,
        fontWeight: 'bold',
      },
      detailsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
      },
      categoriesContainer: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: Constants.textColor,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
      },
      categories: {
        color: Constants.textColor,
        fontSize: 16,
      },
      commentText:{
        color: Constants.textColor,
        marginTop: 5
      },
      videoContainer:{
        width: deviceWidth,
        flex: 1,
        justifyContent: 'center',
      },
      video: {
        width: deviceWidth,
        height: 400,
        alignSelf: 'center',
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput:{
      color: Constants.textColor,
      backgroundColor: Constants.textColor,
      paddingHorizontal: 10,
      marginTop: 50,
    },
    movieTitle: {
      color: Constants.textColor,
      width: 150,
      textAlign: 'center',
      marginTop: 5,
      fontSize: 16,
    },

})

export default Styles;


