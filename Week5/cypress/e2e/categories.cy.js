describe('Test Feature Categories', {testIsolation:false},() => {
    before(()=>{
        cy.visit('/')
        cy.get('#email').type('sasuai@ex.com');
        cy.get('#password').type('098dsfadf@');
        cy.get('.chakra-button').click();
    });
    it('Should be directed to the category page', () => {
        cy.get('a[href="/categories"]').click();
        cy.url().should('include', '/categories')
    });
    it('Successfully added a new category', () => {
        cy.get(' a[href="/categories/create"]').click();
        cy.get('#nama').type('Makanan');
        cy.get('#deskripsi').type('Oleh-oleh khas Bukittinggi');
        cy.get('.chakra-button.css-l5lnz6').click();
        cy.get('.chakra-alert__desc').should('have.text', 'item ditambahkan');
        
    });
    it('Failed to add a new category with empty name', () => {
        cy.get('a[href="/categories"]').eq(0).click();
        cy.get(' a[href="/categories/create"]').click();
        cy.get('#deskripsi').type('Oleh-oleh khas Bukittinggi');
        cy.get('.chakra-button.css-l5lnz6').click();
        cy.get('.chakra-alert').should('have.text', '"name" is not allowed to be empty');
    });
    it('Successfully edit a  category', () => {
        cy.get('a[href="/categories"]').eq(0).click();
        cy.get('[id^=menu-button-]').eq(1).click();
        cy.get('a').contains('ubah').click();
        cy.get('#nama').clear().type('Minuman');
        cy.get('.chakra-button.css-l5lnz6').click();
        cy.get('.chakra-alert__desc').eq(0).should('have.text', 'item diubah');


    });
    it('Successfully delete a category', () => {
        cy.get('a[href="/categories"]').eq(1).click();
        cy.get('[id^=menu-button-]').eq(1).click();
        cy.get('button').contains('hapus').click();
        cy.get('button').contains('Delete').click();
        cy.get('.chakra-alert__desc').should('have.text', 'item dihapus');

    });

    after(()=>{
        cy.clearLocalStorage();
        cy.clearCookies()
        cy.clearAllSessionStorage()  
        
    })




});