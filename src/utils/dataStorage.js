export const isObject = (value) => {
  try {
    const jsonData = JSON.parse(value);
    if (jsonData && typeof jsonData === 'object') return true;
  } catch (e) {
    return false;
  }
};

export const getData = (value) => JSON.parse(value);

export const clearLocalStorageValue = (keys) => window.localStorage.removeItem(keys);

export const setLocalStorageValue = (keys, value) => window.localStorage.setItem(keys, JSON.stringify(value));

export const getLocalStorageValue = (keys) => {
  const fetchData = window.localStorage.getItem(keys);
  if (isObject(fetchData)) {
    return getData(fetchData);
  } else {
    clearLocalStorageValue();
    return null;
  }
};
