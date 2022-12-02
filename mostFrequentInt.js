function mostFrequentItemCount(collection) {
  let maxCount = 0; // keeping track of the max number of counts
  let currentCount = 0; // counts number of times j is equal to i in current outer loop

  for (let i = 0; i < collection.length; i++) {
    // starts with first element of array (outer loop)
    for (let j = 0; j < collection.length; j++) {
      // starts with first element of array (inner loop)
      if (collection[j] === collection[i]) count++; // if number j is same as outer loop i, add one to count
    }
    if (currentCount > maxCount) {
      // if count at end of inner loop is greater than maxCount...
      maxCount = currentCount; // maxCount is now the most recent count
    }
    currentCount = 0; // reset currentCount to zero so that to start the next loop
  }
  return maxCount;
}

mostFrequentItemCount([3, -1, -1]);

mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]);
