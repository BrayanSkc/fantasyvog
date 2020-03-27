//LOGIN
export const isValidEmail = (mail: string) => {
  try {
    return /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$/.test(mail);
  } catch (err) {
    console.log("error in x*Valid*Email***function***");
    return false;
  }
};

export const isValidPass = (pass: string) => {
  try {
    if (pass.length < 6 || pass === undefined) {
      return false;
    } else {
      return true;
    }
  } catch (err) {
    console.log("error in x*Valid*Pass***function***");
    return false;
  }
};
