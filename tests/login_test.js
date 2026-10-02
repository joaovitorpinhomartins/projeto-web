Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 5);
    I.fillField('#user', 'teste@testerun.com');
    I.fillField('#password', '123456');
    I.click('#btnLogin');
    I.waitForText('Login realizado', 3);

}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 5);
    I.fillField('#user', 'teste@testerun.com');
    I.click('#btnLogin');
    I.waitForText('Senha inválida.', 3);

});

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 5);
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 2);  

});

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {
    
    I.amOnPage('http://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login', 5);
    I.fillField('#password', '123456');
    I.click('#btnLogin');
    I.waitForText('E-mail inválido.', 2);

});