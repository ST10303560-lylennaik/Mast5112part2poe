import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [users, setUsers] = useState([
    { username: 'jack', password: '12345' },
    { username: 'reacher', password: 'password' },
  ]);

  const handleLogin = () => {
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      Alert.alert('Login Success', `Welcome back, ${username}!`);
      navigation.navigate('Home');
      resetInputFields();
    } else {
      Alert.alert('User Not Found', 'User does not exist. Please create a new account.');
      setIsRegistering(true);
    }
  };

  const handleRegister = () => {
    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      Alert.alert('User Exists', 'User already exists. Please login.');
    } else if (username && password) {
      setUsers([...users, { username, password }]);
      Alert.alert('Registration Success', 'Account created! You can now login.');
      setIsRegistering(false);
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
    resetInputFields();
  };

  const resetInputFields = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      {isRegistering ? (
        <>
          <Text style={styles.title}>Register</Text>
          <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsRegistering(false)} style={styles.switchMode}>
            <Text style={styles.switchModeText}>Back to Login</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsRegistering(true)} style={styles.switchMode}>
            <Text style={styles.switchModeText}>Create a New Account</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  switchMode: {
    marginTop: 15,
  },
  switchModeText: {
    color: '#007AFF',
    fontSize: 16,
  },
});

export default LoginScreen;
