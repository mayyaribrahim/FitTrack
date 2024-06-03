import { useState, useContext } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { sendPasswordResetEmail } from 'firebase/auth';
import PrimaryButton from '../PrimaryButton';
import InputField from '../InputFeild';
import { AuthContext } from '../../context/auth-context';
import { getAuth } from 'firebase/auth';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const navigation = useNavigation();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  const auth = getAuth();

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  function forgotPasswordHandler() {
    if (!enteredEmail) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    sendPasswordResetEmail(auth, enteredEmail)
      .then(() => {
        Alert.alert('Password Reset', 'Check your email to reset your password.');
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  }

  return (
    <View style={styles.form}>
      <View>
        <InputField
          label="Email Address"
          iconName={"mail"}
          onChange={updateInputValueHandler.bind(this, 'email')}
          placeholder={"Email Address"}
          value={enteredEmail}
          keyboardType="email-address"
          type="email"
          isInvalid={emailIsInvalid}
        />

        <InputField
          iconName={"lock"}
          label="Password"
          onChange={updateInputValueHandler.bind(this, 'password')}
          value={enteredPassword}
          placeholder={"Password"}
          isInvalid={passwordIsInvalid}
          type="password"
          secureTextEntry={true}
        />

        {!isLogin && (
          <InputField
            iconName={"lock"}
            label="Confirm Password"
            onChange={updateInputValueHandler.bind(this, 'confirmPassword')}
            value={enteredConfirmPassword}
            placeholder={"Confirm Password"}
            isInvalid={passwordsDontMatch}
            type="password"
            secureTextEntry={true}
          />
        )}

        {isLogin && (
          <TouchableOpacity onPress={forgotPasswordHandler}>
            <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
          </TouchableOpacity>
        )}

        <View style={styles.buttons}>
          <PrimaryButton onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  buttons: {
    marginTop: 12,
    alignSelf: 'center',
  },
  forgotPasswordButtonText: {
    fontFamily: 'poppins',
    color: "black",
    fontSize: 11,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
});
