import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/counter';

const App = () => {
  const [count, setCount] = useState(0);
  const onIncrease = () => setCount(count => count + 1);
  const onDecrease = () => {
    if (count === 0) {
      return 0;
    } else {
      setCount(count => count - 1);
    }
  };
  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'pink',
  },
});

export default App;
