# Word of the Day - React Native App  

![React Native](https://img.shields.io/badge/React%20Native-0.72.6-blue.svg)  
![Platforms](https://img.shields.io/badge/platforms-iOS%20%7C%20Android-brightgreen.svg)  
![License](https://img.shields.io/badge/license-MIT-lightgrey.svg)  

A cross-platform mobile app that enhances your vocabulary by displaying a new word daily with its definition, example usage, and history tracking.  

---

## ✨ Features  

- **Daily Vocabulary** - New word each day with detailed definition  
- **Example Sentences** - Contextual usage examples  
- **Word History** - Track all previously viewed words  
- **Data Persistence** - Words saved locally using AsyncStorage  
- **Responsive Design** - Works on phones and tablets  
- **Offline Support** - Fallback data when offline  

---

## 📥 Installation  

### Prerequisites  
- Node.js (v16+)  
- npm (v8+)  
- React Native CLI  
- Xcode (iOS) or Android Studio (Android)  

### Setup  
1. Clone the repo:  
   ```bash  
   git clone https://github.com/your-username/word-of-the-day.git  
   cd word-of-the-day  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. For iOS:  
   ```bash  
   cd ios && pod install && cd ..  
   ```  

---

## 🚀 Running the App  

| Command | Description |  
|---------|-------------|  
| `npm start` | Starts Metro bundler |  
| `npm run android` | Runs on Android device/emulator |  
| `npm run ios` | Runs on iOS simulator |  
| `npm test` | Runs Jest tests |  
| `npm run lint` | Runs ESLint |  

---

## 🏗 Project Structure  

```  
src/  
├── components/      # Reusable components  
│   ├── WordCard.js  
│   └── HistoryItem.js  
├── screens/         # App screens  
│   ├── HomeScreen.js  
│   └── HistoryScreen.js  
├── utils/           # Utilities  
│   ├── api.js  
│   └── storage.js  
└── constants/       # Configurations  
    └── styles.js  
```  

---

## 📦 Dependencies  

### Core  
| Package | Version | Purpose |  
|---------|---------|---------|  
| react-native | 0.72.6 | Framework |  
| react-navigation | 6.x | Navigation |  
| async-storage | ^1.17.11 | Data persistence |  
| axios | ^1.4.0 | API calls |  

### Development  
- Jest (Testing)  
- ESLint (Linting)  
- Babel (Transpilation)  

---

## 🌐 API Reference  

Uses [Random Words API](https://random-words-api.vercel.app/word):  

**Endpoint**:  
```  
GET https://random-words-api.vercel.app/word  
```  

**Response**:  
```json  
[  
  {  
    "word": "serendipity",  
    "definition": "Finding something good without looking for it",  
    "example": "It was pure serendipity that we met that day."  
  }  
]  
```  

---

## 🤝 Contributing  

1. Fork the project  
2. Create your branch (`git checkout -b feature/AmazingFeature`)  
3. Commit changes (`git commit -m 'Add feature'`)  
4. Push (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 📜 License  

Distributed under the MIT License. See `LICENSE` for details.  

---

