const TOKEN_EXPIRATION = '30d'

const ERROR_MESSAGES = {
  ALL_FIELDS_REQUIRED: 'All fields are required',
  INVALID_CREDENTIALS: 'Invalid credentials',
  USER_NOT_FOUND: 'User not found',
  USER_ALREADY_EXISTS: 'User already exists',
  INVALID_DATA: 'Invalid data',
  SERVER_ERROR: 'Server error. Please try again later.',
  REGISTRATION_ERROR: 'Error during registration:',
}

const SUCCESS_MESSAGES = {
  USER_REGISTERED: 'User registered successfully',
  USER_LOGGED_IN: 'User logged in successfully',
}

module.exports = {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  TOKEN_EXPIRATION,
}
