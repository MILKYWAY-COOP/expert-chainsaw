import React from 'react';
import { ScrollView, View, Text, FlatList } from 'react-native';

import { useApp } from '../../context';
import styles from './styles';

export default function RecipeDetail() {
  const { recipeInfo: info, loading } = useApp();

  const removeHTMLTags = (text: string) => {
    if (!text) return '';
    return text.replace(/(<([^>]+)>)/gi, '');
  };

  const summary = removeHTMLTags(info?.summary);
  const instructions = removeHTMLTags(info?.instructions);

  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{info?.title}</Text>
          <View>
            <Text style={styles.h1}>Dishes</Text>
            <FlatList
              data={info?.dishTypes}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Text style={styles.dishTypes}>{item}</Text>
              )}
            />
          </View>
          <View>
            <Text style={styles.h1}>Ingredients</Text>
            {info.extendedIngredients?.map((ingredient) => (
              <Text key={ingredient.id} style={styles.extendedIngredients}>
                {ingredient?.original}
              </Text>
            ))}
          </View>
          <View>
            <Text style={styles.h1}>Instructions</Text>
            <Text style={styles.instructions}>{instructions}</Text>
          </View>
          <View>
            <Text style={styles.h1}>Summary</Text>
            <Text style={styles.summary}>{summary}</Text>
          </View>
        </ScrollView>
      )}
    </>
  );
}
