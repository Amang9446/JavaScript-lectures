function synchronousOperation() {
    console.log("Start of synchronous operation");
    setTimeout(function () {
      console.log("End of synchronous operation");
    }, 2000); 
  }
  console.log("Before synchronous operation");
  
  synchronousOperation();
  
  console.log("After synchronous operation");
  
