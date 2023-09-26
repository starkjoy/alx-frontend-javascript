export default function appendToEachArrayValue(array, appendString) {
  // Loop through the array elements
  for (let value of array) {
    // Append the string to each element and update the array
    value = appendString + value;
  }

  // Return the modified array
  return array;
}
