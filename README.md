# JobApp
JobApp is a React Native application built with Expo, designed for Android and iOS platforms. It allows users to browse job listings, view job details, and bookmark jobs for offline access. The application features a bottom navigation bar with "Jobs" and "Bookmarks" sections.
## Features
1. # Bottom Navigation UI
- The app includes a bottom navigation bar with two sections: "Jobs" and "Bookmarks".
2. # Job Listings (Infinite Scroll)
- Fetches jobs from the API: testapi.getlokalapp.com.
- Supports infinite scrolling to load more jobs dynamically.
- Displays job title, location, salary, and phone number.
3. # Job Details Page
- Clicking on a job opens a detailed view with additional job information.
4. # Bookmark Jobs
- Users can bookmark jobs, which will appear in the "Bookmarks" tab.
5. # Offline Bookmark Storage
- Bookmarked jobs are stored in a local database for offline access.
6. # State Management
- Proper handling of loading, error, and empty states.
## Tech Stack
1. React Native (with Expo)
2. React Navigation (for screen navigation)
3. AsyncStorage (for offline bookmarks storage)
4. Axios (for API requests)
5. FlatList (for efficient list rendering and infinite scrolling)
  

## Setup
# Prerequisites

1) Ensure you have the following installed:
-Node.js & npm/yarn
- Expo CLI: npm install -g expo-cli
- Android Emulator / Physical Android Device (USB Debugging enabled)
2) Steps to run locally
1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Run the app: `npx expo start`

# Folder Structure
``` JobApp/ │── src/ │ ├── components/ # Reusable UI components │ ├── screens/ # Screens for Jobs, Bookmarks, Job Details │ ├── context/ # Context API for state management │ ├── styles/ # Global styles │ ├── utils/ # Utility functions (e.g., AsyncStorage) │── App.js # Main entry file │── package.json # Dependencies and scripts │── README.md # Project documentation ```
## Video Demo
[[Link to video demo](#)](https://drive.google.com/file/d/16nVF6RoP47KiMxVKdqHLGtA_pGZeAfjQ/view?usp=sharing)
