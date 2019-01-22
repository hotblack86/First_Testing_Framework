const describe = (description, fn) => {
   // print description of the funk
   console.log(description);
   // execute funk
   fn();
}

const it = (message, fn) => describe('  ' + message, fn)

const expect = (exp) => matchers(exp)

const matchers = (exp) => ({
  toEqual: (assertion) => {
    if (exp === assertion) {
      console.log(`${exp} is equal to ${assertion}`)
      return true
    } else {
      console.log(`${exp} is not equal to ${assertion}`)
      return false
    }
  }  
})

const expectEquality = (a,b) => {
  if (a === b) {
    console.log(`${a} is equal to ${b}`)
    return true
  } else {
    console.log(`${a} is not equal to ${b}`)
    return false
 }

}

// const expectInequality = (a,b) => {
//   if (a != b) {
//     console.log(`${a} is not equal to ${b}`)
//     return true
//   } else {
//     console.log(`${a} is equal to ${b}`)
//     return false
//  }

// }

const checkError = (a) => {
  try {
    a();
  }
  catch(err) {
    console.log("You can't do that!" + err);
  }
}
