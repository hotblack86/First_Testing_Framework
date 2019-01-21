const describe = (description, funk) => {
   // print description of the funk
   console.log(description);
   // execute funk
   funk();
}

const it = (message, funk) => describe('  ' + message, funk)

const expectEquality = (a,b) => {
  if (a === b) {
    console.log(`${a} is equal to ${b}`)
    return true
  } else {
    console.log(`${a} is not equal to ${b}`)
    return false
 }

}

const expectInequality = (a,b) => {
  if (a != b) {
    console.log(`${a} is not equal to ${b}`)
    return true
  } else {
    console.log(`${a} is equal to ${b}`)
    return false
 }

}

const checkError = (a) => {
  try {
    a();
  }
  catch(err) {
    console.log("You can't do that!" + err);
  }
}
