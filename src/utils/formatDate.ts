export const formatDate = (date: string) => {
  const dateSplitted = date.split('T')[0].split('-')

  const day = dateSplitted[2]
  const month = dateSplitted[1]
  const year = dateSplitted[0]

  return `${day}/${month}/${year}`
}
