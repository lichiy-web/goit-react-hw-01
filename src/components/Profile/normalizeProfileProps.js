/**
 * The method brings the names of the Profile component's properties to a unified form.
 * In essence, this method is an adapter between the database and the component.
 * @param {Object} userData 
 * @returns {Object} 
 */
export default function normalizeProfileProps(userData) {
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