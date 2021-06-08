import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../resources/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsMain = ({route, navigation}) => {
  const {data} = route.params;
  const {name, imgUrl, price, description} = data;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={28} />
        </TouchableOpacity>

        <Icon name="shopping-cart" size={28} />
      </View>

      <View style={styles.imgContainer}>
        <Image style={{flex: 1, resizeMode: 'contain'}} source={imgUrl} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.titleBox}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{name}</Text>
          <View style={styles.priceBox}>
            <Text
              style={{fontSize: 17, color: COLORS.white, fontWeight: 'bold'}}>
              ${price}
            </Text>
          </View>
        </View>

        <Text style={{fontSize: 17, fontWeight: 'bold', marginTop: 20}}>
          Description
        </Text>
        <Text style={{fontSize: 15, color: 'grey'}}>{description}</Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.btnAddSub}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>-</Text>
            </View>
            <Text
              style={{fontSize: 17, fontWeight: 'bold', marginHorizontal: 10}}>
              1
            </Text>
            <View style={styles.btnAddSub}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>+</Text>
            </View>
          </View>
          <View style={styles.btnBuy}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: COLORS.white}}>
              Buy now
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  btnBuy: {
    width: 140,
    height: 45,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue,
    marginRight: 10,
  },
  btnAddSub: {
    width: 70,
    height: 45,
    borderColor: 'grey',
    borderWidth: 3,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBox: {
    width: 90,
    height: 45,
    backgroundColor: COLORS.lightBlue,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 0.6,
    backgroundColor: COLORS.lightGrey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 10,
    paddingLeft: 20,
    marginTop: 20,
  },
  imgContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
});
export default DetailsMain;
