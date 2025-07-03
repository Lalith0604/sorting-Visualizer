export function InsertionSort(array) {
  let animation = [];
  let tempArray = [...array];

  for (let i = 1; i < tempArray.length; i++) {
    let j = i;
    while (j > 0) {
      // Compare elements
      animation.push([j, j - 1, tempArray[j] < tempArray[j - 1]]);
      
      if (tempArray[j] < tempArray[j - 1]) {
        // Swap
        let temp = tempArray[j];
        tempArray[j] = tempArray[j - 1];
        tempArray[j - 1] = temp;
        j--;
      } else {
        // No need to continue if already in correct order
        break;
      }
    }
  }

  return animation;
}
