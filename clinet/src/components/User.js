import './../App.css'
export default function User({ user }) {
  return (
    <div>
      <div className="list">
        <h2>Name: {user.name}</h2>
        <h5>
          Age : {user.age}, Username: {user.username}
        </h5>
      </div>
    </div>
  )
}
