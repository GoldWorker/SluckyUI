<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 20:26:26
 * @LastEditTime: 2019-10-06 17:07:49
 * @LastEditors: Please set LastEditors
 -->

## API


### Toast Component
组件提供了一些静态方法，使用方式和参数如下：
- `toast.add({title,content,status})`
- `toast.success(content)`
- `toast.warn(content)`
- `toast.error(content)`

### Dialog Component
组件提供了一些静态方法，使用方式和参数如下：
- `Dialog.model({title,content,onOk|function,footer|customComponent})`

| 属性    | 描述               | 类型     | 默认值 |
| ------- | ------------------ | -------- | ------ |
| open    | 控制Dialog是否显示 | Boolean  | false  |
| onClose | 关闭Dialog时的回调 | Function | -      |

> 标有*为测试Bata属性

``` jsx
// Style1：使用函数式直接调用

import { Dialog, Toast } from 'slucky'
ReactDOM.render(
    <div>
        <button
        className="tag-text ptb6 plr16 m32"
        onClick={() => Toast.add({
            content: '内容'
        })}>弹出消息提示</button>
        <button
            className="tag-text ptb6 plr16 m32"
            onClick={() => Toast.error(‘内容‘)}>弹出错误消息提示</button>
        <button
            className="tag-text ptb6 plr16 m32"
            onClick={() => Toast.warn(‘内容‘)}>弹出警告消息提示</button>
        <button
            className="tag-text ptb6 plr16 m32"
            onClick={() => Toast.success(‘内容‘)}>弹出成功消息提示</button>

        <button 
            className="btn-n" 
            onClick={() => Dialog.model({ 
                content: 123, 
                onOk: () => { }, 
                title: 'Tips' 
            })}>Open Dialog</button>
    </div>,
    document.body
)

//------------------------------------
// Style2：使用组件去调用
class demo extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }
    }
    handleClickToggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        return (
            <div>
                <Dialog open={this.state.toggle} onClose={() => this.setState({ toggle: false })}>
                    <div>
                        <p>Your Title</p>
                        <div>Breaking news, sport, TV, radio and a whole lot more. The BBC informs,
                            educates and entertains - wherever you are, whatever your age.Visit BBC News for
                            up-to-the-minute news, breaking news, video, audio and feature stories. BBC News
                            provides trusted World and UK news as well as local and ...</div>
                        <div className="ta-r pt8">
                            <button
                                className="tag-text ptb6 plr16"
                                onClick={() => this.setState({ toggle: false })}>cancel</button>
                            <button className="tag-text ptb6 plr16">ok</button>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}
```
