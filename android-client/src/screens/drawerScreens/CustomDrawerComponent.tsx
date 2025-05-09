import React from 'react'
import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableRipple, Switch, useTheme } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useUser } from '@/context/UserContext';

const CustomDrawerComponent = ( props: any ) => {
    const { user } = useUser();
    const { isDarkTheme, toggleTheme } = props;
    const theme = useTheme();
    return (
        <View style={{flex: 1, backgroundColor: theme.colors.background }}>
          <DrawerContentScrollView
            {...props}
            contentContainerStyle={{backgroundColor: '#8200d6'}}>
            <ImageBackground
              source={require('../../assets/images/background.jpg')}
              style={{padding: 20}}>
              <Image
                source={require('../../assets/images/profilePic.jpg')}
                style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
              />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontFamily: 'Roboto-Medium',
                  marginBottom: 5,
                }}>
                {user?.name || 'Guest'}
              </Text>
            </ImageBackground>
            <View style={{flex: 1, backgroundColor: theme.colors.background, paddingTop: 10}}>
              <DrawerItemList {...props} />
              
              <View style={styles.preferenceContainer}>
                <TouchableRipple onPress={toggleTheme}>
                    <View style={styles.preference}>
                        <View style={styles.preferenceLeft}>
                            <Ionicons name="moon-outline" size={20} color={theme.colors.text} />
                            <Text style={[styles.preferenceText, { color: theme.colors.text }]}>
                                Dark Theme
                            </Text>
                        </View>
                        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
                    </View>
                </TouchableRipple>
              </View>
            </View>
          </DrawerContentScrollView>
          <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="exit-outline" size={22} color={theme.colors.text} />
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: 'Roboto-Medium',
                    marginLeft: 5,
                    color: theme.colors.text,
                  }}>
                  Sign Out
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    preferenceContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    preferenceLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    preferenceText: {
        fontSize: 16,
        marginLeft: 32,
    }
});

export default CustomDrawerComponent;