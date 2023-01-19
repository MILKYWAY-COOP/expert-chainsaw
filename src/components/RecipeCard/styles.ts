import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    width: '100%'
  },
  
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  imageContainer: {
    backgroundColor: 'yellow',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    backgroundColor: 'yellow',
    width: '100%',
    height: 200,
    objectFit: 'cover'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center'
  }
});
