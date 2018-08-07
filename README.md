# plug-ui

> 基于vue2.x，可复用UI组件 [在线预览]([https://fengbozhi.github.io/plug-ui/dist/index.html#/]{:target="_blank"})   [文档地址]([https://fengbozhi.github.io/plug-ui/#/]{:target="_blank"})

## 安装

``` bash
cnpm install plug-ui --save
```
## 快速开始
``` 
import plugUi from 'plug-ui'

Vue.use(plugUi)
```
## 组件

### 消息提示Message
Message为一个消息提示框，默认3秒钟消失

| Parameter | Type | Description |
| -------- | ------- | ------ |
| message | string | 提示内容 |
| time | number | 消失时间 |

eg:

```
    this.$plugMessage('这是一个message')
    若想改变消失时间
    this.$plugMessage({
      message: '这是一个message',
      time: 3000
    })
```

### 汽包提示ToolTip

可以自定义事件来触发toolTip，只需要通过传入$event就可以自动地定位任何有需要的元素了。plug会根据当前触发元素的位置自动定位，会检测先前是否渲染过toolTip,若渲染过会自动注销。plugTooltip默认为在右侧。可以在初始化时，传入方向、背景色、字体颜色,若未传，则使用默认值。

| Parameter | Type | Description |
| --------| ------- | -------- |
| content | string | 提示内容 |
| direction | string | toolTip显示的方向(top、right、bottom、left) |
| background | string | 背景色 |
| color | string | 字体颜色 |
| time | number | 消失时间 |

eg:

```
    this.$plugTooltip($event, {
        content: '这是一个toolTip',
        direction: 'top',
        background: '#13CE66',
        color: '#fff',
        time: 3000
      })
```
