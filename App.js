import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';

const Expression = styled.TextInput`
  border-style: solid;
  border-color: blue;
  border-width: 2px;
`;

const PizzaTranslator = () => {
  const [result, set_result] = useState('');
  const [expression, set_expression] = useState('');

  const Calculate_button = styled.Button`
  
  `;

  return (
    <View style={{padding: 10}}>
      <Expression
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => { 
          // set_expression(newText)
          try{
            var a = eval(newText); 
            set_result(a);
          } catch (e){
            set_result("");
          }
        }}
        // value = {expression}
        // defaultValue={}
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