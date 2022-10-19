const mongoose = require('mongoose') // modules에 설치되있는 몽고스를 불러옴

const UserSchema = new mongoose.Schema({
  // 스키마
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
})

const UserModel = mongoose.model('users', UserSchema) // 위에 만든 스키마들을 users 라는이름으로 저장 mongoose.model 함수 부르기 전에 스키마에 원하는걸 다 넣고 불러야함

module.exports = UserModel // 모델을 외부에서 사용할 수 있도록 허가한다는 것
