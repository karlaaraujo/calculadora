import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function App() {

  const[valorVisor, setValorVisor] = useState('0');
  const[firstValue, setFirstValue] = useState(0);
  const[operation, setOperation] = useState('');
  const[changeViewNumber, setChangeViewNumber] = useState(false);

  const pressButton = (button) => {
   if (operation == '' || (operation != '' && valorVisor != '0')) {
      setValorVisor(valorVisor + button);
    }
   if (valorVisor == '0' || operation != '') {
      setValorVisor(button);
    }
    if (changeViewNumber) {
      setValorVisor(button);
      setChangeViewNumber(false);
    }
  
  }

  const pressOperation = (operacao) => {
    if (firstValue == 0) {
      setFirstValue(parseInt(valorVisor));
      setOperation(operacao);
    } else {
      if (operation == 'add') {
        var result = firstValue + parseInt(valorVisor);
      }
      if (operation == 'sub') {
        var result = firstValue - parseInt (valorVisor);
      }
      if (operation == 'mult') {
        var result = firstValue * parseInt (valorVisor);
      }
      if (operation == 'div') {
        var result = firstValue / parseInt (valorVisor);
      }
      setValorVisor(result.toString());
      setFirstValue(result);
      setOperation(operacao);
    }
  } 

  const equals = () => {
    if (firstValue !=0){
      if (operation == 'add') {
        var result = firstValue + parseInt(valorVisor);
      }
      if (operation == 'sub') {
        var result = firstValue - parseInt (valorVisor);
      }
      if (operation == 'mult') {
        var result = firstValue * parseInt (valorVisor);
      }
      if (operation == 'div') {
        var result = firstValue / parseInt (valorVisor);
      }
      setValorVisor(result.toString());
      setFirstValue(0);
      setOperation('');
      setChangeViewNumber(true);
    }
  }

  const clearAll = () => {
    setValorVisor('0');
    setFirstValue(0);
    setOperation('');
  }

  const clearScreen = () => {
    setValorVisor('0');
  }

  return (
    <View style={styles.container}>

      <View style={styles.visor}>
        <Text style={styles.textoVisor}>
          {valorVisor}
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('1')}}>
          <Text style={styles.conteudoBotao}>
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('2')}}>
          <Text style={styles.conteudoBotao}>
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('3')}}>
          <Text style={styles.conteudoBotao}>
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => {pressOperation('add')}}>
          <Text style={styles.conteudoBotao}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('4')}}>
          <Text style={styles.conteudoBotao}>
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('5')}}>
          <Text style={styles.conteudoBotao}>
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('6')}}>
          <Text style={styles.conteudoBotao}>
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => {pressOperation('sub')}}>
          <Text style={styles.conteudoBotao}>
            -
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('7')}}>
          <Text style={styles.conteudoBotao}>
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('8')}}>
          <Text style={styles.conteudoBotao}>
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('9')}}>
          <Text style={styles.conteudoBotao}>
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => {pressOperation('mult')}}>
          <Text style={styles.conteudoBotao}>
            x
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.botaoPadrao} onPress={() => {pressButton('0')}}>
          <Text style={styles.conteudoBotao}>
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => {clearAll()}}>
          <Text style={styles.conteudoBotao}>
            C
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoOperacao} onPress={() => {pressOperation('div')}}>
          <Text style={styles.conteudoBotao}>
            /
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoIgual} onPress={() => {equals()}}>
          <Text style={styles.conteudoBotao}>
            =
          </Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: "flex-start",
    flexWrap: 'wrap', 
    // flexDirection: 'row'
  },
  visor: {
    backgroundColor: 'lightgray',
    height: 300,
    width: '100%',
    borderColor: "white",
    borderWidth:1,
    alignSelf:'flex-end',
    alignItems: 'flex-end'
  },
  botaoPadrao: {
    backgroundColor: 'grey',
    height: 93,
    width: '25%',
    borderColor: "white",
    borderWidth:1,
    //padding: 22,
    //borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch', // ocupa toda a largura do celular
    justifyContent: 'space-between'
  },
  botaoOperacao: {
    backgroundColor: '#767676',
    height: 93,
    width: '25%',
    borderColor: "white",
    borderWidth:1,
    justifyContent: "center",
    alignItems: "center"
  },
  botaoIgual: {
    backgroundColor: 'orange',
    height: 93,
    width: '25%',
    borderColor: "white",
    borderWidth:1,
    justifyContent: "center",
    alignItems: "center"
  },
  conteudoBotao: {
    fontSize: 40,
    color: "white",
    fontWeight: 'bold'
  },
  textoVisor: {
    fontSize: 80,
    color: 'black',
    marginTop: 200
  },
});
