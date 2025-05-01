// UI.tsx
import React from 'react';
import { Text, View, TouchableNativeFeedback, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Car, RootStackParamList } from './Types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#f2f2f2' }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    navigation.navigate(route.name);
                };

                return (
                    <TouchableNativeFeedback key={route.key} onPress={onPress}>
                        <View style={{
                            flex: 1,
                            paddingVertical: 15,
                            backgroundColor: isFocused ? '#00b14f' : '#fff', // Darker on focus
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{
                                color: isFocused ? '#fff' : '#888',
                                fontWeight: 'bold',
                                fontSize: 14,
                            }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableNativeFeedback>
                );
            })}
        </View>
    );
};


type NavigationProp = StackNavigationProp<RootStackParamList, 'CarDetail'>;

export const CarCard = ({ item }: { item: Car }) => {
    const navigation = useNavigation<NavigationProp>();
    const handlePress = () => {
        navigation.navigate('CarDetail', { car: item });
    };

    return (
        <TouchableNativeFeedback onPress={handlePress}>
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.model}>{item.model}</Text>
                <Text style={styles.price}>Price per Day: RM {item.price}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export const ReturnButton = ({ color = 'white' }: { color?: string }) => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <View style={{
            position: 'absolute',
            zIndex: 1,
            top: 10,
            left: 10,
        }}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionicons name="chevron-back" size={35} color={color} />
            </TouchableOpacity >
        </View>
    )
}

export const DisplayWithLabel = ({ label, displayText }: { label: string, displayText: string }) => {
    return (
        <View style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'space-between',
            alignItems: 'baseline'
        }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000', marginLeft: 15 }}>{label}</Text>
            <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.6)', marginRight: 15 }}>{displayText}</Text>
        </View>
    );
}

export const InputWithLabel = (props: any) => {

    const orientationDirection = (props.orientation == 'horizontal') ? 'row' : 'column';

    return (
        <View style={{
            flexDirection: orientationDirection,
            marginBottom: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000', marginLeft: 15 }}>{props.label}</Text>
            <TextInput
                style={{
                    fontSize: 14,
                    color: 'rgba(0,0,0,0.8)',
                    backgroundColor: 'white',
                    width: '45%',
                    marginRight: 10,
                    borderWidth: 0.5,
                    borderColor: 'rgba(0,0,0,0.8)',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 3 },
                    shadowRadius: 5,
                    elevation: 5, 
                }}
                placeholderTextColor="rgba(0, 0, 0, 0.3)"
                {...props}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 0.5,  // Ensure that each card takes approximately half the width
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5
    },
    model: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    price: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    image: {
        width: '100%',
        height: 90,
        borderRadius: 5,
        marginTop: 10,
    },
});

// const labelStyles = StyleSheet.create({
//     container: {
//         marginBottom: 10,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//     },
//     label: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         color: '#000',
//         marginLeft: 15,
//     },
//     input: {
//         flex: 1,
//         fontSize: 16,
//         color: 'black',
//         paddingVertical: 6,
//         paddingHorizontal: 10,
//         marginRight: 15,
//         marginLeft: 10,
//         borderBottomWidth: 1,
//         borderColor: 'rgba(0,0,0,0.3)',
//         textAlign: 'right',
//     },
// })