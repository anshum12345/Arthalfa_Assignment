import AsyncStorage from '@react-native-async-storage/async-storage';

const HISTORY_KEY = '@WordOfTheDay_history';
const MAX_HISTORY_ITEMS = 50;

export const saveWordToHistory = async (wordData) => {
  try {
    const existingHistory = await getHistory();
    
    // Check if word already exists in history
    const alreadyExists = existingHistory.some(
      item => item.word.toLowerCase() === wordData.word.toLowerCase()
    );
    
    if (!alreadyExists) {
      const newHistory = [wordData, ...existingHistory].slice(0, MAX_HISTORY_ITEMS);
      await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
    }
  } catch (error) {
    console.error('Error saving word to history:', error);
    throw error;
  }
};

export const getHistory = async () => {
  try {
    const historyString = await AsyncStorage.getItem(HISTORY_KEY);
    return historyString ? JSON.parse(historyString) : [];
  } catch (error) {
    console.error('Error getting history:', error);
    return [];
  }
};

export const clearHistory = async () => {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing history:', error);
    return false;
  }
};