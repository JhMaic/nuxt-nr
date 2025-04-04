export default defineEventHandler((event) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // resolve( {
            //     hello: 'world'
            // })
            reject("some kind")
        },3000)
    })
})