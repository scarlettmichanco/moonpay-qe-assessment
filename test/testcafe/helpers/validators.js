import { Selector, t } from 'testcafe';

const span = Selector('span');
const button = Selector('button');

export default class Validators {
  constructor() {

    this.cart = {
      itemQuantity: button.filter('.LineItem-adjustableQty'),
      cartTotal:  Selector('#ProductSummary-totalAmount'),
      usDefaultCartTotal:  129.00,
      ausDefaultCartTotal: 174.00
    }

  }

}
