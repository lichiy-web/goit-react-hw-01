export default function normalizeProfileProps (userData) {
  let normData = {};
  for (let [key, value] of Object.entries(userData)) {
    switch (key) {
      case 'username':
        normData.name = value;
        break;
      case 'avatar':
        normData.image = value;
        break;
      default:
        normData[key] = value;
    }
  }
  return normData;
};