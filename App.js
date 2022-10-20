import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const PizzaTranslator = () => {
  const [result, set_result] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => { 
            try{
              var a = eval(newText); 
              set_result(a);
            } catch (e){
              set_result("");
            }
          }
        }
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {
          result
        }
      </Text>
    </View>
  );
}

export default PizzaTranslator;