module.exports = '<div class="alert-error" ng-show="error">\n    <h3>Boom.</h3>\n    {{error.message}}\n    <p>\n        {{error.details | json}}\n    </p>\n</div>\n';