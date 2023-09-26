export default function appendToEachArrayValue(array, appendString) {
    /* eslint-disable no-loop-func */
    for (const value of array) {
      array[array.indexOf(value)] = appendString + value;
    }
    /* eslint-enable no-loop-func */
  
    return array;
  }
  