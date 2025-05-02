import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';
import { CustomTabBar } from './UI';
import { RootStackParamList } from './Types';
import { UserProvider } from './UserContext';

// import car list screens
import sedanList from './carListTabScreens/sedanList';
import suvList from './carListTabScreens/suvList';
import luxuryList from './carListTabScreens/luxuryList';

// import stack screens
import home from './stackScreens/homeScreen';
import carDetail from './stackScreens/carDetail';
import Booking from './stackScreens/booking';

import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import Profile from './drawerScreens/profileScreen';
import Notification from './drawerScreens/NotificationScreen';
import CustomDrawerComponent from './drawerScreens/customDrawerComponent';
import Ionicons from "react-native-vector-icons/Ionicons";


LogBox.ignoreLogs([
    'EventEmitter.removeListener',
    'This method is deprecated',
    'Method called was `collection`',
    'Method called was `add`'
]);

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const CarTypeBottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='sedanList'
            tabBar={props => <CustomTabBar {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen
                name='suvList'
                component={suvList}
                options={{
                    tabBarLabel: 'SUV',
                }}
            />
            <Tab.Screen
                name='sedanList'
                component={sedanList}
                options={{
                    tabBarLabel: 'Sedan',
                }}
            />
            <Tab.Screen
                name='luxuryList'
                component={luxuryList}
                options={{
                    tabBarLabel: 'Luxury',
                }}
            />
        </Tab.Navigator>
    )
}

const MainStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="CarTabs" component={CarTypeBottomTab} />
        <Stack.Screen name="CarDetail" component={carDetail} />
        <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
);

const App = () => {
    return (
        <UserProvider>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={(props) => <CustomDrawerComponent {...props} />}
                    screenOptions={{
                        drawerStyle: { width: '65%' },
                        headerShown: false,
                    }}
                >
                    <Drawer.Screen name="HomePage"
                        component={MainStack}
                        options={{
                            drawerIcon: ({ color }) => (
                                <Ionicons name="home-outline" size={20} color={color} />
                            ),
                            drawerLabelStyle: { fontSize: 20 },
                        }} 
                    />
                    <Drawer.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            drawerIcon: ({ color }) => (
                                <Ionicons name="man-outline" size={20} color={color} />
                            ),
                            drawerLabelStyle: { fontSize: 20 },
                        }}
                    />
                    <Drawer.Screen
                        name="Notification"
                        component={Notification}
                        options={{
                            drawerIcon: ({ color }) => (
                                <Ionicons name="notifications-outline" size={20} color={color} />
                            ),
                            drawerLabelStyle: { fontSize: 20 },
                        }}
                    />
                </Drawer.Navigator>
            </NavigationContainer>
        </UserProvider>
    )
}

export default App;
