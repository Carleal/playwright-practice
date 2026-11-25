export const inventoryLocators = (page) => ({
    addBackpack: page.locator('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeBackpack: page.locator('[data-test="remove-sauce-labs-backpack"]'),
    cart: page.locator('[data-test="shopping-cart-link"]'),
    cartBadge: page.locator('[data-test="shopping-cart-badge"]'),
});