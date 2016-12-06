// public/js/controllers/fotos-controller.js

angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';

    $http.get('v1/fotos').success(
            function(fotos) {
                console.log(fotos);
                $scope.fotos = fotos;
            })
        .error(function(error) {
            console.log(error);
        });

    /* segunda versao ng-repeat
    var promisse = $http.get('v1/fotos');
    promisse.then(function(retorno) {
        $scope.fotos = retorno.data;
    }).catch(function(error) {
        console.log(error);
    });
    */

    /* primeira versao ng-repeat
        $scope.fotos = [ 
            {
                titulo: 'Leão',
                url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
            },
            {
                titulo: 'Leão2',
                url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
            },
            {
                titulo: 'Leão3',
                url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
            }
        ];
    */


});