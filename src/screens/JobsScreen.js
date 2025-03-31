import React, { useState, useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchJobs } from '../services/api';
import JobCard from '../components/JobCard';
import Loader from '../components/Loader';
import { globalStyles } from '../styles/globalStyles';

export default function JobsScreen() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const loadJobs = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newJobs = await fetchJobs(page);
      setJobs((prev) => [...prev, ...newJobs]);
      setPage(page + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  const renderItem = ({ item }) => (
    <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { job: item })} />
  );

  return (
    <View style={globalStyles.container}>
      {error ? (
        <Text style={globalStyles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={jobs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={loadJobs}
          onEndReachedThreshold={0.5}
          ListFooterComponent={loading && <Loader />}
          ListEmptyComponent={!loading && <Text style={globalStyles.emptyText}>No jobs found</Text>}
        />
      )}
    </View>
  );
}