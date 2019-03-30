import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'

/**
 * 为什么写成函数？
 * 因为我们在前端和后端都需要去进行初始化store所以这里封装一个工厂函数
 * @param data
 * @returns {*}
 */
export default data => createStore(reducers, data, applyMiddleware(thunk))
