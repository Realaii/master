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

export default class App extends Component<{}> {
    onPress = () => {
        alert(this.userName+"......."+this.password);
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{textAlign:'center',fontSize:26,}}>登陆成功</Text>
                <TouchableOpacity onPress={() => navigate('Home')}>
                    <View style={styles.textLoginViewStyle}>
                        <Text style={styles.textLoginStyle}>返回</Text>
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

    textInputStyle: {
        width: width - 30,
        height: 35,
        paddingLeft: 8,
        // alignSelf: 'center',
        //根据不同平台进行适配
        marginTop: Platform.OS === 'ios' ? 4 : 8,
    },

    //登录按钮View样式
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
    //登录Text文本样式
    textLoginStyle: {
        fontSize: 18,
        color: 'white',
    },

});

