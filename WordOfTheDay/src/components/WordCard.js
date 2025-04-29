import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../constants/styles';

const WordCard = ({ wordData }) => {
  const formattedDate = new Date(wordData.date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.wordCard}>
      <Text style={styles.wordText}>{wordData.word}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Definition</Text>
        <Text style={styles.sectionContent}>{wordData.definition}</Text>
      </View>
      
      {wordData.example && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Example</Text>
          <Text style={[styles.sectionContent, styles.exampleText]}>
            "{wordData.example}"
          </Text>
        </View>
      )}
      
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
};

export default WordCard;