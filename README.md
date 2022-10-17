
<div align="center">
    <p><img src="assets/moonpay-logo.svg" width="300" /></p>
</div>

# Take Home Test

The system under test the [Stripe Checkout](https://checkout.stripe.dev/preview). Your goal is to test the checkout flow within the iframe.

1. Explain your test approach (e.g. test types, techniques, tools)
  * UI/E2E tests for all ui components - will use TestCafe for this
2. Identify which scenarios you feel are important to test
  ```
  * Changing locations also changes currency.
  * Item total is equal to the quantity X price.
  * Able to check out with each Wallet(Apple/Google)
  * Test each card type (success/authorization/decline)
  * Verify you cant proceed until all required fields are filled
  ```
3. Automate the scenarios you consider essential and why

 ```I tested the above scenarios as i thought those were the most important in regards to testing for submission of the form.
Additional tests I would do but didnt for this purpose as they are more network responses would be to check for network requests and valid posts data.
I used the strip credit card numbers in line for the tests as they are test cards. Working with real cards and keys i would store them in a dotenv file and call from that.
Would break up card entry ui into a re-useable component as well if purpose was to be as clean as necessary but was told not to over think this assignment
 ```

Run with `npm install` and `npm run test`.
