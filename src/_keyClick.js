export default function keyClick() {
    let items = document.querySelectorAll('[key-click]')

    if (items) {
        items.forEach(item => {
            item.addEventListener('keydown', function(e) {
                if(e.key === item.getAttribute('key-click')) {
                    e.preventDefault()
                    item.click()
                }
            })
        })
    }
}