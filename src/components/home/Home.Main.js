import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, FlatList} from 'react-native';
import COLORS from '../../resources/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CategoryBar from './subComponents/CategoryBar';
import CartItem from './subComponents/CartItem';

import devices from '../../resources/devices';
const categoryList = ['FLASH SALE', 'NEW', 'POPULAR', 'OLD'];

const HomeMain = ({navigation}) => {
  const onSelectCategory = index => {
    console.log('Do something');
  };

  const onSelectDevice = device => {
    navigation.navigate('Details', {data: device});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Welcome to</Text>
          <Text
            style={{fontSize: 25, fontWeight: 'bold', color: COLORS.lightBlue}}>
            Mobile Store
          </Text>
        </View>
        <Icon name="shopping-cart" size={28} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <View style={styles.search}>
          <Icon
            name="search"
            size={28}
            style={{marginLeft: 10, color: COLORS.stone}}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginLeft: 10,
              color: COLORS.heather,
            }}>
            Search
          </Text>
        </View>
        <View style={styles.filter}>
          <Icon name="sort" size={35} style={{color: COLORS.white}} />
        </View>
      </View>

      <CategoryBar
        categoryList={categoryList}
        indexCategoryDefault={0}
        textColorActive={COLORS.lightBlue}
        textColorInactive={'grey'}
        onSelectCategory={onSelectCategory}
        styleContainer={styles.categoryBar}
      />

      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
        numColumns={2}
        data={devices}
        renderItem={({item, index}) => (
          <CartItem
            device={item}
            index={index}
            onSelectDevice={() => onSelectDevice(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGrey,
    flex: 1,
    height: 50,
    borderRadius: 10,
  },
  filter: {
    backgroundColor: COLORS.lightBlue,
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBar: {
    marginTop: 30,
  },
});
export default HomeMain;
