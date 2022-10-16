import { Selector, t } from 'testcafe';

// set selectors to use .filter() test cafe method
// alternate could be like ex: const email = Selector('input').withAttribute('id','email');
const input = Selector('input');
const button = Selector('button');
const div = Selector('div');


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
    }

    this.submit = {
      submitButton: button.filter('.SubmitButton'),
      restartButton: button.withText('Restart demo'),
      successCard: button.withText('Success'),
      authCard: button.withText('Authentication'),
      declineCard: button.withText('Authentication'),
    }

    this.currency = {
      currencySelectorDefault: Selector('.DropdownSelect-LabelLeft').withText('United States'),
      currencySelectorAus: Selector('.DropdownSelect-LabelLeft').withText('Australia'),
      usFiat: Selector('.DropdownSelect-ListItem').withText('United States'),
      ausFiat: Selector('.DropdownSelect-ListItem').withText('Australia')
    }
  }
}
