import { useParams, Link } from 'react-router-dom'

// id 값을 useParams 훅으로 받아오기
// 왜? App.jsx에서 /song/:id 경로로 설정했기 때문
// song을 접근하는 부분은 없어

const SongDetail = () => {
  const { id } = useParams()

  return (
    <div>
      <img 
        src={`https://picsum.photos/200/200?random=${id}`} 
        alt="노래 앨범 이미지"/>

      <Link to="/">
        돌아가기
      </Link>
    </div>
  )
}

export default SongDetail