import "./recetas.html";
import {Recetas} from "../../api/receta.js";
import {Ingredientes} from "../../api/ingrediente.js";

Template.recetas.events({
    'click #ir_ingredientes':function () {
        Router.go('/home');
    }
});

Template.recetas.helpers({
    recetas:function () {
        return Recetas.find({});
    },
    ingredientes:function () {
        return Ingredientes.find({});
    }
});