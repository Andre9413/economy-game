import { useEffect, useState } from 'react'

export default function CompanyList() {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetch('/companies')
      .then(res => res.json())
      .then(setCompanies)
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h2>Companies</h2>
      <ul>
        {companies.map(c => (
          <li key={c.id}>
            {c.name} (Owner: {c.ownerId}, Balance: {c.balance})
          </li>
        ))}
      </ul>
    </div>
  )
}