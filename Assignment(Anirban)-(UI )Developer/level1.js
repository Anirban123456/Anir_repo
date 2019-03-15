var app=angular.module("firstapp",[]);
app.controller("firstCTRL",function($scope){
  $scope.IsVisible = false;
  $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible ? false : true;
  }
  $scope.IsShow = false;
  $scope.Show = function () {
        $scope.IsShow = true;
  }
$scope.subdatas=[
  {
    "objid": "5673b9503d2cd041ac6b8ee5",
    "nodeid": "C4050",
    "name": "Fruit",
    "formated_name": "Fruit",
    "dis_name": "Fruit",
    "dis_formated_name": "Fruit"
  },
   {
    "objid": "5673b96f3d2cd041ac6b8f78",
    "nodeid": "C4199",
    "name": "Herbs and spices",
    "formated_name": "Herbs and spices",
    "dis_name": "Herbs and spices",
    "dis_formated_name": "Herbs and spices"
  }, {
    "objid": "5673b9873d2cd041ac6b922a",
    "nodeid": "C4950",
    "name": "Grasses",
    "formated_name": "Grasses",
    "dis_name": "Grasses",
    "dis_formated_name": "Grasses"
  }, {
    "objid": "5673b98a3d2cd041ac6b92cf",
    "nodeid": "C5126",
    "name": "Nuts and Seeds",
    "formated_name": "Nuts and Seeds",
    "dis_name": "Nuts and Seeds",
    "dis_formated_name": "Nuts and Seeds"
  },
  {
    "objid": "5673b98c3d2cd041ac6b930d",
    "nodeid": "C5195",
    "name": "Vegetables",
    "formated_name": "Vegetables",
    "dis_name": "Vegetables",
    "dis_formated_name": "Vegetables"
  },
  {
    "objid": "56dd838263564628f7d73185",
    "nodeid": "E264522",
    "name": "Processing Crop",
    "formated_name": "Processing Crop",
    "dis_name": "Processing Crop",
    "dis_formated_name": "Processing Crop"
  }, {
    "objid": "56efcf2fa842a30f1082f970",
    "nodeid": "E272318",
    "name": "Food crops",
    "formated_name": "Food crops",
    "dis_name": "Food crops",
    "dis_formated_name": "Food crops"
  }, {
    "objid": "5721dfc9a842a31610745b08",
    "nodeid": "E282093",
    "name": "Stalk and stem crops",
    "formated_name": "Stalk and stem crops",
    "dis_name": "Stalk and stem crops",
    "dis_formated_name": "Stalk and stem crops"
  }]
});
