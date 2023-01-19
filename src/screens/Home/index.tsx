import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SearchBar, RecipeCard } from '../../components';
import { useApp } from '../../context';
import styles from './styles';

export default function Home() {
  const { setRecipeId } = useApp();
  const navigation = useNavigation();

  const handleContainerPress = (id: number) => {
    setRecipeId(id);
    navigation.navigate('Details');
  };

  return (
    <>
      <View style={styles.container}>
        <SearchBar />
        <RecipeCard handleContainerPress={handleContainerPress} />
      </View>
    </>
  );
}
