export async function signup(username, email, password) {
  const resSignUp = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      username,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const dataSignUp = await resSignUp.json()
  if (!resSignUp.ok) {
    throw dataSignUp.message
  }
}

export async function login(username, password, router) {
  const resLogin = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const dataLogin = await resLogin.json()
  if (!resLogin.ok) {
    throw dataLogin.message
  }
  router.push('/timeline')
  router.refresh()
}
