const Ship = (vecs) => {
  const hits = [];

  const getVecs = () => {
    return vecs;
  };

  const getHits = () => {
    return hits;
  };

  const hit = (x, y) => {
    const isValid = vecs.some((vec) => {
      return x === vec.x && y === vec.y && !hits.includes({ x: x, y: y });
    });

    if (isValid) hits.push({ x: x, y: y });
    return isValid;
  };

  const isSunk = () => {
    return hits.length >= vecs.length;
  };

  return { getVecs, getHits, hit, isSunk };
};

export default Ship;
