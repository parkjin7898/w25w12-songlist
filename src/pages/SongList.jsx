import { Link } from 'react-router-dom'
import SongCard from '../components/SongCard.jsx'

// 중괄호로 destructuring 해서 songs props 받기
// props.songs 대신 songs 바로 사용 가능
export default function SongList({ songs }) {
  return (
    <div className = 'p-6'>
      {/* 적응형 디자인이 된것 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {songs.map(song => (
        <SongCard key={song.id} song={song} />
      ))}
      </div>
    </div>
  )
}
// songs 배열을 map 돌면서 SongCard 컴포넌트 렌더링
// key prop으로 song.id 전달
// song prop으로 song 객체 전달
// 여기서 key는 SongCard 내부에서 사용 불가