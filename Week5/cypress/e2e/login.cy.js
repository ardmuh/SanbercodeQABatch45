describe('Test Feature Login', () => {
  beforeEach(()=>{
    cy.visit('/')
  });
  it('Test successfully logged in', () => {
    cy.get('#email').type('sasuai@ex.com');
    cy.get('#password').type('098dsfadf@');
    cy.get('.chakra-button').click();
    cy.url().should('include', '/dashboard');
    cy.get(':nth-child(1) > .chakra-stat > dl > .chakra-stat__label').should('have.text', 'Sasuai')
  });
  it('Test failed login with empty credentials', () => {
    cy.get('.chakra-button').click();
    cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty');
  });
  it('Test failed login with empty email', () => {
    // cy.get('#email').type('sasuai@ex.com');
    cy.get('#password').type('098dsfadf@');
    cy.get('.chakra-button').click();
    cy.get('.chakra-alert').should('have.text','"email" is not allowed to be empty');
  });
  it('Test failed login with empty password', () => {
    cy.get('#email').type('sasuai@ex.com');
    // cy.get('#password').type('098dsfadf@');
    cy.get('.chakra-button').click();
    cy.get('.chakra-alert').should('have.text','"password" is not allowed to be empty');
  });
  it('Test failed login with invalid email', () => {
    cy.get('#email').type('sasuai@ex');
    cy.get('#password').type('098dsfadf@');
    cy.get('.chakra-button').click();
    cy.get('.chakra-alert').should('have.text','"email" must be a valid email');
  });
  it('Test failed login with wrong email', () => {
    cy.get('#email').type('sasuai2@ex.com');
    cy.get('#password').type('098dsfadf@');
    cy.get('.chakra-button').click();
    cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah');
  });
  it('Test failed login with invalid password', () => {
    cy.get('#email').type('sasuai@ex.com');
    cy.get('#password').type('@098dsfadf');
    cy.get('.chakra-button').click();
    cy.get('.chakra-alert').should('have.text','Kredensial yang Anda berikan salah');
  });
  it('Should be directed to the register page', () => {
    cy.get('a[href="/register"]').click();
    cy.url().should('include','/register')
  });

});