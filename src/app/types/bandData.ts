export type BandData = {
  id: number
  bandName: string
  imagesUrl: string[]
  description: string
  musics: Music[]
}

export type Music = {
  videoId: string
  musicName: string
  lyric: string
}
