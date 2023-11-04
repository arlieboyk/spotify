type Params<T> = {
  endpoint: string
  method: 'POST' | 'GET' | 'DELETE'
  body?: T
}

const fetchWebApi = async <T>({ endpoint, method, body }: Params<T>) => {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${process.env.TOKEN}`,
    },
    method,
    body: JSON.stringify(body),
  })
  return await res.json()
}

export const getTopTracks = async () => {
  return (
    await fetchWebApi({
      endpoint: 'v1/me/top/tracks?time_range=short_term&limit=5',
      method: 'GET',
    })
  )?.items as any
}

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );
