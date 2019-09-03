import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconTextInput from '../components/IconTextInput';
import RoundButton from '../components/RoundButton';

class MemberScreen extends React.Component {
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
            SING IN
          </Text>
          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={'ios-person'}
            placeholder={'이메일'}
          />
          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={'ios-mail'}
            placeholder={'성'}
          />
          <IconTextInput
            style={{ marginTop: 10 }}
            iconName={'ios-mail'}
            placeholder={'이름'}
          />
          <RoundButton
            style={{ marginTop: 10 }}
            title={'회원가입'}
            onPress={() => {
                Alert.alert(
                    '회원가입',
                    '회원가입을 완료하시겠습니까?',
                    [
                      {text: '나중에', onPress: () => console.log('Ask me later pressed')},
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
                    ],
                    {cancelable: false},
                  );}
            }
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

export default MemberScreen;
