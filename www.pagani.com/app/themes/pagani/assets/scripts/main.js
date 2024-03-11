window.Config = (function($) {

    'use strict';



    /**
     * Returning object
     * ----------------
     */
    return {
        breakpoints: {
            desktop: 1025
        }
    };

})(jQuery);
window.Utils = (function($, Config) {

    'use strict';

    var $body = $('body');

    var detect = {
        desktop: function() {
            return window.innerWidth > Config.breakpoints.desktop;
        },
        touch: function() {
            return 'ontouchstart' in window || navigator.maxTouchPoints;
        },
        mobile: function() {
            return ('ontouchstart' in window || navigator.maxTouchPoints) && (window.innerWidth <= Config.breakpoints.desktop);
        },
        portrait: function() {
            return window.innerWidth < window.innerHeight;
        },
        ios: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        iphone: function() {
            return navigator.userAgent.match(/iPhone|iPod/i);
        },
        ipad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        safari: function() {
            return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        }
    };

    /**
     * Returning object
     * ----------------
     */
    return {
        is: detect,
        applyBodyClasses: function() {
            // touch
            if (detect.touch()) {
                $body.addClass('touch');
            }
            // ios
            if (detect.ios()) {
                $body.addClass('ios');
            }
            // iphone
            if (detect.iphone()) {
                $body.addClass('iphone');
            }
            // ipad
            if (detect.ipad()) {
                $body.addClass('ipad');
            }
            // safari
            if (detect.safari()) {
                $body.addClass('safari');
            }
        }
    };

})(jQuery, Config);

window.AjaxPostLoader = (function($) {

    'use strict';

    /**
     * Retrieves a post with ajax
     * ---------------------------------------------------------------------------------------
     * @param   {number}   id         -   The post id
     * @param   {string}   type       -   The post type
     * @param   {string}   template   -   The php template to render post with
     * @param   {string}   wrapper    -   The selector of html element to load response within
     */
    var getPost = function(id, type, template, wrapper) {
        var id = id || null;
        var type = type || null;
        var template = template || null;
        var $wrapper = $(wrapper);
        var $block = $wrapper.hasClass('block') ? $wrapper : $wrapper.parent('.block');
        $.ajax({
            url: '/wp/wp-admin/admin-ajax.php',
            type: 'POST',
            data: {
                action: 'getAjaxPost',
                id: id,
                type: type,
                template: template
            },
            beforeSend: function() {
                $block.addClass('slide-in').addClass('block--loading');
                if ($block.hasClass('block--white')) {
                    Header.darkify();
                }
            },
            success: function(response) {
                $wrapper.html(response).promise().done(function() {
                    Reveal.init();
                    Sliders.init();
                    $block.removeClass('block--loading').addClass('visible');
                    $(document).trigger('loadingBlock');
                });
            },
            error: function(jqXHR, textStatus) {
                //console.log('error');
            }
        });

        return false;
    };

    return {
        init: function() {
            // listening for ajax loader triggers click
            $('.js-ajax-post').on('click', function() {
                var $that = $(this);
                var id = $that.data('post');
                var type = $that.data('type');
                var template = $that.data('template');
                var wrapper = $that.data('wrapper');
                getPost(id, type, template, wrapper);
            });
        },
        get: getPost
    };

})(jQuery);
var scrolling = false;
window.Blocks = (function($, Utils) {

    'use strict';

    var $blocks = $('.block');
    var $current = null;
    var lastScrollTime = 0;
    var transitionDuration = Utils.is.desktop() ? 800 : 800;
    var $firstBlock;
    var isScrollableSection = false;
    var isHomepage = false;

    /**
     * Blocks sliding handler
     * ---------------------------------------------------------------------------------------------------------
     * @param   {number}    currentIndex             -   The target block's index
     * @param   {number}    targetIndex              -   The target block's index
     * @param   {boolean}   isChild        [false]   -   Defines if target block is a child block
     * @param   {boolean}   fromChild      [false]   -   Defines if sliding has been required from a child block
     */
    var slide = function(currentIndex, targetIndex, isChild, fromChild) {
        var $aux;
        var $paginator;
        if (typeof currentIndex === 'number' && typeof targetIndex === 'number') {
            isChild = isChild || false;
            fromChild = fromChild || false;
            if (targetIndex > currentIndex) {
                // MOVING FORWARD
                if (isChild) {
                    // hide parent slide paginator if visible (ES: homepage)
                    $('.blocks-pagination').addClass('hidden-child');
                    // updating pagination
                    $paginator = $current.siblings('.blocks-pagination--children');
                    $paginator.children('.blocks-pagination__item').removeClass('current');
                    $paginator.children('.blocks-pagination__item[data-index="' + targetIndex + '"]').addClass('current');
                    // making target block slided in
                    $current.parent('.block--children')
                        .children('.block[data-child-index="' + targetIndex + '"]')
                        .addClass('slide-in');
                    // making all previous block slided in
                    setTimeout(function() {
                        for (var i = currentIndex + 1; i < targetIndex; i++) {
                            $aux = $current.parent('.block--children').children('.block[data-child-index="' + i + '"]');
                            $aux.addClass('no-transition').promise().done(function() {
                                $aux.addClass('slide-in').promise().done(function() {
                                    $aux.removeClass('no-transition');
                                });
                            });
                        }
                    }, transitionDuration / 2);
                } else {
                    // Show paginator if coming from child slide
                    $('.blocks-pagination').removeClass('hidden-child');
                    // updating pagination
                    $paginator = $('main.content').children('.blocks-pagination');
                    $paginator.children('.blocks-pagination__item').removeClass('current');
                    $paginator.children('.blocks-pagination__item[data-index="' + targetIndex + '"]').addClass('current');
                    // making target block slided in
                    $('.block[data-index="' + targetIndex + '"]').addClass('slide-in');
                    // making all previous block slided in
                    setTimeout(function() {
                        for (var i = currentIndex + 1; i < targetIndex; i++) {
                            $aux = $('.block[data-index="' + i + '"]').not('.block--children');
                            $aux.addClass('no-transition').promise().done(function() {
                                $aux.addClass('slide-in').promise().done(function() {
                                    $aux.removeClass('no-transition');
                                });
                            });
                        }
                    }, transitionDuration / 2);
                }
            } else if (targetIndex < currentIndex) {
                // MOVING BACKWARD
                if (isChild) {
                    // hide parent slide paginator if visible (ES: homepage)
                    $('.blocks-pagination').addClass('hidden-child');
                    $paginator = $current.siblings('.blocks-pagination--children');
                    $paginator.children('.blocks-pagination__item').removeClass('current');
                    $paginator.children('.blocks-pagination__item[data-index="' + targetIndex + '"]').addClass('current');
                    // ensuring target block to be slided in
                    $aux = $current.parent('.block--children').children('.block[data-child-index="' + targetIndex + '"]');
                    $aux.addClass('no-transition').promise().done(function() {
                        $aux.addClass('slide-in').promise().done(function() {
                            $aux.removeClass('no-transition');
                        });
                    });
                    // making all target following blocks slided out
                    for (var i = currentIndex; i > targetIndex; i--) {
                        $current.parent('.block--children')
                            .children('.block[data-child-index="' + i + '"]')
                            .removeClass('slide-in');
                    }
                } else {
                    // Show paginator if coming from child slide
                    $('.blocks-pagination').removeClass('hidden-child');
                    // updating pagination
                    $paginator = $('main.content').children('.blocks-pagination');
                    $paginator.children('.blocks-pagination__item').removeClass('current');
                    $paginator.children('.blocks-pagination__item[data-index="' + targetIndex + '"]').addClass('current');
                    // ensuring target block to be slided in
                    $aux = $('.block[data-index="' + targetIndex + '"]');
                    $aux.addClass('no-transition').promise().done(function() {
                        $aux.addClass('slide-in').promise().done(function() {
                            $aux.removeClass('no-transition');
                        });
                    });
                    // making all target following blocks slided out
                    for (var i = currentIndex; i > targetIndex; i--) {
                        $('.block[data-index="' + i + '"]').removeClass('slide-in');
                    }
                }
            }
            // removing slide-in class from children when moving out from child blocks wrapper
            if (fromChild) {
                setTimeout(function() {
                    // remove current slide also from pagination (childer) when moving to parent element
                    // add current class to first pagination imte
                    $('.blocks-pagination--children .blocks-pagination__item').removeClass('current');
                    $('.blocks-pagination--children .blocks-pagination__item[data-index="1"]').addClass('current');

                    $aux = $('.block[data-index="' + currentIndex + '"]').children('.block--child');
                    $aux.addClass('no-transition').promise().done(function() {
                        $aux.removeClass('slide-in').promise().done(function() {
                            $aux.removeClass('no-transition');
                        });
                    });
                }, transitionDuration);
            }
        } else {
            throw 'Invalid parameter';
        }
    };

    /**
     * Scrolls to a target block
     * -----------------------------------------------------------------------------------------
     * @param   {number}    targetIndex             -   The target block's index
     * @param   {boolean}   isChild       [false]   -   Defines if target block is a child block
     */
    var scrollTo = function(targetIndex, isChild) {
        if (scrolling) {
            return;
        } else {
            scrolling = true;
        }
        var $target;
        isChild = isChild || false;
        if (typeof targetIndex === 'number') {
            $current.removeClass('current');
            if (isChild) {
                // navigating between child blocks within the same wrapper
                $target = $current.parent('.block--children').children('.block--child[data-child-index="' + targetIndex + '"]');
                slide($current.data('child-index'), targetIndex, true, false);
                $('.block__back-button').fadeIn();
            } else {
                $target = $('.block[data-index="' + targetIndex + '"]');
                if ($current.hasClass('block--child')) {
                    // exiting from a child blocks wrapper
                    slide($current.parent('.block--children').data('index'), targetIndex, false, true);
                } else {
                    // navigating between standards block
                    slide($current.data('index'), targetIndex, false, false);
                }
                // entering in a child blocks wrapper
                if ($target.hasClass('block--children')) {
                    $target = $target.children('.block[data-child-index="1"]');

                    // hide parent slide paginator if visible (ES: homepage)
                    $('.blocks-pagination').addClass('hidden-child');
                }
            }
            $target.addClass('current');
            $current = $target;
            if (Utils.is.touch()) {
                if ($current.hasClass('block--scrollable')) {
                    Gestures.disable();
                    isScrollableSection = true;
                } else {
                    Gestures.enable(onPan);
                    isScrollableSection = false;
                }
            }
            if ($current.attr('data-label') === 'Specifications') {
                window.TechnicalSpecs.refresh();
            }
            // trigger block changed event
            $(document).trigger('blockChanged');
        } else {
            throw 'Invalid parameter';
        }
    };

    /**
     * Scrolls to the next block
     * -------------------------------------------------------------------------------------
     * @param   {boolean}   isChild   [false]   -   Defines if target block is a child block
     */
    var next = function(isChild) {
        isChild = isChild || false;
        var targetIndex = isChild ? $current.data('child-index') + 1 : $current.data('index') + 1;
        scrollTo(targetIndex, isChild);
    };

    /**
     * Scrolls to the previous block
     * -------------------------------------------------------------------------------------
     * @param   {boolean}   isChild   [false]   -   Defines if target block is a child block
     */
    var prev = function(isChild) {
        isChild = isChild || false;
        var targetIndex = isChild ? $current.data('child-index') - 1 : $current.data('index') - 1;
        scrollTo(targetIndex, isChild);
    };

    /**
     * Scroll handler
     * -----------------------------------------------------------------------------------
     * @param   {event}     e        -   The scroll event
     * @param   {boolean}   isAjax   -   Defines if scroll is used to exit from ajax block
     */
    var onScroll = function(e, isAjax) {
        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        if (typeof delta === 'number') {
            var now = new Date().getTime();
            var delay = transitionDuration * 2 / 3;
            var isChild = $current.hasClass('block--child');
            // checking time
            if ((now - lastScrollTime > delay) || lastScrollTime === 0) {
                if (delta < 0) { // down scroll
                    if ($current.data('next')) {
                        next(isChild);
                    } else {
                        lastScrollTime = 0;
                        return;
                    }
                } else { // up scroll
                    if (typeof isAjax !== 'undefined' && isAjax) {
                        // $current.children('.block--ajax').removeClass('visible').removeClass('slide-in');
                        // console.log('remove slide-in onScroll');
                        // setTimeout(function () {
                        //   $current.find('.block__post-content').html('');
                        // }, transitionDuration / 2);
                    } else if ($current.data('prev')) {
                        prev(isChild);
                    } else {
                        lastScrollTime = 0;
                        return;
                    }
                }
                lastScrollTime = now;
            }
        } else {
            throw 'Missing argument';
        }
    };

    /**
     * Pan handler
     * ----------------------------------------
     * @param   {event}   e   -   The pan event
     */
    var onPan = function(e) {
        var now = new Date().getTime();
        var delay = transitionDuration * 2 / 3;
        var isChild = $current.hasClass('block--child');
        // checking time
        if ((now - lastScrollTime > delay) || lastScrollTime === 0) {
            switch (e.gesture.direction) {
                case 16:
                    if ($current.data('prev')) {
                        prev(isChild);
                    } else {
                        lastScrollTime = 0;
                    }
                    break;
                case 8:
                    if ($current.data('next')) {
                        next(isChild);
                    } else {
                        lastScrollTime = 0;
                    }
                    break;
                default:
                    break;
            }
            lastScrollTime = now;
        }
    };

    /**
     * Keyboard handler
     * ----------------------------------------------------------------------
     * @param   {number}   key   -   The keycode of a pressed keyboard button
     */
    var onKeyDown = function(key) {
        // if ($current.hasClass('block--parent')) {
        //     var currentId = $current.attr('id');
        //     // blocking scroll propagation from parent to children
        //     lastScrollTime = new Date().getTime();
        //     // binding key
        //     if ($('[data-parent="' + currentId + '"]').length) {
        //         switch (key) {
        //             case 37: // left
        //                 scrollTo($('[data-parent="' + currentId + '"][data-slide-from="left"]').data('index'), false);
        //                 break;
        //             case 38: // up
        //                 scrollTo($('[data-parent="' + currentId + '"][data-slide-from="top"]').data('index'), false);
        //                 break;
        //             case 39: // right
        //                 scrollTo($('[data-parent="' + currentId + '"][data-slide-from="right"]').data('index'), false);
        //                 break;
        //             case 40: // down
        //                 scrollTo($('[data-parent="' + currentId + '"][data-slide-from="bottom"]').data('index'), false);
        //                 break;
        //             default:
        //                 break;
        //         }
        //     }
        // } else if ($current.hasClass('block--child')) {
        //     var $parent = $current.parent('.block--children');
        //     var from = $parent.data('slide-from');
        //     var target = $('#' + $parent.data('parent')).data('index');
        //     switch (key) {
        //         case 37: // left
        //             if (from === 'right') {
        //                 scrollTo(target, false);
        //             }
        //             break;
        //         case 38: // up
        //             if ($current.prev('.block--child').length) {
        //                 prev(true);
        //             } else if (from === 'bottom') {
        //                 scrollTo(target, false);
        //             }
        //             break;
        //         case 39: // right
        //             if (from === 'left') {
        //                 scrollTo(target, false);
        //             }
        //             break;
        //         case 40: // down
        //             if ($current.next('.block--child').length) {
        //                 next(true);
        //             } else if (from === 'up') {
        //                 scrollTo(target, false);
        //             }
        //             break;
        //         case 27: // esc
        //             scrollTo(target, false);
        //             break;
        //         default:
        //             break;
        //     }
        // }
        if ($current.hasClass('block--child') && key === 27) {
            scrollTo($('#' + $current.parent('.block--children').data('parent')).data('index'), false);
        }
    };

    /**
     * Creates a pagination sidebar to navigate between blocks
     * -------------------------------------------------------
     */
    var createPagination = function() {
        var $toIndex = $('.block[data-index]');
        var $paginator = $('main.content').children('.blocks-pagination');
        if ($toIndex.length && $paginator.length) {
            for (var i = 0; i < $toIndex.length; i++) {
                var item = '<li';
                item += ' class="blocks-pagination__item' + (i === 0 ? ' current"' : '"');
                item += ' data-index="' + $($toIndex[i]).data('index') + '"';
                item += ' data-label="' + $($toIndex[i]).data('label') + '"';
                item += '></li>';
                $paginator.append(item);
            }
        }
        // listening for click
        $paginator.children('.blocks-pagination__item').on('click', function() {
            if (Utils.is.desktop()) {
                scrollTo($(this).data('index'), false);
            }
        });
    };

    var createHomepagePagination = function() {
        isHomepage = true;
        var $toIndex = $('.block[data-index]');
        var $paginator = $('main.content').children('.blocks-pagination');
        if ($toIndex.length && $paginator.length) {
            for (var i = 0; i < 2; i++) { // MAX HP slides to show in pagination
                var item = '<li';
                item += ' class="blocks-pagination__item' + (i === 0 ? ' current"' : '"');
                item += ' data-index="' + $($toIndex[i]).data('index') + '"';
                item += ' data-label="' + $($toIndex[i]).data('label') + '"';
                item += '></li>';
                $paginator.append(item);
            }
        }
        // listening for click
        $paginator.children('.blocks-pagination__item').on('click', function() {
            if (Utils.is.desktop()) {
                scrollTo($(this).data('index'), false);
            }
        });
    }
    /**
     * Creates a pagination sidebar to navigate between child blocks
     * -------------------------------------------------------------
     */
    var createChildrenPagination = function() {
        var $parentBlocks = $('.block--children');

        $.each($parentBlocks, function(i, el) {
            var $this = $(el);
            var $toIndex = $this.children('.block--child[data-child-index]');
            var $paginator = $this.children('.blocks-pagination--children');
            if ($toIndex.length && $paginator.length) {
                for (var i = 0; i < $toIndex.length; i++) {
                    var item = '<li';
                    item += ' class="blocks-pagination__item' + (i === 0 ? ' current"' : '"');
                    item += ' data-index="' + $($toIndex[i]).data('child-index') + '"';
                    item += ' data-label="' + $($toIndex[i]).data('label') + '"';
                    item += '></li>';
                    $paginator.append(item);
                }
            }
        });

        // listening for click
        $parentBlocks.find('.blocks-pagination__item').on('click', function() {
            if (Utils.is.desktop()) {
                scrollTo($(this).data('index'), true);
            }
        });
    };

    /**
     * Returning object
     * ----------------
     */
    return {
        init: function() {
            // touch events
            if (Utils.is.touch()) {
                Gestures.enable(onPan);
            }
            // setting default current
            $firstBlock = $('.block[data-index="1"]');
            $firstBlock.addClass('current');
            $current = $firstBlock;
            // creating pagination
            if (window.location.pathname == '/' || window.location.pathname == '/it/') {
                createHomepagePagination();
            } else {
                createPagination();
            }
            createChildrenPagination();
            // listeing for snap scroll
            $blocks.on('mousewheel DOMMouseScroll scroll', function(e) {
                if ($(this).hasClass('block--ajax') || $(this).hasClass('block--scrollable')) {
                    e.stopPropagation();
                    e.preventDefault();
                } else {
                    onScroll(e);
                }
            });
            // listeing for snap scroll exceptions
            $('.block__content--scrollable').on('mousewheel DOMMouseScroll scroll', function(e) {
                e.stopPropagation();
                var $this = $(this);
                var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                var contentH = 0;
                if (typeof delta === 'number') {
                    if (delta < 0) { // down scroll
                        $.each($this.children(), function(i, el) {
                            contentH += $(el).outerHeight(true);
                        });
                        if ($this.scrollTop() === contentH - $this.outerHeight()) {
                            onScroll(e);
                        }
                    }
                }
            }).on('touchend', function(e) {
                if ($(this).scrollTop() === 0) {
                    onScroll(e);
                }
            });

            $('.block__post-content').on('mousewheel DOMMouseScroll scroll', function(e) {
                e.stopPropagation();
                var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                if (typeof delta === 'number' && delta > 0 && $(this).scrollTop() === 0) { // up scroll
                    onScroll(e, true);
                }
            });

            // listening for document events
            $(document).on('keydown', $current, function(e) {
                // keyboard
                onKeyDown(e.keyCode);
            }).on('blockChanged', function() {
                // block changed event
                if ($current.hasClass('block--white')) {
                    Header.darkify();
                } else {
                    Header.clearify();
                }
                setTimeout(function() {
                    scrolling = false;
                }, 1500);
            }).on('click', '.block__close', function() {
                // close block click
                var $parent = $(this).parent('.block');
                var $content = $parent.hasClass('block--ajax') ? $parent.find('.block__post-content') : false;
                $content = $parent.hasClass('block--ajax--fixed') ? false : $content;

                $parent.removeClass('visible').removeClass('slide-in');

                if ($content) {
                    setTimeout(function() {
                        $content.html('');
                    }, transitionDuration / 2);
                }

                Gestures.enable(onPan);
                isScrollableSection = false;
                if ($current.hasClass('block--white')) {
                    Header.darkify();
                } else {
                    Header.clearify();
                }
            }).on('menuOpen', function() {
                Gestures.disable();
            }).on('menuClosed', function() {
                if (!isScrollableSection) {
                    Gestures.enable(onPan);
                }
            }).on('loadingBlock', function() {
                Gestures.disable();
            });
            // coming back to parent
            $('.js-back-to-parent').on('click', function() {
                var $parent = $('#' + $(this).parents('.block--children').data('parent'));
                scrollTo($parent.data('index'), false);
            });
            // scrolling to bloc
            $('.js-scroll-to-block').on('click', function() {
                var $target = $('#' + $(this).data('scroll-to'));
                if ($target.length) {
                    scrollTo($target.data('index'), false);
                }
            });
            // open read more
            $('.js-open-read-more').on('click', function() {
                var $block = $(this).closest('.block').siblings('.block--ajax');
                Gestures.disable();
                isScrollableSection = true;
                $block.addClass('slide-in').addClass('visible');
                if ($block.hasClass('block--white')) {
                    Header.darkify();
                }
            });
            // init parallax
            $('.block__background--parallax').parallax();
        },
        scrollTo: scrollTo
    };

})(jQuery, Utils);

var newsBlockId = [];
var chunkSize = 3;
var newsBlockChung = [];
var h = 0;
var equal = [];
window.Blog = (function($) {
    'use strict';

    var $extend = $('.news__extend');
    var $loader = $('.loader');
    var page = 2;
    var total = 9;
    var language = $('#news-preview').find('article:first').attr('class');
    var leggi = 'read more';
    var textZip = 'download zip';
    var textPdf = 'download pdf';
    var postType = 'news';
    if (jQuery('body').hasClass('page-template-press') || jQuery('body').hasClass('postid-4600')) {
        postType = 'press';
    }
    if (language === 'it') {
        leggi = 'leggi tutto';
        textZip = 'scarica zip';
        textPdf = 'scarica pdf';
    }
    var inArray = function(needle) {
        for (var i in equal) {
            if (equal[i] === needle) {
                console.log('equal');
                return true;
            }
        }
        console.log('no equal');
        return false;
    };

    var equalizer = function() {

        newsBlockId = [];
        newsBlockChung = [];
        $('.news-block.second article').each(function(index) {
            if (!inArray($(this).attr('class'))) {
                newsBlockId.push($(this).attr('class'));
            }
        });

        for (var i = 0, len = newsBlockId.length; i < len; i += chunkSize) {
            newsBlockChung.push(newsBlockId.slice(i, i + chunkSize));
        }

        for (var i = 0; i < newsBlockChung.length; i++) {
            h = 0;
            var target = newsBlockChung[i];
            for (var s = 0; s < target.length; s++) {
                if ($('.' + target[s]).innerHeight() > h) {
                    h = $('.' + target[s]).innerHeight();
                };
            }
            for (var s = 0; s < target.length; s++) {
                $('.' + target[s]).css('height', h);
                equal.push(target[s]);
            }
        }
    }
    var chk_scroll = function(e) {
        var elem = $(e.currentTarget);
        if (elem[0].scrollHeight - elem.scrollTop() === elem.outerHeight()) {
            ajaxAddPage();
        }
    }
    var ajaxAddPage = function() {
        if (page <= total) {
            $loader.show();
            $.ajax({
                url: ajaxurl,
                data: {
                    'action': 'getAjaxBlog',
                    'offset': page,
                    'postType': postType
                },
                dataType: 'json',
                success: function(posts) {
                    addPressPreviews(posts);
                    //   addPressExtend(posts);
                    page++;
                    linkToSlide();
                    $loader.hide();
                    total = posts.all;
                },
                error: function(errorThrown) {
                    console.log(errorThrown);
                }
            });
        }
    };

    var createSliders = function() {
        // extend
        $extend.slick({
            infinite: false,
            arrows: false,
            mobileFirst: true,
            responsive: [{
                breakpoint: Config.breakpoints.desktop,
                settings: {
                    arrows: true,
                    prevArrow: '<button class="button button--prev slider__arrow slider__arrow--side slider__arrow--prev"></button>',
                    nextArrow: '<button class="button button--next slider__arrow slider__arrow--side slider__arrow--next"></button>'
                }
            }]
        });
    };

    var setCurrent = function(index) {
        $extend.slick('slickGoTo', index);

    };
    var fromTo = function(from, to) {
        $(to).removeClass('fadeOut');
        $(to).addClass('current');
        $(to).addClass('slide-in');

        setTimeout(function() {
            $(from).removeClass('current');
            $(from).removeClass('slide-in');
        }, 1450);

    };
    var addPressExtend = function(rows) {
        for (var i = 0; i < rows.count; i++) {
            var element = rows.elements[i];
            var content = '<div class="news-two-col js-reveal-content news-extend" id="news-element-' + element.id + '"  data-delay="1000">';

            if (element.quante_colonne_vuoi_utilizzare === 1) {
                content += '<div class="news-two-col__title" ><h1>' + element.post_title + '</h1></div>';
                content += '<div class="news-two-col__text year-two-col__text--first single-colums">' + element.editor_colonna_1 + '</div>';
            } else {
                content += '<div class="news-two-col__title" ><h1>' + element.post_title + '</h1></div>';
                content += '<div class="news-two-col__text year-two-col__text--first">' + element.editor_colonna_1 + '</div>';
                content += '<div class="news-two-col__text">' + element.editor_colonna_2 + '</div>';
            }
            content += '</div>';
            jQuery('.news__extend').slick('slickAdd', content);

        }
    };
    var addPressPreviews = function(rows) {
        for (var i = 0; i < rows.count; i++) {
            var element = rows.elements[i];

            var content = '<div class="news-block second"><article class="element-' + element.id + '">';
            content += '<span class="time">' + element.time + '</span>';
            content += '<h2 class="title"><a href="' + element.permalink + '" target="_self">' + element.post_title + '</a></h2>';
            content += '<div class="description">';
            content += '<div>' + element.editor_colonna_1.substring(0, 200);
            if (element.editor_colonna_1.length > 200) {
                content += ' ... ';
            }
            content += '</div>';

            content += '</div>';
            content += '</article></div>';
            $('.allnews').append(content);
        }
        $('.allnews .news-block').each(function(i) {
            $(this).delay(100 * i).fadeIn(500);
        });
        equalizer();

    };
    var linkToSlide = function() {
        $('.read-more').click(function(e) {
            e.preventDefault();
            var t = $(this).attr('href').replace('#', '');
            var target = $('#news-extend').find('#news-element-' + t).attr('data-slick-index');
            setCurrent(target);
            fromTo('#news-preview', '#news-extend');
        });
    };

    return {
        init: function() {
            // creating sliders
            createSliders();
            linkToSlide();
            $('.news-button').click(function(e) {
                e.preventDefault();
                fromTo('#news-extend', '#news-preview');
            });
            $('.news-preview-button').click(function(e) {
                e.preventDefault();
                Blocks.scrollTo(1, false);
            });
            var ajaxUrl = window.location.protocol + '//' + window.location.host + '/wp/wp-admin/admin-ajax.php';
            var page = 1; // What page we are on.
            $('div').bind('scroll', chk_scroll);
            equalizer();
        }
    };
})(jQuery);

window.Contact = (function($) {

    'use strict';
    var $form = $('#contact-form').find('.wpcf7-form');
    var $current = null;

    var hideTYP = function() {
        $('.contact__typ').removeClass('visible');
    };

    var showTYP = function(success) {
        if (success) {
            $('.contact__typ--success').addClass('visible');
        } else {
            $('.contact__typ--error').addClass('visible');
        }
        setTimeout(function() {
            hideTYP();
        }, 3400);
    };

    return {
        init: function() {

            //on Cta Contact Click
            $('.button_cta-contact , #hero-unit .scroll-invitation').on('click', function(e) {
                e.preventDefault();
                Blocks.scrollTo(2, false);
            });

            $('.contact-button').click(function(e) {
                e.preventDefault();
                console.log('test')
                Blocks.scrollTo(1, false);
            });

            // file upload
            $form.find('.wpcf7-file').on('change', function() {
                var filename = $(this)[0].files[0]['name'];
                $('.label-attachment .filename').text(filename);
            });

            // submit
            $(document).on('mailsent.wpcf7', function(e) {
                showTYP(true);
            }).on('mailfailed.wpcf7', function(e) {
                console.log(e);
                showTYP(false);
            });
        }
    };

})(jQuery);

var showErrorMessage = function() {
    $('.missing-privacy-policy').addClass('active');
};

var removeErrorMessage = function() {
    $('.missing-privacy-policy').removeClass('active');
};
$(document).ready(function() {

    $('#privacy').change(function() {
        if ($(this).is(':checked')) {
            removeErrorMessage();
        } else {
            showErrorMessage();
        }
    });

    $('.cf-send-wrapper').on('click', function() {
        if ($('.wpcf7-submit').is(':disabled')) {
            showErrorMessage();
            console.log('showErrorMessage');
        } else {
            removeErrorMessage();
            console.log('removeErrorMessage');
        }
    });
});

window.Dealer = (function($) {

    'use strict';


    var fromTo = function(from, to) {
        console.log('from' + from);
        console.log('to' + to);

        $(to).addClass('current');
        $(to).addClass('slide-in');
        $('#hero-unit .block__content').removeClass('fadeOut');
        $('#hero-unit .block__content').addClass('fadeIn');
        setTimeout(function() {
            $(from).removeClass('current');
            $(from).removeClass('slide-in');
        }, 200);
    }

    /**
     * Sets current slide
     * ---------------------------------------------------------
     * @param   {number}   index   -   The index of target slide
     */


    /**
     * Returning object
     * ----------------
     */

    return {
        init: function() {
            // creating sliders

            jQuery('.dealer-button').click(function(e) {
                e.preventDefault();
                fromTo('#dealer-map', '#hero-unit');

            });


        }
    }
})(jQuery);

window.Factorys = (function($) {

    'use strict';

    var setCurrent = function(index) {
        $extend.slick('slickGoTo', index);

    };
    var fromTo = function(from, to) {


        $(to).addClass('current');
        $(to).addClass('slide-in');
        setTimeout(function() {
            $(from).removeClass('current');
            $(from).removeClass('slide-in');

        }, 200);
    }

    /**
     * Sets current slide
     * ---------------------------------------------------------
     * @param   {number}   index   -   The index of target slide
     */


    /**
     * Returning object
     * ----------------
     */

    return {
        init: function() {
            // creating sliders
            // jQuery('.book').click(function (e) {
            //     Blocks.scrollTo(3, false);
            // });

            jQuery('.factory-base-button').click(function(e) {
                e.preventDefault();
                Blocks.scrollTo(1, false);

            });
            jQuery('.factory-form-button').click(function(e) {
                e.preventDefault();
                Blocks.scrollTo(2, false);
            });

            var $input = jQuery('.datepicker-en').pickadate({
                formatSubmit: 'dd/mm/yyyy',
                showMonthsShort: undefined,
                showWeekdaysFull: undefined,
                today: '',
                clear: 'Cancella',
                close: 'Chiudi',
                firstDay: 1,
                container: 'body'
                // Accessibility labels

            });

            var pickerit = $input.pickadate('picker-it');

            var $input = jQuery('.datepicker-it').pickadate({
                formatSubmit: 'dd/mm/yyyy',
                monthsFull: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
                weekdaysFull: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
                weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'],
                showMonthsShort: undefined,
                showWeekdaysFull: undefined,
                today: '',
                //   clear: 'Cancella',
                //   close: 'Chiudi',
                firstDay: 1,
                // Accessibility labels
                labelMonthNext: 'Nuovo mese',
                labelMonthPrev: 'Nuovo anno',
                labelMonthSelect: 'Seleziona il mese',
                labelYearSelect: 'Seleziona anno',
                container: 'body'

            });

            var pickeren = $input.pickadate('picker-en');
        }
    }

})(jQuery);

window.Gallery = (function($) {

    'use strict';

    var settings = {
        infinite: false,
        fade: true,
        prevArrow: '<button class="button button--prev button--transparent slider__arrow slider__arrow--prev"></button>',
        nextArrow: '<button class="button button--next button--transparent slider__arrow slider__arrow--next"></button>',
        mobileFirst: true,
        responsive: [{
            breakpoint: Config.breakpoints.desktop,
            settings: {
                prevArrow: '<button class="button button--prev slider__arrow slider__arrow--side slider__arrow--prev slider__arrow--preview"><div class="preview preview--left"></div></button>',
                nextArrow: '<button class="button button--next slider__arrow slider__arrow--side slider__arrow--next slider__arrow--preview"><div class="preview preview--left"></div></button>'
            }
        }],
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        slidesToShow: 1
    };

    /**
     * Constructor
     * ------------------------------------------------------
     * @param   {object}   $selector   -   The slider element
     */
    function Gallery($selector, lazyLoad) {
        var that = this;
        this.lazyLoad = lazyLoad | false;
        this.$selector = $selector;
        this.$selector.on('init', function() {
            that.updatePreviews(true);
        }).on('init', function() {
            console.log('init');


            // binding mode change
            that.$selector.parent().find('.js-grid-mode').on('click', function() {
                console.log('------------ gallery ----------- .js-grid-mode');
                that.changeMode('grid');
            });

            that.$selector.parent().find('.js-fullscreen-mode').on('click', function() {
                console.log('------------ gallery -----------1 .js-fullscreen-mode');
                that.changeMode('fullscreen');
            });

            var slide = that.$selector.find('[data-slick-index=\'0\']');
            that.updateSlideImg(slide);

        }).on('beforeChange', function(event, slick, current_slide_index, next_slide_index) {
            var slide = $(event.currentTarget).find('[data-slick-index=\'' + next_slide_index + '\']'),
                slideNext = $(event.currentTarget).find('[data-slick-index=\'' + (next_slide_index + 1) + '\']');
            that.updateSlideImg(slide);
            setTimeout(function() {
                if (slideNext) {
                    that.updateSlideImg(slideNext);
                }
            }, 300);
        }).on('lazyLoaded', function(event, slick, image, imageSource) {
            console.log('lazyLoaded called');
        }).on('lazyLoadError', function(event, slick, image, imageSource) {
            console.log('lazyLoadedError called');
        }).slick(settings).on('afterChange', function() {
            that.updatePreviews(false);
        });


    }

    /**
     * Load gallery img
     * -------------------------------------------------------------------
     * @param   {element}   element   -   Element to update
     */
    Gallery.prototype.updateSlideImg = function(element) {
        if (!this.lazyLoad) {
            return;
        }
        var isDesktop = Utils.is.desktop();
        var isMobile = Utils.is.mobile();
        var isPortrait = Utils.is.portrait();

        if (isMobile) {
            if (isPortrait) {
                element.css('background-image', 'url("' + element.data('lazy-src-portrait') + '")');
                element.data('src-portrait', element.data('lazy-src-portrait'));
            } else {
                element.css('background-image', 'url("' + element.data('lazy-src-landscape') + '")');
                element.data('src-landscape', element.data('lazy-src-landscape'));
            }
        } else {
            element.css('background-image', 'url("' + element.data('lazy-src-desktop') + '")');
            element.data('src-desktop', element.data('lazy-src-desktop'));
        }
        element.data('loaded', 'true');

    };

    /**
     * Updates slider arrows previews
     * -------------------------------------------------------------------
     * @param   {boolean}   firstSlide   -   Defines if it's the init call
     */
    Gallery.prototype.updatePreviews = function(firstSlide) {
        var currentSlide = firstSlide ? 0 : this.$selector.slick('slickCurrentSlide');
        var $prevSlide = this.$selector.find('.gallery__slide[data-slick-index="' + (currentSlide - 1) + '"]');
        var $nextSlide = this.$selector.find('.gallery__slide[data-slick-index="' + (currentSlide + 1) + '"]');
        // prev preview
        if ($prevSlide.length) {
            this.$selector.find('.slider__arrow--prev > .preview').css('background-image', 'url("' + $prevSlide.data('thumbnail') + '")');
        }
        // next preview
        if ($nextSlide.length) {
            this.$selector.find('.slider__arrow--next > .preview').css('background-image', 'url("' + $nextSlide.data('thumbnail') + '")');
        }
    };

    /**
     * Change gallery mode
     * -------------------------------------------------------------------
     * @param   {string}   mode   -   Defines mode 'fullscreen' | 'grid'
     */
    Gallery.prototype.changeMode = function(mode) {
        this.$selector.parent().attr('data-mode', mode);
    };


    return Gallery;

})(jQuery);

window.Gestures = (function($) {

    'use strict';

    var $body = $('body');
    var $defaultPan = null;

    var enablePan = function(onPan) {
        if ($defaultPan === null) {
            $defaultPan = onPan;
        }

        if (onPan === null && $defaultPan !== null) {
            onPan = $defaultPan;
        }

        if (Utils.is.touch()) {
            $body.data('hammer').get('pan').set({
                direction: Hammer.DIRECTION_ALL,
                enable: true
            });
        }
        $body.on('panup pandown', function(e) {
            onPan(e);
        });
    };

    var disablePan = function() {
        $body.off('panup pandown');
        if (Utils.is.touch()) {
            $body.data('hammer').get('pan').set({
                enable: false
            });
        }
    };

    return {
        enable: function(onPan) {
            enablePan(onPan);
        },
        disable: function() {
            disablePan();
        },
        init: function() {
            $body.hammer();
        }
    };

})(jQuery);

window.Grid = (function($) {
    'use strict';

    function Grid($selector) {
        var that = this;
        this.$selector = $selector;
        this.$selector.on('init', function() {
            that.modeSelectorInit();
        }).slick({
            infinite: false,
            prevArrow: '<button class="button button--prev button--transparent grid__button"></button>',
            nextArrow: '<button class="button button--next button--transparent grid__button"></button>',
            variableWidth: true,
            dots: true,
            dotsClass: 'grid__pagination',
            customPaging: function(slider, i) {
                return '<span class="current">' + (i + 1) + '</span> / <span class="total">' + slider.slideCount + '</span>';
            }
        }).on('beforeChange', function() {
            console.log('beforeChange grid called');
        });


    }

    Grid.prototype.modeSelectorInit = function() {
        console.log('init modeSelectorInit');
        var that = this;
        console.log('element found for modeSelectorInit');
        // binding mode change

        /**
         * This is a repetition of gallery.js function Gallery()
         * commented for now, this was executed 4 times and cause problems when switching parent slide
         */
        // this.$selector.parent().find('.js-grid-mode').on('click', function () {
        //   console.log('------------ grid ----------- .js-grid-mode');
        //   that.changeMode('grid');
        // });
        // this.$selector.parent().find('.js-fullscreen-mode').on('click', function () {
        //   console.log('------------ grid ----------- .js-fullscreen-mode');
        //   that.changeMode('fullscreen');
        // });
    };

    /**
     * Change gallery mode
     * -------------------------------------------------------------------
     * @param   {string}   mode   -   Defines mode 'fullscreen' | 'grid'
     */
    Grid.prototype.changeMode = function(mode) {
        this.$selector.parent().attr('data-mode', mode);
    };

    return Grid;
})(jQuery);

window.Header = (function($) {

    'use strict';

    var $logo = $('.header__logo');
    var $hamburger = $('.header__menu-toggle');

    return {
        init: function() {
            $('.header').addClass('show');
        },
        darkify: function() {
            setTimeout(function() {
                $logo.addClass('dark');
            }, 1100);
        },
        clearify: function() {
            setTimeout(function() {
                $logo.removeClass('dark');
            }, 150);
        }
    };

})(jQuery);
window.Job = (function($) {

    'use strict';

    /**
     * Sets current slide
     * ---------------------------------------------------------
     * @param   {number}   index   -   The index of target slide
     */


    /**
     * Returning object
     * ----------------
     */

    return {
        init: function() {

        }
    }
})(jQuery);

window.Menu = (function($) {

    'use strict';

    var $body = $('body');
    var $menu = $('.menu');
    var $toggler = $('.js-toggle-menu');
    var $hamburger = $('.header__menu-toggle .hamburger');

    /**
     * Opens menu
     * ----------
     */
    var open = function() {
        $body.addClass('menuing');
        $menu.addClass('open');
        $hamburger.addClass('open');
        $(document).trigger('menuOpen');
    };

    /**
     * Closes menu
     * -----------
     */
    var close = function() {
        $body.removeClass('menuing');
        $menu.removeClass('open');
        $hamburger.removeClass('open');
        $(document).trigger('menuClosed');
    };

    /**
     * Toggles menu
     * ------------
     */
    var toggle = function() {
        if ($body.hasClass('menuing')) {
            close();
        } else {
            open();
        }
    };

    /**
     * Open sub menus
     * ------------
     */
    var openSubMenu = function(element) {
        console.log('open menu');
        element.find('> .sub-menu').fadeIn();
        $('.sub-menu-back-button').fadeIn();
        if ($('.menu__main').hasClass('slide-sub')) {
            $('.menu__main').addClass('slide-sub-sub');
        } else {
            $('.menu__main').addClass('slide-sub');
        }
    };
    /**
     * Close sub menus
     * ------------
     */
    var closeSubMenu = function() {
        if ($('.menu__main').hasClass('slide-sub-sub')) {
            $('.menu__main').removeClass('slide-sub-sub');
            $('.sub-menu .sub-menu').fadeOut();
        } else {
            $('.menu__main').removeClass('slide-sub');
            $('.sub-menu').fadeOut();
            $('.sub-menu-back-button').fadeOut();
        }
    };

    /**
     * Returning object
     * ----------------
     */
    return {
        init: function() {
            $(document).ready(function() {
                $('.menu__main').find('li:has(ul)').addClass('parent-menu');
                $('.menu__main').find('li > ul').addClass('sub-menu');
                console.log('start menu');
                $(document).on('click', function() {
                    close();
                });
                $toggler.on('click', function(e) {
                    e.stopPropagation();
                    toggle();
                });
                $menu.on('click', function(e) {
                    e.stopPropagation();
                });
                $('.menu__link.parent-menu').on('click', function(e) {
                    e.stopPropagation();
                    openSubMenu($(this));
                });


                $('.sub-menu-back-button').on('click', function() {
                    closeSubMenu();
                });
            });
        },
        open: open,
        close: close
    };

})(jQuery);


window.ResponsivePictures = (function($) {

    'use strict';

    var $pictures = $('.responsive-picture');
    var isDesktop = Utils.is.desktop();
    var isPortrait = Utils.is.portrait();

    var setPictureSrc = function($picture) {
        if (isDesktop) {

            if ($picture.prop('tagName') === 'IMG') {
                if ($picture.data('lazy-src-portrait')) {
                    if ($picture.data('loaded') && $picture.data('loaded') === 'true') {
                        $picture.attr('src', $picture.data('lazy-src-desktop'));
                    }
                } else {
                    $picture.attr('src', $picture.data('src-desktop'));
                }
            } else {
                if ($picture.data('lazy-src-desktop')) {
                    if ($picture.data('loaded') && $picture.data('loaded') === 'true') {
                        $picture.css('background-image', 'url("' + $picture.data('lazy-src-desktop') + '")');
                    }
                } else {
                    $picture.css('background-image', 'url("' + $picture.data('src-desktop') + '")');
                }
            }
        } else if (isPortrait) {
            if ($picture.prop('tagName') === 'IMG') {
                if ($picture.data('lazy-src-portrait')) {
                    if ($picture.data('loaded') && $picture.data('loaded') === 'true') {
                        $picture.attr('src', $picture.data('lazy-src-portrait'));
                    }
                } else {
                    $picture.attr('src', $picture.data('src-portrait'));
                }
            } else {
                if ($picture.data('lazy-src-portrait')) {
                    if ($picture.data('loaded') && $picture.data('loaded') === 'true') {
                        $picture.css('background-image', 'url("' + $picture.data('lazy-src-portrait') + '")');
                    }
                } else {
                    $picture.css('background-image', 'url("' + $picture.data('src-portrait') + '")');
                }
            }
        } else {
            if ($picture.prop('tagName') === 'IMG') {
                if ($picture.data('lazy-src-landscape')) {
                    if ($picture.data('loaded') && $picture.data('loaded') === 'true') {
                        $picture.attr('src', $picture.data('lazy-src-landscape'));
                    }
                } else {
                    $picture.attr('src', $picture.data('src'));
                }
            } else {
                if ($picture.data('lazy-src-landscape')) {
                    if ($picture.data('loaded') && $picture.data('loaded') === 'true') {
                        $picture.css('background-image', 'url("' + $picture.data('lazy-src-landscape') + '")');
                    }
                } else {
                    $picture.css('background-image', 'url("' + $picture.data('src') + '")');
                }
            }
        }
    };

    return {
        init: function() {
            $(window).on('resize', function() {
                isDesktop = Utils.is.desktop();
                isPortrait = Utils.is.portrait();
            });
            $.each($pictures, function(i, el) {
                var $picture = $(el);
                setPictureSrc($picture);
                $(window).on('resize', function() {
                    setPictureSrc($picture);
                });
            });
        }
    };

})(jQuery);

window.Reveal = (function($, Utils) {

    'use strict';

    var revealContent = function() {

        $('.js-reveal-content').addClass('js-reveal-content--hidden').on('inview', function(event, isInView) {
            $('.js-reveal-content').removeClass('fadeOut');
            var delayValue = $(this).data('delay');
            var delay = Utils.is.desktop() ? delayValue : delayValue / 2;
            if (typeof delay !== 'undefined') {
                $(this).delay(delay).queue(function() {
                    $(this).addClass('fadeIn').clearQueue();
                });
            } else {
                $(this).addClass('fadeIn');
            }
        });

        $(document).on('blockChanged', function() {
            $('.js-reveal-content').addClass('fadeOut');
            $('.js-reveal-content').removeClass('fadeIn');
            $('.js-reveal-content').each(function() {
                if ($(this).closest('.block.current').length > 0) {
                    $(this).removeClass('fadeOut');
                    var delayValue = $(this).data('delay');
                    var delay = Utils.is.desktop() ? delayValue : delayValue / 2;
                    if (typeof delay !== 'undefined') {
                        $(this).delay(delay).queue(function() {
                            $(this).addClass('fadeIn').clearQueue();
                        });
                    } else {
                        $(this).addClass('fadeIn');
                    }
                }
            });
        });

    };

    // public
    var instance = {
        init: function() {
            revealContent();
        }
    };

    return instance;

})(jQuery, Utils);

window.Share = (function($) {

    'use strict';

    var toggleShareMenu = function() {

        $('.js-button-share-open').on('click', function(event) {
            var $this = $(this);
            $this.addClass('button-share--hide');
            $this.parent('.share-buttons').addClass('share-buttons--open');
        });

        $('.js-button-share-close').on('click', function(event) {
            var $parent = $(this).parent('.share-buttons');
            $parent.removeClass('share-buttons--open');
            $parent.children('.js-button-share-open').removeClass('button-share--hide');
        });

        $(document).on('blockChanged', function() {
            $('.share-buttons').removeClass('share-buttons--open');
            $('.js-button-share-open').removeClass('button-share--hide');
        });
    };

    // public
    var instance = {
        init: function() {
            toggleShareMenu();

            $('.share-buttons').on('mousewheel DOMMouseScroll scroll', function(e) {
                e.stopPropagation();
            });
        }
    };

    return instance;

})(jQuery);
window.Sliders = (function($) {

    'use strict';

    var createSimpleSlider = function() {

        $('.year-two-images__js-slider').slick({
            slidesToShow: 1,
            arrows: false,
            dots: true,
            fade: true
        });

    };

    // public
    var instance = {
        init: function() {
            createSimpleSlider();

            $('[data-sync-slide]').on('click', function() {
                var target = parseInt($(this).data('sync-slide'));
                var $parent = $('#' + $($(this).parents('[data-sync-slider]')[0]).data('sync-slider'));
                $parent.slick('slickGoTo', target);
            });

            $.each($('[data-sync-slider]'), function(i, el) {
                var $sync = $(el);
                var $slider = $('#' + $sync.data('sync-slider'));
                $slider.on('beforeChange', function(e, slick, current, target) {
                    var pageSize = Utils.is.desktop() ? 12 : 6;
                    var targetPage = Math.round((target / pageSize) + 0.5);
                    $sync.slick('slickGoTo', targetPage - 1);
                });
            });
        }
    };

    return instance;

})(jQuery);

window.TechnicalSpecs = (function($) {

    'use strict';

    var $titles = $('.technical-specs__titles');
    var $introText = $('.technical-specs__intro-text');
    var $descriptions = $('.technical-specs__descriptions');
    var $backToSpecsTable = $('.technical-specs__back-to-table');
    var $hideSpecsTable = $('.technical-specs__close-table');
    var $background = $('.technical-specs__backgrounds');
    var $specs = $('.technical-specs__menu');
    var $dots = $specs.find('.dot');
    var $labels = $specs.find('.label');

    /**
     * Creates carousels
     * -----------------
     */
    var createSliders = function() {
        // titles
        if ($titles.length) {
            $titles.slick({
                infinite: false,
                prevArrow: '<button class="button button--prev button--transparent slider__arrow slider__arrow--prev"></button>',
                nextArrow: '<button class="button button--next button--transparent slider__arrow slider__arrow--next"></button>',
                swipe: false,
                fade: true,
                asNavFor: '.technical-specs__descriptions, .technical-specs__backgrounds',
                mobileFirst: true,
                responsive: [{
                    breakpoint: Config.breakpoints.desktop,
                    settings: {
                        arrows: false
                    }
                }]
            }).on('beforeChange', function(e, slick, current, target) {
                if (!Utils.is.desktop()) {
                    // is first
                    if (parseInt(target) === 1) {
                        $titles.children('.slider__arrow--prev').removeClass('active');
                    } else {
                        $titles.children('.slider__arrow--prev').addClass('active');
                    }
                    $('.slider__arrow').addClass('slider__arrow--no-pointer');
                    setTimeout(function() {
                        $('.slider__arrow').removeClass('slider__arrow--no-pointer');
                    }, 1000);
                }
            });
        }
        // descriptions
        if ($descriptions.length) {
            $descriptions.slick({
                infinite: false,
                arrows: false,
                fade: true,
                swipe: false
            });
        }
        // background
        if ($background.length) {
            $background.slick({
                infinite: false,
                arrows: false,
                fade: true,
                swipe: false,
                speed: 1000
            });
        }
    };

    /**
     * Displays technical specs table on mobile
     * ----------------------------------------
     */
    var displaySpecsTable = function() {
        if (!Utils.is.desktop()) {
            $introText.addClass('hidden');
            $titles.slick('slickGoTo', 0);
            $titles.children('.slider__arrow').removeClass('active');
            $descriptions.removeClass('active');
            $backToSpecsTable.removeClass('active');
            $specs.addClass('active');
            $hideSpecsTable.addClass('active');
        }
    };

    /**
     * Hides technical specs table on mobile
     * -------------------------------------
     */
    var hideSpecsTable = function() {
        if (!Utils.is.desktop()) {
            $introText.removeClass('hidden');
            $specs.removeClass('active');
            $hideSpecsTable.removeClass('active');
        }
    };

    /**
     * Displays technical spec detail on mobile
     * --------------------------------------------------------
     * @param   {number}   index   -   The index of target spec
     */
    var displaySpecsDetails = function(index) {
        if (!Utils.is.desktop()) {
            $introText.addClass('hidden');
            $specs.removeClass('active');
            $hideSpecsTable.removeClass('active');
            $descriptions.addClass('active');
            $backToSpecsTable.addClass('active');
            if (index === 1) {
                $titles.children('.slider__arrow--next').addClass('active');
            } else if (index === $labels.length + 1) {
                $titles.children('.slider__arrow--prev').addClass('active');
            } else {
                $titles.children('.button').addClass('active');
            }
        }
    };

    /**
     * Sets current spec
     * --------------------------------------------------------
     * @param   {number}   index   -   The index of target spec
     */
    var setCurrent = function(index) {
        if (typeof index === 'number' && index !== parseInt($specs.attr('data-current'))) {
            if (Utils.is.desktop()) {
                $labels.addClass('moving');
                setTimeout(function() {
                    // updating title/description/background
                    $titles.slick('slickGoTo', index);
                    // updating menu
                    $dots.removeClass('current');
                    $labels.removeClass('current');
                    $($dots[index - 1]).addClass('current');
                    $($labels[index - 1]).addClass('current');
                    $specs.attr('data-current', index);
                    setTimeout(function() {
                        $labels.removeClass('moving');
                    }, 400);
                }, 400);
            } else {
                // updating title/description/background
                $titles.slick('slickGoTo', index);
                // updating menu
                $dots.removeClass('current');
                $labels.removeClass('current');
                $($dots[index - 1]).addClass('current');
                $($labels[index - 1]).addClass('current');
                $specs.attr('data-current', index);
            }
        }
    };

    /**
     * Returning object
     * ----------------
     */
    return {
        init: function() {
            // creating carousels
            createSliders();
            // listening for dots click
            $dots.on('click', function() {
                var index = $(this).data('index');
                setCurrent(index);
            });
            // listening for labels click
            $labels.on('click', function() {
                var index = $(this).data('index');
                setCurrent(index);
                if (!Utils.is.desktop()) {
                    displaySpecsDetails(index);
                }
            });
            // listening for more details click (mobile only)
            $('.js-show-specs-table').on('click', function() {
                displaySpecsTable();
            });
            // listening for close table click (mobile only)
            $hideSpecsTable.on('click', function() {
                hideSpecsTable();
            });
        },
        refresh: function() {
            $titles.slick('unslick');
            $descriptions.slick('unslick');
            $background.slick('unslick');

            $specs.attr('data-current', 0);
            $dots.removeClass('current');
            $labels.removeClass('current');

            this.init();
        }
    }

})(jQuery);

window.Timeline = (function($) {

    'use strict';

    var $previews = $('.timeline__previews');
    var $years = $('.timeline__years');

    /**
     * Creates sliders
     * ---------------
     */
    var createSliders = function() {
        // previews
        $previews.slick({
            infinite: false,
            arrows: false,
            asNavFor: '.timeline__years',
            mobileFirst: true,
            responsive: [{
                breakpoint: Config.breakpoints.desktop,
                settings: {
                    arrows: true,
                    prevArrow: '<button class="button button--prev slider__arrow slider__arrow--side slider__arrow--prev"></button>',
                    nextArrow: '<button class="button button--next slider__arrow slider__arrow--side slider__arrow--next"></button>'
                }
            }]
        });
        // years
        $years.slick({
            infinite: false,
            arrows: false,
            centerMode: true,
            variableWidth: true,
            asNavFor: '.timeline__previews',
            draggable: false
        });
    };

    /**
     * Sets current slide
     * ---------------------------------------------------------
     * @param   {number}   index   -   The index of target slide
     */
    var setCurrent = function(index) {
        if (typeof index === 'number' && index >= 0 && index <= $years.find('.timeline__year').length) {
            $years.slick('slickGoTo', index);
        }
    };

    /**
     * Retrieves the index of the slide by year
     * ----------------------------------------------
     * @param   {number}   year   -   The target year
     */
    var getYearIndex = function(year) {
        if (typeof year === 'number' && year.match(/[0-9]{4}/)) {
            var $year = $years.find('.timeline__year[data-year="' + year + '"]');
            if ($year.length) {
                return $year.data('slick-index');
            }
            return false;
        }
        return false;
    };

    /**
     * Returning object
     * ----------------
     */
    return {
        init: function() {
            // creating sliders
            createSliders();
            // listening for years slider changes
            $years.on('beforeChange mousedown touchstart', function() {
                $years.addClass('sliding');
            }).on('afterChange mouseup touchend', function(e) {
                $years.removeClass('sliding');
            });
            // listening for previews slider changes
            $previews.on('beforeChange mousedown touchstart', function() {
                $years.addClass('sliding');
            }).on('afterChange mouseup touchend', function() {
                $years.removeClass('sliding');
            });
            // listening for click on years slides
            $('.timeline__year').on('click', function() {
                setCurrent($(this).data('slick-index'));
            });
            // listening for click history anchors
            $('.js-set-timeline').on('click', function() {
                var year = $(this).data('year');
                var $target = $('.timeline__year[data-year="' + year + '"]');
                if ($target.length) {
                    setCurrent($target.data('slick-index'));
                }
            });
        },
        goTo: function(year) {
            setCurrent(getYearIndex(year));
        }
    }

})(jQuery);
window.Video = (function($) {

    'use strict';

    var $videoOverlay = $('#video-overlay');

    $('.js-video').on('click', function() {
        var type = String($(this).data('video-type'));
        var video = String($(this).data('video'));
        var urlVideo = (type && type === '1') ? 'https://www.youtube.com/embed/' : 'https://player.vimeo.com/video/';
        if (video.indexOf('https://') >= 0) {
            var remove = (type && type === '1') ? 'https://youtu.be/' : 'https://vimeo.com/';
            video = video.replace(remove, '');
        }
        urlVideo += video;
        var autoPlay = '?autoplay=';
        autoPlay += (type && type === '1') ? '1' : 'true';
        urlVideo += autoPlay;
        console.log(urlVideo);

        $videoOverlay.attr('src', urlVideo);
        $('.block__video-overlay-bg').fadeIn();
        Gestures.disable();
        return false;
    });

    $('.block__video-overlay-bg').on('mousewheel DOMMouseScroll scroll', function(e) {
        e.stopPropagation();
    });

    $(document).on('keyup', function(e) {
        // remove video and overlay if click on esc button
        if (e.keyCode === 27) {
            $('.block__video-overlay-bg').fadeOut();
            $videoOverlay.attr('src', '');
        }
    });

    // show overlay and video in block hero
    $('.block__cta-video').on('click', function() {
        $(this).closest('.block__content').siblings('.block__video-overlay, .block__video-overlay-bg').fadeIn();
        Gestures.disable();
        return false;
    });

    // remove overlay and video if click out of video
    $('.block__video-overlay-bg').on('click', function() {
        $('.block__video-overlay-bg').fadeOut();
        $videoOverlay.attr('src', '');
        if (Utils.is.touch()) {
            Gestures.enable(onPan);
        }
    });

    $('.block__video-overlay').on('click', function(event) {
        event.stopPropagation();
    });

})(jQuery);

/*! npm.im/object-fit-images 3.1.0 */
var objectFitImages = (function() {
    'use strict';

    var OFI = 'bfred-it:object-fit-images';
    var propRegex = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;
    var testImg = new Image();
    var supportsObjectFit = 'object-fit' in testImg.style;
    var supportsObjectPosition = 'object-position' in testImg.style;
    var supportsOFI = 'background-size' in testImg.style;
    var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
    var nativeGetAttribute = testImg.getAttribute;
    var nativeSetAttribute = testImg.setAttribute;
    var autoModeEnabled = false;

    function createPlaceholder(w, h) {
        return ('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + w + '\' height=\'' + h + '\'%3E%3C/svg%3E');
    }

    function polyfillCurrentSrc(el) {
        if (el.srcset && !supportsCurrentSrc && window.picturefill) {
            var pf = window.picturefill._;
            // parse srcset with picturefill where currentSrc isn't available
            if (!el[pf.ns] || !el[pf.ns].evaled) {
                // force synchronous srcset parsing
                pf.fillImg(el, {
                    reselect: true
                });
            }

            if (!el[pf.ns].curSrc) {
                // force picturefill to parse srcset
                el[pf.ns].supported = false;
                pf.fillImg(el, {
                    reselect: true
                });
            }

            // retrieve parsed currentSrc, if any
            el.currentSrc = el[pf.ns].curSrc || el.src;
        }
    }

    function getStyle(el) {
        var style = getComputedStyle(el).fontFamily;
        var parsed;
        var props = {};
        while ((parsed = propRegex.exec(style)) !== null) {
            props[parsed[1]] = parsed[2];
        }
        return props;
    }

    function setPlaceholder(img, width, height) {
        // Default: fill width, no height
        var placeholder = createPlaceholder(width || 1, height || 0);

        // Only set placeholder if it's different
        if (nativeGetAttribute.call(img, 'src') !== placeholder) {
            nativeSetAttribute.call(img, 'src', placeholder);
        }
    }

    function onImageReady(img, callback) {
        // naturalWidth is only available when the image headers are loaded,
        // this loop will poll it every 100ms.
        if (img.naturalWidth) {
            callback(img);
        } else {
            setTimeout(onImageReady, 100, img, callback);
        }
    }

    function fixOne(el) {
        var style = getStyle(el);
        var ofi = el[OFI];
        style['object-fit'] = style['object-fit'] || 'fill'; // default value

        // Avoid running where unnecessary, unless OFI had already done its deed
        if (!ofi.img) {
            // fill is the default behavior so no action is necessary
            if (style['object-fit'] === 'fill') {
                return;
            }

            // Where object-fit is supported and object-position isn't (Safari < 10)
            if (!ofi.skipTest && // unless user wants to apply regardless of browser support
                supportsObjectFit && // if browser already supports object-fit
                !style['object-position'] // unless object-position is used
            ) {
                return;
            }
        }

        // keep a clone in memory while resetting the original to a blank
        if (!ofi.img) {
            ofi.img = new Image(el.width, el.height);
            ofi.img.srcset = nativeGetAttribute.call(el, 'data-ofi-srcset') || el.srcset;
            ofi.img.src = nativeGetAttribute.call(el, 'data-ofi-src') || el.src;

            // preserve for any future cloneNode calls
            // https://github.com/bfred-it/object-fit-images/issues/53
            nativeSetAttribute.call(el, 'data-ofi-src', el.src);
            if (el.srcset) {
                nativeSetAttribute.call(el, 'data-ofi-srcset', el.srcset);
            }

            setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

            // remove srcset because it overrides src
            if (el.srcset) {
                el.srcset = '';
            }
            try {
                keepSrcUsable(el);
            } catch (err) {
                if (window.console) {
                    console.log('http://bit.ly/ofi-old-browser');
                }
            }
        }

        polyfillCurrentSrc(ofi.img);

        el.style.backgroundImage = 'url(' + ((ofi.img.currentSrc || ofi.img.src).replace('(', '%28').replace(')', '%29')) + ')';
        el.style.backgroundPosition = style['object-position'] || 'center';
        el.style.backgroundRepeat = 'no-repeat';

        if (/scale-down/.test(style['object-fit'])) {
            onImageReady(ofi.img, function() {
                if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
                    el.style.backgroundSize = 'contain';
                } else {
                    el.style.backgroundSize = 'auto';
                }
            });
        } else {
            el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
        }

        onImageReady(ofi.img, function(img) {
            setPlaceholder(el, img.naturalWidth, img.naturalHeight);
        });
    }

    function keepSrcUsable(el) {
        var descriptors = {
            get: function get(prop) {
                return el[OFI].img[prop ? prop : 'src'];
            },
            set: function set(value, prop) {
                el[OFI].img[prop ? prop : 'src'] = value;
                nativeSetAttribute.call(el, ('data-ofi-' + prop), value); // preserve for any future cloneNode
                fixOne(el);
                return value;
            }
        };
        Object.defineProperty(el, 'src', descriptors);
        Object.defineProperty(el, 'currentSrc', {
            get: function() {
                return descriptors.get('currentSrc');
            }
        });
        Object.defineProperty(el, 'srcset', {
            get: function() {
                return descriptors.get('srcset');
            },
            set: function(ss) {
                return descriptors.set(ss, 'srcset');
            }
        });
    }

    function hijackAttributes() {
        function getOfiImageMaybe(el, name) {
            return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
        }
        if (!supportsObjectPosition) {
            HTMLImageElement.prototype.getAttribute = function(name) {
                return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
            };

            HTMLImageElement.prototype.setAttribute = function(name, value) {
                return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
            };
        }
    }

    function fix(imgs, opts) {
        var startAutoMode = !autoModeEnabled && !imgs;
        opts = opts || {};
        imgs = imgs || 'img';

        if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
            return false;
        }

        // use imgs as a selector or just select all images
        if (typeof imgs === 'string') {
            imgs = document.querySelectorAll(imgs);
        } else if (!('length' in imgs)) {
            imgs = [imgs];
        }

        // apply fix to all
        for (var i = 0; i < imgs.length; i++) {
            imgs[i][OFI] = imgs[i][OFI] || {
                skipTest: opts.skipTest
            };
            fixOne(imgs[i]);
        }

        if (startAutoMode) {
            document.body.addEventListener('load', function(e) {
                if (e.target.tagName === 'IMG') {
                    fix(e.target, {
                        skipTest: opts.skipTest
                    });
                }
            }, true);
            autoModeEnabled = true;
            imgs = 'img'; // reset to a generic selector for watchMQ
        }

        // if requested, watch media queries for object-fit change
        if (opts.watchMQ) {
            window.addEventListener('resize', fix.bind(null, imgs, {
                skipTest: opts.skipTest
            }));
        }
    }

    fix.supportsObjectFit = supportsObjectFit;
    fix.supportsObjectPosition = supportsObjectPosition;

    hijackAttributes();

    return fix;

}());

/**
 * vivus - JavaScript library to make drawing animation on SVG
 * @version v0.4.0
 * @link https://github.com/maxwellito/vivus
 * @license MIT
 */

'use strict';

(function(window, document) {

    'use strict';

    /**
     * Pathformer
     * Beta version
     *
     * Take any SVG version 1.1 and transform
     * child elements to 'path' elements
     *
     * This code is purely forked from
     * https://github.com/Waest/SVGPathConverter
     */

    /**
     * Class constructor
     *
     * @param {DOM|String} element Dom element of the SVG or id of it
     */
    function Pathformer(element) {
        // Test params
        if (typeof element === 'undefined') {
            throw new Error('Pathformer [constructor]: "element" parameter is required');
        }

        // Set the element
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
            }
        }
        if (element.constructor instanceof window.SVGElement || /^svg$/i.test(element.nodeName)) {
            this.el = element;
        } else {
            throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        }

        // Start
        this.scan(element);
    }

    /**
     * List of tags which can be transformed
     * to path elements
     *
     * @type {Array}
     */
    Pathformer.prototype.TYPES = ['line', 'ellipse', 'circle', 'polygon', 'polyline', 'rect'];

    /**
     * List of attribute names which contain
     * data. This array list them to check if
     * they contain bad values, like percentage.
     *
     * @type {Array}
     */
    Pathformer.prototype.ATTR_WATCH = ['cx', 'cy', 'points', 'r', 'rx', 'ry', 'x', 'x1', 'x2', 'y', 'y1', 'y2'];

    /**
     * Finds the elements compatible for transform
     * and apply the liked method
     *
     * @param  {object} options Object from the constructor
     */
    Pathformer.prototype.scan = function(svg) {
        var fn, element, pathData, pathDom,
            elements = svg.querySelectorAll(this.TYPES.join(','));

        for (var i = 0; i < elements.length; i++) {
            element = elements[i];
            fn = this[element.tagName.toLowerCase() + 'ToPath'];
            pathData = fn(this.parseAttr(element.attributes));
            pathDom = this.pathMaker(element, pathData);
            element.parentNode.replaceChild(pathDom, element);
        }
    };


    /**
     * Read `line` element to extract and transform
     * data, to make it ready for a `path` object.
     *
     * @param  {DOMelement} element Line element to transform
     * @return {object}             Data for a `path` element
     */
    Pathformer.prototype.lineToPath = function(element) {
        var newElement = {},
            x1 = element.x1 || 0,
            y1 = element.y1 || 0,
            x2 = element.x2 || 0,
            y2 = element.y2 || 0;

        newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
        return newElement;
    };

    /**
     * Read `rect` element to extract and transform
     * data, to make it ready for a `path` object.
     * The radius-border is not taken in charge yet.
     * (your help is more than welcomed)
     *
     * @param  {DOMelement} element Rect element to transform
     * @return {object}             Data for a `path` element
     */
    Pathformer.prototype.rectToPath = function(element) {
        var newElement = {},
            x = parseFloat(element.x) || 0,
            y = parseFloat(element.y) || 0,
            width = parseFloat(element.width) || 0,
            height = parseFloat(element.height) || 0;

        newElement.d = 'M' + x + ' ' + y + ' ';
        newElement.d += 'L' + (x + width) + ' ' + y + ' ';
        newElement.d += 'L' + (x + width) + ' ' + (y + height) + ' ';
        newElement.d += 'L' + x + ' ' + (y + height) + ' Z';
        return newElement;
    };

    /**
     * Read `polyline` element to extract and transform
     * data, to make it ready for a `path` object.
     *
     * @param  {DOMelement} element Polyline element to transform
     * @return {object}             Data for a `path` element
     */
    Pathformer.prototype.polylineToPath = function(element) {
        var newElement = {},
            points = element.points.trim().split(' '),
            i, path;

        // Reformatting if points are defined without commas
        if (element.points.indexOf(',') === -1) {
            var formattedPoints = [];
            for (i = 0; i < points.length; i += 2) {
                formattedPoints.push(points[i] + ',' + points[i + 1]);
            }
            points = formattedPoints;
        }

        // Generate the path.d value
        path = 'M' + points[0];
        for (i = 1; i < points.length; i++) {
            if (points[i].indexOf(',') !== -1) {
                path += 'L' + points[i];
            }
        }
        newElement.d = path;
        return newElement;
    };

    /**
     * Read `polygon` element to extract and transform
     * data, to make it ready for a `path` object.
     * This method rely on polylineToPath, because the
     * logic is similar. The path created is just closed,
     * so it needs an 'Z' at the end.
     *
     * @param  {DOMelement} element Polygon element to transform
     * @return {object}             Data for a `path` element
     */
    Pathformer.prototype.polygonToPath = function(element) {
        var newElement = Pathformer.prototype.polylineToPath(element);

        newElement.d += 'Z';
        return newElement;
    };

    /**
     * Read `ellipse` element to extract and transform
     * data, to make it ready for a `path` object.
     *
     * @param  {DOMelement} element ellipse element to transform
     * @return {object}             Data for a `path` element
     */
    Pathformer.prototype.ellipseToPath = function(element) {
        var newElement = {},
            rx = parseFloat(element.rx) || 0,
            ry = parseFloat(element.ry) || 0,
            cx = parseFloat(element.cx) || 0,
            cy = parseFloat(element.cy) || 0,
            startX = cx - rx,
            startY = cy,
            endX = parseFloat(cx) + parseFloat(rx),
            endY = cy;

        newElement.d = 'M' + startX + ',' + startY +
            'A' + rx + ',' + ry + ' 0,1,1 ' + endX + ',' + endY +
            'A' + rx + ',' + ry + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };

    /**
     * Read `circle` element to extract and transform
     * data, to make it ready for a `path` object.
     *
     * @param  {DOMelement} element Circle element to transform
     * @return {object}             Data for a `path` element
     */
    Pathformer.prototype.circleToPath = function(element) {
        var newElement = {},
            r = parseFloat(element.r) || 0,
            cx = parseFloat(element.cx) || 0,
            cy = parseFloat(element.cy) || 0,
            startX = cx - r,
            startY = cy,
            endX = parseFloat(cx) + parseFloat(r),
            endY = cy;

        newElement.d = 'M' + startX + ',' + startY +
            'A' + r + ',' + r + ' 0,1,1 ' + endX + ',' + endY +
            'A' + r + ',' + r + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };

    /**
     * Create `path` elements form original element
     * and prepared objects
     *
     * @param  {DOMelement} element  Original element to transform
     * @param  {object} pathData     Path data (from `toPath` methods)
     * @return {DOMelement}          Path element
     */
    Pathformer.prototype.pathMaker = function(element, pathData) {
        var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        for (i = 0; i < element.attributes.length; i++) {
            attr = element.attributes[i];
            if (this.ATTR_WATCH.indexOf(attr.name) === -1) {
                pathTag.setAttribute(attr.name, attr.value);
            }
        }
        for (i in pathData) {
            pathTag.setAttribute(i, pathData[i]);
        }
        return pathTag;
    };

    /**
     * Parse attributes of a DOM element to
     * get an object of attribute => value
     *
     * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
     * @return {object}                  Object of attributes
     */
    Pathformer.prototype.parseAttr = function(element) {
        var attr, output = {};
        for (var i = 0; i < element.length; i++) {
            attr = element[i];
            // Check if no data attribute contains '%', or the transformation is impossible
            if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) {
                throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
            }
            output[attr.name] = attr.value;
        }
        return output;
    };

    'use strict';

    var requestAnimFrame, cancelAnimFrame, parsePositiveInt;

    /**
     * Vivus
     * Beta version
     *
     * Take any SVG and make the animation
     * to give give the impression of live drawing
     *
     * This in more than just inspired from codrops
     * At that point, it's a pure fork.
     */

    /**
     * Class constructor
     * option structure
     *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
     *   duration: <int> (in frames)
     *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
     *   delay: <int> (delay between the drawing of first and last path)
     *   dashGap <integer> whitespace extra margin between dashes
     *   pathTimingFunction <function> timing animation function for each path element of the SVG
     *   animTimingFunction <function> timing animation function for the complete SVG
     *   forceRender <boolean> force the browser to re-render all updated path items
     *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
     *
     * The attribute 'type' is by default on 'delayed'.
     *  - 'delayed'
     *    all paths are draw at the same time but with a
     *    little delay between them before start
     *  - 'sync'
     *    all path are start and finish at the same time
     *  - 'oneByOne'
     *    only one path is draw at the time
     *    the end of the first one will trigger the draw
     *    of the next one
     *
     * All these values can be overwritten individually
     * for each path item in the SVG
     * The value of frames will always take the advantage of
     * the duration value.
     * If you fail somewhere, an error will be thrown.
     * Good luck.
     *
     * @constructor
     * @this {Vivus}
     * @param {DOM|String}   element  Dom element of the SVG or id of it
     * @param {Object}       options  Options about the animation
     * @param {Function}     callback Callback for the end of the animation
     */
    function Vivus(element, options, callback) {

        // Setup
        this.isReady = false;
        this.setElement(element, options);
        this.setOptions(options);
        this.setCallback(callback);

        if (this.isReady) {
            this.init();
        }
    }

    /**
     * Timing functions
     **************************************
     *
     * Default functions to help developers.
     * It always take a number as parameter (between 0 to 1) then
     * return a number (between 0 and 1)
     */
    Vivus.LINEAR = function(x) {
        return x;
    };
    Vivus.EASE = function(x) {
        return -Math.cos(x * Math.PI) / 2 + 0.5;
    };
    Vivus.EASE_OUT = function(x) {
        return 1 - Math.pow(1 - x, 3);
    };
    Vivus.EASE_IN = function(x) {
        return Math.pow(x, 3);
    };
    Vivus.EASE_OUT_BOUNCE = function(x) {
        var base = -Math.cos(x * (0.5 * Math.PI)) + 1,
            rate = Math.pow(base, 1.5),
            rateR = Math.pow(1 - x, 2),
            progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
        return (1 - rateR) + (progress * rateR);
    };


    /**
     * Setters
     **************************************
     */

    /**
     * Check and set the element in the instance
     * The method will not return anything, but will throw an
     * error if the parameter is invalid
     *
     * @param {DOM|String}   element  SVG Dom element or id of it
     */
    Vivus.prototype.setElement = function(element, options) {
        // Basic check
        if (typeof element === 'undefined') {
            throw new Error('Vivus [constructor]: "element" parameter is required');
        }

        // Set the element
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) {
                throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
            }
        }
        this.parentEl = element;

        // Create the object element if the property `file` exists in the options object
        if (options && options.file) {
            var objElm = document.createElement('object');
            objElm.setAttribute('type', 'image/svg+xml');
            objElm.setAttribute('data', options.file);
            objElm.setAttribute('built-by-vivus', 'true');
            element.appendChild(objElm);
            element = objElm;
        }

        switch (element.constructor) {
            case window.SVGSVGElement:
            case window.SVGElement:
                this.el = element;
                this.isReady = true;
                break;

            case window.HTMLObjectElement:
                // If we have to wait for it
                var onLoad, self;

                self = this;
                onLoad = function(e) {
                    if (self.isReady) {
                        return;
                    }
                    self.el = element.contentDocument && element.contentDocument.querySelector('svg');
                    if (!self.el && e) {
                        throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
                    } else if (self.el) {
                        if (element.getAttribute('built-by-vivus')) {
                            self.parentEl.insertBefore(self.el, element);
                            self.parentEl.removeChild(element);
                            self.el.setAttribute('width', '100%');
                            self.el.setAttribute('height', '100%');
                        }
                        self.isReady = true;
                        self.init();
                        return true;
                    }
                };

                if (!onLoad()) {
                    element.addEventListener('load', onLoad);
                }
                break;

            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
        }
    };

    /**
     * Set up user option to the instance
     * The method will not return anything, but will throw an
     * error if the parameter is invalid
     *
     * @param  {object} options Object from the constructor
     */
    Vivus.prototype.setOptions = function(options) {
        var allowedTypes = ['delayed', 'sync', 'async', 'nsync', 'oneByOne', 'scenario', 'scenario-sync'];
        var allowedStarts = ['inViewport', 'manual', 'autostart'];

        // Basic check
        if (options !== undefined && options.constructor !== Object) {
            throw new Error('Vivus [constructor]: "options" parameter must be an object');
        } else {
            options = options || {};
        }

        // Set the animation type
        if (options.type && allowedTypes.indexOf(options.type) === -1) {
            throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
        } else {
            this.type = options.type || allowedTypes[0];
        }

        // Set the start type
        if (options.start && allowedStarts.indexOf(options.start) === -1) {
            throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
        } else {
            this.start = options.start || allowedStarts[0];
        }

        this.isIE = (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1);
        this.duration = parsePositiveInt(options.duration, 120);
        this.delay = parsePositiveInt(options.delay, null);
        this.dashGap = parsePositiveInt(options.dashGap, 1);
        this.forceRender = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
        this.reverseStack = !!options.reverseStack;
        this.selfDestroy = !!options.selfDestroy;
        this.onReady = options.onReady;
        this.map = [];
        this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null;

        this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;

        this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
        this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;

        if (this.delay >= this.duration) {
            throw new Error('Vivus [constructor]: delay must be shorter than duration');
        }
    };

    /**
     * Set up callback to the instance
     * The method will not return enything, but will throw an
     * error if the parameter is invalid
     *
     * @param  {Function} callback Callback for the animation end
     */
    Vivus.prototype.setCallback = function(callback) {
        // Basic check
        if (!!callback && callback.constructor !== Function) {
            throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        }
        this.callback = callback || function() {};
    };


    /**
     * Core
     **************************************
     */

    /**
     * Map the svg, path by path.
     * The method return nothing, it just fill the
     * `map` array. Each item in this array represent
     * a path element from the SVG, with informations for
     * the animation.
     *
     * ```
     * [
     *   {
     *     el: <DOMobj> the path element
     *     length: <number> length of the path line
     *     startAt: <number> time start of the path animation (in frames)
     *     duration: <number> path animation duration (in frames)
     *   },
     *   ...
     * ]
     * ```
     *
     */
    Vivus.prototype.mapping = function() {
        var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint;
        timePoint = totalLength = lengthMeter = 0;
        paths = this.el.querySelectorAll('path');

        for (i = 0; i < paths.length; i++) {
            path = paths[i];
            if (this.isInvisible(path)) {
                continue;
            }
            pathObj = {
                el: path,
                length: Math.ceil(path.getTotalLength())
            };
            // Test if the path length is correct
            if (isNaN(pathObj.length)) {
                if (window.console && console.warn) {
                    console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
                }
                continue;
            }
            this.map.push(pathObj);
            path.style.strokeDasharray = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
            path.style.strokeDashoffset = pathObj.length + this.dashGap;
            pathObj.length += this.dashGap;
            totalLength += pathObj.length;

            this.renderPath(i);
        }

        totalLength = totalLength === 0 ? 1 : totalLength;
        this.delay = this.delay === null ? this.duration / 3 : this.delay;
        this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);

        // Reverse stack if asked
        if (this.reverseStack) {
            this.map.reverse();
        }

        for (i = 0; i < this.map.length; i++) {
            pathObj = this.map[i];

            switch (this.type) {
                case 'delayed':
                    pathObj.startAt = this.delayUnit * i;
                    pathObj.duration = this.duration - this.delay;
                    break;

                case 'oneByOne':
                    pathObj.startAt = lengthMeter / totalLength * this.duration;
                    pathObj.duration = pathObj.length / totalLength * this.duration;
                    break;

                case 'sync':
                case 'async':
                case 'nsync':
                    pathObj.startAt = 0;
                    pathObj.duration = this.duration;
                    break;

                case 'scenario-sync':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
                    this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
                    break;

                case 'scenario':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    this.frameLength = Math.max(this.frameLength, (pathObj.startAt + pathObj.duration));
                    break;
            }
            lengthMeter += pathObj.length;
            this.frameLength = this.frameLength || this.duration;
        }
    };

    /**
     * Interval method to draw the SVG from current
     * position of the animation. It update the value of
     * `currentFrame` and re-trace the SVG.
     *
     * It use this.handle to store the requestAnimationFrame
     * and clear it one the animation is stopped. So this
     * attribute can be used to know if the animation is
     * playing.
     *
     * Once the animation at the end, this method will
     * trigger the Vivus callback.
     *
     */
    Vivus.prototype.drawer = function() {
        var self = this;
        this.currentFrame += this.speed;

        if (this.currentFrame <= 0) {
            this.stop();
            this.reset();
        } else if (this.currentFrame >= this.frameLength) {
            this.stop();
            this.currentFrame = this.frameLength;
            this.trace();
            if (this.selfDestroy) {
                this.destroy();
            }
        } else {
            this.trace();
            this.handle = requestAnimFrame(function() {
                self.drawer();
            });
            return;
        }

        this.callback(this);
        if (this.instanceCallback) {
            this.instanceCallback(this);
            this.instanceCallback = null;
        }
    };

    /**
     * Draw the SVG at the current instant from the
     * `currentFrame` value. Here is where most of the magic is.
     * The trick is to use the `strokeDashoffset` style property.
     *
     * For optimisation reasons, a new property called `progress`
     * is added in each item of `map`. This one contain the current
     * progress of the path element. Only if the new value is different
     * the new value will be applied to the DOM element. This
     * method save a lot of resources to re-render the SVG. And could
     * be improved if the animation couldn't be played forward.
     *
     */
    Vivus.prototype.trace = function() {
        var i, progress, path, currentFrame;
        currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            progress = (currentFrame - path.startAt) / path.duration;
            progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
            if (path.progress !== progress) {
                path.progress = progress;
                path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
                this.renderPath(i);
            }
        }
    };

    /**
     * Method forcing the browser to re-render a path element
     * from it's index in the map. Depending on the `forceRender`
     * value.
     * The trick is to replace the path element by it's clone.
     * This practice is not recommended because it's asking more
     * ressources, too much DOM manupulation..
     * but it's the only way to let the magic happen on IE.
     * By default, this fallback is only applied on IE.
     *
     * @param  {Number} index Path index
     */
    Vivus.prototype.renderPath = function(index) {
        if (this.forceRender && this.map && this.map[index]) {
            var pathObj = this.map[index],
                newPath = pathObj.el.cloneNode(true);
            pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
            pathObj.el = newPath;
        }
    };

    /**
     * When the SVG object is loaded and ready,
     * this method will continue the initialisation.
     *
     * This this mainly due to the case of passing an
     * object tag in the constructor. It will wait
     * the end of the loading to initialise.
     *
     */
    Vivus.prototype.init = function() {
        // Set object variables
        this.frameLength = 0;
        this.currentFrame = 0;
        this.map = [];

        // Start
        new Pathformer(this.el);
        this.mapping();
        this.starter();

        if (this.onReady) {
            this.onReady(this);
        }
    };

    /**
     * Trigger to start of the animation.
     * Depending on the `start` value, a different script
     * will be applied.
     *
     * If the `start` value is not valid, an error will be thrown.
     * Even if technically, this is impossible.
     *
     */
    Vivus.prototype.starter = function() {
        switch (this.start) {
            case 'manual':
                return;

            case 'autostart':
                this.play();
                break;

            case 'inViewport':
                var self = this,
                    listener = function() {
                        if (self.isInViewport(self.parentEl, 1)) {
                            self.play();
                            window.removeEventListener('scroll', listener);
                        }
                    };
                window.addEventListener('scroll', listener);
                listener();
                break;
        }
    };


    /**
     * Controls
     **************************************
     */

    /**
     * Get the current status of the animation between
     * three different states: 'start', 'progress', 'end'.
     * @return {string} Instance status
     */
    Vivus.prototype.getStatus = function() {
        return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
    };

    /**
     * Reset the instance to the initial state : undraw
     * Be careful, it just reset the animation, if you're
     * playing the animation, this won't stop it. But just
     * make it start from start.
     *
     */
    Vivus.prototype.reset = function() {
        return this.setFrameProgress(0);
    };

    /**
     * Set the instance to the final state : drawn
     * Be careful, it just set the animation, if you're
     * playing the animation on rewind, this won't stop it.
     * But just make it start from the end.
     *
     */
    Vivus.prototype.finish = function() {
        return this.setFrameProgress(1);
    };

    /**
     * Set the level of progress of the drawing.
     *
     * @param {number} progress Level of progress to set
     */
    Vivus.prototype.setFrameProgress = function(progress) {
        progress = Math.min(1, Math.max(0, progress));
        this.currentFrame = Math.round(this.frameLength * progress);
        this.trace();
        return this;
    };

    /**
     * Play the animation at the desired speed.
     * Speed must be a valid number (no zero).
     * By default, the speed value is 1.
     * But a negative value is accepted to go forward.
     *
     * And works with float too.
     * But don't forget we are in JavaScript, se be nice
     * with him and give him a 1/2^x value.
     *
     * @param  {number} speed Animation speed [optional]
     */
    Vivus.prototype.play = function(speed, callback) {
        this.instanceCallback = null;

        if (speed && typeof speed === 'function') {
            this.instanceCallback = speed; // first parameter is actually the callback function
            speed = null;
        } else if (speed && typeof speed !== 'number') {
            throw new Error('Vivus [play]: invalid speed');
        }
        // if the first parameter wasn't the callback, check if the seconds was
        if (callback && typeof(callback) === 'function' && !this.instanceCallback) {
            this.instanceCallback = callback;
        }


        this.speed = speed || 1;
        if (!this.handle) {
            this.drawer();
        }
        return this;
    };

    /**
     * Stop the current animation, if on progress.
     * Should not trigger any error.
     *
     */
    Vivus.prototype.stop = function() {
        if (this.handle) {
            cancelAnimFrame(this.handle);
            this.handle = null;
        }
        return this;
    };

    /**
     * Destroy the instance.
     * Remove all bad styling attributes on all
     * path tags
     *
     */
    Vivus.prototype.destroy = function() {
        this.stop();
        var i, path;
        for (i = 0; i < this.map.length; i++) {
            path = this.map[i];
            path.el.style.strokeDashoffset = null;
            path.el.style.strokeDasharray = null;
            this.renderPath(i);
        }
    };


    /**
     * Utils methods
     * include methods from Codrops
     **************************************
     */

    /**
     * Method to best guess if a path should added into
     * the animation or not.
     *
     * 1. Use the `data-vivus-ignore` attribute if set
     * 2. Check if the instance must ignore invisible paths
     * 3. Check if the path is visible
     *
     * For now the visibility checking is unstable.
     * It will be used for a beta phase.
     *
     * Other improvments are planned. Like detecting
     * is the path got a stroke or a valid opacity.
     */
    Vivus.prototype.isInvisible = function(el) {
        var rect,
            ignoreAttr = el.getAttribute('data-ignore');

        if (ignoreAttr !== null) {
            return ignoreAttr !== 'false';
        }

        if (this.ignoreInvisible) {
            rect = el.getBoundingClientRect();
            return !rect.width && !rect.height;
        } else {
            return false;
        }
    };

    /**
     * Parse attributes of a DOM element to
     * get an object of {attributeName => attributeValue}
     *
     * @param  {object} element DOM element to parse
     * @return {object}         Object of attributes
     */
    Vivus.prototype.parseAttr = function(element) {
        var attr, output = {};
        if (element && element.attributes) {
            for (var i = 0; i < element.attributes.length; i++) {
                attr = element.attributes[i];
                output[attr.name] = attr.value;
            }
        }
        return output;
    };

    /**
     * Reply if an element is in the page viewport
     *
     * @param  {object} el Element to observe
     * @param  {number} h  Percentage of height
     * @return {boolean}
     */
    Vivus.prototype.isInViewport = function(el, h) {
        var scrolled = this.scrollY(),
            viewed = scrolled + this.getViewportH(),
            elBCR = el.getBoundingClientRect(),
            elHeight = elBCR.height,
            elTop = scrolled + elBCR.top,
            elBottom = elTop + elHeight;

        // if 0, the element is considered in the viewport as soon as it enters.
        // if 1, the element is considered in the viewport only when it's fully inside
        // value in percentage (1 >= h >= 0)
        h = h || 0;

        return (elTop + elHeight * h) <= viewed && (elBottom) >= scrolled;
    };

    /**
     * Alias for document element
     *
     * @type {DOMelement}
     */
    Vivus.prototype.docElem = window.document.documentElement;

    /**
     * Get the viewport height in pixels
     *
     * @return {integer} Viewport height
     */
    Vivus.prototype.getViewportH = function() {
        var client = this.docElem.clientHeight,
            inner = window.innerHeight;

        if (client < inner) {
            return inner;
        } else {
            return client;
        }
    };

    /**
     * Get the page Y offset
     *
     * @return {integer} Page Y offset
     */
    Vivus.prototype.scrollY = function() {
        return window.pageYOffset || this.docElem.scrollTop;
    };

    /**
     * Alias for `requestAnimationFrame` or
     * `setTimeout` function for deprecated browsers.
     *
     */
    requestAnimFrame = (function() {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( /* function */ callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    /**
     * Alias for `cancelAnimationFrame` or
     * `cancelTimeout` function for deprecated browsers.
     *
     */
    cancelAnimFrame = (function() {
        return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.msCancelAnimationFrame ||
            function(id) {
                return window.clearTimeout(id);
            }
        );
    })();

    /**
     * Parse string to integer.
     * If the number is not positive or null
     * the method will return the default value
     * or 0 if undefined
     *
     * @param {string} value String to parse
     * @param {*} defaultValue Value to return if the result parsed is invalid
     * @return {number}
     *
     */
    parsePositiveInt = function(value, defaultValue) {
        var output = parseInt(value, 10);
        return (output >= 0) ? output : defaultValue;
    };


    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function() {
            return Vivus;
        });
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = Vivus;
    } else {
        // Browser globals
        window.Vivus = Vivus;
    }

}(window, document));


(function($) {

    'use strict';

    var $body = $('body');
    var $html = $('html, body');
    var $content = $('main.content');
    var height = window.innerHeight;

    $(document).ready(function() {
        console.log('init')
        /**
         * Remove autoplay video @ ios
         */
        var md = new MobileDetect(window.navigator.userAgent);
        if (md.is('iOS')) {
            jQuery('video.block__background--video').attr('autoplay', false);
        };

        // Commons
        ResponsivePictures.init();
        Menu.init();
        Sliders.init();
        Share.init();

        if (Utils.is.touch()) {
            Gestures.init();
        }
        // Homepage
        if ($body.hasClass('page-template-homepage')) {
            AjaxPostLoader.init();
        }
        // History Page
        if ($body.hasClass('page-template-history')) {
            Timeline.init();
            AjaxPostLoader.init();
        }

        // News Page
        //   if ($body.hasClass('page-template-news') || $body.hasClass('page-template-press') ||$body.hasClass('postid-1968') || $body.hasClass('postid-4600')) {
        if ($body.hasClass('page-template-news') || $body.hasClass('page-template-press')) {
            Blog.init();
        }

        // Factory Page
        if ($body.hasClass('page-template-factory')) {
            Factorys.init();
        }

        if ($body.hasClass('page-template-dealer')) {
            Dealer.init();
        }
        // Car Page
        if ($body.hasClass('page-template-car')) {
            var grid = new Grid($('.grid'));
            var photoGallery = new Gallery($('.gallery--photo'), true);
            var videoGallery = new Gallery($('.gallery--video'));
            //ModeSelector.init();
            TechnicalSpecs.init();
        }
        // Contacts page
        if ($body.hasClass('page-template-contacts')) {
            Contact.init();
        }
        // Puro page
        if ($body.hasClass('page-template-puro')) {
            console.log('puro-ini')
            //Puro.init();
        }
    });

    $(window).on('load', function() {
        Utils.applyBodyClasses();
        $html.css({
            height: height + 'px'
        }).scrollTop(0);
        FastClick.attach(document.body);
    }).on('resize', function() {
        if (window.innerHeight !== height) {
            height = window.innerHeight;
            $html.css({
                height: height + 'px'
            }).scrollTop(0);
        }
    });

    Pace.on('hide', function() {
        jQuery('.pagani-loader').fadeOut();
        $body.addClass('init');
        Blocks.init();
        Reveal.init();
    });

    objectFitImages();

})(jQuery);

/*!
 * Date picker for pickadate.js v3.5.6
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function(factory) {

    // AMD.
    if (typeof define == 'function' && define.amd)
        define(['./picker', 'jquery'], factory)

    // Node.js/browserify.
    else if (typeof exports == 'object')
        module.exports = factory(require('./picker.js'), require('jquery'))

    // Browser globals.
    else factory(Picker, jQuery)

}(function(Picker, $) {


    /**
     * Globals and constants
     */
    var DAYS_IN_WEEK = 7,
        WEEKS_IN_CALENDAR = 6,
        _ = Picker._



    /**
     * The date picker constructor
     */
    function DatePicker(picker, settings) {

        var calendar = this,
            element = picker.$node[0],
            elementValue = element.value,
            elementDataValue = picker.$node.data('value'),
            valueString = elementDataValue || elementValue,
            formatString = elementDataValue ? settings.formatSubmit : settings.format,
            isRTL = function() {

                return element.currentStyle ?

                    // For IE.
                    element.currentStyle.direction == 'rtl' :

                    // For normal browsers.
                    getComputedStyle(picker.$root[0]).direction == 'rtl'
            }

        calendar.settings = settings
        calendar.$node = picker.$node

        // The queue of methods that will be used to build item objects.
        calendar.queue = {
            min: 'measure create',
            max: 'measure create',
            now: 'now create',
            select: 'parse create validate',
            highlight: 'parse navigate create validate',
            view: 'parse create validate viewset',
            disable: 'deactivate',
            enable: 'activate'
        }

        // The component's item object.
        calendar.item = {}

        calendar.item.clear = null
        calendar.item.disable = (settings.disable || []).slice(0)
        calendar.item.enable = -(function(collectionDisabled) {
            return collectionDisabled[0] === true ? collectionDisabled.shift() : -1
        })(calendar.item.disable)

        calendar.
        set('min', settings.min).
        set('max', settings.max).
        set('now')

        // When there’s a value, set the `select`, which in turn
        // also sets the `highlight` and `view`.
        if (valueString) {
            calendar.set('select', valueString, {
                format: formatString,
                defaultValue: true
            })
        }

        // If there’s no value, default to highlighting “today”.
        else {
            calendar.
            set('select', null).
            set('highlight', calendar.item.now)
        }


        // The keycode to movement mapping.
        calendar.key = {
            40: 7, // Down
            38: -7, // Up
            39: function() {
                return isRTL() ? -1 : 1
            }, // Right
            37: function() {
                return isRTL() ? 1 : -1
            }, // Left
            go: function(timeChange) {
                var highlightedObject = calendar.item.highlight,
                    targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange)
                calendar.set(
                    'highlight',
                    targetDate, {
                        interval: timeChange
                    }
                )
                this.render()
            }
        }


        // Bind some picker events.
        picker.
        on('render', function() {
            picker.$root.find('.' + settings.klass.selectMonth).on('change', function() {
                var value = this.value
                if (value) {
                    picker.set('highlight', [picker.get('view').year, value, picker.get('highlight').date])
                    picker.$root.find('.' + settings.klass.selectMonth).trigger('focus')
                }
            })
            picker.$root.find('.' + settings.klass.selectYear).on('change', function() {
                var value = this.value
                if (value) {
                    picker.set('highlight', [value, picker.get('view').month, picker.get('highlight').date])
                    picker.$root.find('.' + settings.klass.selectYear).trigger('focus')
                }
            })
        }, 1).
        on('open', function() {
            var includeToday = ''
            if (calendar.disabled(calendar.get('now'))) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find('button' + includeToday + ', select').attr('disabled', false)
        }, 1).
        on('close', function() {
            picker.$root.find('button, select').attr('disabled', true)
        }, 1)

    } //DatePicker


    /**
     * Set a datepicker item object.
     */
    DatePicker.prototype.set = function(type, value, options) {

        var calendar = this,
            calendarItem = calendar.item

        // If the value is `null` just set it immediately.
        if (value === null) {
            if (type == 'clear') type = 'select'
            calendarItem[type] = value
            return calendar
        }

        // Otherwise go through the queue of methods, and invoke the functions.
        // Update this as the time unit, and set the final value as this item.
        // * In the case of `enable`, keep the queue but set `disable` instead.
        //   And in the case of `flip`, keep the queue but set `enable` instead.
        calendarItem[(type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type)] = calendar.queue[type].split(' ').map(function(method) {
            value = calendar[method](type, value, options)
            return value
        }).pop()

        // Check if we need to cascade through more updates.
        if (type == 'select') {
            calendar.set('highlight', calendarItem.select, options)
        } else if (type == 'highlight') {
            calendar.set('view', calendarItem.highlight, options)
        } else if (type.match(/^(flip|min|max|disable|enable)$/)) {
            if (calendarItem.select && calendar.disabled(calendarItem.select)) {
                calendar.set('select', calendarItem.select, options)
            }
            if (calendarItem.highlight && calendar.disabled(calendarItem.highlight)) {
                calendar.set('highlight', calendarItem.highlight, options)
            }
        }

        return calendar
    } //DatePicker.prototype.set


    /**
     * Get a datepicker item object.
     */
    DatePicker.prototype.get = function(type) {
        return this.item[type]
    } //DatePicker.prototype.get


    /**
     * Create a picker date object.
     */
    DatePicker.prototype.create = function(type, value, options) {

        var isInfiniteValue,
            calendar = this

        // If there’s no value, use the type as the value.
        value = value === undefined ? type : value


        // If it’s infinity, update the value.
        if (value == -Infinity || value == Infinity) {
            isInfiniteValue = value
        }

        // If it’s an object, use the native date object.
        else if ($.isPlainObject(value) && _.isInteger(value.pick)) {
            value = value.obj
        }

        // If it’s an array, convert it into a date and make sure
        // that it’s a valid date – otherwise default to today.
        else if ($.isArray(value)) {
            value = new Date(value[0], value[1], value[2])
            value = _.isDate(value) ? value : calendar.create().obj
        }

        // If it’s a number or date object, make a normalized date.
        else if (_.isInteger(value) || _.isDate(value)) {
            value = calendar.normalize(new Date(value), options)
        }

        // If it’s a literal true or any other case, set it to now.
        else /*if ( value === true )*/ {
            value = calendar.now(type, value, options)
        }

        // Return the compiled object.
        return {
            year: isInfiniteValue || value.getFullYear(),
            month: isInfiniteValue || value.getMonth(),
            date: isInfiniteValue || value.getDate(),
            day: isInfiniteValue || value.getDay(),
            obj: isInfiniteValue || value,
            pick: isInfiniteValue || value.getTime()
        }
    } //DatePicker.prototype.create


    /**
     * Create a range limit object using an array, date object,
     * literal “true”, or integer relative to another time.
     */
    DatePicker.prototype.createRange = function(from, to) {

        var calendar = this,
            createDate = function(date) {
                if (date === true || $.isArray(date) || _.isDate(date)) {
                    return calendar.create(date)
                }
                return date
            }

        // Create objects if possible.
        if (!_.isInteger(from)) {
            from = createDate(from)
        }
        if (!_.isInteger(to)) {
            to = createDate(to)
        }

        // Create relative dates.
        if (_.isInteger(from) && $.isPlainObject(to)) {
            from = [to.year, to.month, to.date + from];
        } else if (_.isInteger(to) && $.isPlainObject(from)) {
            to = [from.year, from.month, from.date + to];
        }

        return {
            from: createDate(from),
            to: createDate(to)
        }
    } //DatePicker.prototype.createRange


    /**
     * Check if a date unit falls within a date range object.
     */
    DatePicker.prototype.withinRange = function(range, dateUnit) {
        range = this.createRange(range.from, range.to)
        return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
    }


    /**
     * Check if two date range objects overlap.
     */
    DatePicker.prototype.overlapRanges = function(one, two) {

        var calendar = this

        // Convert the ranges into comparable dates.
        one = calendar.createRange(one.from, one.to)
        two = calendar.createRange(two.from, two.to)

        return calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) ||
            calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to)
    }


    /**
     * Get the date today.
     */
    DatePicker.prototype.now = function(type, value, options) {
        value = new Date()
        if (options && options.rel) {
            value.setDate(value.getDate() + options.rel)
        }
        return this.normalize(value, options)
    }


    /**
     * Navigate to next/prev month.
     */
    DatePicker.prototype.navigate = function(type, value, options) {

        var targetDateObject,
            targetYear,
            targetMonth,
            targetDate,
            isTargetArray = $.isArray(value),
            isTargetObject = $.isPlainObject(value),
            viewsetObject = this.item.view
        /*,
                safety = 100*/


        if (isTargetArray || isTargetObject) {

            if (isTargetObject) {
                targetYear = value.year
                targetMonth = value.month
                targetDate = value.date
            } else {
                targetYear = +value[0]
                targetMonth = +value[1]
                targetDate = +value[2]
            }

            // If we’re navigating months but the view is in a different
            // month, navigate to the view’s year and month.
            if (options && options.nav && viewsetObject && viewsetObject.month !== targetMonth) {
                targetYear = viewsetObject.year
                targetMonth = viewsetObject.month
            }

            // Figure out the expected target year and month.
            targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1)
            targetYear = targetDateObject.getFullYear()
            targetMonth = targetDateObject.getMonth()

            // If the month we’re going to doesn’t have enough days,
            // keep decreasing the date until we reach the month’s last date.
            while ( /*safety &&*/ new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth) {
                targetDate -= 1
                /*safety -= 1
                if ( !safety ) {
                    throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
                }*/
            }

            value = [targetYear, targetMonth, targetDate]
        }

        return value
    } //DatePicker.prototype.navigate


    /**
     * Normalize a date by setting the hours to midnight.
     */
    DatePicker.prototype.normalize = function(value /*, options*/ ) {
        value.setHours(0, 0, 0, 0)
        return value
    }


    /**
     * Measure the range of dates.
     */
    DatePicker.prototype.measure = function(type, value /*, options*/ ) {

        var calendar = this

        // If it’s anything false-y, remove the limits.
        if (!value) {
            value = type == 'min' ? -Infinity : Infinity
        }

        // If it’s a string, parse it.
        else if (typeof value == 'string') {
            value = calendar.parse(type, value)
        }

        // If it's an integer, get a date relative to today.
        else if (_.isInteger(value)) {
            value = calendar.now(type, value, {
                rel: value
            })
        }

        return value
    } ///DatePicker.prototype.measure


    /**
     * Create a viewset object based on navigation.
     */
    DatePicker.prototype.viewset = function(type, dateObject /*, options*/ ) {
        return this.create([dateObject.year, dateObject.month, 1])
    }


    /**
     * Validate a date as enabled and shift if needed.
     */
    DatePicker.prototype.validate = function(type, dateObject, options) {

        var calendar = this,

            // Keep a reference to the original date.
            originalDateObject = dateObject,

            // Make sure we have an interval.
            interval = options && options.interval ? options.interval : 1,

            // Check if the calendar enabled dates are inverted.
            isFlippedBase = calendar.item.enable === -1,

            // Check if we have any enabled dates after/before now.
            hasEnabledBeforeTarget, hasEnabledAfterTarget,

            // The min & max limits.
            minLimitObject = calendar.item.min,
            maxLimitObject = calendar.item.max,

            // Check if we’ve reached the limit during shifting.
            reachedMin, reachedMax,

            // Check if the calendar is inverted and at least one weekday is enabled.
            hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function(value) {

                // If there’s a date, check where it is relative to the target.
                if ($.isArray(value)) {
                    var dateTime = calendar.create(value).pick
                    if (dateTime < dateObject.pick) hasEnabledBeforeTarget = true
                    else if (dateTime > dateObject.pick) hasEnabledAfterTarget = true
                }

                // Return only integers for enabled weekdays.
                return _.isInteger(value)
            }).length
        /*,

                safety = 100*/



        // Cases to validate for:
        // [1] Not inverted and date disabled.
        // [2] Inverted and some dates enabled.
        // [3] Not inverted and out of range.
        //
        // Cases to **not** validate for:
        // • Navigating months.
        // • Not inverted and date enabled.
        // • Inverted and all dates disabled.
        // • ..and anything else.
        if (!options || (!options.nav && !options.defaultValue))
            if (
                /* 1 */
                (!isFlippedBase && calendar.disabled(dateObject)) ||
                /* 2 */
                (isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget)) ||
                /* 3 */
                (!isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick))
            ) {


                // When inverted, flip the direction if there aren’t any enabled weekdays
                // and there are no enabled dates in the direction of the interval.
                if (isFlippedBase && !hasEnabledWeekdays && ((!hasEnabledAfterTarget && interval > 0) || (!hasEnabledBeforeTarget && interval < 0))) {
                    interval *= -1
                }


                // Keep looping until we reach an enabled date.
                while ( /*safety &&*/ calendar.disabled(dateObject)) {

                    /*safety -= 1
                    if ( !safety ) {
                        throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
                    }*/


                    // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
                    if (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month)) {
                        dateObject = originalDateObject
                        interval = interval > 0 ? 1 : -1
                    }


                    // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
                    if (dateObject.pick <= minLimitObject.pick) {
                        reachedMin = true
                        interval = 1
                        dateObject = calendar.create([
                            minLimitObject.year,
                            minLimitObject.month,
                            minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                        ])
                    } else if (dateObject.pick >= maxLimitObject.pick) {
                        reachedMax = true
                        interval = -1
                        dateObject = calendar.create([
                            maxLimitObject.year,
                            maxLimitObject.month,
                            maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                        ])
                    }


                    // If we’ve reached both limits, just break out of the loop.
                    if (reachedMin && reachedMax) {
                        break
                    }


                    // Finally, create the shifted date using the interval and keep looping.
                    dateObject = calendar.create([dateObject.year, dateObject.month, dateObject.date + interval])
                }

            } //endif


        // Return the date object settled on.
        return dateObject
    } //DatePicker.prototype.validate


    /**
     * Check if a date is disabled.
     */
    DatePicker.prototype.disabled = function(dateToVerify) {

        var
            calendar = this,

            // Filter through the disabled dates to check if this is one.
            isDisabledMatch = calendar.item.disable.filter(function(dateToDisable) {

                // If the date is a number, match the weekday with 0index and `firstDay` check.
                if (_.isInteger(dateToDisable)) {
                    return dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7
                }

                // If it’s an array or a native JS date, create and match the exact date.
                if ($.isArray(dateToDisable) || _.isDate(dateToDisable)) {
                    return dateToVerify.pick === calendar.create(dateToDisable).pick
                }

                // If it’s an object, match a date within the “from” and “to” range.
                if ($.isPlainObject(dateToDisable)) {
                    return calendar.withinRange(dateToDisable, dateToVerify)
                }
            })

        // If this date matches a disabled date, confirm it’s not inverted.
        isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function(dateToDisable) {
            return $.isArray(dateToDisable) && dateToDisable[3] == 'inverted' ||
                $.isPlainObject(dateToDisable) && dateToDisable.inverted
        }).length

        // Check the calendar “enabled” flag and respectively flip the
        // disabled state. Then also check if it’s beyond the min/max limits.
        return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
            dateToVerify.pick < calendar.item.min.pick ||
            dateToVerify.pick > calendar.item.max.pick

    } //DatePicker.prototype.disabled


    /**
     * Parse a string into a usable type.
     */
    DatePicker.prototype.parse = function(type, value, options) {

        var calendar = this,
            parsingObject = {}

        // If it’s already parsed, we’re good.
        if (!value || typeof value != 'string') {
            return value
        }

        // We need a `.format` to parse the value with.
        if (!(options && options.format)) {
            options = options || {}
            options.format = calendar.settings.format
        }

        // Convert the format into an array and then map through it.
        calendar.formats.toArray(options.format).map(function(label) {

            var
                // Grab the formatting label.
                formattingLabel = calendar.formats[label],

                // The format length is from the formatting label function or the
                // label length without the escaping exclamation (!) mark.
                formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [value, parsingObject]) : label.replace(/^!/, '').length

            // If there's a format label, split the value up to the format length.
            // Then add it to the parsing object with appropriate label.
            if (formattingLabel) {
                parsingObject[label] = value.substr(0, formatLength)
            }

            // Update the value as the substring from format length to end.
            value = value.substr(formatLength)
        })

        // Compensate for month 0index.
        return [
            parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1,
            parsingObject.dd || parsingObject.d
        ]
    } //DatePicker.prototype.parse


    /**
     * Various formats to display the object in.
     */
    DatePicker.prototype.formats = (function() {

        // Return the length of the first word in a collection.
        function getWordLengthFromCollection(string, collection, dateObject) {

            // Grab the first word from the string.
            // Regex pattern from http://stackoverflow.com/q/150033
            var word = string.match(/[^\x00-\x7F]+|\w+/)[0]

            // If there's no month index, add it to the date object
            if (!dateObject.mm && !dateObject.m) {
                dateObject.m = collection.indexOf(word) + 1
            }

            // Return the length of the word.
            return word.length
        }

        // Get the length of the first word in a string.
        function getFirstWordLength(string) {
            return string.match(/\w+/)[0].length
        }

        return {

            d: function(string, dateObject) {

                // If there's string, then get the digits length.
                // Otherwise return the selected date.
                return string ? _.digits(string) : dateObject.date
            },
            dd: function(string, dateObject) {

                // If there's a string, then the length is always 2.
                // Otherwise return the selected date with a leading zero.
                return string ? 2 : _.lead(dateObject.date)
            },
            ddd: function(string, dateObject) {

                // If there's a string, then get the length of the first word.
                // Otherwise return the short selected weekday.
                return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day]
            },
            dddd: function(string, dateObject) {

                // If there's a string, then get the length of the first word.
                // Otherwise return the full selected weekday.
                return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day]
            },
            m: function(string, dateObject) {

                // If there's a string, then get the length of the digits
                // Otherwise return the selected month with 0index compensation.
                return string ? _.digits(string) : dateObject.month + 1
            },
            mm: function(string, dateObject) {

                // If there's a string, then the length is always 2.
                // Otherwise return the selected month with 0index and leading zero.
                return string ? 2 : _.lead(dateObject.month + 1)
            },
            mmm: function(string, dateObject) {

                var collection = this.settings.monthsShort

                // If there's a string, get length of the relevant month from the short
                // months collection. Otherwise return the selected month from that collection.
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month]
            },
            mmmm: function(string, dateObject) {

                var collection = this.settings.monthsFull

                // If there's a string, get length of the relevant month from the full
                // months collection. Otherwise return the selected month from that collection.
                return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month]
            },
            yy: function(string, dateObject) {

                // If there's a string, then the length is always 2.
                // Otherwise return the selected year by slicing out the first 2 digits.
                return string ? 2 : ('' + dateObject.year).slice(2)
            },
            yyyy: function(string, dateObject) {

                // If there's a string, then the length is always 4.
                // Otherwise return the selected year.
                return string ? 4 : dateObject.year
            },

            // Create an array by splitting the formatting string passed.
            toArray: function(formatString) {
                return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },

            // Format an object into a string using the formatting options.
            toString: function(formatString, itemObject) {
                var calendar = this
                return calendar.formats.toArray(formatString).map(function(label) {
                    return _.trigger(calendar.formats[label], calendar, [0, itemObject]) || label.replace(/^!/, '')
                }).join('')
            }
        }
    })() //DatePicker.prototype.formats




    /**
     * Check if two date units are the exact.
     */
    DatePicker.prototype.isDateExact = function(one, two) {

        var calendar = this

        // When we’re working with weekdays, do a direct comparison.
        if (
            (_.isInteger(one) && _.isInteger(two)) ||
            (typeof one == 'boolean' && typeof two == 'boolean')
        ) {
            return one === two
        }

        // When we’re working with date representations, compare the “pick” value.
        if (
            (_.isDate(one) || $.isArray(one)) &&
            (_.isDate(two) || $.isArray(two))
        ) {
            return calendar.create(one).pick === calendar.create(two).pick
        }

        // When we’re working with range objects, compare the “from” and “to”.
        if ($.isPlainObject(one) && $.isPlainObject(two)) {
            return calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to)
        }

        return false
    }


    /**
     * Check if two date units overlap.
     */
    DatePicker.prototype.isDateOverlap = function(one, two) {

        var calendar = this,
            firstDay = calendar.settings.firstDay ? 1 : 0

        // When we’re working with a weekday index, compare the days.
        if (_.isInteger(one) && (_.isDate(two) || $.isArray(two))) {
            one = one % 7 + firstDay
            return one === calendar.create(two).day + 1
        }
        if (_.isInteger(two) && (_.isDate(one) || $.isArray(one))) {
            two = two % 7 + firstDay
            return two === calendar.create(one).day + 1
        }

        // When we’re working with range objects, check if the ranges overlap.
        if ($.isPlainObject(one) && $.isPlainObject(two)) {
            return calendar.overlapRanges(one, two)
        }

        return false
    }


    /**
     * Flip the “enabled” state.
     */
    DatePicker.prototype.flipEnable = function(val) {
        var itemObject = this.item
        itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
    }


    /**
     * Mark a collection of dates as “disabled”.
     */
    DatePicker.prototype.deactivate = function(type, datesToDisable) {

        var calendar = this,
            disabledItems = calendar.item.disable.slice(0)


        // If we’re flipping, that’s all we need to do.
        if (datesToDisable == 'flip') {
            calendar.flipEnable()
        } else if (datesToDisable === false) {
            calendar.flipEnable(1)
            disabledItems = []
        } else if (datesToDisable === true) {
            calendar.flipEnable(-1)
            disabledItems = []
        }

        // Otherwise go through the dates to disable.
        else {

            datesToDisable.map(function(unitToDisable) {

                var matchFound

                // When we have disabled items, check for matches.
                // If something is matched, immediately break out.
                for (var index = 0; index < disabledItems.length; index += 1) {
                    if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
                        matchFound = true
                        break
                    }
                }

                // If nothing was found, add the validated unit to the collection.
                if (!matchFound) {
                    if (
                        _.isInteger(unitToDisable) ||
                        _.isDate(unitToDisable) ||
                        $.isArray(unitToDisable) ||
                        ($.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to)
                    ) {
                        disabledItems.push(unitToDisable)
                    }
                }
            })
        }

        // Return the updated collection.
        return disabledItems
    } //DatePicker.prototype.deactivate


    /**
     * Mark a collection of dates as “enabled”.
     */
    DatePicker.prototype.activate = function(type, datesToEnable) {

        var calendar = this,
            disabledItems = calendar.item.disable,
            disabledItemsCount = disabledItems.length

        // If we’re flipping, that’s all we need to do.
        if (datesToEnable == 'flip') {
            calendar.flipEnable()
        } else if (datesToEnable === true) {
            calendar.flipEnable(1)
            disabledItems = []
        } else if (datesToEnable === false) {
            calendar.flipEnable(-1)
            disabledItems = []
        }

        // Otherwise go through the disabled dates.
        else {

            datesToEnable.map(function(unitToEnable) {

                var matchFound,
                    disabledUnit,
                    index,
                    isExactRange

                // Go through the disabled items and try to find a match.
                for (index = 0; index < disabledItemsCount; index += 1) {

                    disabledUnit = disabledItems[index]

                    // When an exact match is found, remove it from the collection.
                    if (calendar.isDateExact(disabledUnit, unitToEnable)) {
                        matchFound = disabledItems[index] = null
                        isExactRange = true
                        break
                    }

                    // When an overlapped match is found, add the “inverted” state to it.
                    else if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
                        if ($.isPlainObject(unitToEnable)) {
                            unitToEnable.inverted = true
                            matchFound = unitToEnable
                        } else if ($.isArray(unitToEnable)) {
                            matchFound = unitToEnable
                            if (!matchFound[3]) matchFound.push('inverted')
                        } else if (_.isDate(unitToEnable)) {
                            matchFound = [unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted']
                        }
                        break
                    }
                }

                // If a match was found, remove a previous duplicate entry.
                if (matchFound)
                    for (index = 0; index < disabledItemsCount; index += 1) {
                        if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
                            disabledItems[index] = null
                            break
                        }
                    }

                // In the event that we’re dealing with an exact range of dates,
                // make sure there are no “inverted” dates because of it.
                if (isExactRange)
                    for (index = 0; index < disabledItemsCount; index += 1) {
                        if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
                            disabledItems[index] = null
                            break
                        }
                    }

                // If something is still matched, add it into the collection.
                if (matchFound) {
                    disabledItems.push(matchFound)
                }
            })
        }

        // Return the updated collection.
        return disabledItems.filter(function(val) {
            return val != null
        })
    } //DatePicker.prototype.activate


    /**
     * Create a string for the nodes in the picker.
     */
    DatePicker.prototype.nodes = function(isOpen) {

        var
            calendar = this,
            settings = calendar.settings,
            calendarItem = calendar.item,
            nowObject = calendarItem.now,
            selectedObject = calendarItem.select,
            highlightedObject = calendarItem.highlight,
            viewsetObject = calendarItem.view,
            disabledCollection = calendarItem.disable,
            minLimitObject = calendarItem.min,
            maxLimitObject = calendarItem.max,


            // Create the calendar table head using a copy of weekday labels collection.
            // * We do a copy so we don't mutate the original array.
            tableHead = (function(collection, fullCollection) {

                // If the first day should be Monday, move Sunday to the end.
                if (settings.firstDay) {
                    collection.push(collection.shift())
                    fullCollection.push(fullCollection.shift())
                }

                // Create and return the table head group.
                return _.node(
                    'thead',
                    _.node(
                        'tr',
                        _.group({
                            min: 0,
                            max: DAYS_IN_WEEK - 1,
                            i: 1,
                            node: 'th',
                            item: function(counter) {
                                return [
                                    collection[counter],
                                    settings.klass.weekdays,
                                    'scope=col title="' + fullCollection[counter] + '"'
                                ]
                            }
                        })
                    )
                ) //endreturn
            })((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort).slice(0), settings.weekdaysFull.slice(0)), //tableHead


            // Create the nav for next/prev month.
            createMonthNav = function(next) {

                // Otherwise, return the created month tag.
                return _.node(
                    'div',
                    ' ',
                    settings.klass['nav' + (next ? 'Next' : 'Prev')] + (

                        // If the focused month is outside the range, disabled the button.
                        (next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month) ||
                        (!next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month) ?
                        ' ' + settings.klass.navDisabled : ''
                    ),
                    'data-nav=' + (next || -1) + ' ' +
                    _.ariaAttr({
                        role: 'button',
                        controls: calendar.$node[0].id + '_table'
                    }) + ' ' +
                    'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"'
                ) //endreturn
            }, //createMonthNav


            // Create the month label.
            createMonthLabel = function() {

                var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

                // If there are months to select, add a dropdown menu.
                if (settings.selectMonths) {

                    return _.node('select',
                        _.group({
                            min: 0,
                            max: 11,
                            i: 1,
                            node: 'option',
                            item: function(loopedMonth) {

                                return [

                                    // The looped month and no classes.
                                    monthsCollection[loopedMonth], 0,

                                    // Set the value and selected index.
                                    'value=' + loopedMonth +
                                    (viewsetObject.month == loopedMonth ? ' selected' : '') +
                                    (
                                        (
                                            (viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month) ||
                                            (viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month)
                                        ) ?
                                        ' disabled' : ''
                                    )
                                ]
                            }
                        }),
                        settings.klass.selectMonth,
                        (isOpen ? '' : 'disabled') + ' ' +
                        _.ariaAttr({
                            controls: calendar.$node[0].id + '_table'
                        }) + ' ' +
                        'title="' + settings.labelMonthSelect + '"'
                    )
                }

                // If there's a need for a month selector
                return _.node('div', monthsCollection[viewsetObject.month], settings.klass.month)
            }, //createMonthLabel


            // Create the year label.
            createYearLabel = function() {

                var focusedYear = viewsetObject.year,

                    // If years selector is set to a literal "true", set it to 5. Otherwise
                    // divide in half to get half before and half after focused year.
                    numberYears = settings.selectYears === true ? 5 : ~~(settings.selectYears / 2)

                // If there are years to select, add a dropdown menu.
                if (numberYears) {

                    var
                        minYear = minLimitObject.year,
                        maxYear = maxLimitObject.year,
                        lowestYear = focusedYear - numberYears,
                        highestYear = focusedYear + numberYears

                    // If the min year is greater than the lowest year, increase the highest year
                    // by the difference and set the lowest year to the min year.
                    if (minYear > lowestYear) {
                        highestYear += minYear - lowestYear
                        lowestYear = minYear
                    }

                    // If the max year is less than the highest year, decrease the lowest year
                    // by the lower of the two: available and needed years. Then set the
                    // highest year to the max year.
                    if (maxYear < highestYear) {

                        var availableYears = lowestYear - minYear,
                            neededYears = highestYear - maxYear

                        lowestYear -= availableYears > neededYears ? neededYears : availableYears
                        highestYear = maxYear
                    }

                    return _.node('select',
                        _.group({
                            min: lowestYear,
                            max: highestYear,
                            i: 1,
                            node: 'option',
                            item: function(loopedYear) {
                                return [

                                    // The looped year and no classes.
                                    loopedYear, 0,

                                    // Set the value and selected index.
                                    'value=' + loopedYear + (focusedYear == loopedYear ? ' selected' : '')
                                ]
                            }
                        }),
                        settings.klass.selectYear,
                        (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({
                            controls: calendar.$node[0].id + '_table'
                        }) + ' ' +
                        'title="' + settings.labelYearSelect + '"'
                    )
                }

                // Otherwise just return the year focused
                return _.node('div', focusedYear, settings.klass.year)
            } //createYearLabel


        // Create and return the entire calendar.
        return _.node(
                'div',
                (settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel()) +
                createMonthNav() + createMonthNav(1),
                settings.klass.header
            ) + _.node(
                'table',
                tableHead +
                _.node(
                    'tbody',
                    _.group({
                        min: 0,
                        max: WEEKS_IN_CALENDAR - 1,
                        i: 1,
                        node: 'tr',
                        item: function(rowCounter) {

                            // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                            var shiftDateBy = settings.firstDay && calendar.create([viewsetObject.year, viewsetObject.month, 1]).day === 0 ? -7 : 0

                            return [
                                _.group({
                                    min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                                    max: function() {
                                        return this.min + DAYS_IN_WEEK - 1
                                    },
                                    i: 1,
                                    node: 'td',
                                    item: function(targetDate) {

                                        // Convert the time date from a relative date to a target date.
                                        targetDate = calendar.create([viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0)])

                                        var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                            isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                            isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                            formattedDate = _.trigger(calendar.formats.toString, calendar, [settings.format, targetDate])

                                        return [
                                            _.node(
                                                'div',
                                                targetDate.date,
                                                (function(klasses) {

                                                    // Add the `infocus` or `outfocus` classes based on month in view.
                                                    klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus)

                                                    // Add the `today` class if needed.
                                                    if (nowObject.pick == targetDate.pick) {
                                                        klasses.push(settings.klass.now)
                                                    }

                                                    // Add the `selected` class if something's selected and the time matches.
                                                    if (isSelected) {
                                                        klasses.push(settings.klass.selected)
                                                    }

                                                    // Add the `highlighted` class if something's highlighted and the time matches.
                                                    if (isHighlighted) {
                                                        klasses.push(settings.klass.highlighted)
                                                    }

                                                    // Add the `disabled` class if something's disabled and the object matches.
                                                    if (isDisabled) {
                                                        klasses.push(settings.klass.disabled)
                                                    }

                                                    return klasses.join(' ')
                                                })([settings.klass.day]),
                                                'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                                    role: 'gridcell',
                                                    label: formattedDate,
                                                    selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                                    activedescendant: isHighlighted ? true : null,
                                                    disabled: isDisabled ? true : null
                                                })
                                            ),
                                            '',
                                            _.ariaAttr({
                                                role: 'presentation'
                                            })
                                        ] //endreturn
                                    }
                                })
                            ] //endreturn
                        }
                    })
                ),
                settings.klass.table,
                'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
                    role: 'grid',
                    controls: calendar.$node[0].id,
                    readonly: true
                })
            ) +

            // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
            _.node(
                'div',
                _.node('button', settings.today, settings.klass.buttonToday,
                    'type=button data-pick=' + nowObject.pick +
                    (isOpen && !calendar.disabled(nowObject) ? '' : ' disabled') + ' ' +
                    _.ariaAttr({
                        controls: calendar.$node[0].id
                    })) +
                _.node('button', settings.clear, settings.klass.buttonClear,
                    'type=button data-clear=1' +
                    (isOpen ? '' : ' disabled') + ' ' +
                    _.ariaAttr({
                        controls: calendar.$node[0].id
                    })) +
                _.node('button', settings.close, settings.klass.buttonClose,
                    'type=button data-close=true ' +
                    (isOpen ? '' : ' disabled') + ' ' +
                    _.ariaAttr({
                        controls: calendar.$node[0].id
                    })),
                settings.klass.footer
            ) //endreturn
    } //DatePicker.prototype.nodes




    /**
     * The date picker defaults.
     */
    DatePicker.defaults = (function(prefix) {

        return {

            // The title label to use for the month nav buttons
            labelMonthNext: 'Next month',
            labelMonthPrev: 'Previous month',

            // The title label to use for the dropdown selectors
            labelMonthSelect: 'Select a month',
            labelYearSelect: 'Select a year',

            // Months and weekdays
            monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

            // Today and clear
            today: 'Today',
            clear: 'Clear',
            close: 'Close',

            // Picker close behavior
            closeOnSelect: true,
            closeOnClear: true,

            // The format to show on the `input` element
            format: 'd mmmm, yyyy',

            // Classes
            klass: {

                table: prefix + 'table',

                header: prefix + 'header',

                navPrev: prefix + 'nav--prev',
                navNext: prefix + 'nav--next',
                navDisabled: prefix + 'nav--disabled',

                month: prefix + 'month',
                year: prefix + 'year',

                selectMonth: prefix + 'select--month',
                selectYear: prefix + 'select--year',

                weekdays: prefix + 'weekday',

                day: prefix + 'day',
                disabled: prefix + 'day--disabled',
                selected: prefix + 'day--selected',
                highlighted: prefix + 'day--highlighted',
                now: prefix + 'day--today',
                infocus: prefix + 'day--infocus',
                outfocus: prefix + 'day--outfocus',

                footer: prefix + 'footer',

                buttonClear: prefix + 'button--clear',
                buttonToday: prefix + 'button--today',
                buttonClose: prefix + 'button--close'
            }
        }
    })(Picker.klasses().picker + '__')





    /**
     * Extend the picker to add the date picker.
     */
    Picker.extend('pickadate', DatePicker)


}));




/*!
 * pickadate.js v3.5.6, 2015/04/20
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function(factory) {

    // AMD.
    if (typeof define == 'function' && define.amd)
        define('picker', ['jquery'], factory)

    // Node.js/browserify.
    else if (typeof exports == 'object')
        module.exports = factory(require('jquery'))

    // Browser globals.
    else this.Picker = factory(jQuery)

}(function($) {

    var $window = $(window)
    var $document = $(document)
    var $html = $(document.documentElement)
    var supportsTransitions = document.documentElement.style.transition != null


    /**
     * The picker constructor that creates a blank picker.
     */
    function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {

        // If there’s no element, return the picker constructor.
        if (!ELEMENT) return PickerConstructor


        var
            IS_DEFAULT_THEME = false,


            // The state of the picker.
            STATE = {
                id: ELEMENT.id || 'P' + Math.abs(~~(Math.random() * new Date()))
            },


            // Merge the defaults and options passed.
            SETTINGS = COMPONENT ? $.extend(true, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {},


            // Merge the default classes with the settings classes.
            CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass),


            // The element node wrapper into a jQuery object.
            $ELEMENT = $(ELEMENT),


            // Pseudo picker constructor.
            PickerInstance = function() {
                return this.start()
            },


            // The picker prototype.
            P = PickerInstance.prototype = {

                constructor: PickerInstance,

                $node: $ELEMENT,


                /**
                 * Initialize everything
                 */
                start: function() {

                    // If it’s already started, do nothing.
                    if (STATE && STATE.start) return P


                    // Update the picker states.
                    STATE.methods = {}
                    STATE.start = true
                    STATE.open = false
                    STATE.type = ELEMENT.type


                    // Confirm focus state, convert into text input to remove UA stylings,
                    // and set as readonly to prevent keyboard popup.
                    ELEMENT.autofocus = ELEMENT == getActiveElement()
                    ELEMENT.readOnly = !SETTINGS.editable
                    ELEMENT.id = ELEMENT.id || STATE.id
                    if (ELEMENT.type != 'text') {
                        ELEMENT.type = 'text'
                    }


                    // Create a new picker component with the settings.
                    P.component = new COMPONENT(P, SETTINGS)


                    // Create the picker root and then prepare it.
                    P.$root = $('<div class="' + CLASSES.picker + '" id="' + ELEMENT.id + '_root" />')
                    prepareElementRoot()


                    // Create the picker holder and then prepare it.
                    P.$holder = $(createWrappedComponent()).appendTo(P.$root)
                    prepareElementHolder()


                    // If there’s a format for the hidden input element, create the element.
                    if (SETTINGS.formatSubmit) {
                        prepareElementHidden()
                    }


                    // Prepare the input element.
                    prepareElement()


                    // Insert the hidden input as specified in the settings.
                    if (SETTINGS.containerHidden) $(SETTINGS.containerHidden).append(P._hidden)
                    else $ELEMENT.after(P._hidden)


                    // Insert the root as specified in the settings.
                    if (SETTINGS.container) $(SETTINGS.container).append(P.$root)
                    else $ELEMENT.after(P.$root)


                    // Bind the default component and settings events.
                    P.on({
                        start: P.component.onStart,
                        render: P.component.onRender,
                        stop: P.component.onStop,
                        open: P.component.onOpen,
                        close: P.component.onClose,
                        set: P.component.onSet
                    }).on({
                        start: SETTINGS.onStart,
                        render: SETTINGS.onRender,
                        stop: SETTINGS.onStop,
                        open: SETTINGS.onOpen,
                        close: SETTINGS.onClose,
                        set: SETTINGS.onSet
                    })


                    // Once we’re all set, check the theme in use.
                    IS_DEFAULT_THEME = isUsingDefaultTheme(P.$holder[0])


                    // If the element has autofocus, open the picker.
                    if (ELEMENT.autofocus) {
                        P.open()
                    }


                    // Trigger queued the “start” and “render” events.
                    return P.trigger('start').trigger('render')
                }, //start


                /**
                 * Render a new picker
                 */
                render: function(entireComponent) {

                    // Insert a new component holder in the root or box.
                    if (entireComponent) {
                        P.$holder = $(createWrappedComponent())
                        prepareElementHolder()
                        P.$root.html(P.$holder)
                    } else P.$root.find('.' + CLASSES.box).html(P.component.nodes(STATE.open))

                    // Trigger the queued “render” events.
                    return P.trigger('render')
                }, //render


                /**
                 * Destroy everything
                 */
                stop: function() {

                    // If it’s already stopped, do nothing.
                    if (!STATE.start) return P

                    // Then close the picker.
                    P.close()

                    // Remove the hidden field.
                    if (P._hidden) {
                        P._hidden.parentNode.removeChild(P._hidden)
                    }

                    // Remove the root.
                    P.$root.remove()

                    // Remove the input class, remove the stored data, and unbind
                    // the events (after a tick for IE - see `P.close`).
                    $ELEMENT.removeClass(CLASSES.input).removeData(NAME)
                    setTimeout(function() {
                        $ELEMENT.off('.' + STATE.id)
                    }, 0)

                    // Restore the element state
                    ELEMENT.type = STATE.type
                    ELEMENT.readOnly = false

                    // Trigger the queued “stop” events.
                    P.trigger('stop')

                    // Reset the picker states.
                    STATE.methods = {}
                    STATE.start = false

                    return P
                }, //stop


                /**
                 * Open up the picker
                 */
                open: function(dontGiveFocus) {

                    // If it’s already open, do nothing.
                    if (STATE.open) return P

                    // Add the “active” class.
                    $ELEMENT.addClass(CLASSES.active)
                    aria(ELEMENT, 'expanded', true)

                    // * A Firefox bug, when `html` has `overflow:hidden`, results in
                    //   killing transitions :(. So add the “opened” state on the next tick.
                    //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                    setTimeout(function() {

                        // Add the “opened” class to the picker root.
                        P.$root.addClass(CLASSES.opened)
                        aria(P.$root[0], 'hidden', false)

                    }, 0)

                    // If we have to give focus, bind the element and doc events.
                    if (dontGiveFocus !== false) {

                        // Set it as open.
                        STATE.open = true

                        // Prevent the page from scrolling.
                        if (IS_DEFAULT_THEME) {
                            $html.
                            css('overflow', 'hidden').
                            css('padding-right', '+=' + getScrollbarWidth())
                        }

                        // Pass focus to the root element’s jQuery object.
                        focusPickerOnceOpened()

                        // Bind the document events.
                        $document.on('click.' + STATE.id + ' focusin.' + STATE.id, function(event) {

                            var target = event.target

                            // If the target of the event is not the element, close the picker picker.
                            // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                            //   Also, for Firefox, a click on an `option` element bubbles up directly
                            //   to the doc. So make sure the target wasn't the doc.
                            // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                            //   which causes the picker to unexpectedly close when right-clicking it. So make
                            //   sure the event wasn’t a right-click.
                            if (target != ELEMENT && target != document && event.which != 3) {

                                // If the target was the holder that covers the screen,
                                // keep the element focused to maintain tabindex.
                                P.close(target === P.$holder[0])
                            }

                        }).on('keydown.' + STATE.id, function(event) {

                            var
                                // Get the keycode.
                                keycode = event.keyCode,

                                // Translate that to a selection change.
                                keycodeToMove = P.component.key[keycode],

                                // Grab the target.
                                target = event.target


                            // On escape, close the picker and give focus.
                            if (keycode == 27) {
                                P.close(true)
                            }


                            // Check if there is a key movement or “enter” keypress on the element.
                            else if (target == P.$holder[0] && (keycodeToMove || keycode == 13)) {

                                // Prevent the default action to stop page movement.
                                event.preventDefault()

                                // Trigger the key movement action.
                                if (keycodeToMove) {
                                    PickerConstructor._.trigger(P.component.key.go, P, [PickerConstructor._.trigger(keycodeToMove)])
                                }

                                // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                                else if (!P.$root.find('.' + CLASSES.highlighted).hasClass(CLASSES.disabled)) {
                                    P.set('select', P.component.item.highlight)
                                    if (SETTINGS.closeOnSelect) {
                                        P.close(true)
                                    }
                                }
                            }


                            // If the target is within the root and “enter” is pressed,
                            // prevent the default action and trigger a click on the target instead.
                            else if ($.contains(P.$root[0], target) && keycode == 13) {
                                event.preventDefault()
                                target.click()
                            }
                        })
                    }

                    // Trigger the queued “open” events.
                    return P.trigger('open')
                }, //open


                /**
                 * Close the picker
                 */
                close: function(giveFocus) {

                    // If we need to give focus, do it before changing states.
                    if (giveFocus) {
                        if (SETTINGS.editable) {
                            ELEMENT.focus()
                        } else {
                            // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                            // The focus is triggered *after* the close has completed - causing it
                            // to open again. So unbind and rebind the event at the next tick.
                            P.$holder.off('focus.toOpen').focus()
                            setTimeout(function() {
                                P.$holder.on('focus.toOpen', handleFocusToOpenEvent)
                            }, 0)
                        }
                    }

                    // Remove the “active” class.
                    $ELEMENT.removeClass(CLASSES.active)
                    aria(ELEMENT, 'expanded', false)

                    // * A Firefox bug, when `html` has `overflow:hidden`, results in
                    //   killing transitions :(. So remove the “opened” state on the next tick.
                    //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                    setTimeout(function() {

                        // Remove the “opened” and “focused” class from the picker root.
                        P.$root.removeClass(CLASSES.opened + ' ' + CLASSES.focused)
                        aria(P.$root[0], 'hidden', true)

                    }, 0)

                    // If it’s already closed, do nothing more.
                    if (!STATE.open) return P

                    // Set it as closed.
                    STATE.open = false

                    // Allow the page to scroll.
                    if (IS_DEFAULT_THEME) {
                        $html.
                        css('overflow', '').
                        css('padding-right', '-=' + getScrollbarWidth())
                    }

                    // Unbind the document events.
                    $document.off('.' + STATE.id)

                    // Trigger the queued “close” events.
                    return P.trigger('close')
                }, //close


                /**
                 * Clear the values
                 */
                clear: function(options) {
                    return P.set('clear', null, options)
                }, //clear


                /**
                 * Set something
                 */
                set: function(thing, value, options) {

                    var thingItem, thingValue,
                        thingIsObject = $.isPlainObject(thing),
                        thingObject = thingIsObject ? thing : {}

                    // Make sure we have usable options.
                    options = thingIsObject && $.isPlainObject(value) ? value : options || {}

                    if (thing) {

                        // If the thing isn’t an object, make it one.
                        if (!thingIsObject) {
                            thingObject[thing] = value
                        }

                        // Go through the things of items to set.
                        for (thingItem in thingObject) {

                            // Grab the value of the thing.
                            thingValue = thingObject[thingItem]

                            // First, if the item exists and there’s a value, set it.
                            if (thingItem in P.component.item) {
                                if (thingValue === undefined) thingValue = null
                                P.component.set(thingItem, thingValue, options)
                            }

                            // Then, check to update the element value and broadcast a change.
                            if (thingItem == 'select' || thingItem == 'clear') {
                                $ELEMENT.
                                val(thingItem == 'clear' ? '' : P.get(thingItem, SETTINGS.format)).
                                trigger('change')
                            }
                        }

                        // Render a new picker.
                        P.render()
                    }

                    // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                    return options.muted ? P : P.trigger('set', thingObject)
                }, //set


                /**
                 * Get something
                 */
                get: function(thing, format) {

                    // Make sure there’s something to get.
                    thing = thing || 'value'

                    // If a picker state exists, return that.
                    if (STATE[thing] != null) {
                        return STATE[thing]
                    }

                    // Return the submission value, if that.
                    if (thing == 'valueSubmit') {
                        if (P._hidden) {
                            return P._hidden.value
                        }
                        thing = 'value'
                    }

                    // Return the value, if that.
                    if (thing == 'value') {
                        return ELEMENT.value
                    }

                    // Check if a component item exists, return that.
                    if (thing in P.component.item) {
                        if (typeof format == 'string') {
                            var thingValue = P.component.get(thing)
                            return thingValue ?
                                PickerConstructor._.trigger(
                                    P.component.formats.toString,
                                    P.component, [format, thingValue]
                                ) : ''
                        }
                        return P.component.get(thing)
                    }
                }, //get



                /**
                 * Bind events on the things.
                 */
                on: function(thing, method, internal) {

                    var thingName, thingMethod,
                        thingIsObject = $.isPlainObject(thing),
                        thingObject = thingIsObject ? thing : {}

                    if (thing) {

                        // If the thing isn’t an object, make it one.
                        if (!thingIsObject) {
                            thingObject[thing] = method
                        }

                        // Go through the things to bind to.
                        for (thingName in thingObject) {

                            // Grab the method of the thing.
                            thingMethod = thingObject[thingName]

                            // If it was an internal binding, prefix it.
                            if (internal) {
                                thingName = '_' + thingName
                            }

                            // Make sure the thing methods collection exists.
                            STATE.methods[thingName] = STATE.methods[thingName] || []

                            // Add the method to the relative method collection.
                            STATE.methods[thingName].push(thingMethod)
                        }
                    }

                    return P
                }, //on



                /**
                 * Unbind events on the things.
                 */
                off: function() {
                    var i, thingName,
                        names = arguments;
                    for (i = 0, namesCount = names.length; i < namesCount; i += 1) {
                        thingName = names[i]
                        if (thingName in STATE.methods) {
                            delete STATE.methods[thingName]
                        }
                    }
                    return P
                },


                /**
                 * Fire off method events.
                 */
                trigger: function(name, data) {
                    var _trigger = function(name) {
                        var methodList = STATE.methods[name]
                        if (methodList) {
                            methodList.map(function(method) {
                                PickerConstructor._.trigger(method, P, [data])
                            })
                        }
                    }
                    _trigger('_' + name)
                    _trigger(name)
                    return P
                } //trigger
            } //PickerInstance.prototype


        /**
         * Wrap the picker holder components together.
         */
        function createWrappedComponent() {

            // Create a picker wrapper holder
            return PickerConstructor._.node('div',

                // Create a picker wrapper node
                PickerConstructor._.node('div',

                    // Create a picker frame
                    PickerConstructor._.node('div',

                        // Create a picker box node
                        PickerConstructor._.node('div',

                            // Create the components nodes.
                            P.component.nodes(STATE.open),

                            // The picker box class
                            CLASSES.box
                        ),

                        // Picker wrap class
                        CLASSES.wrap
                    ),

                    // Picker frame class
                    CLASSES.frame
                ),

                // Picker holder class
                CLASSES.holder,

                'tabindex="-1"'
            ) //endreturn
        } //createWrappedComponent



        /**
         * Prepare the input element with all bindings.
         */
        function prepareElement() {

            $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // If there’s a `data-value`, update the value of the element.
            val($ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            )


            // Only bind keydown events if the element isn’t editable.
            if (!SETTINGS.editable) {

                $ELEMENT.

                // On focus/click, open the picker.
                on('focus.' + STATE.id + ' click.' + STATE.id, function(event) {
                    event.preventDefault()
                    P.open()
                }).

                // Handle keyboard event based on the picker being opened or not.
                on('keydown.' + STATE.id, handleKeydownEvent)
            }


            // Update the aria attributes.
            aria(ELEMENT, {
                haspopup: true,
                expanded: false,
                readonly: false,
                owns: ELEMENT.id + '_root'
            })
        }


        /**
         * Prepare the root picker element with all bindings.
         */
        function prepareElementRoot() {
            aria(P.$root[0], 'hidden', true)
        }


        /**
         * Prepare the holder picker element with all bindings.
         */
        function prepareElementHolder() {

            P.$holder.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                'focus.toOpen': handleFocusToOpenEvent,

                blur: function() {
                    // Remove the “target” class.
                    $ELEMENT.removeClass(CLASSES.target)
                },

                // When something within the holder is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function(event) {
                    P.$root.removeClass(CLASSES.focused)
                    event.stopPropagation()
                },

                // When something within the holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function(event) {

                    var target = event.target

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if (target != P.$holder[0]) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if (event.type == 'mousedown' && !$(target).is('input, select, textarea, button, option')) {

                            event.preventDefault()

                            // Re-focus onto the holder so that users can click away
                            // from elements focused within the picker.
                            P.$holder[0].focus()
                        }
                    }
                }

            }).

            // If there’s a click on an actionable element, carry out the actions.
            on('click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $(this),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                activeElement = activeElement && (activeElement.type || activeElement.href)

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) {
                    P.$holder[0].focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if (!targetDisabled && targetData.nav) {
                    P.set('highlight', P.component.item.highlight, {
                        nav: targetData.nav
                    })
                }

                // If something is picked, set `select` then close with focus.
                else if (!targetDisabled && 'pick' in targetData) {
                    P.set('select', targetData.pick)
                    if (SETTINGS.closeOnSelect) {
                        P.close(true)
                    }
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if (targetData.clear) {
                    P.clear()
                    if (SETTINGS.closeOnClear) {
                        P.close(true)
                    }
                } else if (targetData.close) {
                    P.close(true)
                }

            }) //P.$holder

        }


        /**
         * Prepare the hidden input element along with all bindings.
         */
        function prepareElementHidden() {

            var name

            if (SETTINGS.hiddenName === true) {
                name = ELEMENT.name
                ELEMENT.name = ''
            } else {
                name = [
                    typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                    typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
                ]
                name = name[0] + ELEMENT.name + name[1]
            }

            P._hidden = $(
                '<input ' +
                'type=hidden ' +

                // Create the name using the original input’s with a prefix and suffix.
                'name="' + name + '"' +

                // If the element has a value, set the hidden value as well.
                (
                    $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
                ) +
                '>'
            )[0]

            $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })
        }


        // Wait for transitions to end before focusing the holder. Otherwise, while
        // using the `container` option, the view jumps to the container.
        function focusPickerOnceOpened() {

            if (IS_DEFAULT_THEME && supportsTransitions) {
                P.$holder.find('.' + CLASSES.frame).one('transitionend', function() {
                    P.$holder[0].focus()
                })
            } else {
                P.$holder[0].focus()
            }
        }


        function handleFocusToOpenEvent(event) {

            // Stop the event from propagating to the doc.
            event.stopPropagation()

            // Add the “target” class.
            $ELEMENT.addClass(CLASSES.target)

            // Add the “focused” class to the root.
            P.$root.addClass(CLASSES.focused)

            // And then finally open the picker.
            P.open()
        }


        // For iOS8.
        function handleKeydownEvent(event) {

            var keycode = event.keyCode,

                // Check if one of the delete keys was pressed.
                isKeycodeDelete = /^(8|46)$/.test(keycode)

            // For some reason IE clears the input value on “escape”.
            if (keycode == 27) {
                P.close(true)
                return false
            }

            // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
            if (keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode]) {

                // Prevent it from moving the page and bubbling to doc.
                event.preventDefault()
                event.stopPropagation()

                // If `delete` was pressed, clear the values and close the picker.
                // Otherwise open the picker.
                if (isKeycodeDelete) {
                    P.clear().close()
                } else {
                    P.open()
                }
            }
        }


        // Return a new picker instance.
        return new PickerInstance()
    } //PickerConstructor



    /**
     * The default classes and prefix to use for the HTML classes.
     */
    PickerConstructor.klasses = function(prefix) {
        prefix = prefix || 'picker'
        return {

            picker: prefix,
            opened: prefix + '--opened',
            focused: prefix + '--focused',

            input: prefix + '__input',
            active: prefix + '__input--active',
            target: prefix + '__input--target',

            holder: prefix + '__holder',

            frame: prefix + '__frame',
            wrap: prefix + '__wrap',

            box: prefix + '__box'
        }
    } //PickerConstructor.klasses



    /**
     * Check if the default theme is being used.
     */
    function isUsingDefaultTheme(element) {

        var theme,
            prop = 'position'

        // For IE.
        if (element.currentStyle) {
            theme = element.currentStyle[prop]
        }

        // For normal browsers.
        else if (window.getComputedStyle) {
            theme = getComputedStyle(element)[prop]
        }

        return theme == 'fixed'
    }



    /**
     * Get the width of the browser’s scrollbar.
     * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
     */
    function getScrollbarWidth() {

        if ($html.height() <= $window.height()) {
            return 0
        }

        var $outer = $('<div style="visibility:hidden;width:100px" />').
        appendTo('body')

        // Get the width without scrollbars.
        var widthWithoutScroll = $outer[0].offsetWidth

        // Force adding scrollbars.
        $outer.css('overflow', 'scroll')

        // Add the inner div.
        var $inner = $('<div style="width:100%" />').appendTo($outer)

        // Get the width with scrollbars.
        var widthWithScroll = $inner[0].offsetWidth

        // Remove the divs.
        $outer.remove()

        // Return the difference between the widths.
        return widthWithoutScroll - widthWithScroll
    }



    /**
     * PickerConstructor helper methods.
     */
    PickerConstructor._ = {

        /**
         * Create a group of nodes. Expects:
         * `
            {
                min:    {Integer},
                max:    {Integer},
                i:      {Integer},
                node:   {String},
                item:   {Function}
            }
         * `
         */
        group: function(groupObject) {

            var
                // Scope for the looped object
                loopObjectScope,

                // Create the nodes list
                nodesList = '',

                // The counter starts from the `min`
                counter = PickerConstructor._.trigger(groupObject.min, groupObject)


            // Loop from the `min` to `max`, incrementing by `i`
            for (; counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [counter]); counter += groupObject.i) {

                // Trigger the `item` function within scope of the object
                loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [counter])

                // Splice the subgroup and create nodes out of the sub nodes
                nodesList += PickerConstructor._.node(
                    groupObject.node,
                    loopObjectScope[0], // the node
                    loopObjectScope[1], // the classes
                    loopObjectScope[2] // the attributes
                )
            }

            // Return the list of nodes
            return nodesList
        }, //group


        /**
         * Create a dom node string
         */
        node: function(wrapper, item, klass, attribute) {

            // If the item is false-y, just return an empty string
            if (!item) return ''

            // If the item is an array, do a join
            item = $.isArray(item) ? item.join('') : item

            // Check for the class
            klass = klass ? ' class="' + klass + '"' : ''

            // Check for any attributes
            attribute = attribute ? ' ' + attribute : ''

            // Return the wrapped item
            return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
        }, //node


        /**
         * Lead numbers below 10 with a zero.
         */
        lead: function(number) {
            return (number < 10 ? '0' : '') + number
        },


        /**
         * Trigger a function otherwise return the value.
         */
        trigger: function(callback, scope, args) {
            return typeof callback == 'function' ? callback.apply(scope, args || []) : callback
        },


        /**
         * If the second character is a digit, length is 2 otherwise 1.
         */
        digits: function(string) {
            return (/\d/).test(string[1]) ? 2 : 1
        },


        /**
         * Tell if something is a date object.
         */
        isDate: function(value) {
            return {}.toString.call(value).indexOf('Date') > -1 && this.isInteger(value.getDate())
        },


        /**
         * Tell if something is an integer.
         */
        isInteger: function(value) {
            return {}.toString.call(value).indexOf('Number') > -1 && value % 1 === 0
        },


        /**
         * Create ARIA attribute strings.
         */
        ariaAttr: ariaAttr
    } //PickerConstructor._



    /**
     * Extend the picker with a component and defaults.
     */
    PickerConstructor.extend = function(name, Component) {

        // Extend jQuery.
        $.fn[name] = function(options, action) {

            // Grab the component data.
            var componentData = this.data(name)

            // If the picker is requested, return the data object.
            if (options == 'picker') {
                return componentData
            }

            // If the component data exists and `options` is a string, carry out the action.
            if (componentData && typeof options == 'string') {
                return PickerConstructor._.trigger(componentData[options], componentData, [action])
            }

            // Otherwise go through each matched element and if the component
            // doesn’t exist, create a new picker using `this` element
            // and merging the defaults and options with a deep copy.
            return this.each(function() {
                var $this = $(this)
                if (!$this.data(name)) {
                    new PickerConstructor(this, name, Component, options)
                }
            })
        }

        // Set the defaults.
        $.fn[name].defaults = Component.defaults
    } //PickerConstructor.extend



    function aria(element, attribute, value) {
        if ($.isPlainObject(attribute)) {
            for (var key in attribute) {
                ariaSet(element, key, attribute[key])
            }
        } else {
            ariaSet(element, attribute, value)
        }
    }

    function ariaSet(element, attribute, value) {
        element.setAttribute(
            (attribute == 'role' ? '' : 'aria-') + attribute,
            value
        )
    }

    function ariaAttr(attribute, data) {
        if (!$.isPlainObject(attribute)) {
            attribute = {
                attribute: data
            }
        }
        data = ''
        for (var key in attribute) {
            var attr = (key == 'role' ? '' : 'aria-') + key,
                attrVal = attribute[key]
            data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
        }
        return data
    }

    // IE8 bug throws an error for activeElements within iframes.
    function getActiveElement() {
        try {
            return document.activeElement
        } catch (err) {}
    }



    // Expose the picker constructor.
    return PickerConstructor


}));