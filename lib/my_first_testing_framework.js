const describe = (description, function) => {
   // print description of the function
   console.log(description);
   // execute function
   function();
})

const it = (message, function) => describe('  ' + message, function)
