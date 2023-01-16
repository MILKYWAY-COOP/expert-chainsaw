import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useApp } from '../../context';
import styles from './styles';

export default function RecipeCard() {
  const { recipe, setRecipeId } = useApp();
  const navigation = useNavigation();

  const handleContainerPress = (id: number) => {
    setRecipeId(id);
    navigation.navigate('RecipeDetail');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {recipe?.results?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleContainerPress(item.id)}
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
