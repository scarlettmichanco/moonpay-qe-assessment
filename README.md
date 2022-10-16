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

Run with `npm install` and `npm run test`. 
