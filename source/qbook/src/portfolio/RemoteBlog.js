import React, { useState, useEffect } from 'react'
import { Blog } from '../components'

const RemoteBlog = ({ url }) => {
  const [src, setSrc] = useState('')

  useEffect(() => {
    fetch(url).then(res => {
      if (res.ok) return res.text()
      return ''
    }).then(res => {
      setSrc(res)
    })
  }, [url, setSrc])

  return <Blog src={src} />
}

export default RemoteBlog
