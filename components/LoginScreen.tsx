import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CustomInput from './CustomInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type LoginNav = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginNav>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('EMAIL:', email);
    console.log('PASSWORD:', password);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>

      <CustomInput placeholder="E-posta" value={email} onChangeText={setEmail} />
      <CustomInput placeholder="Şifre" value={password} onChangeText={setPassword} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d1117', padding: 24 },
  title: { fontSize: 28, color: '#58a6ff', marginBottom: 20, fontWeight: 'bold' },
  button: { backgroundColor: '#238636', padding: 12, paddingHorizontal: 32, borderRadius: 8, marginTop: 16 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  link: { color: '#58a6ff', marginTop: 12, fontSize: 16 },
});

export default LoginScreen;