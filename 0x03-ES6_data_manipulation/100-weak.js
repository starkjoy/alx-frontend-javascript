export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    // Initialize a counter for this endpoint if it doesn't exist
    weakMap.set(endpoint, 0);
  }

  // Get the current count for this endpoint
  const count = weakMap.get(endpoint);

  // Increment the count
  weakMap.set(endpoint, count + 1);

  // Check if the count is >= 5, and throw an error if so
  if (count >= 5) {
    throw new Error(`Endpoint load is high`);
  }
}