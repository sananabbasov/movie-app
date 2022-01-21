import { Modal, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Constants from '../components/Constants';
import Styles from '../components/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false)


    const changeLanguage = async(e) => {
        
            await AsyncStorage.setItem('language', e)
            const value = await AsyncStorage.getItem('language')
            console.log(value);
        
    }

  return (
    <View style={styles.container}>
         <Ionicons onPress={() => setModalOpen(true)}   name="menu" size={34} color={Constants.textColor} />
      <Modal
        visible={modalOpen}
        animationType='slide'
      >
          <Text style={styles.textColor} ><Ionicons color={styles.textColor} name="close-circle-outline" size={24} onPress={() => setModalOpen(false)} /></Text>


        <View>
            <Text onPress={() => changeLanguage('Az')}>Az</Text>
            <Text onPress={() => changeLanguage('Ru')}>Ru</Text>
            <Text onPress={() => changeLanguage('Eng')}>Eng</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
    textColor:{
        color: 'red'
    }
});
