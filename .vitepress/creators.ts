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
  {
    name: 'Trouvaille',
    avatar: 'https://avatars.githubusercontent.com/u/60123398?s=400&u=9a4c8b9a58a926aa8d36f19d8eabdb5ab69f62f9&v=4',
    username: 'jack',
    title: '前端开发',
    desc: '研习前端工程化，可视化',
    links: [
      { type: 'twitter', icon: { svg: '<svg t="1714309785489" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="49389" width="200" height="200"><path d="M974.596546 505.960584c0 255.484843-207.107573 466.420477-462.596546 466.420477-255.488973 0-462.596546-210.935634-462.596546-466.420477C49.403454 250.471612 256.511027 43.359909 512 43.359909c255.488973 0 462.596546 207.111703 462.596546 462.600675z" fill="#FFE578" p-id="49390"></path><path d="M512 1003.352424c-272.155696 0-493.567909-223.130092-493.567909-497.39184C18.432091 233.804888 239.844304 12.388545 512 12.388545s493.567909 221.416343 493.567909 493.56791c0 274.265878-221.412214 497.39597-493.567909 497.395969zM512 74.331273C273.999524 74.331273 80.374818 267.960108 80.374818 505.960584c0 240.110658 193.628836 435.449113 431.625182 435.449113s431.625182-195.342584 431.625182-435.449113C943.625182 267.960108 750.000476 74.331273 512 74.331273z" fill="#6E6E96" p-id="49391"></path><path d="M511.797654 43.359909c-235.06852 0-429.176379 175.339213-458.698284 402.363438 1.094322 2.151477 1.726137 3.287094 1.726138 3.287094h250.603756l42.050853-180.088156 38.231051 180.088156h585.189462C942.832315 220.396353 747.997661 43.359909 511.797654 43.359909z" fill="#9C9CBC" p-id="49392"></path><path d="M250.056595 609.181945a80.286033 68.81424 90 1 0 137.628481 0 80.286033 68.81424 90 1 0-137.628481 0Z" fill="#6E6E96" p-id="49393"></path><path d="M633.329284 609.181945a80.286033 68.810111 90 1 0 137.620222 0 80.286033 68.810111 90 1 0-137.620222 0Z" fill="#6E6E96" p-id="49394"></path><path d="M1005.906529 479.981804H360.624363l-14.585447-68.694484-16.039037 68.694484H36.6639l-8.919752-15.939928s-0.825903-1.470107-2.242327-4.26166l-4.352509-8.543967 1.234725-9.506143C54.21434 196.965484 264.613136 12.388545 511.797654 12.388545c248.964339 0 459.548963 186.084211 489.847216 432.847519l4.261659 34.74574z m-595.112686-61.942727h523.659686C893.521775 219.801703 717.662243 74.331273 511.797654 74.331273 306.436866 74.331273 130.110698 219.987531 89.137649 418.039077h191.712741l36.463618-156.157615 60.456102 0.611168 33.023733 155.546447z" fill="#6E6E96" p-id="49395"></path></svg>' }, link: 'https://www.ws-blog.cn/' }
    ],
    nameAliases: ['Trouvaille', 'jack'],
    emailAliases: ['trouvaillewang@gmail.com']
  }
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
