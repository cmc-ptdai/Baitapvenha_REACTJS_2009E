//Bai : 1  in một bảng của một số bất kì với các số từ 1 đến 10 và hiển thị ra kết quả 
const tableMultiplication = number => {
  if (number < 1 || number > 10) return;
  console.log('In bảng nhân:');
  for (let i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = ' + number * i);
  }
}

// Bài 2 : hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 in các số chẵn từ 1 đến n 
const getEvenNumber = number => {
  if (number < 1 || number > 30) return;
  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0 ) {
      console.log(i);
    }
  }
}

//Bài 3 : Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
const countNumber = number => {
  if (number < 1 || number > 30) return;
  let sum = 0 ; 
  for (let i = 1; i <= number; i++) {
    sum += i
  }
  console.log(`tổng các số từ 1 đến ${number} là : ${sum}`)
}

//Bài 4 : Hàm nhận vào tham số n (số nguyên dương), 1 <= n <= 30 in n! (gia thừa của n)
const getFactorial = number => {
  if (number < 1 || number > 30) return;
    let factorial = 1 ;
    for (let i = 1; i <= number; i++) {
      factorial *= i
    }
    console.log(`kết quả của ${number}! là : ${factorial}`)
}

//Bài 5 : Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
const countEvenNumber = array => {

  let countNumber = 0
  array.forEach( value => {
    if (value % 2 === 0) {
      countNumber += 1
    }
  })
  return countNumber;
}

//Bài 6 : Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp

const getUniqArray = array => {
  const uniqArr = [] 
  for (let i = 0; i < array.length; i++) {
    if (uniqArr.indexOf(array[i]) === -1) {
      uniqArr.push(array[i])
    }
  }
  return uniqArr;
}

//Bài 7 : Bạn cần phải tạo ra 1 object có đầy đủ các thuộc tính: name, score từ 2 array sau:
const studentNames = [
  { id: 1, name: 'Nguyễn Thị Tèo' },
  { id: 2, name: 'Phạm Văn Bưởi' },
  { id: 3, name: 'Hoàng Văn Nam' },
  { id: 4, name: 'Vũ Ngọc Duy' },
  { id: 5, name: 'Nguyễn Minh Nhật' },
  { id: 6, name: 'Phí Duy Quân' },
  { id: 7, name: 'Trần Minh Minh' }
]
const studentScores = [
  { id: 1, score: 9.2 },
  { id: 2, score: 2.3 },
  { id: 3, score: 3.7 },
  { id: 4, score: 6.9 },
  { id: 5, score: 5.2 },
  { id: 6, score: 9.6 },
  { id: 7, score: 6.1 }
]

const createObject = (array1, array2) => {
  for(let i = 0 ; i < array1.length ; i++ ) {
    for(let j = 0 ; j < array2.length ; j ++) {
      if(array1[i].id === array2[j].id){
        array1[i].score = array2[j].score
      }
    }
  }
  return array1;
}

//Bìa 8 : Cho array dưới đây là danh sách các students

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.6 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 2.3 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
//Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất

const scoreMaxMin = array => {
  let scoreMax = 0 
  let scoreMin = 11
  const scoreMaxMin = {}
  const theBest = []
  const theBad = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].score > scoreMax) {
      scoreMax = array[i].score
    }
    if (array[i].score < scoreMin){
      scoreMin = array[i].score
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i].score === scoreMax) {
      theBest.push(array[i])
    }
    if (array[i].score === scoreMin) {
      theBad.push(array[i])
    }
  }
  scoreMaxMin.theBest = theBest
  scoreMaxMin.theBad = theBad
  console.log(scoreMaxMin);
}
// e viết 2 vòng for vì muốn làm trường hợp có nhiều người cùng có điểm lớn nhất và nhỏ nhất 
