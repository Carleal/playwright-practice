export const users = {
    standard: {
      username: process.env.STANDARD_USER,
      password: process.env.USER_PASSWORD,
    },
    invalid: {
      username: 'abc',
      password: 'abc',
    },
  };