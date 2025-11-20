import { Routes, Route } from 'react-router-dom'
import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'

const songs = [
  {
    "id": "69149cde71914f6a424fd013",
    "title": "Golden",
    "singer": "HUNTR/X",
    "rating": 3,
    "lyrics": "I'm done hidin', now I'm shinin' like I'm born to be\nWe dreamin' hard, we came so far, now I'll believe\nWe're goin' up, up, up, it's our moment\nYou know together we're glowing\nGonna be, gonna be golden\nOh, up, up, up with our voices\n영원히 깨질 수 없는\nGonna be, gonna be golden"
  },
  {
    "id": "6914a3a771914f6a424fd017",
    "title": "Shine Like Stars",
    "singer": "LUMI",
    "rating": 4,
    "lyrics": "밤 하늘에 너를 그려\n별빛 속에 너를 비춰\n우리 둘의 시간은 빛나\n조용히 다가온 설렘\n너의 손을 꼭 잡고서\n함께 걷는 이 길 위에서\n수줍은 나의 고백\n달빛 아래 속삭임\n우리 꿈은 반짝여\n끝없이 shine like stars"
  },
  {
    "id": "6914a3a771914f6a424fd018",
    "title": "Blue Ocean",
    "singer": "SEAVEN",
    "rating": 5,
    "lyrics": "푸른 바다 저 끝까지\n너와 함께 떠나볼래\n출렁이는 파도 위로\n자유롭게 날아올라\n서로 닮은 미소 사이\n파도소리 속 비밀\n부드러운 바람 따라\n행복을 실어 보내\n눈부신 빛 가득해\n우리의 blue ocean"
  },
]

function App() {
  // 내가 정의해놓은 경로가 2개가 있다고 선언
  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
