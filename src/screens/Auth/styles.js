import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
    fontSize: 26,
    paddingVertical: Dimensions.get('screen').height - 670,
    alignSelf: 'center',
    color: '#6379F4',
  },
});
