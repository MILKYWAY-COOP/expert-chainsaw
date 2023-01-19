import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { useApp } from '../../context';
import { IHandleContainerPress } from '../../types/recipe';
import styles from './styles';

export default function RecipeCard({
  handleContainerPress
}: IHandleContainerPress) {
  const { recipe } = useApp();

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        {recipe?.results?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleContainerPress(item?.id)}
              style={styles.imageContainer}
            >
              <Image source={{ uri: item?.image }} style={styles.image} />
              <Text style={styles.title}>{item?.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}
