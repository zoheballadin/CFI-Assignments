function romanToDecimal(rom) {
    
    const key = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    
    let answer = 0;
  
    
    for (let i = rom.length - 1; i >= 0; i--) {
      
      const romnum = rom[i];
      const dec = key[romnum];
  
      
      if (i < rom.length - 1 && romnum === rom[i + 1]) {
        answer += dec;
      } else if (i < rom.length - 1 && key[rom[i + 1]] > dec) {
        
        answer -= dec;
      } else {
        answer += dec;
      }
    }
  
    return answer;
  }
  
  console.log(romanToDecimal("XLIV"))