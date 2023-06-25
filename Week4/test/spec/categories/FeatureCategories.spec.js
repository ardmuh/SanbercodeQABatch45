const request = require('supertest');
const { expect } = require('chai');
const baseUrl = 'https://kasir-api.belajarqa.com';
const { login } = require('../helpers/helpers');


let accessToken;
let categoryId;

before(async () => {
    try {
        accessToken = await login();
    } catch (error) {
        throw error;
    }
}); 

describe('Categories Tests', () => {
  // CREATE
  describe('Create a category with method POST  ', () => {
    it('Success added a new categories (Positive Scenario)', async () => {
      try {
        const data = {
          name: 'Oleh - oleh',
          description: 'Oleh - oleh khas Bukittinggi',
        };
        const response = await request(baseUrl)
          .post('/categories')
          .set('Authorization', `Bearer ${accessToken}`)
          .send(data);
        categoryId = response.body.data.categoryId;
        expect(response.status).to.equal(201); 
        expect(response.body.status).to.equal('success'); 
        expect(response.body.data).to.be.an('object');
        expect(response.body.message).to.equal('Category berhasil ditambahkan');
        expect(response.body.data).to.have.property('categoryId'); 
        expect(response.body.data.name).to.equal(data.name);
      } catch (error) {
        throw error;
      }
    });
    it('Failed add a category without authentication - 401 Unauthorized (Negative Scenario)', async () => {
      try {
        const data = {
          name: 'Oleh - oleh',
          description: 'Oleh - oleh khas Bukittinggi',
        };
        const response = await request(baseUrl)
          .post('/categories')
          .send(data);
        expect(response.status).to.equal(401);
        expect(response.body.statusCode).to.equal(401);
        expect(response.body.error).to.equal('Unauthorized')
        expect(response.body.message).to.equal('Missing authentication');
      } catch (error) {
        throw error;
      }
    });
    it('Failed add a category with missing name - 400 Bad Request (Negative Scenario) ', async () => {
      try {
        const data = {
          name: '',
          description: 'Without name',
        };           
        const response = await request(baseUrl)
          .post('/categories')
          .set('Authorization', `Bearer ${accessToken}`)
          .send(data);
        expect(response.status).to.equal(400);
        expect(response.body.message).to.equal('\"name\" is not allowed to be empty'); 
      } catch (error) {
        throw error;
      }
    });
  });
  // READ
  describe('Read categories with method GET ', () => {
    it('Success get category data by Id (Positive Scenario)', async () => {
      try {
        const response = await request(baseUrl)
          .get(`/categories/${categoryId}`)
          .set('Authorization', `Bearer ${accessToken}`);
          
        expect(response.status).to.equal(200); 
        expect(response.body.status).to.equal('success'); 
        expect(response.body.data).to.be.an('object');
        expect(response.body.data.category).to.have.property('name', 'Oleh - oleh'); 
        expect(response.body.data.category).to.have.property('description', 'Oleh - oleh khas Bukittinggi'); 
      } catch (error) {
        throw error;
      }
    });
    it('Failed get category data with invalid id (Negative Scenario)', async () => {
      try {
        const invalidId = 'invalid-id-categories'
        const response = await request(baseUrl)
          .get(`/categories/${invalidId}`)
          .set('Authorization', `Bearer ${accessToken}`);
          
        expect(response.status).to.equal(404); 
        expect(response.body.status).to.equal('fail'); 
        expect(response.body.message).to.equal('id tidak valid');
      } catch (error) {
        throw error;
      }
    });
  });

  // UPDATE
  describe('Update a category with method PUT  ', () => {
    it('Success update category  (Positive Scenario)', async () => {
      try {
        const data = {
          name: 'Makanan',
          description: 'Makanan khas Bukittinggi',
        };
        const response = await request(baseUrl)
          .put(`/categories/${categoryId}`)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(data);

        expect(response.status).to.equal(200); 
        expect(response.body.status).to.equal('success'); 
        expect(response.body.data).to.be.an('object');
        expect(response.body.data).to.have.property('name', 'Makanan'); 
      } catch (error) {
        throw error;
      }
    });
    it('Failed update category with invalid id - 404  (Negative Scenario)', async () => {
      try {
        const invalidId = 'invalid-id-categories'
        const data = {
          name: 'Minuman',
          description: 'Minuman khas Bukittinggi',
        };
        const response = await request(baseUrl)
          .put(`/categories/${invalidId}`)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(data);
        expect(response.status).to.equal(404);
        expect(response.body.message).to.equal('id tidak valid');
      } catch (error) {
        throw error;
      }
    });
    it('Failed update category with invalid type data - 404  (Negative Scenario)', async () => {
      try {
        const data = {
          name: 987,
          description: 'Minuman khas Bukittinggi',
        };
        const response = await request(baseUrl)
          .put(`/categories/${categoryId}`)
          .set('Authorization', `Bearer ${accessToken}`)
          .send(data);
        expect(response.status).to.equal(400);
        expect(response.body.status).to.equal('fail');
        expect(response.body.message).to.equal('\"name\" must be a string');
      } catch (error) {
        throw error;
      }
    });
  });

  //DELETE
  describe('Delete a category with method DELETE  ', () => {
    it('Success delete category  (Positive Scenario)', async () => {
      try {
        const response = await request(baseUrl)
          .delete(`/categories/${categoryId}`)
          .set('Authorization', `Bearer ${accessToken}`);

        expect(response.status).to.equal(200); 
        expect(response.body.status).to.equal('success'); 
        expect(response.body.data).to.be.empty;
      } catch (error) {
        throw error;
      }
    });
    it('Failed delete category with invalid id - 404  (Negative Scenario)', async () => {
      try {
        const invalidId = 'invalid-id-categories'
        const response = await request(baseUrl)
          .delete(`/categories/${invalidId}`)
          .set('Authorization', `Bearer ${accessToken}`);
        expect(response.status).to.equal(404);
        expect(response.body.status).to.equal('fail');
        expect(response.body.message).to.equal('id tidak valid');
      } catch (error) {
        throw error;
      }
    });
  });
});