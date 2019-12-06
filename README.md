# Widgets
redux-dynamic-modules、react、redux
## redux-dynamic-modules 结合 redux-dynamic-modules-saga使用
    本案例中将组件分为两部分，视图component和状态管理redux。
#### redux 组成部分:
>-  action 可以分为两部分，动态的和静态的，动态返回一个action对象({type, payload, ...attr})，静态的只需返回一个type即可
>-  reducer 结合immer使用，只需要根据type 修改state即可，
>-  sagas 结合使用take、call、takeEvery、put等
>-  module 
>>#####  saga api 使用注意事项
>>>- yield take(pattern)，会返回action 对象，用于component内事件 触发 dispatch时，把参数通过action来传递
>>>- yield takeEvery(type, fn, ...args) 默认的把action添加到参数的末尾，可以在fn内通过arguments来获取，或者在声明fn 时，多设一个...args 参数，通过args数组的最后一项来获取action
>>>- 传递给saga的action type 和 reducer 里面的type需要区分开。
>>>- saga 调用的所有函数，如果函数显示的声明了参数，那么在调用时（call，或者takeEvery），必须显示的传入参数，即使传入的时undefined。

按顺序书写每一部分