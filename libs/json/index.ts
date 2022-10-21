import type { JsonObject } from './types'

export const hasKey = (data: JsonObject, key: string): boolean => {
  return key in data
}

export const get = (data: JsonObject, key: string) => {
  return hasKey(data, key) ? data[key] : undefined
}
