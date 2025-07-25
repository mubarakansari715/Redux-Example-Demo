# Redux Example Demo - React Native E-commerce App

A comprehensive React Native application demonstrating Redux state management with Redux Saga for handling asynchronous operations. This project serves as a learning resource for understanding modern state management patterns in React Native development.

## 🚀 Project Overview

This is an e-commerce mobile application built with React Native and Expo that showcases:

- **Redux Toolkit** for state management
- **Redux Saga** for handling side effects and async operations
- **React Navigation** for screen navigation
- **API Integration** with external data sources
- **Cart Management** with add/remove functionality
- **User List** with API data fetching

## 📱 Features

### 🛒 Shopping Cart System
- Add products to cart
- Remove products from cart
- Real-time cart state updates
- Visual feedback for cart status

### 👥 User Management
- Fetch user data from external API
- Display user information in a dedicated screen
- Handle loading states

### 🧭 Navigation
- Stack-based navigation between screens
- Main product screen
- User list screen

## 🛠️ Technologies Used

### Core Technologies
- **React Native** (v0.79.5) - Cross-platform mobile development framework
- **Expo** (v53.0.20) - Development platform and build tool
- **React** (v19.0.0) - UI library

### State Management
- **Redux** (v5.0.1) - Predictable state container
- **Redux Toolkit** (v2.8.2) - Official Redux toolset for efficient Redux development
- **Redux Saga** (v1.3.0) - Library for managing side effects
- **React Redux** (v9.2.0) - Official React bindings for Redux

### Navigation
- **React Navigation** (v7.1.14) - Navigation library for React Native
- **React Navigation Stack** (v7.4.2) - Stack navigator

### UI & Styling
- **React Native Safe Area Context** (v5.4.0) - Safe area handling
- **React Native Gesture Handler** (v2.24.0) - Touch handling
- **React Native Screens** (v4.11.1) - Native navigation primitives

## 📁 Project Structure

```
ReduxExampleDemo/
├── App.js                          # Main application component
├── index.js                        # Entry point with Redux Provider
├── components/
│   ├── constants.js                # Action type constants
│   ├── Header.js                   # Header component
│   ├── Product.js                  # Product card component
│   ├── UserList.js                 # User list screen
│   ├── MyAppMainContainer.js       # Main container component
│   └── redux/
│       ├── action.js               # Redux actions
│       ├── reducer.js              # Redux reducer
│       ├── rootReducer.js          # Combined reducers
│       ├── saga.js                 # Redux Saga middleware
│       └── store.js                # Redux store configuration
└── assets/                         # Static assets
```

## 🔧 Redux Architecture

### 1. **Store Configuration** (`components/redux/store.js`)
```javascript
// Configure Redux store with Redux Toolkit
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
```

### 2. **Actions** (`components/redux/action.js`)
- `ADD_TO_CART` - Add item to shopping cart
- `REMOVE_TO_CART` - Remove item from shopping cart
- `USER_LIST` - Trigger user data fetching

### 3. **Reducer** (`components/redux/reducer.js`)
- Manages cart state (array of items)
- Handles add/remove operations
- Manages user data state
- Implements state clearing functionality

### 4. **Redux Saga** (`components/redux/saga.js`)
- Handles asynchronous operations
- Fetches user data from external API
- Manages side effects cleanly

## 🎯 Key Concepts Demonstrated

### 1. **Redux Pattern**
- **Actions**: Plain objects describing what happened
- **Reducers**: Pure functions that specify how state changes
- **Store**: Object that holds application state
- **Dispatch**: Method to send actions to store

### 2. **Redux Saga Pattern**
- **Effects**: Instructions for the saga middleware
- **takeEvery**: Listen for every action of a specific type
- **put**: Dispatch an action to the store
- **call**: Call a function (usually for API calls)

### 3. **React Redux Hooks**
- `useDispatch()`: Hook to dispatch actions
- `useSelector()`: Hook to select data from store

### 4. **Component Architecture**
- **Container Components**: Connected to Redux store
- **Presentational Components**: Pure UI components
- **Custom Hooks**: Reusable logic

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ReduxExampleDemo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device/simulator**
   - Press `a` for Android
   - Press `i` for iOS
   - Scan QR code with Expo Go app

## 📱 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run in web browser

## 🔄 Data Flow

### Cart Operations
1. User clicks "Add to Cart" button
2. Component dispatches `ADD_TO_CART` action
3. Reducer updates cart state
4. Component re-renders with updated state
5. Button changes to "Remove from Cart"

### User Data Fetching
1. User navigates to User List screen
2. Component dispatches `USER_LIST` action
3. Redux Saga intercepts action
4. Saga makes API call to fetch user data
5. Saga dispatches `SET_USER_DATA` action
6. Reducer updates state with user data
7. Component displays user list

## 🎨 UI/UX Features

### Product Cards
- Responsive design with shadows and elevation
- Image loading with placeholder support
- Dynamic button states (Add/Remove)
- Smooth animations and transitions

### Navigation
- Stack-based navigation
- Custom header configurations
- Screen transitions

### State Management
- Real-time cart updates
- Loading states for API calls
- Error handling for network requests

## 🔍 Learning Outcomes

This project demonstrates:

1. **Redux Fundamentals**
   - Action creators
   - Reducers and state immutability
   - Store configuration
   - Middleware integration

2. **Redux Saga**
   - Side effect management
   - API integration
   - Asynchronous operations
   - Error handling

3. **React Native Best Practices**
   - Component composition
   - Hook usage
   - Performance optimization
   - Code organization

4. **State Management Patterns**
   - Centralized state
   - Predictable state updates
   - Debugging capabilities
   - Time-travel debugging

## 🛠️ Development Tips

### Redux DevTools
Enable Redux DevTools for debugging:
```javascript
// In store.js
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});
```

### Performance Optimization
- Use `useSelector` with equality functions for complex selections
- Implement `React.memo` for expensive components
- Use `useCallback` and `useMemo` for expensive computations

### Error Handling
- Implement try-catch blocks in sagas
- Add error boundaries for React components
- Handle network errors gracefully

## 📚 Additional Resources

- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Redux Saga Documentation](https://redux-saga.js.org/)
- [React Navigation Documentation](https://reactnavigation.org/)
- [Expo Documentation](https://docs.expo.dev/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
<img width="1000" height="700" alt="redux_example" src="https://github.com/user-attachments/assets/f5c6bd47-4cd0-4b80-b704-1143d1a6f9db" />


---

**Happy Coding! 🚀**

This project serves as a comprehensive example of modern React Native development with Redux state management. Use it as a reference for building scalable mobile applications with proper state management patterns. 
