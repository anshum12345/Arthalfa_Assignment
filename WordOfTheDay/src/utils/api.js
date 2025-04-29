import axios from 'axios';

const API_URL = 'https://random-words-api.vercel.app/word';

// Fallback data in case API fails
const FALLBACK_WORDS = [
  {
    word: 'Serendipity',
    definition: 'The occurrence of events by chance in a happy or beneficial way',
    example: 'Finding that antique shop was pure serendipity.'
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for a very short time',
    example: 'The ephemeral nature of cherry blossoms makes them special.'
  },
  {
    word: 'Quintessential',
    definition: 'Representing the most perfect or typical example of a quality or class',
    example: 'He was the quintessential English gentleman.'
  }
];

export const fetchRandomWord = async () => {
  try {
    const response = await axios.get(API_URL, { timeout: 5000 });
    if (response.data && response.data[0]) {
      return {
        word: response.data[0].word,
        definition: response.data[0].definition,
        example: response.data[0].example,
      };
    }
    throw new Error('Invalid API response');
  } catch (error) {
    console.warn('Using fallback word due to API error:', error);
    // Return a random fallback word
    const randomIndex = Math.floor(Math.random() * FALLBACK_WORDS.length);
    return FALLBACK_WORDS[randomIndex];
  }
};