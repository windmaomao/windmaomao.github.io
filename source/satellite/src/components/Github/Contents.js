import React, { useEffect, useState, useContext } from "react"
import { Spinner, Text, Box } from "theme-ui"
import {
  AiOutlineFolderOpen,
  AiOutlineFileText,
  AiOutlineGithub
} from "react-icons/ai"
import GhContext from './GhContext'
import { ghAuth } from '../../utils'

const isDir = item => item.type === 'dir'

export default ({ repo, onUrl }) => {
  if (!repo) return null

  const [site, setSite] = useContext(GhContext)
  const [contents, setContents] = useState([])
  const [loading, setLoading] = useState(false)
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(`${repo}/contents/`)
  }, [repo])

  useEffect(() => {
    async function fetch() {
      try {
        setLoading(true)
        const res = await ghAuth.fetch(`/repos/${path}`)
        setContents(res)
        setSite({ ...site, title: repo })
      }
      finally {
        setLoading(false)
      }
    }
    fetch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path])

  const onFile = item => () => {
    if (isDir(item)) {
      setPath(`${repo}/contents/${item.path}`)
    } else {
      onUrl(item.download_url)
    }
    console.log(item)
  }

  const icon = item => (
    isDir(item) ? <AiOutlineFolderOpen /> : <AiOutlineFileText />
  )

  const repoParts = repo.split('/')

  return (
    <Box
      p={1}
      bg='#fafafa'
    >
      <Text
        sx={{ fontSize: 2 }}
      >
        <AiOutlineGithub /><br />{repoParts[1]}
      </Text>
      <br />
      {contents.map(item => (
        <div key={item.name} title={item.type}>
          <Text
            sx={{
              fontSize: 0,
              cursor: 'pointer'
            }}
            p={0.5}
            onClick={onFile(item)}
          >
            {icon(item)}&nbsp;{item.name}
          </Text>
        </div>
      ))}
      {loading && <Spinner size={14} />}
    </Box>
  )
}
