describe('Mesaforte-ui menu_icon Demo App', function(){

	/*beforeEach(function() {
    	browser.get('http://localhost:8888/');
    	//browser.get('http://163.172.181.95:8888/');
    	expect(browser.getTitle()).toEqual('Mesaforte');
    	//element(by.model('login.username')).sendKeys('Support');
	    //element(by.model('login.passwd')).sendKeys('w4Support');
	    element(by.buttonText('Login')).click();

  	});*/
	it('Testing a image menu_icon Functionality', function(){
		browser.setLocation('/home/plan/ruleset');
		
		expect(element(by.xpath("//img[@ src='img/menu_icon.png']")).isPresent()).toBe(true);
		element(by.xpath("//img[@ src='img/menu_icon.png']")).click();
		//element(by.css('[ng-click="master.openSideMenu = !master.openSideMenu"]')).click();
		//element(by.id('img1')).click();

	});
});		