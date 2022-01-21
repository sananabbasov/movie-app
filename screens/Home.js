import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CinemaLab from '../components/CinemaLab'
import DiscoverContents from '../components/DiscoverContents'
import Film from '../components/Film'
import Series from '../components/Series'
import Styles from '../components/Styles'
import Login from './Login'

const Home = (props) => {
    return (
        <ScrollView style={Styles.sectionBg}>
            <DiscoverContents />
            <CinemaLab navigation={props.navigation} />
            <Film />
            <Series />
        </ScrollView>
    )
}

export default Home
