import { useState } from 'react'
import UserList from './components/UserList'
import CompanyList from './components/CompanyList'
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [view, setView] = useState('users')

  return (
      <>
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
          <h1>Game Sim Starter UI</h1>
          <nav style={{ marginBottom: '20px' }}>
            <button onClick={() => setView('users')}>Users</button>
            <button onClick={() => setView('companies')}>Companies</button>
          </nav>
          {view === 'users' && <UserList />}
          {view === 'companies' && <CompanyList />}
        </div>
        <div>
            <Navigation />
        </div>
      </>
  )
}

export default App