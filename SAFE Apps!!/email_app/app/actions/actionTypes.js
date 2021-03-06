const ACTION_TYPES = {
  // Initializer
  AUTHORISE_APP: 'AUTHORISE_APP',
  GET_CONFIG: 'GET_CONFIG',
  REFRESH_EMAIL: 'REFRESH_EMAIL',
  SET_INITIALIZER_TASK: 'SET_INITIALIZER_TASK',
  STORE_NEW_ACCOUNT: 'STORE_NEW_ACCOUNT',

  // Create Account
  CREATE_ACCOUNT: 'CREATE_ACCOUNT',
  CREATE_ACCOUNT_ERROR: 'SET_CREATE_ACCOUNT_ERROR',

  // Mail Inbox
  PUSH_MAIL: 'PUSH_MAIL',
  MAIL_PROCESSING: 'MAIL_PROCESSING',
  CLEAR_MAIL_PROCESSING: 'CLEAR_MAIL_PROCESSING',
  SET_ACTIVE_MAIL: 'SET_ACTIVE_MAIL',

  CANCEL_COMPOSE: 'CANCEL_COMPOSE',
  PUSH_TO_INBOX: 'PUSH_TO_INBOX',
  PUSH_TO_ARCHIVE: 'PUSH_TO_ARCHIVE'
};

export default ACTION_TYPES;
