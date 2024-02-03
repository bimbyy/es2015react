// choice function: returns a randomly selected item from an array of items
export const choice = (items) => {
    if (!items.length) return undefined; // Early return if the array is empty
  
    const index = Math.floor(Math.random() * items.length); // Generate a random index
    return items[index]; // Return the item at the generated index
  };
  
  // remove function: removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
  export const remove = (items, item) => {
    const index = items.indexOf(item); // Find the index of the item to remove
  
    if (index > -1) {
      return items.splice(index, 1)[0]; // Remove the item using splice and return it
    }
    return undefined; // If the item was not found, return undefined
  };