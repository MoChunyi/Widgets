# Widgets
redux-dynamic-modules、react、redux
## redux-dynamic-modules 结合 redux-dynamic-modules-saga使用
    本案例中将组件分为两部分，视图component和状态管理redux。
#### redux 组成部分:
>-  action 可以分为两部分，动态的和静态的，动态返回一个action对象({type, payload, ...attr})，静态的只需返回一个type即可
>-  reducer 结合immer使用，只需要根据type 修改state即可，
>-  sagas 结合使用take、call、takeEvery、put等
>>#####  saga api 使用注意事项

> module
 按顺序书写每一部分