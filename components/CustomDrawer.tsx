// CustomDrawerContent.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.reactLogo}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.titleH1}>QualMag</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.footer}>
        <View style={styles.settingsContainer}>
          <Ionicons name="settings-outline" size={24} color="#555" />
          <Text style={styles.drawerItemLabel}>Settings</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  reactLogo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
  },
  titleH1: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'Roboto-Regular', // Change to your font family
  },
  titleH2: {
    fontSize: 18,
    color: '#555',
    fontFamily: 'Roboto-Regular', // Change to your font family
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 'auto',
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  drawerItemLabel: {
    marginLeft: 20,
    fontSize: 16,
    color: '#555',
    fontFamily: 'Roboto-Regular', // Change to your font family
  },
});

export default CustomDrawerContent;