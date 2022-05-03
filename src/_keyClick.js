export default function keyClick() {
    let items = document.querySelectorAll('[click-key]')

    if (items) {
        items.forEach(item => {
            item.addEventListener('keydown', function(e) {
                if(e.key === item.getAttribute('click-key')) {
                    e.preventDefault()
                    item.click()
                }
            })
        })
    }
}