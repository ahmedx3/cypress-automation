describe('Critical User Journey: Login and Add Item to Cart', () => {
  const url = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should log in and add an item to the cart', () => {
    // Step 1: Log in
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Step 2: Verify successful login by checking the inventory page
    cy.url().should('include', '/inventory.html');

    // Step 3: Add a product to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Step 4: Verify that the cart has 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Step 5: Navigate to the cart
    cy.get('.shopping_cart_link').click();

    // Step 6: Verify the product is in the cart
    cy.get('.cart_item').should('exist');
  });
});

describe('Critical User Journey: Logout', () => {
  const url = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(url);

    // Log in before testing logout
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('should log out successfully', () => {
    // Step 1: Click the menu button
    cy.get('#react-burger-menu-btn').click();

    // Step 2: Select the logout option
    cy.get('#logout_sidebar_link').click();

    // Step 3: Verify user is redirected to the login page
    cy.url().should('be.equal', url);
  });
});
