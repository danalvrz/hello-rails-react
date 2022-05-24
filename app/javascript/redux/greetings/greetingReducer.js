import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Moin!',
};

const fetchGreeting = createAsyncThunk('fetch/greeting', async () => {
  const url = '/greetings/random';
  const options = { method: 'GET' };
  const response = await fetch(url, options);
  
  return response.json();
});


const greeting = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      state.message = action.payload[0].text;
    },
  },
});

export default greeting.reducer;

export { fetchGreeting };