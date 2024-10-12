describe('Edge Case: Login Form Validation', () => {
  const url = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('should not allow login with empty fields', () => {
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Username is required');
  });

  it('should not allow login with invalid username', () => {
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      );
  });

  it('should not allow login with invalid password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and(
        'contain',
        'Epic sadface: Username and password do not match any user in this service'
      );
  });
});

describe('Edge Case: Cart Functionality', () => {
  const url = 'https://www.saucedemo.com/';

  beforeEach(() => {
    cy.visit(url);

    // Log in before testing cart functionality
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('should add and then remove an item from the cart', () => {
    // Add a product to the cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Verify that the cart has 1 item
    cy.get('.shopping_cart_badge').should('have.text', '1');

    // Navigate to the cart
    cy.get('.shopping_cart_link').click();

    // Remove the item from the cart
    cy.get('.cart_button').click();

    // Verify that the cart is now empty
    cy.get('[data-test="inventory-item"]').should('not.exist');
  });
});
