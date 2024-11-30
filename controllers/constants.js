const TOKEN_EXPIRATION = '30d'

const ERROR_MESSAGES = {
  allFieldsRequired: 'All fields are required',
  invalidCredentials: 'Invalid credentials',
  // userNotFound: 'User not found', //TODO: возможно не понадобится
  userAlreadyExists: 'User already exists',
  invalidData: 'Invalid data',
  serverError: 'Server error. Please try again later.',
  registrationError: 'Error during registration:',
  loginError: 'Error during login:',

  noteTextRequired: 'Note text is required',
  noteNotCreated: 'Note not created',
  notesNotFound: 'Notes not found',
  noteNotFound: 'Note not found',
  noteNotArchived: 'Note not archived',
  noteNotUpdated: 'Note not updated',

  trashError: 'Error getting trash items',
}

const SUCCESS_MESSAGES = {
  userRegistered: 'User registered successfully',
  userLoggedIn: 'User logged in successfully',
}

module.exports = {
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  TOKEN_EXPIRATION,
}
