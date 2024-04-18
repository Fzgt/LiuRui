export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: '风中告退',
    avatar: '',
    username: 'Fzgt',
    title: '全栈开发者',
    desc: '专注于前端基建, CI/CD, DevOps, 性能优化',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/Fzgt' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/fzgt1895754' },
    ],
    nameAliases: ['风中告退', 'Fzgt', '前端之神', 'Roger'],
    emailAliases: ['fzgt32@gmail.com'],
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
