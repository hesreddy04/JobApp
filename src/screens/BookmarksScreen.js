import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { getBookmarks } from '../utils/storage';
import JobCard from '../components/JobCard';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

export default function BookmarksScreen() {
  const bookmarks = getBookmarks();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { job: item })} />
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={bookmarks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text style={globalStyles.emptyText}>No bookmarks yet</Text>}
      />
    </View>
  );
}