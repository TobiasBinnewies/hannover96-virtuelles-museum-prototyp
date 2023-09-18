export function validateUsername(username) {
  if (
    username.length < 3 ||
    username.length > 20 ||
    !username.trim() ||
    !/^[a-zA-Z0-9_\.-]+$/.test(username)
  ) {
    return false
  }
  return true
}

export function validateEmail(email) {
  return /^([a-z0-9][\.-]?)*[a-z0-9]@([a-z0-9][\.-]?)*[a-z0-9]\.[a-z]{2,3}$/.test(
    email,
  )
}
