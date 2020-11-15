const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'About us',
    subTitle: 'sweet home',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fas fa-globe-asia',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fas fa-comments',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fas fa-globe-asia',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fas fa-users',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fa fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fa fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fa fa-leaf',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fa fa-tasks',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fa fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'fas fa-images',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'far fa-envelope',
  },
]
const showItem = (event) => {}
window.onload = () => {  
  const createMenu = (parent, menu) => {
    menu.forEach(child => {
      const li = document.createElement('li')
      if (child.isActive === true) {
        li.classList.add('active')
      }
      const a = document.createElement('a')
      const link = document.createAttribute("href")
      link.value = child.link
      a.setAttributeNode(link)
      const onmouseover = document.createAttribute("onmouseover")
      onmouseover.value = 'showItem(event)'
      a.setAttributeNode(onmouseover)

      const divIcon = document.createElement('div')
      divIcon.classList.add('icon')
      const i = document.createElement('i')
      const linkIcon = child.icon.split(" ")
      linkIcon.forEach(item => i.classList.add(item))
      divIcon.appendChild(i)

      const divText = document.createElement('div')
      divText.classList.add('text')
      const b = document.createElement('b')
      b.innerText = child.title
      divText.appendChild(b)
      if (child.subTitle) {
        const p = document.createElement('p')
        p.innerText = child.subTitle
        divText.appendChild(p)
      }
      a.appendChild(divIcon)
      a.appendChild(divText)
      li.appendChild(a)
      if (child.children) {
        const ul = document.createElement('ul')
        createMenu(ul, child.children)
        li.appendChild(ul)
      }
      parent.appendChild(li)
    })
  }

  const parent = document.createElement('ul')
  const attParent = document.createAttribute("id")
  attParent.value = 'parent'
  parent.setAttributeNode(attParent)
  createMenu(parent, deepMenu)

  const li = document.createElement('li')
  const divSearch = document.createElement('div')
  divSearch.classList.add('search')

  const input = document.createElement('input')
  const inputType = document.createAttribute("type")
  const inputName = document.createAttribute("name")
  const inputPlaceholder = document.createAttribute("placeholder")
  inputType.value = 'text'
  inputName.value = 'search'
  inputPlaceholder.value = 'Search.....'
  input.setAttributeNode(inputType)
  input.setAttributeNode(inputName)
  input.setAttributeNode(inputPlaceholder)

  const button = document.createElement('button')
  const buttonType = document.createAttribute('type')
  buttonType.value = 'submit'
  button.setAttributeNode(buttonType)
  button.innerHTML = '<i class="fas fa-search"></i>'

  divSearch.appendChild(input)
  divSearch.appendChild(button)
  li.appendChild(divSearch)
  parent.appendChild(li)

  const menu = document.getElementById('menu')
  menu.appendChild(parent)
}
