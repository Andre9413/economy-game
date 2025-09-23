import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/users')
      .then(res => res.json())
      .then(setUsers)
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.username} ({u.email})</li>
        ))}
      </ul>
    </div>
  )
}