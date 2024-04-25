import React from 'react'
import { useParams } from 'react-router-dom'


const DetailBerita = () => {
  const {slug} = useParams()
  console.log(slug)
  return (
    <div>DetailBerita</div>
  )
}

export default DetailBerita