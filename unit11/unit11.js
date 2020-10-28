// Exercise : 1 
// Method 1
const repeatMethodOne = (char, number) => {
  const arrayChar = []
  for (let i = 0; i < number; i++) {
    arrayChar.push(char)
  }
  return arrayChar
}
// Method 2 
const repeatMethodTwo = (char, number) => {
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
const deleteFalseValue = (array = []) => array.filter(item => item)

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
//const arr = [1, 2, 3, 5, 'em có đánh rơi nhịp nào không'] vẫn trả ra như hàm sort anh

// Exercise 6 
const checkIsObject = object => {
  if (object === null) return false
  return typeof(object) === 'object' && !Array.isArray(object)
}

// Exercise 7
const deleteObjectByKey = (object = {}, array = []) => {
  const newObject = {}
  for (let key in object) {
    array.forEach(i => {
      if (key === i) {
        newObject[key] = object[key]
      }
    })
  }
  return newObject
}

// Exercise 8 
const deleteItemInArray = (array = []) => {
  if (array.length < 5) return
  array.splice(2, 3)
  return array
}

// Exercise 9
const getStudentPass = (array = []) => {
  const studentPass = []
  array.forEach(student => {
    if (student.name === 'Duy') return studentPass.push('Fail')
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
    // let number = String(student.score)
    // const arrayString = number.split('.')
    // const sumString = arrayString[0] + arrayString[1]
    // const scoreNumber = sumString.substr(-1)
    // if (scoreNumber > 5) {
    //   studentScore.push(student)
    // }
  })
  return studentScore
}
