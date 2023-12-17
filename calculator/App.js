import React, { useState, useRef } from 'react';
import { Text, TextInput, View, Button, StyleSheet, TouchableHighlight,FlatList } from 'react-native';
// import { FlatList } from 'react-native-web';
import styled from 'styled-components/native';

const Expression = styled.TextInput`
  margin-top : 20px;
  border: 3px dashed green;
`;

const Item_text_expression = styled.Text`
  /* font-size: 2em; */
  color: red;
`
const Item_text_result = styled.Text`
  /* font-size: 3em; */
  color: yellow;
`
const Item_view = styled.View`
  background-color: black;
  padding:2px;
  margin-top: 5px;
`
const rendered_item = 
(item) => {
  console.log("rendering ",item);
  // return <View></View>
  return <View>
    <Text>{item.item.expression}</Text>
    <Text>{item.item.result}</Text>
  </View>;
};
const Main_view = styled.View`
  padding-top: 20ch;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
  border-style: solid;
  border-color: red;
  flex-flow: wrap;
`
const Cal_view= styled.View`
  flex-grow: 1;
  min-width: 200px;
  margin-right: 10px;
`
const History_view = styled.View`
  margin-right: 10px;
  flex-grow: 1;
  min-width: 200px;
`





const PizzaTranslator = () => {
  const input_expression = useRef("");

  const [result, set_result] = useState('');
  // const [expression_text, set_expression_text] = useState('');
  const [history, set_history] = useState([]);
  const [search_result, set_search_result] = useState([]);

  const Calculate_button = styled.Button`
    font-size: larger;
  `;

  function save_history(b){
    var a = [...history];
    a.push( {
      id: 'history-item' + a.length,
      expression: input_expression.current,
      result : b
    } );

    set_history(a);
    set_search_result(a);
    console.log("history hien tai la ", history);
    console.log("search_result hien tai la ", search_result);

  }
  function calculate() {
    try{
      console.log("Evaluating the following expressing");
      console.log(input_expression);

      var b = eval(input_expression.current); 
      set_result(b);

      
    } catch (e){
      console.log(e);
      console.log(e.stack);
      console.log(e.line);
      set_result("");
      return false;
    }
    return true;
  }

  
  return (


    <Main_view >
      
      <Cal_view>
        
        <Expression
          placeholder="Type here to translate!"
          onChangeText={
            newText =>  { 
              input_expression.current = newText; 
              console.log(input_expression);
              calculate();
              
            }    
          }
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {
            result
          }
        </Text>

        <Calculate_button title="Calculate"
          onPress = { 
            () => {
              if (calculate()) save_history();
              else {
                console.log("No history because wrong expression");
              }
            }
          }
        />
      </Cal_view>
      <History_view>
        <Expression 
          placeholder="Type to search"
          onChangeText= {search_string => {
            var a = history.filter( (value, inedex, arr) => {
              return value.expression.includes(search_string) || value.result.toString().includes(search_string);
            } );
            console.log(" Ket qua search la " , a);
            set_search_result(a);
          }}
        /> 
        <FlatList
            data={search_result}
            renderItem={rendered_item}
        />

      </History_view>
      
    </Main_view>
  );
}

export default PizzaTranslator;