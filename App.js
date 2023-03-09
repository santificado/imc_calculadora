import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App(){
  const peso = ''
  const altura = ''
  const [result, SetResult] = useState('')
  const calc = () +>{}
   var res = 'Você está obeso'
   setResult(res)

}
{
  return (

      <View style={styles.container}>
          <Text>Calcule seu IMC</Text>
          <TextInput
          style={{height:40}}
          placeholder = "Digite seu peso"
          defaultValue={peso}
        
        />
          <TextInput
          style={{height:40}}
          placeholder = "Digite sua altura"
          defaultValue={altura}
        
        />
          <Button
           onPress={() =>{
           calc();

           }}
           />
           title='Calcular'
          </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
