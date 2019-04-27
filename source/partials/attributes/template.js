module.exports = (attributes) =>
  Object.entries(attributes)
    .map(([key, value]) => `${key}=${value}`)
    .join(' ');
