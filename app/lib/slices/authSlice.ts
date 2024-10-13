import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Customer {
  id: string;        
  prompt: string;   
  image_url: string; 
}
interface AuthState {
  email: string;
  token: string | null;
 customers: Customer[];
}

const initialState: AuthState = {
  email: '',
  token: null,
  customers: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setCustomers: (state, action: PayloadAction<Customer[]>) => { 
      state.customers = action.payload;
    },
  },
});

export const { setEmail, setToken, setCustomers } = authSlice.actions;
export default authSlice.reducer;
