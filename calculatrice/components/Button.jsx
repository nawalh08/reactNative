import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity }
  from 'react-native';

export default function App() {

  // State variables 
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs 
  const handleNumberInput = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs 
  const handleOperatorInput = (operator) => {
    setOperator(operator);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press 
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayValue((num1 / num2).toString());
    }

    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press 
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>
          {displayValue}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>AC</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(7)}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('/')}
          >
            <Text style={[
              styles.buttonText,
              styles.operatorButtonText
            ]}>
              ÷
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(4)}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(5)}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(6)}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('*')}
          >
            <Text style={[
              styles.buttonText,
              styles.operatorButtonText
            ]}>
              ×
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(1)}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(2)}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(3)}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('-')}
          >
            <Text style={[
              styles.buttonText,
              styles.operatorButtonText
            ]}>
              −
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleNumberInput(0)}
          >
            <Text style={[
              styles.buttonText,
              styles.zeroButtonText
            ]}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('+')}
          >
            <Text style={[
              styles.buttonText,
              styles.operatorButtonText
            ]}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.egalButton}
            onPress={handleEqual}
          >
            <Text style={styles.textEgal}>=</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={handleClear}>
          <Text style={styles.clearButtonText}>DEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles 
const styles = StyleSheet.create({
  container: {


    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayContainer: {

    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 60,
  },
  displayText: {
    fontSize: 52,
    color: 'white',

  },
  buttonContainer: {

    width: '80%',
  },
  row: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {

    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCD2D7',
    margin: 5,
    padding: 25,
  },
  buttonText: {
    fontSize: 34,
    color: '#333',
  },
  zeroButton: {

    paddingLeft: 35,
    paddingRight: 35,
  },
  zeroButtonText: {
    marginLeft: 10,
  },
  operatorButton: {
    backgroundColor: 'gray',
  },
  operatorButtonText: {
    color: '#DCD2D7',
  },
  egalButton: {

    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',

    padding: 15
  },
  textEgal: {
    fontSize: 32,
    color: '#fff',
  },
  clearButton: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCD2D7',
    marginTop: 10,
    padding: 10,
  },
  clearButtonText: {
    fontSize: 24,
    color: '#333',
  },
});