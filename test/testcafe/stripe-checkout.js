// UI Test for https://checkout.stripe.dev/preview
import { ClientFunction, Selector, t  } from 'testcafe';
import CheckoutPage from './classes/checkout';
import Validators from './helpers/validators';

const checkoutPage = new CheckoutPage();
const validator = new Validators();
const replaceText = { replace: true };



fixture('Checkout Page')
  .page`https://checkout.stripe.dev/preview`;

// test('Submit successful transaction', async t => {
//   // test goes through submission form, clicks submit, stripe handles errors, checks if success modal
//   // appears after successful submission. No network responses tested in this scenario
//
//
//   // Notes: form automatically adds whitespace between card values so evaluate that in .eql assertions
//
// //   await t
// //     .switchToIframe('#checkout-demo')
// //     .typeText(await checkoutPage.input.email, 'FooBarBaz@gmail.com', replaceText)
// //     .expect(checkoutPage.input.email.value).eql('FooBarBaz@gmail.com')
// //     .typeText(checkoutPage.input.cardNumber,'4242 4242 4242 4242', replaceText)
// //     .expect(checkoutPage.input.cardNumber.value).eql('4242 4242 4242 4242')
// //     .typeText(checkoutPage.input.cardCvc, '999', replaceText)
// //     .expect(checkoutPage.input.cardCvc.value).eql('999')
// //     .typeText(checkoutPage.input.cardExpiry, '02/50', replaceText)
// //     .expect(checkoutPage.input.cardExpiry.value).eql('02 / 50')
// //     .typeText(checkoutPage.input.billingName, 'Foo Bar', replaceText)
// //     .expect(checkoutPage.input.billingName.value).eql('Foo Bar')
// //     .typeText(checkoutPage.input.billingPostalCode, '02115', replaceText)
// //     .expect(checkoutPage.input.billingPostalCode.value).eql('02115')
// //     .click(checkoutPage.submit.submitButton)
// //     .switchToMainWindow()
// //     .expect(checkoutPage.submit.restartButton.visible).ok();
// //
// // });
// //
// // test('Changing locations also changes currency.', async t => {
// //   await t
// //   .switchToIframe('#checkout-demo')
// //   .wait(500);
// //   let value = await validator.cart.cartTotal.innerText;
// //
// //   await t
// //     .switchToMainWindow()
// //     .click(checkoutPage.currency.currencySelectorDefault)
// //     .wait(200)
// //     .click(checkoutPage.currency.ausFiat)
// //     .expect(checkoutPage.currency.ausFiat.innerText).eql('Australia')
// //     .switchToIframe('#checkout-demo')
// //     .wait(500)
// //     //currency should not equal original selected US, should be A174.00
// //     .expect(validator.cart.cartTotal.innerText).notEql(value)
// //     .switchToMainWindow()
// //     .wait(500)
// //     .click(checkoutPage.currency.currencySelectorAus)
// //     .click(checkoutPage.currency.usFiat)
// //     .expect(checkoutPage.currency.usFiat.innerText).eql('United States');
// // });
// //
// // test('Test for declined transaction', async t => {
// //   await t
// //     .switchToIframe('#checkout-demo')
// //     .typeText(await checkoutPage.input.email, 'FooBarBaz@gmail.com', replaceText)
// //     .expect(checkoutPage.input.email.value).eql('FooBarBaz@gmail.com')
// //     .typeText(checkoutPage.input.cardNumber,'4000 0000 0000 0002', replaceText)
// //     .expect(checkoutPage.input.cardNumber.value).eql('4000 0000 0000 0002')
// //     .typeText(checkoutPage.input.cardCvc, '999', replaceText)
// //     .expect(checkoutPage.input.cardCvc.value).eql('999')
// //     .typeText(checkoutPage.input.cardExpiry, '02/50', replaceText)
// //     .expect(checkoutPage.input.cardExpiry.value).eql('02 / 50')
// //     .typeText(checkoutPage.input.billingName, 'Foo Bar', replaceText)
// //     .expect(checkoutPage.input.billingName.value).eql('Foo Bar')
// //     .typeText(checkoutPage.input.billingPostalCode, '02115', replaceText)
// //     .expect(checkoutPage.input.billingPostalCode.value).eql('02115')
// //     .click(checkoutPage.submit.submitButton)
// //     .wait(1000)
// //     .expect(checkoutPage.submit.declinedCardErrorMessage.visible).ok();
// // });
// //
// //
// // test('Test for Authorized User 3D Secure 2 transaction', async t => {
// //   await t
// //     .switchToIframe('#checkout-demo')
// //     .typeText(await checkoutPage.input.email, 'FooBarBaz@gmail.com', replaceText)
// //     .expect(checkoutPage.input.email.value).eql('FooBarBaz@gmail.com')
// //     .typeText(checkoutPage.input.cardNumber,'4000 0000 0000 3220', replaceText)
// //     .expect(checkoutPage.input.cardNumber.value).eql('4000 0000 0000 3220')
// //     .typeText(checkoutPage.input.cardCvc, '999', replaceText)
// //     .expect(checkoutPage.input.cardCvc.value).eql('999')
// //     .typeText(checkoutPage.input.cardExpiry, '02/50', replaceText)
// //     .expect(checkoutPage.input.cardExpiry.value).eql('02 / 50')
// //     .typeText(checkoutPage.input.billingName, 'Foo Bar', replaceText)
// //     .expect(checkoutPage.input.billingName.value).eql('Foo Bar')
// //     .typeText(checkoutPage.input.billingPostalCode, '02115', replaceText)
// //     .expect(checkoutPage.input.billingPostalCode.value).eql('02115')
// //     .click(checkoutPage.submit.submitButton)
// //     .wait(5000);
// //
// //   await t
// //     .switchToIframe('body > div:nth-child(1) > iframe')
// //     .expect(Selector('#challengeFrame').exists).ok()
// //     .switchToIframe('#challengeFrame')
// //     .expect(checkoutPage.submit.secureButton.visible).ok();
// // });

test('Update Cart quantities and checking that total is correct', async t => {
  await t
  .switchToIframe('#checkout-demo')
  .wait(500);
  let initialValue = await validator.cart.cartTotal.innerText;

  await t
    .click(validator.cart.itemQuantity)
    .typeText(checkoutPage.input.adjustQty, '2', replaceText)
    .click(checkoutPage.submit.updateQuantity)
    .wait(200)
    .expect(validator.cart.cartTotal).notEql(initialValue);

  let newValue = await validator.cart.cartTotal.innerText;

  initialValue = Number(initialValue.replace(/[^0-9\.-]+/g,""));
  newValue = Number(newValue.replace(/[^0-9\.-]+/g,""));
  // check if updated value is more than initialValue
  await t
    .wait(200)
    .expect(initialValue).lte(newValue);



});

test('Cant submit unless all required fields are filled', async t => {


});
