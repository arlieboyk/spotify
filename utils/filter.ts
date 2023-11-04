import { ArtistArray, SpotifyTrack } from '@/typings'

export const getArtis = (data: SpotifyTrack[]) => {
  const extractArtis = data?.map((item, idx) => item.album.artists)

  return extractArtis?.flatMap((item) => item)
}
