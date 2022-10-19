const express = require('express') // 익스프레스 각종기능을 부를때 express 로 이름을 부르겠다 똑같이 쓰는것이 일반적임
const app = express() // 이걸 실행시켜서 이걸 app이라 부르겠다

const port = 3001 //서버의 포트를 3001번으로 지정

const mongoose = require('mongoose') // 몽고스를 사용할 수 있또록
const UserModel = require('./models/Users') //이건 내가만든거

const cors = require('cors') //백엔드 서버와 프런트엔드 서버가 상호 연동되기 위해
app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://newchan:newchan98~@cluster0.hcwyt5t.mongodb.net/mern?retryWrites=true&w=majority'
) //몽고DB 데이터를 가져오기 위해 연결

app.get('/', (req, res) => {
  res.send('<h1>서비스 준비중입니다...</h1>')
}) //루트 폴더를 요청하면 응답을 어캐하는지 쓰는거 리퀘스트 리스펀드
// res 응답 res.send 이걸 화면에 전송해라 이것임 콜백함수 사용자가 요청하면 응답하는게 이거 send는 텍스트

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello world,hi there' })
})

app.get('/doc', (req, res) => {
  res.json({ message: 'Document' })
})

app.get('/getUsers', (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
    }
  })
})

app.post('/createUser', async (req, res) => {
  const user = req.body // 바디에 데이터를 주면
  const newUser = new UserModel(user)
  await newUser.save() // 몽고디비 데이터 베이스에 저장

  res.json(user) // 응답
})

app.listen(port, () => {
  console.log('SERVER RUNS PERFECTLY port 3001')
}) //3001은 포트번호

//위에로 간단하지만 이게 서버임
