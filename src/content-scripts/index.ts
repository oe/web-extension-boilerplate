function replaceLogo() {
  const altIcon = 'https://avatars.githubusercontent.com/u/583231?v=4'
  const svg = document.querySelector('.Header-link svg')
  const img = new Image()
  img.className = svg.getAttribute('class');
  img.src = altIcon
  svg.replaceWith(img)
}

replaceLogo()
