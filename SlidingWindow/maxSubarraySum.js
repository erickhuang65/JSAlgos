function maxSubarraySum(arr, num){
    // add whatever parameters you deem necessary - good luck!
    // must have consecutive elements
    // create a var to store the temp val to compare for maxSum;
      if (arr.length < num) return null;
   
      let total = 0;
      for (let i=0; i<num; i++){
         total += arr[i];
      }
      let currentTotal = total;
      for (let i = num; i < arr.length; i++) {
         currentTotal += arr[i] - arr[i-num];
         total = Math.max(total, currentTotal);
      }
      return total;
  };