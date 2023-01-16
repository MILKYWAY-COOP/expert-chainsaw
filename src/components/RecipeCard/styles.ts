import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  }
});
