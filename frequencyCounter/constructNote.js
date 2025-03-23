function constructNote(m, n){
    // add whatever parameters you deem necessary - good luck!
    // assume both are lowercase;
    // no space or special chars;
    // bonus: if M is the length of a message and N is the length of letters; 
    if(!m.length) {
        return true; 
    }; 
    
    if(!n.length) {
        return false; 
    }
    
    let hash = {};
    // setting up hash table for values in m
    for(let i = 0; i < m.length; i++) {
        let checker = m[i];
        hash[checker] ? hash[checker] += 1 : hash[checker] = 1;
    }
    
    // decrement values in m if n has enough characters
    for (let i = 0; i < n.length; i++) {
        let checker = n[i];
        if(hash[checker] > 0) {
            hash[checker] -= 1;
        } else if(hash[checker] == 0){
            return false; 
        }
    }
    // After using characters from n, check if all characters in m have been covered
    for (let key in hash) {
        if (hash[key] > 0) {
            return false; 
      }
    }
    return true; 
  }