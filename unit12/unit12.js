// Exercise 1 
const compareArray = (array1 = [], array2 = []) => JSON.stringify(array2) === JSON.stringify(array1)

// Exercise 2 
const takeFlatArray = (array = []) => {
  const flatArray = array.flat(Infinity)
  return flatArray
}

// Exercise 3 
const divisionArray = (array = [], number) => {
  const newArray = []
  for (let i = 0; i < array.length; i = i + number) {
    newArray.push(array.slice(i, i + number))
  }
  return newArray
}

// Exercise 4
const compareEleArray = function() {
  const arraySearch = []
  arguments[0].forEach(i => {
    arguments[1].forEach(j => {
      if (i === j) {
        arraySearch.push(i)
      }
    })
  })
  arraySearch.forEach((item, index) => {
    for (let i = 2; i < arguments.length; i++) {
      const strArgument = arguments[i]
      arguments[i].forEach(elem => {
        if (item === elem && !arraySearch.includes(elem)) {
          arraySearch.push(elem)
        }
        if (strArgument.indexOf(item) === -1) {
          arraySearch.splice(index, 1)
        }
      })
    }
  })
  return arraySearch.filter((item, index) => {
    return arraySearch.indexOf(item) === index
  })
  // if (arguments.length < 3) return _.intersection(arguments[0],arguments[1])
  // arguments[0].forEach(ele => {
  //   arguments[1].forEach(elem => {
  //     if (ele === elem) {
  //       arraySearch.push(ele)
  //     }
  //   })
  // })
  // const result = []
  // for (let i = 2; i < arguments.length; i++) {
  //   result.push(_.intersection(arraySearch,arguments[i]))
  // }
  // return result
}

// Exercise 5
const compareDate = date => {
  const finalTime = new Date('Oct 30, 2020 12:30:32')
  return Date.parse(date) <= Date.parse(finalTime)
}

// Exercise 6 
// Check email
const checkEmail = string => {
  const reg = /^[A-Za-z0-9](\w[\._]?){3,30}@[a-z]{2,12}(\.[a-z]{2,12})+$/
  return reg.test(string)
}

// Check UserName
const CheckUserName = string => {
  const reg = /^[a-z_]([a-z0-9][\._-]?){1,9}$/
  return reg.test(string)
}
