import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry }: any) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#8b949e"
      textContentType="oneTimeCode"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#161b22',
    padding: 12,
    borderRadius: 8,
    color: 'white',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#30363d',
  },
});

export default CustomInput;