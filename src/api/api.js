import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllCampers = createAsyncThunk(
  'campers/getAll',
  async ({ page = 1, limit = 4 }, thunkApi) => {
    try {
      const { data } = await axios(
        `https://66434f186c6a6565870682fc.mockapi.io/Advert/testtask?page=${page}&limit=${limit}`
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
