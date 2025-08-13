import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@react-native-vector-icons/fontawesome5';

// interface HeaderHomeProps {
//   items: any[];
// }

export default function HeaderHome() {
  return (
    <View style={{ padding: 20, flexDirection: 'row', gap: 10, alignItems: "center" }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{ width: 40, height: 40 }}
      />
      <View
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 280,
          borderRadius: 10,
          paddingLeft: 10,
        }}
      >
        <TextInput placeholder="Cari disini" />
      </View>
      <TouchableOpacity style={{ marginLeft: 'auto' }}>
        <FontAwesome5 name="bell" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
