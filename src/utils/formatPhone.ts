export const formatPhone = (phone: string) => {
  const groups = phone.match(/^(\d{2})(\d{2})(\d{5})(\d{4})$/)

  if (groups) {
    const numeroFormatado = `+${groups[1]} (${groups[2]}) ${groups[3]}-${groups[4]}`
    return numeroFormatado
  } else {
    return phone
  }
}
