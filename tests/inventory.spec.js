import { test, expect } from '../fixtures/pages';
import { users } from '../data/users';

test.describe('cart', () => {

    test.beforeEach(async ({loginPage}) => {
        await loginPage.goto();
        await loginPage.login( users.standard.username, users.standard.password);
    });
    test('add item to cart', async ({inventoryPage}) =>{
        await inventoryPage.addItemToCart();
        await expect(inventoryPage.loc.cartBadge).toHaveText('1');
    });
    
    test('remove item from cart', async ({inventoryPage}) =>{
        await inventoryPage.addItemToCart();
        await inventoryPage.removeItemFromCart();
        await expect(inventoryPage.loc.cartBadge).toHaveCount(0);
    });
})

