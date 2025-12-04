import axios from 'axios'

const api = axios.create({
  // API 서버의 기본 URL 설정
  baseURL: 'https://w25w11-mongodb-backend-zu1n.onrender.com/api/songs',
})

// 노래 목록을 가져오는 함수
// 비동기 함수로 정의
export const getSongList = async () => {
  // GET 요청 보내기
  // await로 응답 기다리기
  const res = await api.get(``)
  // 13번 라인이 완료되면 res 변수에 응답 객체가 할당됨
  return res.data
}

// 특정 노래의 상세 정보를 가져오는 함수
// id 매개변수로 노래 ID 받기
// 비동기 함수로 정의
export const getSongDetail = async (id) => {
  // GET 요청 보내기
  // await로 응답 기다리기
  const res = await api.get(`/${id}`)
  // 24번 라인이 완료되면 res 변수에 응답 객체가 할당됨
  return res.data
}