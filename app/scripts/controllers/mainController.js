'use strict';

angular.module('malaysiaGeneralElectionApp')
        .controller('HomeCtrl', ['$scope', '$rootScope', '$routeParams', '$http', function($scope, $rootScope, $routeParams, $http) {

    $rootScope._breadcrumb = [{
        "name": "Home",
        "hash": "/"
      }
    ];

  }]).controller('DetailCtrl', ['$scope', '$rootScope', '$routeParams', '$http', function($scope, $rootScope, $routeParams, $http) {

    $rootScope.image_placeholder = {};
    $rootScope.image_placeholder.party = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFjklEQVR4Xu3Xx0skfRDG8TJnFEXEg4oJvIgZxYT/ujmsIgZEwXgUdRRzdqmGEfUg1rulOPV++za7ZfXUUx9+3ZOVSqVehIsEvphAFmC+mBRlSQKAAYIpAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAkAxhQXxYDBgCkBwJjiohgwGDAlABhTXBQDBgOmBABjiotiwGDAlABgTHFRDBgMmBIAjCkuigGDAVMCgDHFRTFgMGBKADCmuCgGDAZMCQDGFBfFgMGAKQHAmOKiGDAYMCUAGFNcFAMGA6YEAGOKi2LAYMCUAGBMcVEMGAyYEgCMKS6KAYMBUwKAMcVFMWAwYEoAMKa4KAYMBkwJAMYUF8WAwYApAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAlkPJi9vT05ODiQgYEBKSwsfDd8KpWSjY0NKS4ulq6uLsnKypKXlxdZX1+X4+Pj5HNTU5PU19d/ObSfvt+Xv9gPFWYsmLOzM1EQu7u7SVRDQ0NSVFT0GpvCGB8fl8fHR8nPz5fh4WHJzs6WlZUVOTo6kry8vOT/tK69vV1qamo+jfyn7/dD+zffJmPBTExMyP39/evACuLtCbO9vS37+/vJ/+u/K6inpyfRv1M4IyMjCTgFVFFRIW1tbbK6uio5OTnS3d0tl5eXsrm5KQUFBdLZ2SlTU1Ou9+vt7TUv6zf8QcaC0dNBHylzc3Nyc3OTnCBpMPp5eno6edScn5/L9fV1AuTh4SFZfG5ubvI5DUg/j46OytLSkpyenkplZaXc3t4mf9fa2ioNDQ3JaeR9v98AwPodMhZMelAFo6fBWzC6eIUyNjYmCwsLcnd393qiLC8vS1VVVfJOowj0xEk/svTEUlDPz89J+/Lycunr63uXqef9rMv6DfXhwOi7xuLiopSUlEhdXZ3s7OwkAFpaWqS6ujo5efQx8/YRlT5hdCH6Uqt/o1d/f7+UlZV9CuZf7/cbEFi+QzgwJycnoqfIx0vfW/SxoyeKAtETSU8mPYH0V9Tg4GDyiJqcnExOHr0UWEdHx6dg/uV+lkX9ltqMBzM7OytXV1evjyQ9TdIvw4rkz58/CQA9LfQdZ2ZmJnk3qa2tlYuLiwRNc3OzNDY2ytramhweHkppaWlSo70+/oLyvN9vQWD5HhkPRk8IfV/5+Cvp7TuOgtFHkL60Kq75+fl37yk9PT0JHsWlNfpCrHC2trZeX5D115NeXvdTzJl4ZTyY/xK6nhx6guilp8l3Xz99v++c538J5jsDjd4bMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd7uL9AOPbX2neNIAAAAAElFTkSuQmCC';
    $rootScope.image_placeholder.profile = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAYAAACuwEE+AAAFjklEQVR4Xu3Xx0skfRDG8TJnFEXEg4oJvIgZxYT/ujmsIgZEwXgUdRRzdqmGEfUg1rulOPV++za7ZfXUUx9+3ZOVSqVehIsEvphAFmC+mBRlSQKAAYIpAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAkAxhQXxYDBgCkBwJjiohgwGDAlABhTXBQDBgOmBABjiotiwGDAlABgTHFRDBgMmBIAjCkuigGDAVMCgDHFRTFgMGBKADCmuCgGDAZMCQDGFBfFgMGAKQHAmOKiGDAYMCUAGFNcFAMGA6YEAGOKi2LAYMCUAGBMcVEMGAyYEgCMKS6KAYMBUwKAMcVFMWAwYEoAMKa4KAYMBkwJAMYUF8WAwYApAcCY4qIYMBgwJQAYU1wUAwYDpgQAY4qLYsBgwJQAYExxUQwYDJgSAIwpLooBgwFTAoAxxUUxYDBgSgAwprgoBgwGTAlkPJi9vT05ODiQgYEBKSwsfDd8KpWSjY0NKS4ulq6uLsnKypKXlxdZX1+X4+Pj5HNTU5PU19d/ObSfvt+Xv9gPFWYsmLOzM1EQu7u7SVRDQ0NSVFT0GpvCGB8fl8fHR8nPz5fh4WHJzs6WlZUVOTo6kry8vOT/tK69vV1qamo+jfyn7/dD+zffJmPBTExMyP39/evACuLtCbO9vS37+/vJ/+u/K6inpyfRv1M4IyMjCTgFVFFRIW1tbbK6uio5OTnS3d0tl5eXsrm5KQUFBdLZ2SlTU1Ou9+vt7TUv6zf8QcaC0dNBHylzc3Nyc3OTnCBpMPp5eno6edScn5/L9fV1AuTh4SFZfG5ubvI5DUg/j46OytLSkpyenkplZaXc3t4mf9fa2ioNDQ3JaeR9v98AwPodMhZMelAFo6fBWzC6eIUyNjYmCwsLcnd393qiLC8vS1VVVfJOowj0xEk/svTEUlDPz89J+/Lycunr63uXqef9rMv6DfXhwOi7xuLiopSUlEhdXZ3s7OwkAFpaWqS6ujo5efQx8/YRlT5hdCH6Uqt/o1d/f7+UlZV9CuZf7/cbEFi+QzgwJycnoqfIx0vfW/SxoyeKAtETSU8mPYH0V9Tg4GDyiJqcnExOHr0UWEdHx6dg/uV+lkX9ltqMBzM7OytXV1evjyQ9TdIvw4rkz58/CQA9LfQdZ2ZmJnk3qa2tlYuLiwRNc3OzNDY2ytramhweHkppaWlSo70+/oLyvN9vQWD5HhkPRk8IfV/5+Cvp7TuOgtFHkL60Kq75+fl37yk9PT0JHsWlNfpCrHC2trZeX5D115NeXvdTzJl4ZTyY/xK6nhx6guilp8l3Xz99v++c538J5jsDjd4bMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd4OMNE37DwfYJwDjd7uL9AOPbX2neNIAAAAAElFTkSuQmCC';

    $rootScope._breadcrumb = [{
        "name": "Home",
        "hash": "/"
      }, {
        "name": "Constituency",
        "hash": "/"
      }
    ];

    $scope.GetConstituencyDetails = function(constituency_code) {
      if (!isNaN(constituency_code)) {
        $http({
          method: 'GET',
          url: 'data/GE2013/parliamentary/constituencies/' + constituency_code + '.json'
        }).success(function(data, status, headers, config) {
          $scope.constituency = data;
        }).error(function(data, status, headers, config) {
          console.warn('Error loading Parliamentary Constituencies');
        });
      }
    };

    (function() {
      if ($routeParams.constituency_code) {
        $scope.GetConstituencyDetails($routeParams.constituency_code);
        $rootScope.SetActiveMarker($routeParams.constituency_code);
      }
    })();


  }]).controller('MainCtrl', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {

    var map;

    $scope.parliamentary_constituencies = [];

    $scope.GetParliamentaryConstituencies = function() {
      $http({
        method: 'GET',
        url: 'data/GE2013/parliamentary/overall.json'
      }).success(function(data, status, headers, config) {
        $scope.parliamentary_constituencies = data;
      }).error(function(data, status, headers, config) {
        console.warn('Error loading Parliamentary Constituencies');
      });
    }();

    $scope.count = 0;
    $scope.$watch('parliamentary_constituencies', function() {

    });

    /* 
     * Initializations
     */

    (function() {

    })();

  }]).controller('GMapCtrl', ['$scope', '$rootScope', '$routeParams', '$timeout', '$location', function($scope, $rootScope, $routeParams, $timeout, $location) {

    var $main_map_canvas = $('#map-canvas');
    $rootScope._assets = $rootScope._assets || {};
    $rootScope._assets.googlemaps = $rootScope._assets.googlemaps || {};
    $rootScope._assets.googlemaps.orignal_marker_green = 'http://maps.google.com/mapfiles/marker_green.png';
    $rootScope._assets.googlemaps.orignal_marker_purple = 'http://maps.google.com/mapfiles/marker_purple.png';
    $rootScope._assets.googlemaps.marker_blue = 'data:image/png;base64,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';
    $rootScope._assets.googlemaps.marker_red = 'data:image/png;base64,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';
    $rootScope._active_marker = null;

    $rootScope.SetActiveMarker = function(constituency_code) {
      var marker = $('#map-canvas').gmap3({get: {id: "main_map_marker_" + constituency_code}});
      $rootScope._active_marker = marker;
    };

    $main_map_canvas.gmap3({
      map: {
        options: {
          center: new google.maps.LatLng(4, 108),
          zoom: 6,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          mapTypeControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
          },
          navigationControl: false,
          scrollwheel: true,
          streetViewControl: true,
          zoomControl: false
        }
      }
    });

    function main_map_add_marker(marker_order, marker_lat, marker_lng, marker_description) {
      var marker_id = 'main_map_marker_' + marker_order;
      $main_map_canvas.gmap3({
        marker: {
          id: marker_id,
          latLng: [marker_lat, marker_lng],
          options: {
            icon: $rootScope._assets.googlemaps.marker_red
          },
          events: {
            click: function(marker) {
              $rootScope._active_marker = marker;
              window.location.hash = '/details/' + marker_order;
            },
            mouseover: function(marker) {
              $('#' + marker_id).css({'display': 'block', 'opacity': 0}).stop(true, true).animate({bottom: '15px', opacity: 1}, 500);
            },
            mouseout: function(marker) {
              $('#' + marker_id).stop(true, true).animate({bottom: '50px', opacity: 0}, 500, function() {
                $(this).css({'display': 'none'});
              });
            }
          }
        },
        overlay: {
          latLng: [marker_lat, marker_lng],
          options: {
            content: marker_description,
            offset: {
              y: -42,
              x: -122
            }
          }
        }
      });
    }

    $scope.$watch('constituency_code', function() {
      if ($routeParams.constituency_code) {
        $rootScope.SetActiveMarker($routeParams.constituency_code);
      }
    });

    $scope.$watch('_active_marker', function(new_marker, old_marker) {
      if (old_marker) {
        old_marker.setAnimation(null);
        old_marker.setIcon($rootScope._assets.googlemaps.marker_red);
      }
      if (new_marker) {
        new_marker.setAnimation(google.maps.Animation.BOUNCE);
        new_marker.setIcon($rootScope._assets.googlemaps.marker_blue);
        $main_map_canvas.gmap3("get").panTo(new_marker.position);
      }
    });

    $scope.$watch('parliamentary_constituencies', function() {
      angular.forEach($scope.parliamentary_constituencies, function(value, key) {
        var desc = '<div id="main_map_marker_' + value.code + '" class="main_map_marker_info"><div class="location-description"> <div class="location-title"> <h2>P' + value.code + ' - ' + value.constituency + '</h2> <div class="location-subtitle"><p>' + value.state + '</p></div> </div> <div class="location-result">' + value.state + '</div> </div> <!-- .location-description --> </div> <!-- .main_map_marker_info -->';
        if (value.location) {
          main_map_add_marker(value.code, value.location.lat, value.location.lng, desc);
        }
      });
    });

    (function() {
      $timeout(function() {
        $rootScope.SetActiveMarker($routeParams.constituency_code);
      }, 1000);
    })();


  }])
        .run(['$route', function($route) {
    $route.reload();
  }]);
