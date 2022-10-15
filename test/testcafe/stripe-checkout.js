// UI Test for https://checkout.stripe.dev/preview
import { ClientFunction } from 'testcafe';
//
// import CheckoutPage from './classes/checkout';
// import Validators from './helpers/validators';
//
// const checkoutPage = new CheckoutPage();
// const replaceText = { replace: true };


fixture('Checkout Page')
  .page`https://checkout.stripe.dev/preview`;

test('Navigate to the Docs', async t => {
    await t
        .navigateTo('https://checkout.stripe.dev/preview');
});
  //Verify that payment options are visible and credit card numbers are masked.
  // * Switching between desktop and mobile doesn't hide any fields and functions as expected.
  // * Test if changing domains via dropdown effects submission.
  // * Changing locations also changes currency.
  // * Item total is equal to the quantity X price.
  // * Able to check out with each Wallet(Apple/Google)
  // * Test authorization responses
  // * Test if on a secure connection
  // * Test each card type (success/authorization/decline)
  // * Verify you cant proceed until all required fields are filled
  // * Authenticate email is proper email address

test('iFrame is visible', async t => {

});

test('Changing locations also changes currency.', async t => {

});

test('Validate successful transaction', async t => {

});

test('Validate declined transaction', async t => {

});

test('Validate declined transaction', async t => {

});
