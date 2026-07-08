import { Page } from '@playwright/test';

// Base page extending this class will inherit common actions and properties for all page objects.
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  async open(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('domcontentloaded');
  }

  async click(selector: string): Promise<void> {
    await this.page.click(selector);
  }

  async type(selector: string, value: string): Promise<void> {
    await this.page.fill(selector, value);
  }
}
