import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light-theme'
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
