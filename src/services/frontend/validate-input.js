export function validateUsername(username) {
  return !(
    username.length < 3 ||
    username.length > 20 ||
    !username.trim() ||
    !/^[a-zA-Z0-9_\.-]+$/.test(username)
  )
}

export function validateEmail(email) {
  return /^([a-z0-9][\.-]?)*[a-z0-9]@([a-z0-9][\.-]?)*[a-z0-9]\.[a-z]{2,3}$/.test(
    email,
  )
}
