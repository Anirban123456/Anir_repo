var app=angular.module("secondapp",[]);
app.controller("secondCTRL",function($scope){
  $scope.IsVisible = false;
  $scope.ShowHide = function () {
        $scope.IsVisible = $scope.IsVisible ? false : true;
  }
  $scope.IsShow = false;
  $scope.Show = function () {
        $scope.IsShow = true;
  }
  $scope.Isee = false;
  $scope.Showit = function () {
        $scope.Isee = true ;
  }
  $scope.thirdlevel = false;
  $scope.Showthirdlevel = function () {
        $scope.thirdlevel = $scope.thirdlevel ? false : true;
  }
$scope.secondata=[
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
  /*{
    "objid": "5673b98c3d2cd041ac6b930d",
    "nodeid": "C5195",
    "name":"Vegetables",
    "formated_name": "Vegetables",
    "dis_name": "Vegetables",
    "dis_formated_name": "Vegetables",
  },*/
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
$scope.thirdata=[
    {

          "objid": "568e2a46a842a36a123eaa6f",
          "nodeid": "A228126",
          "name": "Vegetables without sauce, including cream style corn and stewed tomatoes",
          "formated_name": "Vegetables without sauce, including cream style corn and stewed tomatoes",
          "dis_name": "Vegetables without sauce, including cream style corn and stewed tomatoes",
          "dis_formated_name": "Vegetables without sauce, including cream style corn and stewed tomatoes"
      },
      {
          "objid": "568e2a46a842a36a123eaa70",
          "nodeid": "A228128",
          "name": "Vegetables with sauce",
          "formated_name": "Vegetables with sauce",
          "dis_name": "Vegetables with sauce",
          "dis_formated_name": "Vegetables with sauce"
      },
      {
          "objid": "568e2a46a842a36a123eaa71",
          "nodeid": "A228130",
          "name": "Vegetables primarily used for garnish or flavouring, fresh, canned or frozen, but not dried",
          "formated_name": "Vegetables primarily used for garnish or flavouring, fresh, canned or frozen, but not dried",
          "dis_name": "Vegetables primarily used for garnish or flavouring, fresh, canned or frozen, but not dried",
          "dis_formated_name": "Vegetables primarily used for garnish or flavouring, fresh, canned or frozen, but not dried"
      },
      {
          "objid": "568e2a46a842a36a123eaa72",
          "nodeid": "A228136",
          "name": "Seaweed",
          "formated_name": "Seaweed",
          "dis_name": "Seaweed",
          "dis_formated_name": "Seaweed"
      },
      {
          "objid": "568e2a47a842a36a123eaa73",
          "nodeid": "A228138",
          "name": "Lettuce and sprouts",
          "formated_name": "Lettuce and sprouts",
          "dis_name": "Lettuce and sprouts",
          "dis_formated_name": "Lettuce and sprouts"
      },
      {
          "objid": "568e2a47a842a36a123eaa74",
          "nodeid": "A228140",
          "name": "Vegetable juice and vegetable drink",
          "formated_name": "Vegetable juice and vegetable drink",
          "dis_name": "Vegetable juice and vegetable drink",
          "dis_formated_name": "Vegetable juice and vegetable drink"
      },
      {
          "objid": "568e2a47a842a36a123eaa76",
          "nodeid": "A228148",
          "name": "Vegetable pastes",
          "formated_name": "Vegetable pastes",
          "dis_name": "Vegetable pastes",
          "dis_formated_name": "Vegetable pastes"
      },
      {
          "objid": "568e2a48a842a36a123eaa77",
          "nodeid": "A228150",
          "name": "Vegetable sauce or pur?",
          "formated_name": "Vegetable sauce or pur?",
          "dis_name": "Vegetable sauce or pur�e",
          "dis_formated_name": "Vegetable sauce or pur�e"
      },
      {
          "objid": "568e2fb7a842a36b22b67504",
          "nodeid": "A230502",
          "name": "Brassica (cole or cabbage) vegetables",
          "formated_name": "Brassica (cole or cabbage) vegetables",
          "dis_name": "Brassica (cole or cabbage) vegetables",
          "dis_formated_name": "Brassica (cole or cabbage) vegetables"
      },
      {
          "objid": "5673b9da3d2cd041ac6ba91f",
          "nodeid": "C192997",
          "name": "Pickles",
          "formated_name": "Pickles",
          "dis_name": "Pickles",
          "dis_formated_name": "Pickles"
      },
      {
          "objid": "5673b9b83d2cd041ac6b9da6",
          "nodeid": "C195536",
          "name": "Relish",
          "formated_name": "Relish",
          "dis_name": "Relish",
          "dis_formated_name": "Relish"
      },
      {
          "objid": "5673b98e3d2cd041ac6b934f",
          "nodeid": "C5266",
          "name": "Brassica (cole or cabbage) vegetables, head cabbage, flowerhead brassicas",
          "formated_name": "Brassica (cole or cabbage) vegetables, head cabbage, flowerhead brassicas",
          "dis_name": "Brassica (cole or cabbage) vegetables, head cabbage, flowerhead brassicas",
          "dis_formated_name": "Brassica (cole or cabbage) vegetables, head cabbage, flowerhead brassicas"
      },
      {
          "objid": "5673b98e3d2cd041ac6b9362",
          "nodeid": "C5286",
          "name": "Bulb vegetables",
          "formated_name": "Bulb vegetables",
          "dis_name": "Bulb vegetables",
          "dis_formated_name": "Bulb vegetables"
      },
      {
          "objid": "5673b98f3d2cd041ac6b9378",
          "nodeid": "C5311",
          "name": "Fruiting vegetables, cucurbits",
          "formated_name": "Fruiting vegetables, cucurbits",
          "dis_name": "Fruiting vegetables, cucurbits",
          "dis_formated_name": "Fruiting vegetables, cucurbits"
      },
      {
          "objid": "5673b98f3d2cd041ac6b93a9",
          "nodeid": "C5363",
          "name": "Fruiting vegetables, other than cucurbits",
          "formated_name": "Fruiting vegetables, other than cucurbits",
          "dis_name": "Fruiting vegetables, other than cucurbits",
          "dis_formated_name": "Fruiting vegetables, other than cucurbits"
      },
      {
          "objid": "5673b9913d2cd041ac6b93cb",
          "nodeid": "C5403",
          "name": "Leafy vegetables (including Brassica leafy vegetables)",
          "formated_name": "Leafy vegetables (including Brassica leafy vegetables)",
          "dis_name": "Leafy vegetables (including Brassica leafy vegetables)",
          "dis_formated_name": "Leafy vegetables (including Brassica leafy vegetables)"
      },
      {
          "objid": "5673b9923d2cd041ac6b942e",
          "nodeid": "C5504",
          "name": "Legume vegetables",
          "formated_name": "Legume vegetables",
          "dis_name": "Legume vegetables",
          "dis_formated_name": "Legume vegetables"
      },
      {
          "objid": "5673b9943d2cd041ac6b947d",
          "nodeid": "C5586",
          "name": "Pulses",
          "formated_name": "Pulses",
          "dis_name": "Pulses",
          "dis_formated_name": "Pulses"
      },
      {
          "objid": "5673b9943d2cd041ac6b94aa",
          "nodeid": "C5633",
          "name": "Stalk and Stem Vegetables",
          "formated_name": "Stalk and Stem Vegetables",
          "dis_name": "Stalk and Stem Vegetables",
          "dis_formated_name": "Stalk and Stem Vegetables"
      },
      {
          "objid": "5673b9973d2cd041ac6b9509",
          "nodeid": "C5737",
          "name": "Root and Tuber Vegetables",
          "formated_name": "Root and Tuber Vegetables",
          "dis_name": "Root and Tuber Vegetables",
          "dis_formated_name": "Root and Tuber Vegetables"
      },
      {
          "objid": "5673b9b63d2cd041ac6b9d1d",
          "scopeNote": null,
          "nodeid": "C195366",
          "name": "Scallion",
          "formated_name": "Scallion",
          "dis_name": "Scallion",
          "dis_formated_name": "Scallion"
      },
      {
          "objid": "56dd838163564628f7d7317e",
          "scopeNote": [
              {
                  "sourceType": "source",
                  "source": "HEALTHCANADA",
                  "comment": "Fresh Fruit and Vegetable Regulations"
              }
          ],
          "nodeid": "E264506",
          "name": "Miniature Vegetable",
          "formated_name": "Miniature Vegetable",
          "dis_name": "Miniature Vegetable",
          "dis_formated_name": "Miniature Vegetable"
      },
      {
          "objid": "5673b9b33d2cd041ac6b9c84",
          "scopeNote": null,
          "nodeid": "C195154",
          "name": "Chilli",
          "formated_name": "Chilli",
          "dis_name": "Chilli",
          "dis_formated_name": "Chilli"
      },
      {
          "objid": "5673b9843d2cd041ac6b91b8",
          "scopeNote": null,
          "nodeid": "C4822",
          "name": "Olive",
          "formated_name": "Olive",
          "dis_name": "Olive",
          "dis_formated_name": "Olive"
      }]

});
