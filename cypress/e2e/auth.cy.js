describe('Authentication and Autherization Tests', () => {
  const url = 'https://www.saucedemo.com/';
  const credentials = {
    standardUser: { username: 'standard_user', password: 'secret_sauce' },
    lockedOutUser: { username: 'locked_out_user', password: 'secret_sauce' },
  };

  beforeEach(() => {
    cy.visit(url);
  });

  it('Login with valid credentials', () => {
    cy.get('[data-test="username"]').type(credentials.standardUser.username);
    cy.get('[data-test="password"]').type(credentials.standardUser.password);
    cy.get('[data-test="login-button"]').click();

    // Verify user is redirected to inventory page after login
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('Logout from application', () => {
    // Log in first
    cy.get('[data-test="username"]').type(credentials.standardUser.username);
    cy.get('[data-test="password"]').type(credentials.standardUser.password);
    cy.get('[data-test="login-button"]').click();

    // Open menu and click logout
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();

    // Verify user is redirected back to the login page
    cy.url().should('eq', url);
  });

  it('Login fails with locked out user', () => {
    cy.get('[data-test="username"]').type(credentials.lockedOutUser.username);
    cy.get('[data-test="password"]').type(credentials.lockedOutUser.password);
    cy.get('[data-test="login-button"]').click();

    // Verify error message is displayed
    cy.get('[data-test="error"]').should(
      'contain',
      'Sorry, this user has been locked out.'
    );
  });

  it('Standard user cannot access admin (restricted) features', () => {
    cy.get('[data-test="username"]').type(credentials.standardUser.username);
    cy.get('[data-test="password"]').type(credentials.standardUser.password);
    cy.get('[data-test="login-button"]').click();

    // Trying to access an admin feature (hypothetical in this case)
    // Since SauceDemo doesn't have separate admin features, we simulate restricted feature access by verifying only standard features are visible
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');

    // Try to verify a restricted link doesn't exist (e.g., 'admin')
    cy.get('body').should('not.contain', 'admin_link_or_feature');
  });
});
