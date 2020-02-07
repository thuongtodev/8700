import {connect} from 'react-redux';
import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, Text, FlatList, TouchableOpacity as Touch, Image, TextInput } from 'react-native';

import styles from './styles';
import { Images } from '../../assets/images';
import Responsive from '../../modules/utils/responsive';
import { getAllCategoriesRequest, getTypeOfFoodAvailableRequest } from '../../actions/Search';

const dataDummy = [
  {
    "Id": 20705,
    "Published": true,
    "QSR_id": 165,
    "QSR_name": "Coffee Club",
    "Name": "Add Cold Milk to Tea (20ml)",
    "Serves": 1,
    "Unit": " ml",
    "Size": 20,
    "Energy": 56,
    "Includes": " NULL",
    "Categories": [
        {
            "Id": 108,
            "Name": "Beverages",
            "Description": null,
            "Includes": "",
            "Excludes": ""
        }
    ],
    "SpecialTypes": [],
    "TimeCategories": [],
    "ChildProducts": null,
    "ChildIds": []
  },
  {
      "Id": 31890,
      "Published": true,
      "QSR_id": 215,
      "QSR_name": "The Coffee Club",
      "Name": "Add Cold Milk to Tea (20ml)",
      "Serves": 1,
      "Unit": " ml",
      "Size": 20,
      "Energy": 56,
      "Includes": " NULL",
      "Categories": [
          {
              "Id": 108,
              "Name": "Beverages",
              "Description": null,
              "Includes": "",
              "Excludes": ""
          }
      ],
      "SpecialTypes": [],
      "TimeCategories": [],
      "ChildProducts": null,
      "ChildIds": []
  },
  {
      "Id": 27990,
      "Published": true,
      "QSR_id": 204,
      "QSR_name": "Gong Cha Tea",
      "Name": "Alisan Tea",
      "Serves": 1,
      "Unit": " ml",
      "Size": 0,
      "Energy": 256,
      "Includes": " NULL",
      "Categories": [
          {
              "Id": 108,
              "Name": "Beverages",
              "Description": null,
              "Includes": "",
              "Excludes": ""
          }
      ],
      "SpecialTypes": [],
      "TimeCategories": [],
      "ChildProducts": null,
      "ChildIds": []
  }
];

const SearchScreen = (props) => {
  const [isDetail, setIsDetail] = useState('');
  const [mealQuantity, setMealQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await props.getAllCategoriesRequest('GetCategories');
      await props.getTypeOfFoodAvailableRequest('GetQSRs');
    };
    fetchData();
  }, []);

  const handleChange = (value) => {
    console.log('value: ', value);
    setMealQuantity(parseInt(value, 10));
  };

  const ItemMeal = ({ item }) => (
    <Touch style={styles.itemMealContainer} onPress={() => setIsDetail(item.Id)}>
      <View style={styles.flexRowContainer}>
        <Text style={[styles.itemMealTitle, { width: '75%'}]} numberOfLines={1}>{item.Name}</Text>
        <Text style={[styles.itemMealTitle, { width: '25%', textAlign: 'right' }]}>{item.Energy} kJ</Text>
      </View>
      <Text style={styles.itemMealSubTitle}>{item.QSR_name}</Text>
    </Touch>
  );

  const ItemMealDetail = ({ item }) => (
    <View style={styles.itemMealContainer}>
      <Touch style={styles.flexRowContainer} onPress={() => setIsDetail('')}>
        <Text style={styles.itemMealTitle}>{item.Name}</Text>
      </Touch>
      <Text style={styles.itemMealSubTitle}>
        {item.QSR_name},
        <Text style={styles.itemMealSubTitleSize}> {item.Size}{item.Unit}</Text>
      </Text>
      <Text style={styles.itemMealSubTitleSize}>
        There are
        <Text style={styles.itemMealSubTitle}> {item.Serves} </Text>
        serving(s) in this product.
      </Text>
      <Text style={styles.itemMealSubTitleSize}>
        Eating
        <Text style={styles.itemMealSubTitle}> {item.Serves} </Text>of<Text style={styles.itemMealSubTitle}> {item.Serves} </Text>
        serving =
        <Text style={styles.itemMealSubTitle}> {item.Energy} </Text>
        kJ in your portion size
      </Text>
      <View style={[styles.flexRowContainer, {paddingTop: Responsive.h(5)}]}>
        <Text style={[styles.itemMealTitle, { width: '75%'}]} numberOfLines={1}>{item.Energy} kJ</Text>
        <Text style={[styles.itemMealTitle, { width: '25%', textAlign: 'right' }]}>90%</Text>
      </View>
      <Text style={styles.itemMealSubTitleSize}>Add to Meal</Text>
      <View style={[styles.addToMealContainer]}>
        <View style={[styles.flexRowContainer, {width: '40%', alignItems: 'center'}]}>
          <TextInput
            value={mealQuantity.toString()}
            style={styles.input}
            onChangeText={handleChange}
            keyboardType="numeric"
            maxLength={4}
          />
          <Text style={styles.itemMealSubTitleSize}>of</Text>
          <Text style={styles.itemMealSubTitle}>1</Text>
        </View>
        <Text style={styles.itemMealSubTitleSize}>=</Text>
        <View style={[styles.flexRowContainer, {width: '40%', alignItems: 'center'}]}>
          <Text style={styles.itemMealSubTitle}>{item.Energy} kJ</Text>
          <Image source={Images.check_meal} resizeMode="contain" style={{width: Responsive.h(18), height: Responsive.h(24)}} />
          <Touch onPress={() => alert('cc')}>
            <Image source={Images.add_meal} resizeMode="contain" style={{width: Responsive.h(40), height: Responsive.h(40)}} />
          </Touch>
        </View>
      </View>
      <View style={[styles.flexRowContainer, {width: '50%'}]}>
        <Text style={styles.itemMealSubTitleSize}>Quantity</Text>
        <Text style={styles.itemMealSubTitleSize}>Servings(s)</Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: Responsive.h(20)}}>
        <Image source={Images.three_dots} resizeMode="contain" style={{width: Responsive.h(50), height: Responsive.h(10)}} />
      </View>
    </View>
  );

  const renderItem = ({ item }) => isDetail !== item.Id ? <ItemMeal item={item} /> : <ItemMealDetail item={item} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWrap} />
      <View style={styles.body}>
        <Text style={styles.title}>Total kJs in your meal</Text>
        <FlatList
          data={dataDummy}
          renderItem={renderItem}
          keyExtractor={item => `${item.Id}`}
          extraData={isDetail}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  listCategory: state.SearchReducer.listCategory,
  listTypeOfFood: state.SearchReducer.listTypeOfFood
});

const mapDispatchToProps = {
  getAllCategoriesRequest,
  getTypeOfFoodAvailableRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
