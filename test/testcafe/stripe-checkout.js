// UI Test for https://checkout.stripe.dev/preview
import { ClientFunction, Selector, t  } from 'testcafe';
import CheckoutPage from './classes/checkout';
import Validators from './helpers/validators';
//
const checkoutPage = new CheckoutPage();
const validator = new Validators();
const replaceText = { replace: true };



fixture('Checkout Page')
  .page`https://checkout.stripe.dev/preview`;

test('Submit successful transaction', async t => {
  // test goes through submission form, clicks submit, stripe handles errors, checks if success modal
  // appears after successful submission. No network responses tested in this scenario


  // Notes: form automatically adds whitespace between card values so evaluate that in .eql assertions

  await t
    .switchToIframe('#checkout-demo')
    .typeText(await checkoutPage.input.email, 'Michanco207@gmail.com', replaceText)
    .expect(checkoutPage.input.email.value).eql('Michanco207@gmail.com')
    .typeText(checkoutPage.input.cardNumber,'4242 4242 4242 4242', replaceText)
    .expect(checkoutPage.input.cardNumber.value).eql('4242 4242 4242 4242')
    .typeText(checkoutPage.input.cardCvc, '999', replaceText)
    .expect(checkoutPage.input.cardCvc.value).eql('999')
    .typeText(checkoutPage.input.cardExpiry, '02/50', replaceText)
    .expect(checkoutPage.input.cardExpiry.value).eql('02 / 50')
    .typeText(checkoutPage.input.billingName, 'Scarlett Michanco', replaceText)
    .expect(checkoutPage.input.billingName.value).eql('Scarlett Michanco')
    .typeText(checkoutPage.input.billingPostalCode, '02115', replaceText)
    .expect(checkoutPage.input.billingPostalCode.value).eql('02115')
    .click(checkoutPage.submit.submitButton)
    .switchToMainWindow()
    .expect(checkoutPage.submit.restartButton.visible).ok();

});

test('Changing locations also changes currency.', async t => {
  await t
  .switchToIframe('#checkout-demo')
  .wait(500);
  let value = await validator.cart.cartTotal.innerText;

  await t
    .switchToMainWindow()
    .click(checkoutPage.currency.currencySelectorDefault)
    .wait(200)
    .click(checkoutPage.currency.ausFiat)
    .expect(checkoutPage.currency.ausFiat.innerText).eql('Australia')
    .switchToIframe('#checkout-demo')
    .wait(500)
    //currency should not equal original selected US, should be A174.00
    .expect(validator.cart.cartTotal.innerText).notEql(value)
    .switchToMainWindow()
    .wait(500)
    .click(checkoutPage.currency.currencySelectorAus)
    .click(checkoutPage.currency.usFiat)
    .expect(checkoutPage.currency.usFiat.innerText).eql('United States');
});
