import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';

class LoginScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          flexDirection: 'column',
          // backgroundColor: 'tomato',
          justifyContent: 'center',
        }}
        behavior="padding"
      >
        <View style={styles.container}>
          {/* <Ionicons name={'md-car'} size={100} color={'tomato'} /> */}
          <Text
            style={{
              fontSize: 30,
              color: 'tomato',
              marginTop: -20,
              fontWeight: '200',
            }}
          >
            CAR AUCTION
          </Text>
          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={'ios-person'}
            placeholder={'이름'}
          />
          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={'ios-mail'}
            placeholder={'이메일'}
          />
          <RoundButton
            style={{ marginTop: 10 }}
            title={'로그인'}
            onPress = {()=>{
              Alert.alert(
                  '로그인 하시겠습니까?',
                  '',
                  [
                      {
                      text: 'OK', onPress: () => {this.props.navigation.navigate('MyCars')}},
                      {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                      },
                      
                  ],
                  {cancelable: false},
              )
          }}
          />
          <RoundButton
            style={{ marginTop: 10 }}
            title={'회원가입'}
            onPress={() => this.props.navigation.navigate('Member')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
  },
});

export default LoginScreen;
