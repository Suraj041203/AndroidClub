import { StyleSheet } from 'react-native';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '90%',
    borderColor: '#fff',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#fff',
    borderRadius: 5,
  },
  button: {
    justifyContent:'center',
    // height: 40, 
    width: '90%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical:15,
    borderRadius: 50,

  },
  buttonText: {
    justifyContent:'center',
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  responseText: {
    justifyContent:'center',
    height: 40, 
    width: '90%',
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  aboutText: {
    justifyContent:'center',
    height: 40, 
    width: '90%',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default commonStyles;