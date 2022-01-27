/*
 * @Description:
 * @Version: 2.0
 * @Autor: liushuhao
 * @Date: 2021-11-25 23:25:29
 * @LastEditors: liushuhao
 * @LastEditTime: 2022-01-27 14:50:50
 */
const Koa = require('koa')
//Applications
const app = new Koa()

// 中间件1
app.use((ctx, next) => {
    next()
})

// 中间件 2
app.use((ctx, next) => {
    next()
})

app.listen(9000, '0.0.0.0', () => {
    console.log('Server is starting')
})
