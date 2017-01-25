describe('Mesaforte-ui Demo App', function(){
	beforeEach(function() {
		
    	browser.get('http://localhost:8888/');
    	expect(browser.getTitle()).toEqual('Mesaforte');
    	//element(by.model('login.username')).sendKeys('Support');
	    //element(by.model('login.passwd')).sendKeys('w4Support');
	    element(by.buttonText('Login')).click();

  	});

	it('Teting a Add Button', function(){
		//browser.ignoreSynchronization = false;


		//browser.wait(element(by.css(".topnavbar")).isPresent());
		expect(element(by.model('beanCtrl.gridOptions.quickFilterText')).isPresent()).toBe(true);
		element(by.model('beanCtrl.gridOptions.quickFilterText')).sendKeys('dent');





		/*browser.driver.wait(function() {
            return element(by.css('topnavbar')).isDisplayed().then(function(IsVisible) {
                return IsVisible;
            });
        }, 10000);*/



	});

});
