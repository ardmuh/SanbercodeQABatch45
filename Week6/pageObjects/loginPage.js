import Page from "./page.js";

class LoginPage extends Page {

    get setEmail () {
        return $('#email');
    }

    get setPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('//button[contains(@class, "chakra-button")]');
    }

    get errMsg(){
        return $('//div[@role="alert"]')
    }

    async login(email, password) {
        await this.setEmail.setValue(email);
        await this.setPassword.setValue(password);
        await this.btnLogin.click();
    }



}
export default new LoginPage();