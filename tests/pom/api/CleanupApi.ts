import {APIRequestContext} from '@playwright/test'

export class CleanupApi {
  constructor(
    private request: APIRequestContext,
    private apiURL: string = 'http://localhost:3001/api',
  ) {
    this.request = request;
  }

  async deleteOrdersByEmail(email: string) {
    await this.request.delete(`${this.apiURL}/orders/by-email`, {
      data: { email: email },
    });
  }

  async deleteUserByEmail(email: string) {
    await this.request.delete(`${this.apiURL}/users/by-email`, {
      data: { email: email },
    });
  }
}
