import React from 'react';
import {Dimensions, Image, Text, View, StyleSheet} from 'react-native';
import NumberFormat from 'react-number-format';

const Subtitle = ({type, subt}) => {
  if (type === 'phone') {
    return (
      <NumberFormat
        value={subt}
        displayType={'text'}
        format="+## ###-####-####"
        renderText={(value) => <Text style={styles.listDescript}>{value}</Text>}
      />
    );
  } else if (type === 'text') {
    return <Text style={styles.listDescript}>{subt}</Text>;
  }
};
const CardContainer = ({leading, title, subType, subtitle, trailing}) => {
  return (
    <>
      <View style={styles.container} key={1}>
        <View style={styles.row}>
          <View style={styles.flexTwo}>
            <Image
              style={[styles.img]}
              source={{
                uri: leading,
              }}
            />
          </View>
          <View style={styles.flexEight}>
            <Text style={styles.listText}>{title}</Text>
            <Subtitle type={subType} subt={subtitle} />
          </View>
        </View>
      </View>
      ;
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 7,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    width: Dimensions.get('window').width,
    marginTop: 10,
  },
  flexEight: {flex: 0.8, marginLeft: 10, paddingRight: 10},
  listText: {
    fontSize: 16,
    padding: 5,
    color: '#4D4B57',
    fontWeight: '700',
  },
  listDescript: {
    fontSize: 12,
    padding: 5,
    color: '#7A7886',
    fontWeight: '300',
  },
});
export default CardContainer;
