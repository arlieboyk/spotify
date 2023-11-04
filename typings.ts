export type User = {
  name: string
  email: string
  image: string
}

export type SpotifyTrack = {
  album: {
    album_type: string
    artists: ArtistArray
    available_markets: Array<string>
    external_urls: { [key: string]: string }
    href: string
    id: string
    images: Array<any>
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
  }
  artists: ArtistArray
  available_markets: Array<string>
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: { isrc: string }
  external_urls: { [key: string]: string }
  href: string
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: string | null
  track_number: number
  type: string
  uri: string
}

type SpotifyArtist = {
  external_urls: { [key: string]: string }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export type ArtistArray = Array<SpotifyArtist>
