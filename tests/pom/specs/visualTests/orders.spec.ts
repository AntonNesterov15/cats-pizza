import { guestTest as test } from "../../../fixtures/app.fixture"

test('Orders page emty state', async({ordersPage}) => {
    await ordersPage.setupApiEmptyItems();
    await ordersPage.openPage();
    await ordersPage.assertHasCorrectPageViewEmptyOrdersList();
});

test('Orders page with item', async({ordersPage}) => {
    await ordersPage.setupApiWithOneItem();
    await ordersPage.openPage();
    await ordersPage.assertHasCorrectPageViewWithOneOrder();
});