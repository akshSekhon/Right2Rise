import { Alert } from "react-native";
import { FlagType, getAllCountries } from "react-native-country-picker-modal";
import DeviceCountry,{TYPE_TELEPHONY,TYPE_CONFIGURATION,TYPE_ANY,} from 'react-native-device-country';

export function isValidUrl(str) {
    const pattern = new RegExp(
      '^([a-zA-Z]+:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', // fragment locator
      'i'
    );
    return pattern.test(str);
  }
  export function isValidText(type,str) {
    if (str.trim() === '') {
      Alert.alert(`Please enter ${type}`)
      return false
    }
    return true
  }

export function isValidEmail(str) {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (str.trim() === '') {
    Alert.alert(`Please enter email`)
    return false
  }else if (!str.match(mailformat)){
    Alert.alert(`Please enter valid email`)
    return false
  }
  return true
}

  export async function getLocale (callBck){
    DeviceCountry.getCountryCode(TYPE_TELEPHONY)
    .then((result) => {
      console.log(result);
      // {"code": "PT", "type": "telephony"}
      callBck(result)
    //   return result
    })
    .catch((e) => {
      console.log(e);
      console.log('getCountryCode (getCountryCode error:---',e);
      callBck(null)
    //   return null
  
    });
    }
   export const getCountryWithCountryCode = async (cntryCode,callBck) => {
    const allCountries = await getAllCountries(FlagType.FLAT); // import getAllCountries from this library
    // console.log('getCountryWithCountryCode allCountries : --',allCountries);
    if (cntryCode !== undefined){
        const countryCode = cntryCode
        const country = allCountries.find((item) => item.cca2 === countryCode?.toUpperCase());
        if (country?.cca2) {
        //   return country
          callBck(country)
        } else {
          callBck(null)

        //   return null
        }
    }else{
        getLocale(function(res){
        console.log('callback  res res : --',res);

            const countryCode = res?.code ?? 'us'
        const country = allCountries.find((item) => item.cca2 === countryCode?.toUpperCase());
        if (country?.cca2) {
          callBck(country)

        //   return country
        } else {
          callBck(null)

        //   return null
        }
       })
    }
  
  };
  