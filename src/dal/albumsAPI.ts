import { placeholder } from './instance'
import { PlaceholderParamsType } from './profileAPI'

export const albumsAPI = {
   getAlbums(params: PlaceholderParamsType) {
      return placeholder.get<AlbumsType[]>('/albums', { params })
   },
}
export type AlbumsType = {
   userId: number
   id: number
   title: string
}
