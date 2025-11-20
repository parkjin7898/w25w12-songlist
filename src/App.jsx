import { Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import SongList from './pages/SongList.jsx'
import SongDetail from './pages/SongDetail.jsx'
import { getSongList } from './api/songApi.js'

function App() {
  // // songs 상태 관리
  // // songs를 빈 배열로 초기화 후 setSongs로 업데이트 가능
  // const [songs, setSongs] = useState([])

  // // 컴포넌트가 처음 렌더링될 때 한 번만 실행
  // // 빈 의존성 배열([]) 덕분에 마운트 시에만 실행됨
  // useEffect(() => {
  //   const fetchSongs = async () => {
  //     try {
  //       // 내가 정의한 getSongList 함수로 노래 목록 가져오기
  //       const data = await getSongList()
  //       // 가져온 데이터로 songs 상태 업데이트
  //       setSongs(data)
  //     } catch (err) {
  //       console.error("Failed to fetch songs:", err)
  //     }
  //   }

  //   fetchSongs()
  // }, [])

  // React Query를 사용하여 노래 목록 가져오기
  // 캐싱 할 때 'songs'라는 키 사용
  // getSongList 함수를 데이터 패칭 함수로 사용
  // getSongList로 가져온 데이터를 songs 변수에 할당

  // data의 songs랑 queryKey의 songs는 별개임
  // 어떻게 별개인가? data는 서버에서 가져온 데이터고 queryKey는 캐싱 키이기 때문

  // 캐싱을 어떤식으로 하는가? queryKey를 기준으로 데이터를 구분해서 캐싱함
  // 예를 들어, queryKey가 ['songs']인 경우, 이 키에 해당하는 데이터를 캐시에 저장
  // 나중에 동일한 queryKey로 데이터를 요청하면, 캐시된 데이터를 반환하여 네트워크 요청을 줄임

  // 요청은 어디서 하는가? queryFn에서 정의한 getSongList 함수에서 함
  // 요청을 언제 하는가? 컴포넌트가 마운트될 때 자동으로 요청을 함

  // 실행 순서 정리 : 먼저 컴포넌트가 렌더링 -> useQuery 훅이 실행
  // -> queryKey와 queryFn이 설정 -> queryFn(getSongList)이 호출되어 데이터 요청
  // -> 데이터가 반환되면 songs 변수에 할당 및 컴포넌트 재렌더링
  const { data: songs, isLoading, isError, error } = useQuery({
    queryKey: ['songs'],
    queryFn: getSongList
  })

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (isError) {
    return <p className="text-center mt-10">오류 발생: {error.message}</p>
  }

  // 내가 정의해놓은 경로가 2개가 있다고 선언
  return (
    <Routes>
      <Route path="/" element={<SongList songs={songs} />} />
      <Route path="/song/:id" element={<SongDetail songs={songs} />} />
    </Routes>
  )
}

export default App
