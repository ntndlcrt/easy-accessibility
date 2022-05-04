import config from '../config'
const { tabTrapEls } = config

import keyClick from './_keyClick'
import tabTrap from './_tabTrap'
import clickStatus from './_clickStatus'

let accessibility = (() => {
    let init = () => {
        keyClick()
        tabTrap(tabTrapEls)
        clickStatus()
    }

    return {
        init
    }
})()

export default accessibility