import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Loader() {
  return (
    <View style={{ padding: 20 }}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}