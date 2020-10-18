//enf
export const isEmptyString = mStr => mStr === undefined || mStr === null || mStr === ""

export const isEmptyArray = arr => arr === undefined || arr === null || arr.length < 1

export const logger = (...params) => console.log(params)   