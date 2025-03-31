function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!
    // return the sum of all even nums in a obj;
    
    // we need a var to store the sum;
    // we need a condition to check if the value are even nums (nums % 2 == 0)
    // if true; sum+=value
    // else; continue to the next key
    let sum = 0;
    for(let key in obj) {
        if(typeof obj[key] === 'object' && obj[key] !== null) {
            sum += nestedEvenSum(obj[key]);
        } else {
            if(obj[key] % 2 === 0) {
                sum += obj[key];
            }
        }
    }
    return sum;
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10