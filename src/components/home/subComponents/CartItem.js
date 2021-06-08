import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../../resources/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get('screen').width / 2 - 30;
const CartItem = ({device, index, onSelectDevice}) => {
  return (
    <TouchableOpacity onPress={() => onSelectDevice()}>
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end'}}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: device.like
                ? 'rgba(245,245,32,0.2)'
                : 'rgba(0,0,0,0.2)',
            }}>
            <Icon
              name="bolt"
              size={20}
              color={device.like ? COLORS.orange : COLORS.dark}
            />
          </View>
        </View>

        <View style={{height: 110, alignItems: 'center'}}>
          <Image
            style={{flex: 1, resizeMode: 'contain'}}
            source={device.imgUrl}
          />
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10}}>
          {device.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
          }}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>
            ${device.price}
          </Text>
          <View
            style={{
              width: 25,
              height: 25,
              backgroundColor: COLORS.lightBlue,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 17, color: COLORS.white, fontWeight: 'bold'}}>
              +
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
});
export default CartItem;
