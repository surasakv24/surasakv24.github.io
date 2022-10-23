export type BrandTitle = string
export type ResumeFile = string
export type Social = {
  link: string
  title: string
  image: string
}

export type Profile = {
  profileImage: string
  profileImageWidth: number | string
  profileImageHeight: number | string
  fullName: string
  jobTitle: string
  socials?: Social[]
  aboutMe?: string[]
}

export type UseTechnology = {
  image: string
  title: string
}

export type Experience = {
  title: string
  start: string
  end: string
  company: string
  location: string
  link: string
  details?: string[]
  useTechnologies?: UseTechnology[]
}
