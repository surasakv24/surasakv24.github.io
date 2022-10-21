import { get } from '@/libs/json'
import type { JsonObject } from '@/libs/json/types'
import type { BrandTitle } from './types'

const data: JsonObject = require('@/data.json')

export const BRAND_TITLE_KEY = 'brandTitle'

export const getBrandTitle = (): BrandTitle => {
  return get(data, BRAND_TITLE_KEY) ?? ''
}
