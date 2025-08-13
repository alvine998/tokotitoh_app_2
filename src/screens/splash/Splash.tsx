import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';

export default function Splash({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
