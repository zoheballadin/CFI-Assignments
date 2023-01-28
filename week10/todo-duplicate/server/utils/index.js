var randomStringGenerator = length =>{
    var alphanum = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiJklmnopqrstuvwxyz0123456789";
  
      var str = "";
  
      for (var i = 0; i < length; i++) {
        var index = Math.floor(Math.random() * alphanum.length);
        str += alphanum[index];
      }
  
      return str;
  
  }

  export {randomStringGenerator}