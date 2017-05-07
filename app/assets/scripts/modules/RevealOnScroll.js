import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {

    this.itemsToReveal = els;
    this.offSetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();

  }

  hideInitially() {
    // only hide elements that DON'T have class "meals-plans-animate" since we want this to pulse
    if (!this.itemsToReveal.hasClass("meal-plans--animate")) {
      this.itemsToReveal.addClass("reveal-item");
    }

  }

  createWaypoints() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      // console.log(this);
      new Waypoint({
        element: currentItem,
        handler: function() {

            // console.log($(currentItem));
            // console.log(currentItem);
            // console.log(this);
            // console.log(this.element);
            // console.log($(this));

          if ($(currentItem).hasClass("app-screen")) {
            $(currentItem).addClass("animated fadeInUp");
          }
          if ($(currentItem).hasClass("meal-plans--animate")) {
            $(currentItem).addClass("animated pulse");
          } else {
            $(currentItem).addClass("animated fadeIn");
          }
        },
        offset: that.offSetPercentage
      });
    });
  }

}

export default RevealOnScroll;
