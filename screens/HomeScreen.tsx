import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

interface MenuItem {
  name: string;
  description: string;
  course: string;
  price: string;
}

const HomeScreen = ({ navigation }: any) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Current Menu</Text>
      <Text>Total Items: {menuItems.length}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>{item.name} - {item.course}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem', { setMenuItems, menuItems })} />
    </View>
  );
};

export default HomeScreen;
