import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryBar = ({
  categoryList,
  onSelectCategory,
  indexCategoryDefault,
  styleContainer,
  textColorActive,
  textColorInactive,
}) => {
  const [indexSelectedCategory, setIndexSelectedCategory] =
    useState(indexCategoryDefault);
  return (
    <View style={[styles.container, styleContainer]}>
      {categoryList.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => {
            onSelectCategory(index);
            setIndexSelectedCategory(index);
          }}>
          <Text
            style={[
              {fontSize: 16, color: textColorInactive, fontWeight: 'bold'},
              indexSelectedCategory === index && {
                color: textColorActive,
                paddingBottom: 5,
                borderBottomWidth: 2,
                borderColor: textColorActive,
              },
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default CategoryBar;
