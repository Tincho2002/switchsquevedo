import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  submit: {
    backgroundColor: theme.colors.secondary,
    margin: 50,
    padding: 18,
    alignItems: 'center',
    borderRadius: 5,
  },
  login: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.white,
    padding: 18,
    alignItems: 'center',
    margin: 20,
    borderRadius: 5,
    fontSize: 20,
    fontFamily: 'Inter-Bold',
  },
  submitText: {
    fontSize: 20,
    color: theme.colors.white,
    fontFamily: 'Inter-Bold',
  },
  error: {
    fontSize: 15,
    color: theme.colors.red,
    fontFamily: 'Inter-Bold',
  },
  inputField: {
    width: '85%',
    margin: 8,
    color: '#3b5998',
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: theme.colors.login,
    fontFamily: 'Inter-Bold',
  },
});
