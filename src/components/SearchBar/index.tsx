import { useState} from 'react';
import { View, TextInput } from 'react-native';

import { useApp } from '../../context';
import styles from './styles';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { search } = useApp();

  const handleSearch = () => {
    search(searchTerm);
    setSearchTerm('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Search...'
        onChangeText={(text) => setSearchTerm(text)}
        onSubmitEditing={handleSearch}
        value={searchTerm}
      />
    </View>
  );
}
