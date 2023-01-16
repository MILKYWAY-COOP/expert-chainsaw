import React from 'react';
import { View} from 'react-native';

import { SearchBar, RecipeCard } from '../../components';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <RecipeCard />
    </View>
  );
}
