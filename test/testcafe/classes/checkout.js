import { Selector, t } from 'testcafe';

// set selectors to use .filter() test cafe method
// alternate could be like ex: const email = Selector('input').withAttribute('id','email');
const input = Selector('input');
const button = Selector('button');
const div = Selector('div');
const span = Selector('span');


export default class CheckoutPage {
  constructor() {
    // page object model selectors for input fields
    this.input = {
      email: input.filter('[id="email"]'),
      cardNumber: input.filter('[id="cardNumber"]'),
      cardCvc: input.filter('[id="cardCvc"]'),
      cardExpiry: input.filter('[id="cardExpiry"]'),
      billingName: input.filter('[id="billingName"]'),
      billingPostalCode: input.filter('[id="billingPostalCode"]'),
      adjustQty: input.filter('[id="adjustQuantity"]'),
    }

    this.submit = {
      submitButton: button.filter('.SubmitButton'),
      restartButton: button.withText('Restart demo'),
      secureButton: button.filter('[id="test-source-authorize-3ds"]'),
      successCard: button.withText('Success'),
      authCard: button.withText('Authentication'),
      updateQuantity: button.filter('.AdjustQuantityFooter-btn'),
      declineCard: button.withText('Authentication'),
      declinedCardErrorMessage: span.withText('Your card was declined. Please try a different card.')
    }

    this.currency = {
      currencySelectorDefault: Selector('.DropdownSelect-LabelLeft').withText('United States'),
      currencySelectorAus: Selector('.DropdownSelect-LabelLeft').withText('Australia'),
      usFiat: Selector('.DropdownSelect-ListItem').withText('United States'),
      ausFiat: Selector('.DropdownSelect-ListItem').withText('Australia')
    }
  }
}
