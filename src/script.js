
function domLoaded() {
  const passInput = document.getElementById('senha')
  const toggle = document.getElementById('toggle')
  
  toggle.onclick = () => {
    console.log('toggle aqui ========>')
    const isShow = passInput.type === 'text'
    passInput.type = isShow ? 'password' : 'text'
  }
  console.log('document is loaded ......')
}

document.addEventListener('DOMContentLoaded', domLoaded)



