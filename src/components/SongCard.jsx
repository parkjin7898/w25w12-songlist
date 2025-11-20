import { Link } from 'react-router-dom'

// song prop으로 song 객체 받기
// props.song 대신 song 바로 사용 가능
export default function SongCard({ song }) {
  return (
    <Link to={`/song/${song.id}`} >
      <img 
        src={`https://picsum.photos/200/200?random=${song.id}`} 
        alt={`${song.title} 앨범 이미지`}
      />
      <div>{song.title}</div>
    </Link>
  )
}