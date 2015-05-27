$(function(){
    var cursor = 1 + Math.floor((text.length - 1)*Math.random());
    var $frames = $('#frames');
    var $current, $old;
    var frame_template = $('#frame_template').html();

    //function next_frame(){
    //    alert(0);
    //    $old = $($current);
    //
    //    // set up next frame
    //    $current = $(Mustache.render(frame_template, {
    //        text: text[cursor],
    //        footnote: footnotes[cursor],
    //        quip: quips[Math.floor(Math.random()*quips.length)]
    //    })).appendTo($frames);
    //
    //    $old.addClass('past');
    //    setTimeout(function(){
    //        $current.removeClass('future');
    //        setTimeout(function(){
    //            $old.remove();
    //        }, 600);
    //    }, 200);
    //
    //    cursor = (cursor >= text.length -1) ? 1 : cursor + 1;
    //}
alert(frames);
    console.log(frames);
    frames.delegate('a.quip', 'click', function(){
        next_frame();
    });
alert(2);
    next_frame();
});




//
//
////Portfolio:Please check docs for more info
//(function ($, window, document, undefined) {
//
//    var gridContainer = $('#grid-container'),
//        filtersContainer = $('#filters-container');
//
//    // init cubeportfolio
//    gridContainer.cubeportfolio({
//
//        defaultFilter: '*',
//
//        animationType: 'rotateRoom',
//
//        gapHorizontal: 0,
//
//        gapVertical: 0,
//
//        gridAdjustment: 'responsive',
//
//        caption: 'overlayBottomAlong',
//
//        displayType: 'bottomToTop',
//
//        displayTypeSpeed: 100,
//
//        // lightbox
//        lightboxDelegate: '.cbp-lightbox',
//        lightboxGallery: true,
//        lightboxTitleSrc: 'data-title',
//        lightboxShowCounter: true,
//
//
//
//    });
//
//    // add listener for filters click
//    filtersContainer.on('click', '.cbp-filter-item', function (e) {
//
//        var me = $(this),
//            wrap;
//
//        // get cubeportfolio data and check if is still animating (reposition) the items.
//        if (!$.data(gridContainer[0], 'cubeportfolio').isAnimating) {
//
//            if (filtersContainer.hasClass('cbp-l-filters-dropdown')) {
//                wrap = $('.cbp-l-filters-dropdownWrap');
//
//                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');
//
//                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());
//
//                me.addClass('cbp-filter-item-active');
//            } else {
//                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
//            }
//
//        }
//
//        // filter the items
//        gridContainer.cubeportfolio('filter', me.data('filter'), function () {});
//
//    });
//
//    // activate counter for filters
//    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));
//
//})(jQuery, window, document);