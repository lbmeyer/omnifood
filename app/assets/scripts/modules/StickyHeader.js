import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    // For sticky nav
    this.siteNav = $(".site-header-nav");
    this.headerTriggerElement = $(".sticky-nav-trigger");
    this.mobileMenuIcon = $(".site-header-mobile-nav__icon");
    this.createHeaderWaypoint();

    // For smooth scrolling
    this.headerLinks = $(".site-header-nav a");
    this.heroButtons = $(".hero-box__cta a");
    this.addSmoothScrolling();

    // For highlighting nav links based on page position
    this.pageSections = $(".page-section");
    this.createPageSectionWaypoints();

  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      element: this.headerTriggerElement[0],
      handler: function(direction) {
        if(direction == "down") {
          that.siteNav.addClass("site-header-nav--sticky");
          //move hamburger icon lower in sticky nav
          that.mobileMenuIcon.addClass("site-header-mobile-nav__icon--is-in-sticky");
        } else {
          that.siteNav.removeClass("site-header-nav--sticky");
          that.mobileMenuIcon.removeClass("site-header-mobile-nav__icon--is-in-sticky");
        }
      },
      offset: "12%"
    });
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
    this.heroButtons.smoothScroll({
      speed: 600,
      easing: 'swing'
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "down") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "5%"
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction) {
          if(direction == "up") {
            var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-10%"
      });

    });
  }
}

export default StickyHeader;
