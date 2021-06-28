const h = 220;
const s = 84;
const l = 32;

const colors = {
  "0": [h, s, l,    'Primary 100'],
  "1": [h, s, l+5, 'Primary 090'],
  "2": [h, s, l+10, 'Primary 080'],
  "3": [h, s, l+15, 'Primary 070'],
  "4": [h, s, l+20, 'Primary 060'],

}

const div = document.getElementsByClassName('color-list')[0]
for (let i in colors) {
  hsl = `hsla(${colors[i][0]}, ${colors[i][1]}%, ${colors[i][2]}%, 1)`
  let element = document.createElement('div')
  element.className = 'child-box'
  element.innerHTML = 
  `
  <div class="child-box">
    <div class="color-selector color" style="background-color: ${hsl}"></div>
    <div class="color-name-child">${colors[i][3]}</div>
  </div>
  `
  console.log(div)
  div.appendChild(element)
}