import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Text, View, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchJobs } from '../services/api';
import JobCard from '../components/JobCard';
import Loader from '../components/Loader';
import { globalStyles } from '../styles/globalStyles';

export default function JobsScreen() {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const loadJobs = useCallback(async (isRefresh = false) => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const newJobs = await fetchJobs(isRefresh ? 1 : page);
      setJobs(isRefresh ? newJobs : [...jobs, ...newJobs]);
      if (isRefresh) {
        setPage(2);
      } else {
        setPage(page + 1);
      }
    } catch (err) {
      setError('Failed to fetch jobs. Please try again later.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [loading, page, jobs]);

  useEffect(() => {
    loadJobs(true);
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadJobs(true);
  };

  const renderItem = ({ item }) => (
    item ? <JobCard job={item} onPress={() => navigation.navigate('JobDetails', { job: item })} /> : null
  );

  return (
    <View style={globalStyles.container}>
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
      <FlatList
        data={jobs ?? []}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item?.id ?? index).toString()}
        onEndReached={() => loadJobs(false)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <Loader />}
        ListEmptyComponent={!loading && <Text style={globalStyles.emptyText}>No jobs found</Text>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}