import { Selector, t } from 'testcafe';

const span = Selector('span');
const button = Selector('button');

export default class Validators {
  constructor() {
    this.cart = {
      itemQuantity: button.filter('.LineItem-adjustableQty'),
      cartTotal:  Selector('#ProductSummary-totalAmount')
    }

    this.cardErrors = {
      invalidEmail: span.filter('.FieldError').withText('Your email is incomplete.'),
      incompleteCC: span.filter('.FieldError').withText('Your card number is incomplete.'),
      invalidCVC: span.filter('.FieldError').withText(`Your card's security code is incomplete.`),
      invalidExpiry: span.filter('.FieldError').withText(`Your card's expiration year is in the past.`),
      invalidZip: span.filter('.FieldError').withText(`Your ZIP is incomplete.`),
    }
  }

}
