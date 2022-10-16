import { Selector, t } from 'testcafe';

// set selectors to use .filter() test cafe method
// alternate could be like ex: const email = Selector('input').withAttribute('id','email');
const input = Selector('input');
const button = Selector('button');


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
      submitButton: button.filter('.SubmitButton');
    }
  }
}
