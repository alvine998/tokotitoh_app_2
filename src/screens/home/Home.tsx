import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderHome from '../../components/HeaderHome';
import axios from 'axios';
import { API } from '../../utils/api';
import { FontAwesome5 } from '@react-native-vector-icons/fontawesome5';
import Skeleton from '../../components/Skeleton';

export default function Home() {
  const [items, setItems] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(false);
  const getItems = async () => {
    try {
      const result = await axios.get(API.baseUrl + '/categories', {
        headers: {
          'bearer-token': 'tokotitohapi',
          'x-partner-code': 'id.marketplace.tokotitoh',
        },
      });
      setItems(result.data.items.rows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const onRefresh = async () => {
    setRefresh(true);
    await getItems();
    setRefresh(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
      }
    >
      <HeaderHome />
      <View style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            flexWrap: 'wrap',
            marginTop: 10,
          }}
        >
          {items?.length === 0 && (
            <>
              <Skeleton width={110} height={60} />
              <Skeleton width={110} height={60} />
            </>
          )}
          {items?.slice(0, 2)?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                <Image
                  source={{ uri: item.icon }}
                  style={{ width: 110, height: 60 }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={{ flexDirection: 'column', alignItems: 'center' }}
          >
            <Text
              style={{
                color: 'blue',
                fontSize: 16,
                width: 110,
                height: 60,
                textAlign: 'center',
                textAlignVertical: 'center',
                fontWeight: 'bold',
              }}
            >
              Lihat Semua Kategori
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            flexWrap: 'wrap',
            marginTop: 20,
          }}
        >
          {items?.length === 0 && (
            <>
              <Skeleton width={110} height={60} />
              <Skeleton width={110} height={60} />
              <Skeleton width={110} height={60} />
            </>
          )}
          {items?.slice(2, 5)?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ flexDirection: 'column', alignItems: 'center' }}
              >
                <Image
                  source={{ uri: item.icon }}
                  style={{ width: 110, height: 60 }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={{ flexDirection: 'row', gap: 10, marginTop: 40 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              borderRadius: 10,
            }}
          >
            <FontAwesome5
              name="info-circle"
              size={20}
              iconStyle="solid"
              color={'blue'}
            />
            <Text>Tips Hindari Penipuan</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: 'blue',
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              borderRadius: 10,
            }}
          >
            <FontAwesome5
              name="plus-circle"
              size={20}
              iconStyle="solid"
              color={'green'}
            />
            <Text>Pasang Iklan Baru</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
