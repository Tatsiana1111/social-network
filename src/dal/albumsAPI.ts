import { placeholder } from './instance'
import { PlaceholderParamsType } from './profileAPI'

export const albumsAPI = {
   getAlbums(params: PlaceholderParamsType) {
      return placeholder.get<AlbumsType[]>('/albums', { params })
   },
   getPhotos(albumId: number, params: PlaceholderParamsType) {
      return placeholder.get<PhotosType[]>(`albums/${albumId}/photos`, { params })
   },
}
export type AlbumsType = {
   userId: number
   id: number
   title: string
}

export type PhotosType = {
   albumId: number
   id: number
   title: number
   url: string
   thumbnailUrl: string
}
