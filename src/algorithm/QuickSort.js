export function QuickSort(array) {
  const animations = [];
  const arr = [...array];
  quickSortHelper(arr, 0, arr.length - 1, animations);
  return animations;
}

function quickSortHelper(arr, low, high, animations) {
  if (low < high) {
    const pivotIdx = partition(arr, low, high, animations);
    quickSortHelper(arr, low, pivotIdx - 1, animations);
    quickSortHelper(arr, pivotIdx + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    // Compare pivot and current element
    animations.push([j, high, false]);

    if (arr[j] < pivot) {
      i++;
      // Swap i and j
      animations.push([i, j, true]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  // Final pivot swap
  animations.push([i + 1, high, true]);
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  
  return i + 1;
}
