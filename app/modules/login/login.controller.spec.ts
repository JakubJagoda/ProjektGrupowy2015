///<reference path="../../../typings/tsd.d.ts" />
'use strict';

import LoginController from './login.controller';

describe('Controller: LoginController', () => {
    //you should never test controllers, dude. That's only an example.
    //if you need to test a controller, consider writing a service.

    beforeEach(module('PGR2015.login'));

    let loginController: LoginController;

    beforeEach(inject($controller => {
        loginController = $controller('LoginController', {
            $state: jasmine.createSpy('$state')
        });
    }));

    it('should have login method', () => {
        expect(loginController.login).toEqual(jasmine.any(Function));
    });
});
