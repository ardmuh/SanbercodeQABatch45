import { Before, Given, Then, When } from "@wdio/cucumber-framework";
import categoryPage  from "../pageObjects/categoriesPage.js";
import dashboardPage from "../pageObjects/dashboardPage.js";
import loginPage from "../pageObjects/loginPage.js";
import Page from "../pageObjects/page.js";
import utils from "../helper/utils.js";

const page = new Page()
Before(async () => {
    await page.open();
    utils.pause(1);
    const isLoggedIn = await dashboardPage.isLoggedIn();
    if (!isLoggedIn) {
        await loginPage.login('sasuai@ex.com', '098dsfadf@');
    }
});

Given('I am on the dashboard page', async ()=>{
    await dashboardPage.getBtnKategoti();
});

When('I click on the Kategori menu', async ()=>{
    await dashboardPage.clickKategori();
});
When('I click on the tambah button', async ()=>{
    await categoryPage.clickTambah();
});
When('I input nama as {string} and deskripsi as {string}', async (name, description)=>{
    await categoryPage.addCategory(name, description);
});
When('I click on the Simpan button', async ()=>{
    await categoryPage.clickSimpan();
});
When('I click on the kebab menu button', async ()=>{
    await categoryPage.clickKebabMenu();
});
When('I click on the ubah menu', async ()=>{
    await categoryPage.clickEdit();
});
When('I click on the hapus menu', async ()=>{
    await categoryPage.clickDelete();
});
When('I click on the Delete button', async ()=>{
    await categoryPage.clickBtnDelete();
});
Then('I should see a success alert with a {string}', async (message)=>{
    await expect(categoryPage.successMsg).toExist();
    await expect(categoryPage.successMsg).toHaveTextContaining(message)
});
Then('I should see a error {string}', async (message)=>{
    await expect(categoryPage.errMsg).toExist();
    await expect(categoryPage.errMsg).toHaveTextContaining(message)
});


