import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { getBookmarks } from '../utils/storage';
import JobCard from '../components/JobCard';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';

export default function BookmarksScreen() {
  const [bookmarks, setBookmarks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const loadBookmarks = async () => {
      const storedBookmarks = await getBookmarks();
      setBookmarks(storedBookmarks);
    };
    loadBookmarks();
  }, []);

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