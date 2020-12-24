var app = angular.module("MyFirstApp",[]) //retorna una referencia a la app
app.controller("FirstController", function ($scope){
    $scope.nombre = "Victoria";  //scope conecta el controlador (la info) con la vista
    $scope.comentarios = [  //asignamor un arreglo a uno de los atributos de scope
        {
            comentario: "Buen tutorial",
            username:"codigofacilito"
        },
        {
            comentario: "Pesimo tutorial",
            username:"otro_usuario"
        }
    ]
});
