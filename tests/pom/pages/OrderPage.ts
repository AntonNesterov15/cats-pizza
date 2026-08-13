import { expect, type Page } from '@playwright/test';

export class OrderPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.getByTestId('openOrdersButton').click();
  }

  async assertHasOrder() {
    await expect(this.page.getByTestId('orderList').getByRole('listitem').first()).toBeVisible();
  }
}