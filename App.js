import React, { useState } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { FlatList } from 'react-native-web';
import styled from 'styled-components/native';

const Expression = styled.TextInput`
  border-style: dashed;
  border-color: green;
  border-width: 2px;
`;

const Item_text_expression = styled.Text`
  font-size: 2em;
  color: red;
`
const Item_text_result = styled.Text`
  font-size: 3em;
  color: yellow;
`
const Item_view = styled.View`
  background-color: black;
  padding:0.2em;
  margin-top: 0.5em;
`
const rendered_item = 
(item) => {
  console.log("rendering ",item);
  return <Item_view>
    <Item_text_expression>{item.item.expression}</Item_text_expression>
    <Item_text_result>{item.item.result}</Item_text_result>
  </Item_view>;
};


const PizzaTranslator = () => {

  const [result, set_result] = useState('');
  const [expression_text, set_expression_text] = useState('');
  const [history, set_history] = useState([]);
  const [search_result, set_search_result] = useState([]);

  const Calculate_button = styled.Button`
    font-size: larger;
  `;



  return (
    <View style={{padding: 10}}>
      <Expression
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={newText => { 
          set_expression_text(newText);
        }}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {
          result
        }
      </Text>
      <Calculate_button title="Calculate"
        onPress = {
          function calculate() {
          try{
            var b = eval(expression_text); 
            set_result(b);
            var a = [...history];
            a.push( {
              id: 'history-item' + a.length,
              expression: expression_text,
              result : b
            } );
            set_history(a);
            set_search_result(a);
            console.log("history hien tai la ", history);
            console.log("search_result hien tai la ", search_result);
          } catch (e){
            set_result("");
          }
        }}
      ></Calculate_button>
      <Expression 
      placeholder="Type to search"
      onChangeText= {search_string => {
        var a = history.filter( (value, inedex, arr) => {
          return value.expression.includes(search_string) || value.result.toString().includes(search_string);
        } );
        console.log(" Ket qua search la " , a);
        set_search_result(a);
      }}
     >
      </Expression>
      <FlatList
        data={search_result}
        renderItem = {rendered_item}
        keyExtractor = { item => item.id }
        extractData = {search_result}
      />
    </View>
  );
}

export default PizzaTranslator;