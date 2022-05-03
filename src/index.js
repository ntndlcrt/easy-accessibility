import config from '../config'
const { tabTrapEls } = config

import keyClick from './_keyClick'
import tabTrap from './_tabTrap'

let accessibility = (() => {
    let init = () => {
        keyClick()
        tabTrap(tabTrapEls)
    }

    return {
        init
    }
})()

export default accessibility