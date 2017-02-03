// public/js/controllers/fotos-controller.js

angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    },function(error){
        console.log(error);
    });

    /*
        $http.get('v1/fotos').success(
            function(fotos) {
                console.log(fotos);
                $scope.fotos = fotos;
            })
        .error(function(error) {
            console.log(error);
        });
 
    */
    
    $scope.remover = function(foto){
        recursoFoto.delete({fotoId : foto._id},function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto,1);

            console.log('Foto '+ foto.titulo +' foi removida com sucesso.');
            $scope.mensagem = 'Foto '+ foto.titulo +' foi removida com sucesso.';
        },function(error){
            console.log(error);
            console.log('Não foi possível remover a foto '+ foto.titulo);
            $scope.mensagem = 'Não foi possível remover a foto '+ foto.titulo;
        })
        /*
        $http.delete('v1/fotos/'+foto._id)
        .success(function(){
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto,1);

            console.log('Foto '+ foto.titulo +' foi removida com sucesso.');
            $scope.mensagem = 'Foto '+ foto.titulo +' foi removida com sucesso.';
        })
        .error(function(error){
            console.log(error);
            console.log('Não foi possível remover a foto '+ foto.titulo);
            $scope.mensagem = 'Não foi possível remover a foto '+ foto.titulo;
        });
        */
    };

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