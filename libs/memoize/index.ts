/**
 * a higher function (function) => memoized version 
 * => cache the RESULT of expensive func call and return CACHED RESULT when it recieves the same input again
 * => improve performance of func that involve complex processing
 */

export type Fn = (this: unknown, arg: string | number) => unknown
const memoized = (fn: Fn) =>{
    const cache = new Map();

    return function (this: unknown, arg: string| number){
        if(cache.has(arg)){
            return cache.get(arg)
        }

        const result = fn.call(this, arg)
        cache.set(arg, result)

        return result
    }

}


export default memoized