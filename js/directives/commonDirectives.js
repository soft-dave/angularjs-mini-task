AngularAppDirectives.directive('resizable', function($window) {
  return function(scope, element) {
    var w;
    w = angular.element($window);
    scope.getWindowDimensions = function() {
      return {
        h: w.height(),
        w: w.width()
      };
    };
    scope.$watch(scope.getWindowDimensions, (function(newValue, oldValue) {
      var footerHeight, windowHeight, wrapperHeight;
      scope.windowHeight = newValue.h;
      scope.windowWidth = newValue.w;
      windowHeight = newValue.h;
      wrapperHeight = newValue.h - $(".footer").outerHeight();
      if ($("footer").outerHeight() < 82) {
        footerHeight = 138;
      } else {
        footerHeight = $("footer").outerHeight();
      }
      $(".wrapper").css({
        "padding-bottom": footerHeight,
        "min-height": windowHeight
      });
      $(".ie7 .wrapper").css({
        "padding-bottom": footerHeight,
        "min-height": wrapperHeight
      });
    }), true);
    w.bind("resize", function() {
      scope.$apply();
    });
  };
});


AngularAppDirectives.directive("loading", function() {
  return {
    restrict: "E",
    replace: true,
    template: "<div class=\"loading\"> <div class=\"loaderimgText\" id=\"loaderimgText\"> <div><img src=\"images/ajax-loader.gif\" /></div> <div class=\"backTransparant\"></div> </div> </div>",
    link: function(scope, element, attr) {
      scope.$watch("loading", function(val) {
        if (val) {
          $(element).show();
        } else {
          $(element).hide();
        }
      });
    }
  };
});

AngularAppDirectives.directive("openDialog", function() {
  var openDialog;
  ({
    restrict: "A"
  });
  openDialog = {
    link: function(scope, element, attrs) {
      openDialog = function() {
        element = $(attrs.modalName);
        element.modal("show");
        return element.on("keyup.dismiss.bs.modal", $.proxy(function(e) {
          if (e.isDefaultPrevented()) {
            return;
          }
          if (e.which === 27) {
            element.modal("hide");
            scope.$apply("cancel()");
          }
        }, this));
      };
      element.bind("click", openDialog);
    }
  };
  return openDialog;
});
