const capitalize = (str) => {
  if (str.length > 1) return str[0].toUpperCase() + str.substring(1);
  return str.toUpperCase();
};

export default capitalize;
