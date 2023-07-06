import Page from "./page.js";

class CategoryPage extends Page {

    get btnTambah () {
        return $('//a[@href="/categories/create"]');
    }

    get namaField () {
        return $('#nama');
    }

    get deskripsiField () {
        return $('#deskripsi');
    }

    get btnSimpan () {
        return $('//button[contains(@class, "chakra-button")]');
    }

    get successMsg() {
        return $('//div[contains(@class, "chakra-alert__desc")]');
    }

    get errMsg () {
        return $('//div[@role="alert"]');
    }

    get kebabMenu () {
        return $('//button[contains(@id, "menu-button-") and contains(@class, "chakra-button")]');
    }

    get editMenu () {
        return $('//a[contains(text(), "ubah")]');
    }

    get deleteMenu () {
        return $('//button[contains(text(), "hapus")]');
    }
    get btnDelete () {
        return $('//button[contains(text(), "Delete")]')
    }

    async clickTambah(){
        return this.btnTambah.click()
    }

    async clickSimpan(){
        return this.btnSimpan.click()
    }

    async clickKebabMenu(){
        return this.kebabMenu.click()
    }

    async clickEdit(){
        return this.editMenu.click()
    }

    async clickDelete(){
        await this.deleteMenu.click();
    }
    async clickBtnDelete(){
        await this.btnDelete.click();
    }

    async addCategory (name, description) {
        await this.namaField.setValue(name);
        await this.deskripsiField.setValue(description);
    }

}

export default new CategoryPage();