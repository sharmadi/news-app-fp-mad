import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from '@expo/vector-icons'

function Signup() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.middle}>
                <Text style={styles.logintext}>Signup</Text>
            </View>
            <View style={styles.text2}>
                <Text>Have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
                    <Text style={styles.signupText}>Sign up!</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.Button}>
                <View style={styles.emailField}>
                    <Input
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name="secretUser"/>}
                                size="sm"
                                m={2}
                                _light={{color:'black'}}
                                _dark={{color:'gray'}}
                            />
                        }
                        variant = "outline"
                        placeholder = "Username"
                        _light={{placeholderTextColor:"blueGray.400"}}
                        _dark={{placeholderTextColor:"blueGray.50"}}
                    />
                </View>
            </View>

            <View style={styles.Button}>
                <View style={styles.emailField}>
                    <Input
                        InputLeftElement={
                            <Icon 
                                as={<MaterialCommunityIcons name="email"/>}
                                size="sm"
                                m={2}
                                _light={{color:'black'}}
                                _dark={{color:'gray'}}
                            />
                        }
                        variant = "outline"
                        placeholder = "Email"
                        _light={{placeholderTextColor:"blueGray.400"}}
                        _dark={{placeholderTextColor:"blueGray.50"}}
                    />
                </View>
            </View>
            
            <View style={styles.buttonStyle}>
                <View style={styles.emailField}>
                    <Input
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name="key"/>}
                                size="sm"
                                m={2}
                                _light={{color:'black'}}
                                _dark={{color:'gray'}}
                            />
                        }
                        variant = "outline"
                        secureTextEntry={true}
                        placeholder="Password"
                        _light={{placeholderTextColor:"blueGray.400"}}
                        _dark={{placeholderTextColor:"blueGray.50"}}
                    />
                </View>
            </View>

            <View style={styles.buttonStyle}>
                <View style={styles.emailField}>
                    <Input
                        InputLeftElement={
                            <Icon 
                                as={<FontAwesome5 name="key"/>}
                                size="sm"
                                m={2}
                                _light={{color:'black'}}
                                _dark={{color:'gray'}}
                            />
                        }
                        variant = "outline"
                        secureTextEntry={true}
                        placeholder="Repeat your password"
                        _light={{placeholderTextColor:"blueGray.400"}}
                        _dark={{placeholderTextColor:"blueGray.50"}}
                    />
                </View>
            </View>

            <View style={styles.Button}>
                <Button style={styles.buttonDesign}>
                    Register
                </Button>
            </View>

            <View style={styles.lineStyle}>
                <View style={{flex:1, height:1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width:50, textAlign:'center'}}>Or</Text>
                </View>
                <View style={{flex:1, height:1, backgroundColor: 'black'}} />
            </View>
                
            <View style={styles.boxStyle}>
                <Box onPress={()=> navigation.navigate('#')} style={{height:80, width:80, marginLeft:20}} shadow={3}
                _light={{backgroundColor:"gray.50"}}
                _dark={{backgroundColor:"gray.500"}}
                >
                
                <AspectRatio ratio={1/1}>
                        <Image roundedTop="lg" 
                            source={{url: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png"}}
                            alt="image" />
                </AspectRatio>
                </Box>

                <Box onPress={()=> navigation.navigate('#')} style={{height:80, width:80, marginLeft:20}} shadow={3}
                _light={{backgroundColor:"gray.50"}}
                _dark={{backgroundColor:"gray.500"}}
                >
                
                <AspectRatio ratio={1/1}>
                        <Image roundedTop="lg" 
                            source={{url: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png"}}
                            alt="image" />
                </AspectRatio>
                </Box>

                <Box onPress={()=> navigation.navigate('#')} style={{height:80, width:80, marginLeft:20}} shadow={3}
                _light={{backgroundColor:"gray.50"}}
                _dark={{backgroundColor:"gray.500"}}
                >
                
                <AspectRatio ratio={1/1}>
                        <Image roundedTop="lg" 
                            source={{url: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png"}}
                            alt="image" />
                </AspectRatio>
                </Box>

                <Box onPress={()=> navigation.navigate('#')} style={{height:80, width:80, marginLeft:20}} shadow={3}
                _light={{backgroundColor:"gray.50"}}
                _dark={{backgroundColor:"gray.500"}}
                >
                
                <AspectRatio ratio={1/1}>
                        <Image roundedTop="lg" 
                            source={{url: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png"}}
                            alt="image" />
                </AspectRatio>
                </Box>

            </View>

        </View>
    )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Login />
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
    },
    logintext:{
        marginTop:100,
        fontSize:30,
        fontWeight:'bold'
    },
    middle:{
        alignItems:'center'
    },
    text2:{
        flexDirection:'row',
        paddingTop:5
    },
    signupText:{
        fontWeight:'bold'
    },
    emailField:{
        marginTop:10,
        marginRight:5
    },
    Button:{
        marginTop:30,
        marginLeft:15,
        marginRight:15
    },
    buttonStyleX:{
        marginTop:12,
        marginLeft:15,
        marginRight:15
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
    lineStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems: 'center'
    },
    boxStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15
    }
})