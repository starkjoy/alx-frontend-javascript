export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    const stringValue = String(value);

    if (stringValue.startsWith(startString)) {
      result += `${stringValue.substring(startString.length)}-`;
    }
  }

  // Remove the trailing '-' if it exists
  if (result.endsWith('-')) {
    result = result.slice(0, -1);
  }

  return result;
}
