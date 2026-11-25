import { test, expect } from '../fixtures/pages';
import { users } from '../data/users';

test('success login', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login( users.standard.username, users.standard.password)
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
});

 test('failed login', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login(users.invalid.username, users.invalid.password)
  await expect(loginPage.loc.error).toContainText(
    'Epic sadface: Username and password do not match any user in this service'
  )
});