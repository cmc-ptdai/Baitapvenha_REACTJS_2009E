// Exercise : 1 
// method 1
const repeatCharMethodOne = (char, number) => {
  const arrayChar = []
  for (let i = 0; i < number; i++) {
    arrayChar.push(char)
  }
  return arrayChar
}
// method 2 
const repeatCharMethodTwo = (char, number) => {
  const arrayChar = []
  let i = 0 
  while (i < number) {
    arrayChar.push(char)
    i++
  }
  return arrayChar
}

// Exercise 2 
const getReverseArray = (array = []) => {
  const reverseArray = []
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i])
  }
  return reverseArray
}

// Exercise 3 
const deleteFalseValue = (array = []) => {
  const truValue = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) continue
    if (typeof(array[i]) === 'number') {
      truValue.push(array[i])
    }
  }
  return truValue
}

// Exercise 4 
const createObject = (array = []) => {
  const newObject = {}
  array.forEach(item => {
    newObject[item[0]] = item[1]
  })
  return newObject
}

// Exercise 5 
const sortNumber = (array = []) => {
  // return array.sort()
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let tg = array[i]
        array[i] = array[j]
        array[j] = tg   
      }
    }
  }
  return array
}

// Exercise 6 
const checkObject = a => {
  if (typeof(a) !== 'object') return false
  if (Array.isArray(a) === true) {
    return false
  } else {
    return true
  }
}

// Exercise 7
const deleteObjectByKey = (object = {}, array = []) => {
  for (let key in object) {
    array.forEach(i => {
      if (key === i) {
        delete(object[key])
      }
    })
  }
  return object
}
// Exercise 8 
const deleteItemInArray = (array = []) => {
  if (array.length < 5) return
  array.splice(1,2)
  return array
}

// Exercise 9
const getStudentPass = (array = []) => {
  const studentPass = []
  array.forEach(student => {
    if (student.score < 5.0 || (student.name.indexOf('Duy') >= 3 && student.name.indexOf('Duy') <= 7)) {
      studentPass.push('Fail')
    } else {
      studentPass.push('Pass')
    }
  })
  return studentPass
}

// Exercise 10
const getStudentByScore = (students = []) => {
  const studentScore = []
  students.forEach(student => {
    let decimal = (student.score - parseInt(student.score)) * 10
    let scoreNumber = parseInt(student.score) + Number(decimal.toFixed(2))
    if (scoreNumber >= 10) {
      scoreNumber = scoreNumber - 10
    }
    if (scoreNumber > 5) {
      studentScore.push(student)
    }
  })
  return studentScore
}
