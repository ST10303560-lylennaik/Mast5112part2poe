import React, { useState } from 'react';
import { View, TextInput, Button,} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddMenuItemScreen = ({ navigation, route }: any) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const handleAddItem = () => {
    const newItem = { name, description, course, price };
    route.params.setMenuItems((prevItems: any) => [...prevItems, newItem]);
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput placeholder="Dish Name" value={name} onChangeText={setName} style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} />
      <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)} style={{ borderWidth: 1, marginVertical: 10 }}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} style={{ borderWidth: 1, padding: 10, marginVertical: 10 }} />
      <Button title="Add Item" onPress={handleAddItem} />
    </View>
  );
};

export default AddMenuItemScreen;
