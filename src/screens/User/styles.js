import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#FAFCFF',
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontWeight: '700',
    fontSize: 26,
    paddingVertical: Dimensions.get('screen').height - 670,
    alignSelf: 'center',
    color: '#6379F4',
  },
  img: {
    borderRadius: 5,
  },
});
