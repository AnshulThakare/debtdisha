import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const DebtInputForm = () => {
  const [name, setName] = useState('');
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [numDebts, setNumDebts] = useState(1);
  const [debts, setDebts] = useState([{ lender: '', balance: '', interestRate: '', minPayment: '' }]);
  const [strategy, setStrategy] = useState('');
  const [extraPayment, setExtraPayment] = useState('');

  const handleDebtChange = (index, field, value) => {
    const newDebts = [...debts];
    newDebts[index][field] = value;
    setDebts(newDebts);
  };

  const addDebtField = () => {
    setDebts([...debts, { lender: '', balance: '', interestRate: '', minPayment: '' }]);
  };

  const handleSubmit = () => {
    const userData = {
      name,
      income: parseFloat(income),
      expenses: parseFloat(expenses),
      debts: debts.map(d => ({
        ...d,
        balance: parseFloat(d.balance),
        interestRate: parseFloat(d.interestRate),
        minPayment: parseFloat(d.minPayment)
      })),
      strategy,
      extraPayment: parseFloat(extraPayment)
    };

    console.log('Collected User Data:', userData);
    // You can now navigate or pass this data to your backend or strategy logic
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dept Disha – Debt Input Form</Text>

      <TextInput style={styles.input} placeholder="Your Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Monthly Income (₹)" keyboardType="numeric" value={income} onChangeText={setIncome} />
      <TextInput style={styles.input} placeholder="Monthly Expenses (₹)" keyboardType="numeric" value={expenses} onChangeText={setExpenses} />

      <Text style={styles.subheader}>Debts</Text>
      {debts.map((debt, index) => (
        <View key={index} style={styles.debtBox}>
          <TextInput style={styles.input} placeholder="Lender Name" value={debt.lender} onChangeText={(text) => handleDebtChange(index, 'lender', text)} />
          <TextInput style={styles.input} placeholder="Balance (₹)" keyboardType="numeric" value={debt.balance} onChangeText={(text) => handleDebtChange(index, 'balance', text)} />
          <TextInput style={styles.input} placeholder="Interest Rate (%)" keyboardType="numeric" value={debt.interestRate} onChangeText={(text) => handleDebtChange(index, 'interestRate', text)} />
          <TextInput style={styles.input} placeholder="Min Monthly Payment (₹)" keyboardType="numeric" value={debt.minPayment} onChangeText={(text) => handleDebtChange(index, 'minPayment', text)} />
        </View>
      ))}
      <Button title="Add Another Debt" onPress={addDebtField} />

      <TextInput style={styles.input} placeholder="Payoff Strategy (snowball / avalanche / custom)" value={strategy} onChangeText={setStrategy} />
      <TextInput style={styles.input} placeholder="Extra Monthly Payment (₹)" keyboardType="numeric" value={extraPayment} onChangeText={setExtraPayment} />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  debtBox: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginVertical: 6,
    borderRadius: 6,
  }
});

export default DebtInputForm;
