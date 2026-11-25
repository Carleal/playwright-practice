import { inventoryLocators } from "../locators/inventoryLocator";

export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.loc = inventoryLocators(page);
    }

    async goto() {
        await this.page.goto('/');
    }

    async addItemToCart() {
        await this.loc.addBackpack.click();
    }

    async removeItemFromCart() {
        await this.loc.removeBackpack.click();
    }
}