//Bai : 1  in một bảng của một số bất kì với các số từ 1 đến 10 và hiển thị ra kết quả 
const tableMultiplication = (number) => {
  if(number >= 1 && number <= 10) {
    console.log('In bảng nhân:');
    for(let i = 1 ; i <= 10 ; i ++){
      console.log(number + ' x ' + i + ' = ' + number * i);
    }
  }else {
    console.log('mời bạn nhập lại môt số trong khoảng từ 1 đến 10');
  }
}

// Bài 2 : hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 in các số chẵn từ 1 đến n 
const InEvenNumber = (number) => {
  if(number >= 1 && number <= 30) {
    for(let i = 1 ; i <= number ; i ++){
      if(i % 2 == 0 ){
        console.log(i);
      }
    }
  }else {
    console.log('mời bạn nhập lại môt số trong khoảng từ 1 đến 30');
  }
}

//Bài 3 : Hàm nhận tham số là n (số nguyên dương), 1 <= n <= 30 Tính tổng từ 1 đến n
const sum = (number) => {
  if(number >= 1 && number <= 30) {
    let sum = 0 ; 
    for(let i = 1 ; i <= number ; i ++){
      sum = sum + i
    }
    console.log('tổng các số từ 1 đến ' + number + ' là : ' + sum)
  }else {
    console.log('mời bạn nhập lại môt số trong khoảng từ 1 đến 30');
  }
}

//Bài 4 : Hàm nhận vào tham số n (số nguyên dương), 1 <= n <= 30 in n! (gia thừa của n)
const factorial = (number) => {
  if(number >= 1 && number <= 30) {
    let factorial = 1 ; 
    for(let i = 1 ; i <= number ; i ++){
      factorial = factorial * i
    }
    console.log('kết quả của ' + number + '! là : ' + factorial)
  }else {
    console.log('mời bạn nhập lại môt số trong khoảng từ 1 đến 30');
  }
}

//Bài 5 : Hàm nhận vào 1 mảng đếm xem trong mảng có bao nhiêu số chẵn
const paramNumber = [1,2,3,4,5,6,7,8,9,10,2,4,5,8,6]
const countEvenNumber = () => {
  let countNumber = 0
    paramNumber.forEach(function(value,index){
    if(value % 2 == 0) {
      countNumber = countNumber +1
    }
  })
  console.log('mảng có ' + countNumber + ' số chẵn');
}

//Bài 6 : Hàm nhận vào 1 mảng chứa các chữ cái bị trùng lặp ngẫu nhiên Tính toán và trả về 1 mảng đã xóa đi các chữ cái bị trùng lặp

const paramsLetter = ['A', 'C', 'A', 'A', 'B', 'D','B']
const deleteLetter = () => {
  for(let i = 0 ; i < paramsLetter.length ; i ++) {
    for(let j = i ; j < paramsLetter.length - 1 ; j++) {
      if(paramsLetter[i] === paramsLetter[j]) {
        paramsLetter.splice(j,1);
      }
    }
  }
  console.log(paramsLetter)
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

const createObject = () => {
  for(let i = 0 ; i < studentNames.length ; i++ ) {
    for(let j = 0 ; j < studentScores.length ; j ++) {
      if(studentNames[i].id == studentScores[j].id){
        studentNames[i].score  = studentScores[j].score
      }
    }
  }
  console.log(studentNames);
}

//Bìa 8 : Cho array dưới đây là danh sách các students

const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
//Hãy tìm sinh viên có điểm (score) thấp nhất và sinh viên có score cao nhất

const scoreMaxMin = () => {
  let scoreMax = 0 
  let scoreMin = 12
  let theBest = {}
  let theBad = {}
  for(let i = 0 ; i < students.length ; i++ ) {
    if(students[i].score > scoreMax) {
      scoreMax = students[i].score
    }
    if(students[i].score < scoreMin){
      scoreMin = students[i].score
    }
  }
  for(let i = 0 ; i < students.length ; i++ ) {
    if(students[i].score == scoreMax) {
      theBest.id = students[i].id
      theBest.name = students[i].name
      theBest.score = students[i].score
    }
    if(students[i].score == scoreMin){
      theBad.id = students[i].id
      theBad.name = students[i].name
      theBad.score = students[i].score
    }
  }
  console.log(theBest);
  console.log(theBad);
}