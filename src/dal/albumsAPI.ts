import { placeholder } from './instance'

export const albumsAPI = {
   getAlbums() {
      return placeholder.get<AlbumsType>('/albums')
   },
}
export type AlbumsType = {
   userId: number
   id: number
   title: string
}
