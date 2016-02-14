module.exports = function backend($httpBackend) {
    var api = {};
    var goods = [];

    $httpBackend.whenGET('/system/api').respond(api);

    $httpBackend.whenPOST('/system/api/goods').respond(function(method, url, data){
    	var rule = angular.fromJson(data);
    	console.log(data)
    	rules.push(rule);
    	return [200, rules]
    });

    $httpBackend.whenGET(/.*/).passThrough();
};
