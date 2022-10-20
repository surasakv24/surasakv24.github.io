export const data: Data = require('@/data.json')

type Data = {
  [index: string]: any
}

const hasKey = (key: string): boolean => {
  return key in data
}

const getDataFromKey = (key: string) => {
  return hasKey(key) ? data[key] : undefined
}
