export const loginLocators = (page) => ({
    user: page.locator('[data-test="username"]'),
    password: page.locator('[data-test="password"]'),
    enter: page.locator('[data-test="login-button"]'),
    error: page.locator('[data-test="error"]'),
})