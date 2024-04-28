import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Table } from './components/table'
import { Employee } from './types/employee'
import { getEmployees } from './utils/getEmployees'

function App() {
  const [employees, setEmployees] = useState<Employee[]>([])
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)

  const filteredEmployees = employees.filter(({ name, job, phone }) => {
    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      job.toLowerCase().includes(search.toLowerCase()) ||
      phone.includes(search)
    )
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees()

        setEmployees(data)
        setError(false)
      } catch (error) {
        console.error(error)
        setError(true)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Header />

      <main className="container">
        <div className="content">
          <div className="search-header">
            <h1>Funcionários</h1>

            <div className="input-container">
              <input
                type="text"
                className="search-input"
                value={search}
                placeholder="Pesquisar"
                onChange={(e) => setSearch(e.target.value)}
              />

              <span className="search-icon" />
            </div>
          </div>

          {!filteredEmployees ? (
            <div>
              <h2>Carregando...</h2>
            </div>
          ) : (
            <Table employees={filteredEmployees} error={error} />
          )}

          {!error && filteredEmployees?.length === 0 && (
            <div>
              <h2>Nenhum funcionário encontrado</h2>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default App
