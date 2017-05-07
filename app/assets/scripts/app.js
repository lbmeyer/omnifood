import StickyHeader from './modules/StickyHeader';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll'
import $ from 'jquery';

var stickyHeader = new StickyHeader();
var mobileMenu = new MobileMenu();

//create RevealOnScroll objects
new RevealOnScroll($(".section-features"), "50%");
new RevealOnScroll($(".city-card"), "50%");
new RevealOnScroll($(".app-screen"), "50%");
new RevealOnScroll($(".meal-plans--animate"), "50%");
