export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    Number(value) === -1 ||
    (typeof value === "object" &&
      !(value instanceof Blob) &&
      Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export const isObject = (obj) => {
  return (
    obj !== null && typeof obj === "object" && Array.isArray(obj) === false
  );
};
