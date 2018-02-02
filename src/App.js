import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Platform,
    TouchableOpacity,
    Button
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    constructor(props) {
        super(props);
        this.userName = "";
        this.passWord = "";
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{textAlign:'center',fontSize:26,}}>登陆</Text>
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        placeholder='userName'
                        onChangeText={(text) => {this.userName = text;}}
                    />
                </View>
                <View style={styles.textInputViewStyle}>
                    <TextInput
                        style={styles.textInputStyle}
                        underlineColorAndroid={'transparent'}
                        placeholder='passWord'
                        secureTextEntry={true}
                        onChangeText={(text) => {this.passWord = text;}}
                    />
                </View>
                <TouchableOpacity style={styles.demo}
                    onPress={() => navigate('Profile')
                        // alert(this.userName+"....."+this.passWord)
                    }>
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 140,
    },
    textInputViewStyle: {
        width: width - 30,
        height: 45,
        borderRadius: 18,
        borderColor: 'blue',
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
    },
    textInputStyle: {
        width: width - 30,
        height: 35,
        paddingLeft: 8,
        // alignSelf: 'center',
        //根据不同平台进行适配
        marginTop: Platform.OS === 'ios' ? 4 : 8,
    },
    textLoginViewStyle: {
        width: width - 30,
        height: 45,
        backgroundColor: 'red',
        borderRadius: 20,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLoginStyle: {
        fontSize: 18,
        color: 'white',
    },
});

