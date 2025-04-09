import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Login() {
const navigation = useNavigation();
  return (
    <View style={styles.page}>
        <Text style={styles.login}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="E-mail"
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
        />
        <Button style = {styles.button}
          title="Entrar"
          color="black"
          onPress={() => navigation.navigate('Estoque')}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#b3c3e3',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  login: {
    fontSize: 60,
  },
  input: {
    height: 40,
    fontSize: 20,
    borderWidth: 1,
    textAlign: 'center'
  },
  button: {
    fontSize: 80,
  }
});
