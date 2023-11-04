import Image from 'next/image'
import { getTopTracks } from '@/services/fetchWebApi'
import { SpotifyTrack } from '@/typings'
import { getArtis } from '@/utils/filter'
import React from 'react'
import Link from 'next/link'
import SignIn from '../components/SignIn'
type User = {
  user: {
    name?: string
    email?: string
  }
}

export default async function Home() {
  const topTracks: SpotifyTrack[] = await getTopTracks()

  const artist = getArtis(topTracks)?.map((item) => item)

  const top = topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(', ')}`
  )

  return (
    <div className="rgba-[--background]">
      <div className="bg-blue-darker text-blue-primary">test</div>
      <SignIn />
      <kbd>test</kbd>
      <kbd>test</kbd>
      <kbd>test</kbd>
      <kbd>test</kbd>
      <div className="h-full border text-white">
        <div className="flex flex-col rounded border">
          {topTracks?.map(({ name, artists }, idx) => (
            <div key={idx}>
              <h1>{name}</h1>
              <div>By: {artists.map((artist) => artist.name).join(', ')}</div>
            </div>
          ))}
        </div>
        <ul>
          {artist?.map((item, idx) => (
            <React.Fragment key={idx}>
              <li>{item.name}</li>
              <div className="relative h-10 w-10">
                {/* <Image src={item.href} alt={item.name} fill /> */}
                <Link href={item.uri}>{item.uri}</Link>
              </div>
            </React.Fragment>
          ))}
        </ul>
        k
      </div>
    </div>
  )
}
