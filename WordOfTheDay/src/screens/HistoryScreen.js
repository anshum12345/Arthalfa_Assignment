import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Alert, 
  SafeAreaView,
  TouchableOpacity,
  Platform,
  ActivityIndicator
} from 'react-native';
import HistoryItem from '../components/HistoryItem';
import { clearHistory, getHistory } from '../utils/storage';
import { styles } from '../constants/styles';

const HistoryScreen = ({ route, navigation }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadHistory = async () => {
    setLoading(true);
    try {
      const savedHistory = await getHistory();
      setHistory(savedHistory);
    } catch (error) {
      console.error('Failed to load history:', error);
      Alert.alert('Error', 'Failed to load history');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadHistory);
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (route.params?.history) {
      setHistory(route.params.history);
      setLoading(false);
    } else {
      loadHistory();
    }
  }, [route.params?.history]);

  const handleClearHistory = async () => {
    Alert.alert(
      'Clear History',
      'Are you sure you want to delete all history?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await clearHistory();
              setHistory([]);
            } catch (error) {
              console.error('Clear history error:', error);
              Alert.alert('Error', 'Failed to clear history');
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator 
          size={Platform.OS === 'ios' ? 'large' : 48} 
          color="#2c3e50" 
          style={styles.loader}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {history.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No words in history yet.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={history}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <HistoryItem wordData={item} />}
            contentContainerStyle={styles.historyList}
            ListHeaderComponent={
              <Text style={styles.historyTitle}>Previously Viewed Words</Text>
            }
          />
          <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearHistory}
          >
            <Text style={styles.clearButtonText}>Clear History</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default HistoryScreen;