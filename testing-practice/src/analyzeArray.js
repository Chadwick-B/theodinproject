const analyzeArray = (arr) => {
  const length = arr.length;
  if (!Array.isArray(arr) || length === 0) return null;

  let min = 0;
  let max = 0;
  let total = 0;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      min = arr[i];
      max = arr[i];
    } else {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }

    total += arr[i];
  }

  return {
    average: total / length,
    min,
    max,
    length,
  };
};

export default analyzeArray;
