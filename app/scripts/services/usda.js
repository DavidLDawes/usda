'use strict';

/**
 * @ngdoc service
 * @name usdaRdrApp.usda
 * @description
 * # usda
 * Service in the usdaRdrApp.
 */
angular.module('usdaRdrApp')
  .service('usda', function ($resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function


    var usdaList = $resource('http://api.nal.usda.gov/ndb/list?format=json&lt=f&sort=n&max=200&offset=:offset&api_key=mofgsQsSA7fVbmrYjx3ToMsv1r1Y0jl6mmQolg6B',
              {offset: "@offset"}, //parameter
              {
                ListFoods: { method: "GET", params: { offset: 0 } },
                GetNutrition: { method: "GET", params: { id: '255' }, isArray:true }
              });
    var usdaSearch = $resource('http://api.nal.usda.gov/ndb/search/?format=json&q=:queryText&max=250&offset=0&api_key=mofgsQsSA7fVbmrYjx3ToMsv1r1Y0jl6mmQolg6B',
              {queryText: "@queryText"}, //parameter
              {
                SearchFoods: { method: "GET", params: { queryText: '"Apples, raw," "with skin"' } }
              });

    this.getFoods = function(offset) {
      return usdaList.ListFoods(offset);
    };

    this.searchFoods = function(searchText) {
      return usdaSearch.SearchFoods(searchText);
    };


  });
