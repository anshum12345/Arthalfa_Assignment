import { StyleSheet, Platform } from 'react-native';

const colors = {
  primary: '#2c3e50',
  secondary: '#34495e',
  accent: '#3498db',
  light: '#ecf0f1',
  dark: '#2c3e50',
  danger: '#e74c3c',
  success: '#2ecc71',
  text: '#333',
  textLight: '#7f8c8d',
  white: '#fff',
  cardBackground: '#fff',
};

export const styles = StyleSheet.create({
  // General styles
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  loader: {
    marginTop: 40,
  },

  // Word Card styles
  wordCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  wordText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: colors.text,
    lineHeight: 22,
  },
  exampleText: {
    fontStyle: 'italic',
    color: colors.textLight,
  },
  dateText: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'right',
    marginTop: 10,
  },

  // Button styles
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    minWidth: '48%',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.6,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: colors.danger,
    borderRadius: 8,
    padding: 15,
    margin: 20,
    alignItems: 'center',
  },
  clearButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },

  // History styles
  historyList: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 15,
    marginTop: 10,
  },
  historyItem: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    shadowColor: colors.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  historyWord: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  historySection: {
    marginBottom: 10,
  },
  historyLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
  historyContent: {
    fontSize: 14,
    color: colors.text,
    marginTop: 2,
    lineHeight: 20,
  },
  historyExample: {
    fontStyle: 'italic',
    color: colors.textLight,
  },
  historyDate: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 8,
  },

  // Error styles
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: colors.danger,
    marginBottom: 20,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: colors.accent,
    borderRadius: 8,
    padding: 15,
    minWidth: 120,
    alignItems: 'center',
  },

  // Empty state styles
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textLight,
    textAlign: 'center',
  },
});