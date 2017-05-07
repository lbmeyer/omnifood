import $ from 'jquery';

class MobileMenu {
  constructor() {

    this.mobileMenuIcon = $(".site-header-mobile-nav__icon");
    this.mobileNav = $(".site-header__main-nav");
    this.events(); // make browser listen to this event when page loads

  }

  events() {
    this.mobileMenuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu() {
    this.mobileMenuIcon.toggleClass("active");
    this.mobileNav.slideToggle();
    return false; //prevent browser from going back to top on click
  }


}

export default MobileMenu;
