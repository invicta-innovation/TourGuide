import React, { Component } from "react";
import {
    View,
<<<<<<< HEAD
    StyleSheet,
    SafeAreaView,
    Platform,
=======
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
    ScrollView,
    Image,
    Dimensions
} from "react-native";
<<<<<<< HEAD
import Category from '../Palmyrah/Category'
=======
import Category from './category'
>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f

const { height, width } = Dimensions.get('window')

export default class ImagePalmyrah extends Component {
<<<<<<< HEAD
=======

>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
<<<<<<< HEAD
                        }}>    
=======
                        }}>
                            
>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                         <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
<<<<<<< HEAD
                                        source={require('../../assets/Palmyrah/Image/1.jpg')}
=======
                                        source={require('../../../assets/Palmyrah/Image/1.jpg')}
>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
                                    />

                                </View>
                            </View>
                            
<<<<<<< HEAD
                            <View style={{ flex:1 ,flexDirection:'row', height: 130, marginTop: 15}}>
=======
                            <View style={{ height: 130, marginTop: 15}}>
>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
<<<<<<< HEAD
                                    <Category imageUri={require('../../assets/Palmyrah/Image/1.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../assets/Palmyrah/Image/2.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../../assets/Palmyrah/Image/3.jpg')}
                                        name="Resturant"
                                    />
                                    <Category imageUri={require('../../assets/Palmyrah/Image/4.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../assets/Palmyrah/Image/5.jpg')}
                                        name="Experiences"
                                    />
                                </ScrollView>
                            </View>                    
                        </View>
                    </ScrollView>
=======
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/1.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/2.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/3.jpg')}
                                        name="Resturant"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/4.jpg')}
                                        name="Home"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/5.jpg')}
                                        name="Experiences"
                                    />
                                    <Category imageUri={require('../../../assets/Palmyrah/Image/6.jpg')}
                                        name="Resturant"
                                    />
                                </ScrollView>
                            </View>
                           
                        </View>
                    </ScrollView>

>>>>>>> f275aae06997e97b28d56b5ca31a7395d088b77f
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});