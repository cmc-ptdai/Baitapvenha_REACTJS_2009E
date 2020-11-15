const show = event => {
  event.preventDefault() 
  const parent = event.currentTarget
  const childUl = parent.querySelector('ul')
  const childA = parent.querySelector('a i:last-child')
  const turn = childA.style.transform === '' ? 'rotate(90deg)' : ''
  childA.style.transform = turn
  const value = childUl.style.display === 'block' ? 'none' : 'block'
  childUl.style.display = value
}

const menu = [
  {
    name: 'DashBoard',
    icon: '<i class="fas fa-tachometer-alt"></i>',
    children: [
      'Tool',
      'Report',
      'Analytics',
      'Code Block'
    ]
  },
  {
    name: 'Sale',
    icon: '<i class="fas fa-truck-moving"></i>',
    children: [
      'New Sales',
      'Expired Sales',
      'Sales Report',
      'Deliveries'
    ]
  },
  {
    name: 'Massages',
    icon: '<i class="fas fa-envelope"></i>',
    children: [
      'Inbox',
      'OutBox',
      'Sent',
      'Archived'
    ]
  },
  {
    name: 'Users',
    icon: '<i class="fas fa-user-friends"></i>',
    children: [
      'New User',
      'User Group',
      'Permissions',
      'Passwords'
    ]
  },
  {
    name: 'Setting',
    icon: '<i class="fas fa-cogs"></i>',
    children: [
      'Databases',
      'Design',
      'Change User',
      'Log Out'
    ]
  }
]

window.onload = () => {
  const createMenu = menu => {
    const ul = document.createElement('ul')
    const attParent = document.createAttribute("id")
    attParent.value = 'parent'
    ul.setAttributeNode(attParent)
  
    menu.forEach(child => {
      const iconDown = '<i class="fas fa-chevron-right"></i>'
      const icon = document.createElement('i')
      const a = document.createElement('a')
      const span = document.createElement('span')
      const li = document.createElement('li')
      const att = document.createAttribute("onclick")
      att.value = 'show(event)'
      li.setAttributeNode(att)
      span.innerText = child.name
      a.insertAdjacentHTML('afterbegin', child.icon)
      a.appendChild(span)
      a.insertAdjacentHTML('beforeend', iconDown)
      li.appendChild(a)
      li.appendChild(icon)
  
      if (child.children) {
        const ul = document.createElement('ul')
        ul.style.display = 'none'
        child.children.forEach(item => {
          const li = document.createElement('li')
          const a = document.createElement('a')
          a.innerText = item
          li.appendChild(a)
          ul.appendChild(li)
        })
        li.appendChild(ul)
      }
      ul.appendChild(li)
    })
    const showMenu = document.getElementById('menu')
    showMenu.appendChild(ul)
  }
  createMenu(menu)
}
