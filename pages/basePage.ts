import { Page } from "@playwright/test";
/**
 * Base page class that all page objects inherit from
 * Contains common methods and properties
 */
export class BasePage {
    protected page: Page;

    /**
     * Constructor for the base page
     * @param page - Playwright page object
     */
    constructor(page: Page) {
        this.page = page;
    }
}