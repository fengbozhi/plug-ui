import Message from '../packages/message/index'
import ToolTip from '../packages/tips/index'

const components = [
    Message,
    ToolTip
]

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$toolTip = ToolTip.installToolTip
    Vue.prototype.$message = Message.installMessage
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    Message,
    ToolTip
}
export default API;
