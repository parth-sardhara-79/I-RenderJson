angular
  .module('app', ['angular-json-tree'])
  .controller('DemoCtrl', function($scope, $http) {
    var vm = this;
    vm.json = {};
  $scope.json = {};
    vm.json.string = "{\n  \"id\": \"0001\",\n  \"type\": \"donut\",\n  \"name\": \"Cake\",\n  \"ppu\": 0.55,\n  \"batters\":\n    {\n      \"batter\":\n        [\n          { \"id\": \"1001\", \"type\": \"Regular\" },\n          { \"id\": \"1002\", \"type\": \"Chocolate\" },\n          { \"id\": \"1003\", \"type\": \"Blueberry\" },\n          { \"id\": \"1004\", \"type\": \"Devil's Food\" }\n        ]\n    },\n  \"topping\":\n    [\n      { \"id\": \"5001\", \"type\": \"None\" },\n      { \"id\": \"5002\", \"type\": \"Glazed\" },\n      { \"id\": \"5005\", \"type\": \"Sugar\" },\n      { \"id\": \"5007\", \"type\": \"Powdered Sugar\" },\n      { \"id\": \"5006\", \"type\": \"Chocolate with Sprinkles\" },\n      { \"id\": \"5003\", \"type\": \"Chocolate\" },\n      { \"id\": \"5004\", \"type\": \"Maple\" }\n    ]\n}";
    $scope.json.object = JSON.parse(vm.json.string);
  vm.json.object = JSON.parse(vm.json.string);

    $scope.$watch(
      function watchJson(scope) {
        return (vm.json.string);
      },
      function handleChange(newVal, oldVal) {
      debugger;
      console.log(newVal, oldVal);
      if (newVal !== oldVal) {
        try {
          vm.error = null;
          $scope.json.object = JSON.parse(newVal);
          vm.json.object = JSON.parse(newVal);
        } catch (e) {
          console.log(e);
          vm.error = {
            message: e.message,
            show: true
          }
        }
      }
      }
    );
    // vm.loadUrl = function() {
    //   if (vm.json.url) {
    //     vm.json.badUrl = false;
    //     $http.get(vm.json.url).then(function(resp) {
    //       vm.json.string = JSON.stringify(resp.data, null, 2);
    //     }, function() {
    //       vm.json.badUrl = true;
    //     });
    //   }
    // };
  
  })
  // .directive("fileread", [function() {
  //   return {
  //     scope: {
  //       fileread: "="
  //     },
  //     link: function(scope, element, attributes) {
  //       element.bind("change", function(changeEvent) {
  //         var reader = new FileReader();
  //         reader.onload = function(loadEvent) {
  //           scope.$apply(function() {
  //             scope.fileread = loadEvent.target.result;
  //           });
  //         }
  //         reader.readAsText(changeEvent.target.files[0]);
  //       });
  //     }
  //   }
  // }]);