export function validateInput(name: string) {
  return !(name == null || name.length < 2 || name.length > 15);
}

export function validateUsername(name: string): boolean {
  return !(name == null || name.length < 5 || name.length > 15);
}

export function validateEmail(email: string) {
  // eslint-disable-next-line no-useless-escape
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function validatePassword(password: string) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(password);
}
