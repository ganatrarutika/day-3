let arr = [7, 10, 4, 3, 20, 15];
let k = 3;

function kthSmallest(arr, k) {
    let n = arr.length;
  
    for (let i = 0; i < k; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; 
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr[k - 1];
}

console.log(kthSmallest(arr, k));  
