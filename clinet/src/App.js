import './App.css' //App.js 기 body 다
import { useState, useEffect } from 'react'
import axios from 'axios'
import User from './components/User'

function App() {
  const [listOfUsers, setListOfUsers] = useState([]) //초기값 빈 배열
  const [name, setName] = useState('') // 초기값 빈 문자열
  const [age, setAge] = useState(0) // 초기값 0
  const [username, setUsername] = useState('') // 초기값 빈 문자열

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers').then((response) => {
      //console.log(response)
      setListOfUsers(response.data)
      //console.log(listOfUsers)
    })
  }, [listOfUsers]) // 페이지를 띄우를 때 무조건 한번 실행하게 되있음 사용자 목록을
  // 제이슨 형채로 주는데 response.data에 사용자 목록이 있다
  // 그거를 setListOfUsers 로 하면 들어간다

  const createUser = () => {
    axios
      .post('http://localhost:3001/createUser', { name, age, username }) //사용자가 이용하는 데이터를  오브젝트로 넣어야함
      .then((response) => {
        alert('사용자 등록 성공!') //자스 알림창
        setListOfUsers([...listOfUsers, { name, age, username }])
      }) //추가 하는거 배열변수 새로추가하려면 ...하고 listOfUsers 하고 추가하는거 추가
  }

  return (
    //자바스크립트 코드 안에 html 이 들어감 이런걸 jxs 라고함
    <div className="App">
      <h1>사용자 목록</h1>
      <div className="grid">
        {listOfUsers.map((user) => {
          //배열 변수 map함수로 여러개의 사용자 목록이 있는데 각각 하나하나를 똑같은 내용을 실행하는거임 map(user)를 밑에 user.nmae user.age 로 씀
          return (
            //사용자 목록을 표시하는 기능
            <div>
              <User user={user} />
            </div>
          )
        })}
      </div>
      <div className="register">
        <input
          className="input"
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input"
          type="number"
          placeholder="Age"
          onChange={(event) => setAge(event.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)} //함수
        />
        <button className="button" onClick={createUser}>
          Create User
        </button>{' '}
      </div>
    </div>
  )
}

export default App
