import { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PrimaryButton from '../PrimaryButton';
import InputField from '../InputFeild';
import { AuthContext } from '../../context/auth-context';

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const navigation = useNavigation();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
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
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
      
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

        {!isLogin && (
          <InputField
          iconName={"mail"}
          label="Confirm Email Address"
          onChange={updateInputValueHandler.bind(this, 'confirmEmail')}
          value={enteredConfirmEmail}
          keyboardType="email-address"
          placeholder={"Confirm Email Address"}
          isInvalid={emailsDontMatch}
          type="email"
        />
        )}

        <InputField
          iconName={"lock"}
          label="Password"
          onChange={updateInputValueHandler.bind(this, 'password')}
          value={enteredPassword}
          placeholder={"Password"}
          isInvalid={passwordIsInvalid}
          type="password"
          // label={"Password"}
          secureTextEntry={true}
        />

        {!isLogin && (
          <InputField
          iconName={"lock"}
          label="Confirm Password"
           onChange={updateInputValueHandler.bind(
              this,
             'confirmPassword'
            )}
          value={enteredConfirmPassword}
          placeholder={"Confirm Password"}
          isInvalid={passwordsDontMatch}
          type="password"
          // label={"Password"}
          secureTextEntry={true}
        />
        )}

          {isLogin &&
            <TouchableOpacity>
              <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
            </TouchableOpacity>
          }
          

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
