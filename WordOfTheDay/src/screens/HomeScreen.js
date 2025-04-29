import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  Button, 
  ActivityIndicator, 
  Alert, 
  SafeAreaView,
  ScrollView,
  Platform,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import WordCard from '../components/WordCard';
import { fetchRandomWord } from '../utils/api';
import { saveWordToHistory, getHistory } from '../utils/storage';
import { styles } from '../constants/styles';

const HomeScreen = () => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  const fetchWord = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRandomWord();
      const wordWithDate = {
        ...data,
        date: new Date().toISOString(),
      };
      setWordData(wordWithDate);
      await saveWordToHistory(wordWithDate);
    } catch (err) {
      setError('Failed to fetch word. Please try again.');
      console.error('Fetch word error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const navigateToHistory = async () => {
    try {
      const history = await getHistory();
      navigation.navigate('History', { history });
    } catch (err) {
      Alert.alert('Error', 'Failed to load history');
      console.error('History navigation error:', err);
    }
  };

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={fetchWord}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Word of the Day</Text>
        
        {loading ? (
          <ActivityIndicator 
            size={Platform.OS === 'ios' ? 'large' : 48} 
            color="#2c3e50" 
            style={styles.loader}
          />
        ) : (
          wordData && <WordCard wordData={wordData} />
        )}

        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, loading && styles.disabledButton]}
            onPress={fetchWord}
            disabled={loading}
          >
            <Text style={styles.buttonText}>New Word</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button}
            onPress={navigateToHistory}
          >
            <Text style={styles.buttonText}>View History</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;