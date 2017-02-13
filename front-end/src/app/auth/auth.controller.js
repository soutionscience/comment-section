export class AuthController {

    constructor($auth){
        'ngInject';
        this.$auth=$auth;
    }

    register(){
        console.log("its working");
        this.$auth.signup({email:'test@test.com'});
    }

}
