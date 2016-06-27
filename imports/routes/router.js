import {Router} from "meteor/iron:router";

import '../ui/layout/layout.js';
import '../ui/navbar/navbar.js';
import '../ui/frontpage/frontpage.js';
import '../ui/register/register.js';
import '../ui/login/login.js';
import '../ui/home/home.js';

Router.configure({
    layoutTemplate:"layout"
});

Router.route('register',function () {
    this.render("register");
});

Router.route('login',function () {
    this.render("login");
});

Router.route('/', function () {
    this.render("frontpage");
});

Router.route('home', function () {
    this.render("home");
})
