import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  child: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    minHeight:
      Dimensions.get('screen').height - (Dimensions.get('screen').height - 670),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.55,
    shadowRadius: 16.0,

    elevation: 40,
  },
  childTitle: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 23,
    color: '#3A3D42',
    marginBottom: 10,
  },
  descript: {
    fontWeight: '500',
    textAlign: 'center',
    color: '#a9a9a9',
    lineHeight: 23,
    marginBottom: 10,
  },
  inputItem: {
    flexDirection: 'row',
    padding: 5,
    borderColor: '#a9a9a9',
    marginVertical: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  link: {
    color: '#a9a9a9',
    fontWeight: '700',
    justifyContent: 'flex-end',
  },
  wrapContent: {
    flexDirection: 'column',
    flex: 1,
  },
  button: {
    marginVertical: 30,
    padding: 5,
    borderRadius: 15,
  },
});
