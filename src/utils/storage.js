import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKMARKS_KEY = 'bookmarks';

export const saveBookmark = async (job) => {
  try {
    const bookmarks = await getBookmarks();
    const updatedBookmarks = [...bookmarks.filter(b => b.id !== job.id), job];
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updatedBookmarks));
  } catch (error) {
    console.error('Error saving bookmark:', error);
  }
};

export const getBookmarks = async () => {
  try {
    const bookmarks = await AsyncStorage.getItem(BOOKMARKS_KEY);
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (error) {
    console.error('Error fetching bookmarks:', error);
    return [];
  }
};

export const removeBookmark = async (id) => {
  try {
    const bookmarks = await getBookmarks();
    const updatedBookmarks = bookmarks.filter(b => b.id !== id);
    await AsyncStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updatedBookmarks));
  } catch (error) {
    console.error('Error removing bookmark:', error);
  }
};

export const isBookmarked = async (id) => {
  try {
    const bookmarks = await getBookmarks();
    return bookmarks.some(b => b.id === id);
  } catch (error) {
    console.error('Error checking bookmark:', error);
    return false;
  }
};