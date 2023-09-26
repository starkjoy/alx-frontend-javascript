export default function appendToEachArrayValue(array, appendString) {
    const modifiedArray = [];
  
    for (const idx in array) {
      if (array.hasOwnProperty(idx)) {
        modifiedArray.push(appendString + array[idx]);
      }
    }
  
    return modifiedArray;
  }
  