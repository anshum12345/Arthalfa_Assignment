import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../constants/styles';

const HistoryItem = ({ wordData }) => {
  const formattedDate = new Date(wordData.date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.historyItem}>
      <Text style={styles.historyWord}>{wordData.word}</Text>
      
      <View style={styles.historySection}>
        <Text style={styles.historyLabel}>Definition:</Text>
        <Text style={styles.historyContent}>{wordData.definition}</Text>
      </View>
      
      {wordData.example && (
        <View style={styles.historySection}>
          <Text style={styles.historyLabel}>Example:</Text>
          <Text style={[styles.historyContent, styles.historyExample]}>
            "{wordData.example}"
          </Text>
        </View>
      )}
      
      <Text style={styles.historyDate}>Viewed: {formattedDate}</Text>
    </View>
  );
};

export default HistoryItem;