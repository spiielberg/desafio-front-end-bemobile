import { Fragment, HTMLAttributes, useEffect, useState } from 'react'
import arrowDownIcon from '../assets/chevron-down-icon.svg'
import arrowUpIcon from '../assets/chevron-up-icon.svg'
import { Employee } from '../types/employee'
import { formatDate } from '../utils/formatDate'
import { formatPhone } from '../utils/formatPhone'

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  employees: Employee[]
  error: boolean
}

export const Table = ({ employees, error }: TableProps) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  const [itemStates, setItemStates] = useState<{ [key: number]: boolean }>({})

  const toggleItemState = (itemId: number) => {
    setItemStates((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }))
  }

  useEffect(() => {
    isDesktop && setItemStates({})
  }, [isDesktop])

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <table className="table">
      <thead className="table-header">
        <tr className="tr">
          <th className="th" style={{ width: 0 }}>
            FOTO
          </th>

          <th className="th">NOME</th>

          <th className="th table-mobile" style={{ width: 0 }}>
            <div className="table-point" />
          </th>

          <th className="th table-desktop">CARGO</th>

          <th className="th table-desktop">DATA DE ADMISSÃO</th>

          <th className="th table-desktop">TELEFONE</th>
        </tr>
      </thead>

      <tbody>
        {error && (
          <tr className="tr">
            <td className="td text-center" colSpan={5}>
              <h2>Erro ao carregar os dados</h2>
            </td>
          </tr>
        )}

        {employees.map(
          ({ id, name, job, admission_date: admissionDate, phone, image }) => {
            return (
              <Fragment key={id}>
                <tr className={!itemStates[id] ? 'tr' : ''}>
                  <td className="td">
                    <img src={image} alt={name} className="employee-image" />
                  </td>

                  <td className="td center-mobile">{name}</td>

                  <td className="td table-mobile">
                    <button
                      className="arrow-button"
                      onClick={() => toggleItemState(id)}
                    >
                      <img
                        src={itemStates[id] ? arrowDownIcon : arrowUpIcon}
                        alt="Arrow icon"
                        className="arrow"
                      />
                    </button>
                  </td>

                  <td className="td table-desktop">{job}</td>

                  <td className="td table-desktop">
                    {formatDate(admissionDate)}
                  </td>

                  <td className="td table-desktop">{formatPhone(phone)}</td>
                </tr>

                {itemStates[id] && (
                  <tr className="tr">
                    <td className="td-employee-info" colSpan={3}>
                      <div className="employee-info-block">
                        <div className="employee-info-line">
                          <h2>Cargo</h2>
                          <h3>{job}</h3>
                        </div>
                        <div className="employee-info-line">
                          <h2>Data de admissão</h2>
                          <h3>{formatDate(admissionDate)}</h3>
                        </div>
                        <div className="employee-info-line">
                          <h2>Telefone</h2>
                          <h3>{formatPhone(phone)}</h3>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
            )
          },
        )}
      </tbody>
    </table>
  )
}
