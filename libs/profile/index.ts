import { get } from '@/libs/json'
import { getFilePath } from '@/libs/config'
import type { JsonObject } from '@/libs/json/types'
import type { BrandTitle, ResumeFile } from './types'

const data: JsonObject = require('@/data.json')

export const BRAND_TITLE_KEY = 'brandTitle'
export const FILES_KEY = 'files'
export const RESUME_FILE_KEY = 'resume'

export const getBrandTitle = (): BrandTitle => {
  return get(data, BRAND_TITLE_KEY) ?? ''
}

export const getResumeFile = (): ResumeFile => {
  let resumeFile
  const files = get(data, FILES_KEY)
  if (files) {
    const resumeFileName = get(files, RESUME_FILE_KEY) ?? undefined
    resumeFile = resumeFileName
      ? [getFilePath(), resumeFileName].join('/').trim()
      : undefined
  }
  return resumeFile ?? ''
}
