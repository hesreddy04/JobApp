import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { saveBookmark, removeBookmark, isBookmarked } from '../utils/storage';
import { globalStyles } from '../styles/globalStyles';

export default function JobDetailsScreen({ route }) {
  const { job } = route.params;
  const [bookmarked, setBookmarked] = useState(isBookmarked(job.id));

  const toggleBookmark = () => {
    if (bookmarked) {
      removeBookmark(job.id);
    } else {
      saveBookmark(job);
    }
    setBookmarked(!bookmarked);
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>{job.title}</Text>
        <Text style={globalStyles.text}>Location: {job.primary_details?.Place || 'N/A'}</Text>
        <Text style={globalStyles.text}>Salary: {job.primary_details?.Salary || 'N/A'}</Text>
        <Text style={globalStyles.text}>Phone: {job.whatsapp_no || 'N/A'}</Text>
        <Text style={globalStyles.text}>Company: {job.company_name || 'N/A'}</Text>
        <Text style={globalStyles.text}>Vacancies: {job.openings_count || 'N/A'}</Text>
        <TouchableOpacity style={globalStyles.button} onPress={toggleBookmark}>
          <Icon
            name={bookmarked ? 'bookmark' : 'bookmark-border'}
            size={20}
            color="#fff"
            style={{ marginRight: 5 }}
          />
          <Text style={globalStyles.buttonText}>
            {bookmarked ? 'Remove Bookmark' : 'Bookmark'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}