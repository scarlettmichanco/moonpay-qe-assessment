<div align="center">
    <p><img src="assets/moonpay-logo.svg" width="300" /></p>
</div>

# Take Home Test

The system under test the [Stripe Checkout](https://checkout.stripe.dev/preview). Your goal is to test the checkout flow within the iframe.

1. Explain your test approach (e.g. test types, techniques, tools)
  * UI/E2E tests for all ui components - will use TestCafe for this
2. Identify which scenarios you feel are important to test
  ```
  * Check if iFrame is viewable
  * Check if all the labels/input fields are visible
  * Verify that payment options are visible and credit card numbers are masked.
  * Switching between desktop and mobile doesn't hide any fields and functions as expected.
  * Test if changing domains via dropdown effects submission.
  * Changing locations also changes currency.
  * Item total is equal to the quantity X price.
  * Able to check out with each Wallet(Apple/Google)
  * Test authorization responses
  * Test if on a secure connection
  * Test each card type (success/authorization/decline)
  * Verify you cant proceed until all required fields are filled
  * Authenticate email is proper email address
  ```
3. Automate the scenarios you consider essential and why

_P.S: Please don't include any PII (Personal Identifiable Information) so that we can blind review your submission._
