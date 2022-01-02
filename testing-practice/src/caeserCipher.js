const caeserCipher = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[^a-zA-Z]/)) {
      result += str[i];
    } else if (str[i] === 'z') {
      result += 'a';
    } else if (str[i] === 'Z') {
      result += 'A';
    } else {
      result += String.fromCharCode(str[i].charCodeAt(0) + 1);
    }
  }

  return result;
};

export default caeserCipher;
