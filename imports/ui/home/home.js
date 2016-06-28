import './home.html';
import {Ingredientes} from "../../api/ingrediente.js";


Template.home.onRendered(function () {
     $('.collapsible').collapsible({
      accordion : true
    });
})

Template.home.events({
    'click #ir_recetas':function () {
        Router.go('/recetas');
    },
    'click #ing_add':function(){
        Ingredients.insert({
            nombre: $('#ing_nombre').val(),
            descripcion: $('#ing_descripcion').val(),
            formula: $('#ing_formula').val(),
        });
    }

});



Template.home.helpers({
    
    ingredientes:function () {
        return Ingredientes.find({});
    }
   
});
