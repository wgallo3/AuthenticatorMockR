export const CONSTANTS = {
  LOCAL_AUTH_DATA_KEY: 'local_auth_data_key',
  TAG_TYPE_DNS: 15001,
  TAG_TYPE_INBOX: 15003,
  TAG_TYPE_EMAIL_ARCHIVE: 15004,
  SERVICE_NAME_POSTFIX: "@email",
  MD_KEY_EMAIL_INBOX: "email_inbox",
  MD_KEY_EMAIL_ARCHIVE: "email_archive",
  MD_KEY_EMAIL_ID: "email_id",
  MD_KEY_EMAIL_ENC_SECRET_KEY: "__email_enc_sk",
  MD_KEY_EMAIL_ENC_PUBLIC_KEY: "__email_enc_pk",
  TOTAL_INBOX_SIZE: 100,
  EMAIL_ID_MAX_LENGTH: 100,
  HOME_TABS: {
    INBOX: 'INBOX',
    SAVED: 'SAVED'
  },
  MAIL_CONTENT_LIMIT: 150,
  DATE_FORMAT: 'h:MM-mmm dd'
};

export const APP_STATUS = {
  AUTHORISING: 'AUTHORISING',
  AUTHORISATION_FAILED: 'AUTHORISATION_FAILED',
  AUTHORISED: 'AUTHORISED',
  READING_CONFIG: 'READING_CONFIG',
  READY: 'READY'
}

export const MESSAGES = {
  INITIALIZE: {
    AUTHORISE_APP: 'Authorising Application',
    CHECK_CONFIGURATION: 'Checking configuration',
    FETCH_CORE_STRUCTURE: 'Fetching Core Structure',
    CREATE_CORE_STRUCTURE: 'Creating Core Structure',
    WRITE_CONFIG_FILE: 'Creating new configuration',
  },
  EMAIL_ALREADY_TAKEN: 'Email ID already taken. Please try again',
  EMAIL_ID_TOO_LONG: 'Email ID is too long',
  EMAIL_ID_NOT_FOUND: 'Email ID not found on the network',
  AUTHORISATION_ERROR: 'Failed to authorise',
  CHECK_CONFIGURATION_ERROR: 'Failed to retrieve configuration'
};
