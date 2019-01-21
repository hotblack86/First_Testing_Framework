const describe = (description, funk) => {
   // print description of the funk
   console.log(description);
   // execute funk
   funk();
}

const it = (message, funk) => describe('  ' + message, funk)

const matcher1 = (expression) => ({
  toEqual: (asssertion) => {
    if (expression === assertion) {
      console.log('Green')
      return true
    } else {
      console.log('Red')
      return false
    }
  }
})

const matcher2 = (expression) => ({  
  toNotEqual: (asssertion) => {
    if (expression != assertion) {
      console.log('Green')
      return true
    } else {
      console.log('Red')
      return false
    }
  }
})

const expect = (exp) => matcher1(exp)
