
import { Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/basePage';

export class EditCard extends BasePage {

    readonly editCard: Locator
    readonly card: Locator
    readonly workingDropDown: Locator
    readonly antModal: Locator
    readonly doneDropDown: Locator
    readonly carolWilliamsDropDown: Locator
    readonly assigneDropDown: Locator
    readonly calenderInput: Locator
    readonly saveChangesButton: Locator
    readonly savingTicket: Locator

    readonly movedTicket: Locator
    constructor(page: Page) {
        super(page)
        this.antModal = page.locator("(//div[@class='ant-modal-content'])[2]")


        this.card = page.locator("//div[@data-testid='drop-zone-WORKING']//div[@role='button']")

        this.editCard = page.getByTestId('ticket-TICKET-0003').getByRole('button', { name: 'edit' })
        this.workingDropDown = page.locator("span.ant-select-selection-item[title='WORKING']")
        this.doneDropDown = page.locator("//div[@class='ant-select-item-option-content' and text()='DONE']")
        this.carolWilliamsDropDown = page.locator("//span[@title='Carol Williams']")
        this.assigneDropDown = page.locator("//div[@class='ant-select-item-option-content' and text()='Bob Smith']")
        this.calenderInput = page.locator("//input[@id='deadline']")
        this.saveChangesButton = page.locator("//span[text()='Save Changes']")
        this.savingTicket = page.locator("//span[text()='Saving ticket...']")
        this.movedTicket = page.locator("//div[text()='Moved \"Email notifications not being sent\" to DONE']")
    }


    async clickOnEditCard() {
        await this.card.hover()
        await this.editCard.click()

    }

    async changeWorkingToDone() {
        await this.workingDropDown.click()
        await this.doneDropDown.click()
    }

    async changeAssigneTo() {
        await this.carolWilliamsDropDown.click()
        await this.assigneDropDown.click()
    }

    async changeDeadline() {
        await this.calenderInput.click()
        await this.calenderInput.clear()
        await this.calenderInput.fill("2030-10-10")

    }

    async saveChangesButtonInForm() {
        await this.saveChangesButton.click()

    }
}