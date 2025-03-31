import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function JobCard({ job, onPress }) {
  return (
    <TouchableOpacity style={globalStyles.card} onPress={onPress}>
      <Text style={globalStyles.title}>{job.title}</Text>
      <Text style={globalStyles.text}>Location: {job.primary_details?.Place || 'N/A'}</Text>
      <Text style={globalStyles.text}>Salary: {job.primary_details?.Salary || 'N/A'}</Text>
      <Text style={globalStyles.text}>Phone: {job.whatsapp_no || 'N/A'}</Text>
    </TouchableOpacity>
  );
}