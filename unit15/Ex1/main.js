const students = [
  {
    id: 1,
    name: 'daiphùng',
    gender: 'Nam',
    age: 12
  },
  {
    id: 2,
    name: 'thảo',
    gender: 'Nữ',
    age: 12
  },
  {
    id: 3,
    name: 'phungdai',
    gender: 'Nam',
    age: 12
  },
  {
    id: 4,
    name: 'phamthao',
    gender: 'Nữ',
    age: 12
  }
]
const resetForm = () => {
  const form = document.getElementById('form')
  form.reset()
}
const openForm = () => {
  const form = document.getElementById('form')
  const button = document.getElementById('open_form')
  const text = button.innerText
  if (text === 'Add') {
    button.innerText = 'Close Form'
  }
  if (text === 'Close Form') {
    button.innerText = 'Add'
  }
  const styleForm = form.style.display
  resetForm()
  return styleForm === 'none' ? form.style.display = 'block' : form.style.display = 'none'
}
const editItem = (event, id) => {
  const editId = document.getElementById('edit' + id)
  const save = document.getElementById('save' + id)
  const cancel = document.getElementById('cancel' + id)
  editId.style.display = 'none'
  save.style.display = 'block'
  cancel.style.display = 'block'
  const tr = event.path[3]
  const tdName = tr.querySelector('td:nth-child(3)')
  const tdGender = tr.querySelector('td:nth-child(4)')
  const tdAge = tr.querySelector('td:nth-child(5)')
  students.forEach(item => {
    if (item.id === id) {
      tdName.innerHTML = ` <input type="text" class="form-control" id="editName${item.id}" value="${item.name}">`
      tdGender.innerHTML = `
        <select class="form-control" id="editGender${item.id}" value="${item.gender}">
          <option>Nam</option>
          <option>Nữ</option>
          </select>
      `
      tdAge.innerHTML = ` <input type="number" class="form-control" id="editAge${item.id}" value="${item.age}">`
    }
  })
}
const saveItem = id => {
  const name = document.getElementById('editName' + id).value
  const gender = document.getElementById('editGender' + id).value
  const age = document.getElementById('editAge' + id).value
  students.forEach(item => {
    if (item.id === id) {
      item.name = name
      item.gender = gender
      item.age = age
    }
  })
  renderStudent()
}
const cancelItem = (event, id) => {
  const editId = document.getElementById('edit' + id)
  const save = document.getElementById('save' + id)
  const cancel = document.getElementById('cancel' + id)
  editId.style.display = 'block'
  save.style.display = 'none'
  cancel.style.display = 'none'
  students.forEach(item => {
    if (item.id === id) {
      const tr = event.path[3]
      const tdName = tr.querySelector('td:nth-child(3)')
      const tdGender = tr.querySelector('td:nth-child(4)')
      const tdAge = tr.querySelector('td:nth-child(5)')
      tdName.innerText = item.name
      tdGender.innerText = item.gender
      tdAge.innerText = item.age
    }
  })
}
const onDelete = id => {
  students.forEach((item, index) => {
    if (item.id === id) {
      students.splice(index, 1)
    }
    renderStudent()
  })
}
const createId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
}
const renderStudent = () => {
  const tbody = document.getElementById('showStudent')
  let html = ``
  students.forEach(item => {
    html = html + `
    <tr>
      <td><input type="checkbox" value="${item.id}"></td>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.gender}</td>
      <td>${item.age}</td>
      <td>
        <div class = "btn">
          <button type="button" class="btn btn-primary" id="edit${item.id}" onclick="editItem(event, ${item.id})">Edit</button>
          <button type="button" class="btn btn-success " id="save${item.id}" style="display: none;" onclick="saveItem(${item.id})">Save</button>
          <button type="button" class="btn btn-warning" id="cancel${item.id}" style="display: none;" onclick="cancelItem(event, ${item.id})">Cancel</button>
          <button type="button" class="btn btn-danger" onclick="onDelete(${item.id})">Delete</button>
        </div>
      </td>
    </tr>`
  })
  tbody.innerHTML = html
}
const addStudent = () => { 
  const name = document.getElementById('name').value
  const gender = document.getElementById('gender').value
  const age = document.getElementById('age').value
  const id = createId()
  const object = {
    id: id,
    name: name,
    gender: gender,
    age: age
  }
  students.push(object)
  renderStudent()
  resetForm()
  openForm()
}
const DeleteItemCheck = () => {
  const input = document.querySelectorAll('table tr td input')
  input.forEach(item => {
    if (item.checked === true) {
      const key = Number(item.value)
      students.forEach((elem , index)=> {
        if (elem.id === key) {
          students.splice(index, 1)
        }
      })
    }
  })
  const inputAll = document.querySelectorAll('table tr th input')
  inputAll[0].checked = false 
  renderStudent()
}
const selectAll = () => {
  const inputAll = document.querySelectorAll('table tr th input')
  const input = document.querySelectorAll('table tr td input')
  if (inputAll[0].checked === true) {
    input.forEach(item => {
      item.checked = true
    })
  }
}
window.onload = () => {
  renderStudent()
}
