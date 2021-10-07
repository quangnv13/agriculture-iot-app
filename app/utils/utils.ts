import * as SecureStore from "expo-secure-store";

export const makeid = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^^^&*)_+`~;'ơ].,";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const save = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  await SecureStore.setItemAsync(key, jsonValue);
};

export const getValueFor = async <T>(key: string) => {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    const resultValue = JSON.parse(result) as T;
    return resultValue;
  }
  return null;
};
