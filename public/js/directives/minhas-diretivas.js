angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {
        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@'
        };

        ddo.transclude = true;
        /*
                ddo.template = '<div ng-repeat="foto in fotos" class="panel panel-default">' +
                    '    <div class="panel-heading">' +
                    '        <h3 class="panel-title">{{ titulo}}</h3>' +
                    '    </div>' +
                    '    <div class="panel-body" ng-transclude>' +
                    '        <img class="img-responsive center-block" src="{{foto.url}}" alt="{{foto.titulo}}">' +
                    '    </div>' +
                    '</div>';
        */
        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('minhaFoto', function() {
        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@titulo',
            url: '@url'
        };

        ddo.transclude = true;
        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';
    });