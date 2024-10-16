const dialog = document.querySelector('dialog')
const openBtn = document.querySelector('.btn_white')
const closeBtn = dialog.querySelector('.modal__close')

openBtn.onclick = () => {
    dialog.showModal()
}

closeBtn.onclick = () => {
    dialog.close()
}