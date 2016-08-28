class UserView {
    constructor(wrapperSelector, mainContentSelector) {
        this._wrapperSelector = wrapperSelector;
        this._mainContentSelector = mainContentSelector;
    }

    showLoginPage(isLoggedIn) {
        let _that = this;
        let templateUrl;

        if(isLoggedIn) {
            templateUrl = "templates/form-user.html";
        }
        else {
            templateUrl = "templates/form-guest.html";
        }

        $.get(templateUrl, function (template) {
            let renderedWrapper = Mustache.render(template, null);
            $(_that._wrapperSelector).html(renderedWrapper);

            $.get('templates/login.html', function (template) {
                let rendered = Mustache.render(template, null);
                $(_that._wrapperSelector).html(rendered);

                $('#login-request-button').on('click', function (ev) {

                    let username = $('#username').val();
                    let password = $('#password').val();

                    let data = {
                        username: username,
                        password: password
                    };

                    triggerEvent('login', data);
                });
            });
        });
    }

    showRegisterPage(isLoggedIn) {
        let _that = this;
        let templateUrl;

        if(isLoggedIn) {
            templateUrl = "templates/form-user.html";
        }
        else {
            templateUrl = "templates/form-guest.html";
        }

        $.get(templateUrl, function (template) {
            let renderedWrapper = Mustache.render(template, null);
            $(_that._wrapperSelector).html(renderedWrapper);

            $.get('templates/register.html', function (template) {
                let rendered = Mustache.render(template, null);
                $(_that._wrapperSelector).html(rendered);

                $('#register-request-button').on('click', function (ev) {

                    let username = $('#username').val();
                    let password = $('#password').val();
                    let confirmPassword = $('#pass-confirm').val();
                    let fullname = $('#full-name').val();

                    let data = {
                        username: username,
                        password: password,
                        confirmPassword: confirmPassword,
                        fullname: fullname
                    };

                    triggerEvent('register', data);
                });
            });
        });
    }
}