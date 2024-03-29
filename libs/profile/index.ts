import { get } from '@/libs/json'
import {
  getFilePath,
  getImagePath,
  getProfileImageWidth,
  getProfileImageHeight,
} from '@/libs/config'
import type { JsonObject } from '@/libs/json/types'
import type {
  BrandTitle,
  ResumeFile,
  Profile,
  Social,
  Experience,
  TechnologySkill,
  Skill,
  Education,
  Contact,
} from './types'

const data: JsonObject = require('@/data.json')

export const BRAND_TITLE_KEY = 'brandTitle'
export const FILES_KEY = 'files'
export const RESUME_FILE_KEY = 'resume'
export const IMAGE_KEY = 'image'
export const FIRSTNAME_KEY = 'firstname'
export const LASTNAME_KEY = 'lastname'
export const SOCIALS_KEY = 'socials'
export const JOB_TITLE_KEY = 'jobTitle'
export const ABOUT_ME_KEY = 'aboutMe'
export const EXPERIENCES_KEY = 'experiences'
export const SKILLS_KEY = 'skills'
export const SKILL_TECHNOLOGIES_KEY = 'technologies'
export const EDUCATIONS_KEY = 'educations'
export const CONTACTS_KEY = 'contacts'

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

export const getImageProfile = (): string => {
  const image = get(data, IMAGE_KEY)
  return image ? [getImagePath(), image].join('/').trim() : ''
}

export const getFullName = (): string => {
  const firstname = get(data, FIRSTNAME_KEY)
  const lastname = get(data, LASTNAME_KEY)
  return [firstname, lastname].join(' ').trim()
}

export const getSocials = (): Social[] => {
  return get(data, SOCIALS_KEY) ?? []
}

export const getJobTitle = (): string => {
  return get(data, JOB_TITLE_KEY) ?? ''
}

export const getAboutMe = (): string[] => {
  return get(data, ABOUT_ME_KEY) ?? []
}

export const getProfile = (): Profile => {
  return {
    profileImage: getImageProfile(),
    profileImageWidth: getProfileImageWidth(),
    profileImageHeight: getProfileImageHeight(),
    fullName: getFullName(),
    jobTitle: getJobTitle(),
    socials: getSocials(),
    aboutMe: getAboutMe(),
  }
}

export const getExperiences = (): Experience[] => {
  return get(data, EXPERIENCES_KEY) ?? []
}

export const getSkill = (): Skill => {
  return get(data, SKILLS_KEY) ?? undefined
}

export const getTechnologySkills = (): TechnologySkill[] => {
  const skills = getSkill()
  if (skills) {
    const technologies = get(skills, SKILL_TECHNOLOGIES_KEY) ?? []
    return technologies.map(({ image, title }: TechnologySkill) => {
      return {
        image: [getImagePath(), image].join('/').trim(),
        title,
      }
    })
  }
  return []
}

export const getEducations = (): Education[] => {
  return get(data, EDUCATIONS_KEY) ?? []
}

export const getContacts = (): Contact[] => {
  const contacts = get(data, CONTACTS_KEY) ?? []
  return contacts.map(({ image, ...contact }: Contact) => {
    return {
      image: [getImagePath(), image].join('/').trim(),
      ...contact,
    }
  })
}
