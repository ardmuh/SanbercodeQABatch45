import Page from './page.js';

class DashboardPage extends Page {


    get btnMenuKategori () {
        return $('//a[@href="/categories"]');
    }

    async getBtnKategoti (){
        return this.btnMenuKategori.isExisting();
    }

    async isLoggedIn() {
        return this.btnMenuKategori.isExisting();
    }

    async clickKategori(){
        return this.btnMenuKategori.click()
    }


}

export default new DashboardPage();