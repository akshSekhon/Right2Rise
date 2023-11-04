import {createSlice} from '@reduxjs/toolkit';

// import {setIntroData, setUserData} from '../../utils/utils';

const authSlice = createSlice({
  name: 'userData',
  initialState: {
    userData: {},
    showIntro: true,
    saveLocation: null,
    fcmToken: null,
    loginData: false,
    loginPin: null,
    filter: {},
  },
  reducers: {
    saveFcmToken: (state, action) => {
      console.log('saveUserData action =>', action?.payload);
      state.fcmToken = action.payload;
    },
    saveUserData: (state, action) => {
      console.log('data in reducer', action);
      state.userData = action.payload;
      // setUserData(state?.userData);
    },
  },
});

export const {
  saveFcmToken,
  saveUserData,
} = authSlice.actions;

export default authSlice.reducer;
