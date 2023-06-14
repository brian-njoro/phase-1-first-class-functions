// code for returnsANamedFunction
function returnsANamedFunction() {
    return function firstfunction() {
      console.log('This is the first function');
    };
  }

  //code for return anonymous function
  function returnsAnAnonymousFunction() {
    return function() {
        console.log(`this is an anonymous function`)
    }   
} 
  