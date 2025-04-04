function sameFrequency(a,b){
    let num1 = a.toString();
    let num2 = b.toString();
    let hash = {};
    if(num1.length != num2.length) {
        return false;
    }
    for(let i = 0; i < num1.length; i++) {
        let value = num1[i];
        hash[value] ? hash[value] += 1 : hash[value] = 1;
    }
    for(let i = 0; i < num2.length; i++) {
        let value = num2[i];
        if(!hash[value]) {
            return false; 
        } else {
            hash[value] += 1
        }
    return true;
    }
  };