const TOKEN_LOGIN = "loginToken";
export const setDataToken = (object: any) => {
  try {
    let data = JSON.stringify(object);
    if (!data.includes("status")) {
      localStorage.setItem(TOKEN_LOGIN, data);
    }
  } catch (err) {
    throw err;
  }
};

export const getDataToken = () => {
  try {
    let data = localStorage.getItem(TOKEN_LOGIN);
    if (data !== null) {
      const storage = JSON.parse(data);
      return storage;
    }
    return null;
  } catch (err) {
    throw err;
  }
};

export const deleteDataToken = () => {
  try {
    localStorage.removeItem(TOKEN_LOGIN);
  } catch (err) {
    throw err;
  }
};
