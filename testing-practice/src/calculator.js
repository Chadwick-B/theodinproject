const calculator = () => {
  return {
    add(n1, n2) {
      return parseInt(n1) + parseInt(n2);
    },
    subtract(n1, n2) {
      return parseInt(n1) - parseInt(n2);
    },
    multiply(n1, n2) {
      return parseInt(n1) * parseInt(n2);
    },
    divide(n1, n2) {
      const num2 = parseInt(n2);
      if (num2 === 0) return;
      return parseInt(n1) / num2;
    },
  };
};

export default calculator;
