import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import CustomInput from './CustomInput';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type RegisterNav = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  const navigation = useNavigation<RegisterNav>();

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleRegister = () => {
    if (pass !== confirm) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor!');
      return;
    }

    console.log('REGISTER SUCCESS:', email, pass);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>

      <CustomInput placeholder="E-posta" value={email} onChangeText={setEmail} />
      <CustomInput placeholder="Şifre" value={pass} onChangeText={setPass} secureTextEntry />
      <CustomInput placeholder="Şifre Tekrar" value={confirm} onChangeText={setConfirm} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0d1117', padding: 24 },
  title: { fontSize: 28, color: '#58a6ff', marginBottom: 20, fontWeight: 'bold' },
  button: { backgroundColor: '#238636', padding: 12, paddingHorizontal: 32, borderRadius: 8, marginTop: 16 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});

export default RegisterScreen;