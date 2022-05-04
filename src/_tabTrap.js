class ClassWatcher {
    constructor(targetNode, classToWatch, classAddedCallback) {
        this.targetNode = targetNode
        this.classToWatch = classToWatch
        this.classAddedCallback = classAddedCallback
        this.observer = null
        this.lastClassState = targetNode.classList.contains(this.classToWatch)

        this.init()
    }

    init() {
        this.observer = new MutationObserver(this.mutationCallback)
        this.observe()
    }

    observe() {
        this.observer.observe(this.targetNode, { attributes: true })
    }

    disconnect() {
        this.observer.disconnect()
    }

    mutationCallback = mutationsList => {
        for(let mutation of mutationsList) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                let currentClassState = mutation.target.classList.contains(this.classToWatch)
                if(this.lastClassState !== currentClassState) {
                    this.lastClassState = currentClassState
                    if(currentClassState) {
                        this.classAddedCallback(this.targetNode)
                    }
                }
            }
        }
    }
}

export default function tabTrap(els) {
    let selectors = '';
    els.forEach((el, key, array) => {
        selectors += el;

        if(key !== array.length-1) {
            selectors += ', ';
        }
    })

    let items = document.querySelectorAll('[tab-trap]');

    if(items) {
        items.forEach(item => {
            let classWatcher = new ClassWatcher(item, 'active', addTabTrap)
        })
    }

    function addTabTrap(item) {
        console.log(selectors);
        let focusableEls = item.querySelectorAll(selectors);
        let firstFocusableEl = focusableEls[0];
        var lastFocusableEl = focusableEls[focusableEls.length - 1];
        firstFocusableEl.focus();
    
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if ( e.shiftKey ) {
                    if (document.activeElement === firstFocusableEl) {
                        lastFocusableEl.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableEl) {
                        firstFocusableEl.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }
}