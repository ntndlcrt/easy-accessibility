import config from '../config'
const { tabTrapEls } = config

import clickKey from './_clickKey'
import tabTrap from './_tabTrap'

export default accessibility = (() => {
    let init = () => {
        clickKey()
        tabTrap(tabTrapEls)
    }

    return {
        init
    }
})()