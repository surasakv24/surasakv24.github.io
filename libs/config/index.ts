import { get } from '@/libs/json'
import type { JsonObject } from '@/libs/json/types'
import type { ImagePath, FilePath, Links } from './types'

const config: JsonObject = require('@/config.json')

export const IMAGE_PATH_KEY = 'imagePath'
export const FILE_PATH_KEY = 'filePath'
export const LINKS_KEY = 'links'
export const FOOTER_KEY = 'footer'
export const PROFILE_IMAGE_WIDTH_KEY = 'profileImageWidth'
export const PROFILE_IMAGE_HEIGHT_KEY = 'profileImageHeight'

export const getImagePath = (): ImagePath => {
  return get(config, IMAGE_PATH_KEY) ?? '/public/'
}

export const getFilePath = (): FilePath => {
  return get(config, FILE_PATH_KEY) ?? '/public/'
}

export const getLinks = (): Links => {
  return get(config, LINKS_KEY) ?? []
}

export const getFooter = (): string => {
  return get(config, FOOTER_KEY) ?? ''
}

export const getProfileImageWidth = (): number | string => {
  return get(config, PROFILE_IMAGE_WIDTH_KEY) ?? 400
}

export const getProfileImageHeight = (): number | string => {
  return get(config, PROFILE_IMAGE_HEIGHT_KEY) ?? 400
}
