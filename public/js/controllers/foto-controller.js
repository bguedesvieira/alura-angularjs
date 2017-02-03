angular.module('alurapic')
    .controller('FotoController', function($scope, $http, cadastroDeFoto, recursoFoto, $routeParams) {

        $scope.foto = {};
        $scope.mensagem = '';

        if ($routeParams.fotoId){
            recursoFoto.get({fotoId:$routeParams.fotoId},function(foto){
                $scope.foto = foto;
            },function(error){
                console.log(error);
                $scope.mensagem = 'Não foi possível obter a foto';
            })
        /*
            $http.get('v1/fotos/'+$routeParams.fotoId)
            .success(function(foto){
                $scope.foto = foto;
            }).error(function(error){
                console.log(error);
                $scope.mensagem = 'Não foi possível obter a foto';
            });
          */
        }

        $scope.submeter = function() {

            if ($scope.formulario.$valid) {
                cadastroDeFoto.cadastrar($scope.foto)
                .then(function(dados){
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao){
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                    }
                }).catch(function(error){
                    $scope.mensagem = error.mensagem;
                });

                /*
                if ($scope.foto._id){                    
                    recursoFoto.update({fotoId : $scope.foto._id},$scope.foto,
                    function(){
                        console.log('foto ' + $scope.foto.titulo +' alterada')
                        $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
                    }, function(error){
                        $scope.mensagem = 'Erro ao alterar :'+error;
                        console.log(error);
                        console.log('Erro ao alterar a foto '+$scope.foto.titulo);
                    });
                // antigo
                    $http.put('v1/fotos/'+$scope.foto._id,$scope.foto)
                    .success(function(){
                        
                        console.log('foto ' + $scope.foto.titulo +' alterada')
                        $scope.mensagem = 'A foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
                    })
                    .error(function(error){
                        $scope.mensagem = 'Erro ao alterar :'+error;
                        console.log(error);
                        console.log('Erro ao alterar a foto '+foto.titulo);
                    });
                    
                }else{
                    $http.post('v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.foto = {};
                        $scope.mensagem = 'Foto cadastrada com sucesso';
                        $scope.formulario.$setPristine();
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível cadastrar a foto';
                    });
                }
                */



            }
        };
    });