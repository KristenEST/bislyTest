import {useMutation} from '@apollo/client';
import React, {useState} from 'react';
import * as Progress from 'react-native-progress';
import {
  Button,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {LOGIN} from '../graphql/login';

export const LoginScreen = () => {
  const [emailInput, onChangeEmail] = useState('demonic.melk+dev1@gmail.com'); // hardcoded this cause cba rewriting
  const [passwordInput, onChangePassword] = useState('');
  const [login, {data, loading, error}] = useMutation(LOGIN);
  // const {data, loading, error} = useSubscription(LOGIN);

  const loginClick = (email: string, password: string) => {
    console.log('File: LoginScreen.tsx line: 11', email, password);
    login({
      variables: {
        input: {application: 'web', email: email, password: password},
      },
    });
  };
  if (error) {
    console.log('File: LoginScreen.tsx line: 11', error);
    return <Text>Submission error! ${error.message}</Text>;
  }
  if (data) {
    console.log('File: LoginScreen.tsx line: 29 ', data);
  }
  if (loading) {
    console.log('File: LoginScreen.tsx line: 24', loading);
    return (
      <Progress.Circle size={300} indeterminate={true} style={styles.loading} />
    );
  }

  return (
    <View>
      <Text style={styles.header}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder={'E-mail'}
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        value={emailInput}
        defaultValue={emailInput}
        onChangeText={e => onChangeEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'numeric'}
        value={passwordInput}
        defaultValue={passwordInput}
        onChangeText={e => onChangePassword(e)}
      />
      <Button
        onPress={() => loginClick(emailInput, passwordInput)}
        title="LOGIN"
        disabled={
          emailInput.length === 0 ||
          !emailInput.includes('@') ||
          !emailInput.includes('.') ||
          passwordInput.length === 0
        }
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  loading: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000000',
    ...Platform.select({
      android: {
        height: 40,
      },
    }),
  },
});

export default LoginScreen;
