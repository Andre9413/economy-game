import { useState } from 'react'
import UserList from './components/UserList'
import CompanyList from './components/CompanyList'
import NavigationBottom from "./components/navigation/bar/NavigationBottom"
import NavigationHeader from './components/navigation/bar/NavigationHeader'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [view, setView] = useState('users')

  return (
      <>
          <div>
              <NavigationHeader />
          </div>
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
            <NavigationBottom />
        </div>
      </>
  )
}

export default App