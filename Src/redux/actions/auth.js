// import {clearUserData, setUserData} from '../../utils/utils';
import { Alert } from 'react-native';
import {saveFcmToken,saveUserData,} from '../reducers/auth';
import {clearUserData, setUserData} from '../../Utilities/AsyncStorage'
import store from '../store';

const {dispatch} = store;

export function saveUserDataToReux(data) {
  dispatch(saveUserData(data));
}

export const saveFcmTokenToRedux = (data) => {
  dispatch(saveFcmToken(data));
};


export const setUserDataToLocal = (data) => {
  return new Promise((resolve, reject) => {
    setUserData(data)
      .then(suc => {
        console.log('suc while setUserDataToLocal :---',suc);
        saveUserDataToReux(data)
        resolve(data);
      })
      .catch(error => { 
        console.log('error while setUserDataToLocal :---',error);
        Alert.alert(JSON.stringify(error?.error))
        reject(error);
      });
  });
};

export const clearLoginData = ()=> {
  dispatch(saveUserData({}));
  clearUserData();
}
