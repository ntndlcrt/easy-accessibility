export default function clickStatus() {
    let items = document.querySelectorAll('[click-status]')

    if (items) {
        items.forEach(item => {
            item.addEventListener('click', () => {
                if(item.ariaPressed === "true") {
                    item.setAttribute('aria-pressed', false);
                } else if(item.ariaPressed === "false") {
                    item.setAttribute('aria-pressed', true);
                }
    
                if(item.ariaExpanded === "true") {
                    item.setAttribute('aria-expanded', false);
                } else if(item.ariaExpanded === "false") {
                    item.setAttribute('aria-expanded', true);
                }
            })
        })
    }
}