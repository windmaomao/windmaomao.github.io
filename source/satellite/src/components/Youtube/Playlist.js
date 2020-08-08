import React, { useState, useEffect } from "react"
import { Flex, Box, Text, Embed } from "theme-ui"

const formatDate = str => {
  const d = new Date(str)
  return d.toLocaleDateString()
}

export default ({ api, playlistId }) => {
  if (!playlistId) return null

  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetch() {
      const res = await api.fetch(
        `/playlistItems?part=snippet&playlistId=${playlistId}`
      )
      if (res) setVideos(res.items)
    }
    fetch()
  }, [setVideos, api, playlistId])

  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
      }}
    >
      {videos.map(v => (
        <Box
          key={v.id}
          sx={{
            flex: '0 1 320px',
            margin: '1rem',
          }}
        >
          <small>{formatDate(v.snippet.publishedAt)}</small>
          <Text sx={{ margin: '0.5rem 0' }}>
            {v.snippet.title}
          </Text>
          <Embed src={`https://www.youtube.com/embed/${v.snippet.resourceId.videoId}`} />
        </Box>
      ))}
    </Flex>
  )
}
