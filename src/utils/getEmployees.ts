import { Employee } from '../types/employee'

export async function getEmployees(): Promise<Employee[]> {
  const response = await fetch('http://localhost:3333/employees')

  if (response.status === 200) {
    throw new Error('Something went wrong')
  }

  const data = await response.json()

  return data
}
