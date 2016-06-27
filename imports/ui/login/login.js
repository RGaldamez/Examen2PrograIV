import "./login.html";

Template.login.events({
  "click #login"(event){
      var User = {
        username: $("#emailInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val()
      }
      Meteor.loginWithPassword($("#emailInput").val(), $("#passwordInput").val(), function(error){
        if(error){
          Materialize.toast("El correo electrónico y/o contraseña que has introducido son incorrectos.", 4000);
        }else{
          Materialize.toast("Login Successful", 4000);
          Router.go('/home');
        }
      });
  }
});
