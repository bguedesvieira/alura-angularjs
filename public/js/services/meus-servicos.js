angular.module('meusServicos',['ngResource'])
.factory('recursoFoto',function($resource){
    return  $resource('/v1/fotos/:fotoId',null,{
            update : {
                method : 'PUT'
            }
        });
})
.factory('cadastroDeFoto',function(recursoFoto,$q){
    var servico = {};
    servico.cadastrar = function(foto){
        return $q(function(resolve,reject){
            if (foto._id){
                recursoFoto.update({fotoId : foto._id},foto,function(){
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + ' atualizada com sucesso',
                        inclusao : false
                    });
                },function(error){
                    console.log(error);
                    reject({mensagem : 'Não foi possível alterar foto '+ foto.titulo});
                });
            }else{
                recursoFoto.save(foto,function(foto){
                    resolve({
                        mensagem : 'Foto ' + foto.titulo + 'incluida com sucesso',
                        inclusao : true
                    });
                },function(error){
                    console.log(error);
                    reject({mensagem : 'Não foi possível incluri foto '+ foto.titulo});
                });
            }
        });
    };

    return servico;
})
;