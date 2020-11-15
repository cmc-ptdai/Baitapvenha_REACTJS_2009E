const timeline = [
  {
    year: '1934',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
  },
  {
    year: '1937',
    content: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex agus, vatius et pulvinar in, pretium non nisi.'
  },
  {
    year: '1940',
    content: 'Porin iaculis, nibh eget sfficitur varuis, libero tellus porta dolor, at pulvinar tortor ex eget ligula, Integer eu dapibus arcu, sit amet sollicitudin eros.'
  },
]
window.onload = () => {
  const ul = document.createElement('ul')
  ul.classList.add('timeline')
  const createTimeline = timeline => {
    timeline.forEach((item, index) => {
      const span = document.createElement('span')
      span.innerText = item.content
      const title = document.createElement('h2')
      title.innerText = item.year
      const divText = document.createElement('div')
      divText.classList.add('text')
      divText.appendChild(title)
      divText.appendChild(span)
      const divBox = document.createElement('div')
      const li = document.createElement('li')
      if ((index + 1) % 2 === 0) {
        divBox.classList.add('box_left')
        li.classList.add('item_left')
      } else {
        divBox.classList.add('box_right')
        li.classList.add('item_right')
      }
      divBox.appendChild(divText)
      li.appendChild(divBox)
      ul.appendChild(li)
    })
  }
  createTimeline(timeline)
  const content = document.getElementById('content')
  content.appendChild(ul)
}
