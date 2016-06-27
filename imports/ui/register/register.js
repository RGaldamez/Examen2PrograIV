import './register.html';


Template.register.events({
  "click #regist"(event){
      
      var Profile = {
        firstname: $("#firstnameInput").val(),
        lastname: $("#lastnameInput").val(),
        // type: $('input:radio[name="groupUser"]:checked').val()
      }
      var User = {
        username: $("#emailInput").val(),
        email: $("#emailInput").val(),
        password: $("#passwordInput").val(),
        profile: Profile
      }
      Accounts.createUser(User, function(err){
        if(err){
          Materialize.toast('El usuario ya existe', 4000);
      
        }else{
          Materialize.toast('Registrado Correctamente', 4000);
      
          Router.go('/home');
        }
      });
  }
});