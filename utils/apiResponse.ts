
import { Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';


export class ApiResponse extends BasePage {

    constructor(page: Page) {
        super(page)
    }
    async checkingApiResponse(url: string): Promise<string> {

        try {
            const response = await this.page.request.get(url);
            return response.ok() ? "reachable" : "unreachable"
        }
        catch (e) {
            return "unreachable"
        }

    }
}