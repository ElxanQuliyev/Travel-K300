/*------------------------------------------------------------------
[Master Scripts]

Project:    Forta theme
Version:    1.0

[Table of contents]

[Components]

	-Preloader
	-Stick sidebar
	-Dropdown img
	-Equal Height function
	-Navigation open
	-Search
	-Mobile menu
	-Fixed header
	-Screen rezise events
	-Fix centered container
	-Blog items & filtering
	-Full sreen navigation
	-Animation
	-Animation
	-Load more
	-Comment reply
	-Popup image
	-Parallax
	-Tabs
	-Quantity
	
-------------------------------------------------------------------*/

"use strict";

/*------------------------------------------------------------------
[ Preloader ]
*/
jQuery(window).on('load', function () {
    var $preloader = jQuery('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


/*------------------------------------------------------------------
[ Stick sidebar ]
*/
window.onload=function(){
	if(jQuery(".sidebar-area").length > 0) {
    	jQuery(".sidebar-area").stick_in_parent();
    }
}

jQuery(document).ready(function() {

	/*------------------------------------------------------------------
	[ Dropdown img ]
	*/

	jQuery('.child-img').each(function() {
		var src = jQuery(this).attr('data-child-src');
		jQuery(this).addClass('go').parent().children('ul').css('background-image', 'url('+src+')');
	});

	/*------------------------------------------------------------------
	[ Equal Height function ]
	*/
	function equalHeight(group) {
        if(jQuery(window).width() > '768') {
			var tallest = 0;
	       	jQuery(group).each(function() {
	            var thisHeight = jQuery(this).css('height', "").height();
	            if(thisHeight > tallest) {
	                tallest = thisHeight;
	            }
	        });
	        jQuery(group).height(tallest);
	    } else {
	    	jQuery(group).height('auto');
	    }
    }
	

    /*------------------------------------------------------------------
	[ Navigation open ]
	*/
	jQuery('.fullscreen-nav-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery('.full-screen-nav').fadeOut();
		} else {
			jQuery(this).addClass('active');
			jQuery('.full-screen-nav').fadeIn();
			jQuery('.fsn-container .cell').css('height', jQuery('.fsn-container').height());
		};
	});

	jQuery('.default-nav-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active').parent().find('.navigation').removeClass('active');
		} else {
			jQuery(this).addClass('active').parent().find('.navigation').addClass('active');
		};
	});

	jQuery('.side-nav-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
			jQuery('.side-header.side_h').removeClass('active');
		} else {
			jQuery(this).addClass('active');
			jQuery('.side-header.side_h').addClass('active');
		};
	});

    /*------------------------------------------------------------------
	[ Search ]
	*/

	jQuery('.search-button').on("click", function(){
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active')
			jQuery('.search-p-block').fadeOut();
		} else {
			jQuery(this).addClass('active')
			jQuery('.search-p-block').fadeIn();
		};
	});

	jQuery('.search-p-block .close').on("click", function(){
		jQuery('.search-button').removeClass('active')
		jQuery('.search-p-block').fadeOut();
	});

	/*------------------------------------------------------------------
	[ Mobile menu ]
	*/
	
	jQuery(window).on("load resize", function(){
		if(jQuery(window).width() <= '1200') {
			jQuery('.navigation .menu-item-has-children > a').on("click", function(){
				if(!jQuery(this).hasClass('active')) {
					jQuery(this).addClass('active').parent().children('.sub-menu').slideDown().siblings().children('.sub-menu').slideUp();
					return false;
				}
			});
		}
	});

	jQuery('.side-header .navigation .menu-item-has-children > a').on("click", function(){
		if(!jQuery(this).hasClass('active')) {
			jQuery(this).addClass('active').parent().children('.sub-menu').slideDown().siblings().children('.sub-menu').slideUp();
			return false;
		}
	});

	jQuery('#wpadminbar').addClass('wpadminbar');

	/*------------------------------------------------------------------
	[ Fixed header ]
	*/
	
	if(jQuery('.header').hasClass('transperent')){
		var h_class = 'transperent';
	}
	jQuery(window).on("load resize scroll", function(){
		if ( jQuery(document).scrollTop() > 0 ) {
			jQuery('.header').addClass('fixed').removeClass('transperent');
		} else {
			jQuery('.header').removeClass('fixed');
			if (h_class == 'transperent') {
				jQuery('.header').addClass('transperent');
			}
		}
	});

	/*------------------------------------------------------------------
	[ Screen rezise events ]
	*/
	
	jQuery(window).on("load resize scroll", function(){
		jQuery('.fsn-container .cell').css('height', jQuery('.fsn-container').height());
	});

	jQuery(window).on("load resize", function(){
		jQuery('.banner:not(.fixed-height)').each(function(){
			jQuery(this).css('height', jQuery(window).outerHeight()-jQuery('.header-space').height()-jQuery('#wpadminbar').height());
			jQuery(this).find('.item').css('height', jQuery(window).outerHeight()-jQuery('.header-space').height()-jQuery('#wpadminbar').height());
		});
		jQuery('.banner.fixed-height').each(function(){
			jQuery(this).find('.item').css('height', jQuery(this).height());
		});

		jQuery('.image-slider:not(.fixed-height)').each(function(){
			jQuery(this).css('height', jQuery(window).outerHeight()-jQuery('.header-space').height()-jQuery('#wpadminbar').height());
			jQuery(this).find('.item').css('height', jQuery(window).outerHeight()-jQuery('.header-space').height()-jQuery('#wpadminbar').height());
		});
		jQuery('.image-slider.fixed-height').each(function(){
			jQuery(this).find('.item').css('height', jQuery(this).height());
		});

		if(jQuery(window).width() >= '768') {
	       	jQuery('.side-image').each(function() {
	            jQuery(this).css('height', 'auto').css('height', jQuery(this).parent('.fw-row').height());
	        });
	        if(jQuery('.scrollsections').length > 0) {
				jQuery('.scrollsections').scrollSections({
					//createNavigation: false,
					navigation: true
				});
			}
	    } else {
	    	jQuery('.side-image').height('auto');
	    }

	    jQuery('.header-space').css('height', jQuery('.header').outerHeight()+jQuery('.header + .navigation').outerHeight()+jQuery('.mb-site-bar').outerHeight());

	    equalHeight(jQuery(".pricelist-items").find('.rows'));

	    equalHeight(jQuery(".icon-box"));

	    equalHeight(jQuery(".icon-box2"));

	    equalHeight(jQuery(".article-item.grid:not(.masonry)"));

	    equalHeight(jQuery(".woocommerce .products div.product"));

	    jQuery('main.fw-main-row').css('min-height', jQuery(window).height()-jQuery('.header-space').height()-jQuery('.footer').outerHeight()-jQuery('#wpadminbar').outerHeight());

	    jQuery('.fullscreen-category-area .item').css('height', jQuery(window).height()-jQuery('.header-space').height()-jQuery('.footer').outerHeight()-jQuery('#wpadminbar').outerHeight());

	    jQuery('.scrollsections').css('height', jQuery(window).height()-jQuery('.header-space').height()-jQuery('#wpadminbar').outerHeight());

	    jQuery('.side-header > .container > .cell').css('height', jQuery(window).height()-jQuery('#wpadminbar').outerHeight());

	});


    /*------------------------------------------------------------------
	[ Scroll top button ]
	*/

	jQuery('#scroll-top').on("click", function(){
		jQuery('body, html').animate({ scrollTop: '0' }, 1100); 
		return false;
	});

    /*------------------------------------------------------------------
	[ Fix centered container ]
	*/
	jQuery(window).on("load resize", function(){
		jQuery('.centered-container').each(function() {
			var width = parseInt(Math.round(jQuery(this).width()).toFixed(0)),
				height = parseInt(Math.round(jQuery(this).height()).toFixed(0));

			jQuery(this).css('width', '').css('height', '');

			if ( width & 1 ) {jQuery(this).css('width', (width+1)+'px');}

			if ( height & 1 ) {jQuery(this).css('height', (height+1)+'px');}
		});
	});

	/*------------------------------------------------------------------
	[ Blog items & filtering ]
	*/
	jQuery(window).on("load", function(){
		jQuery('.filter-items, .portfolio-items').each(function(){
			var $grid = jQuery(this).isotope();

			if($grid.hasClass('masonry')){
				var $grid = jQuery(this).isotope({
					itemSelector: 'article',
					masonry: {
						columnWidth: 'article'
					}
				});
			} else {
				var $grid = jQuery(this).isotope({
					itemSelector: 'article'
				});
			}

			jQuery(this).prev('.filter-button-group').on( 'click', 'button', function() {
				jQuery(this).addClass('active').siblings().removeClass('active');
				var filterValue = jQuery(this).attr('data-filter');
				$grid.isotope({ filter: filterValue });
			});
		});
	});
	
	/*------------------------------------------------------------------
	[ Full sreen navigation ]
	*/
	
	jQuery(window).on("load resize", function(){
		jQuery('.full-screen-nav .menu-item-has-children > a').on("click", function(){
			if(!jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').parent().children('.sub-menu').slideDown().parent().siblings().children('a').removeClass('active').next('.sub-menu').slideUp();
				return false;
			}
		});
	});

	/*------------------------------------------------------------------
	[ Animation ]
	*/
	
	jQuery(window).on("load scroll", function(){
		jQuery('.animateNumber').each(function(){
			var num = parseInt(jQuery(this).attr('data-num'));
			
			var top = jQuery(document).scrollTop()+(jQuery(window).height());
			var pos_top = jQuery(this).offset().top;
			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').animateNumber({ number: num },2000);
			}
		});
		jQuery('.animateProcent').each(function(){
			var num = parseInt(jQuery(this).attr('data-num'));
			var percent_number_step = jQuery.animateNumber.numberStepFactories.append('%');
			var top = jQuery(document).scrollTop()+(jQuery(window).height());
			var pos_top = jQuery(this).offset().top;
			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').animateNumber({ number: num, numberStep: percent_number_step },2000);
			}
		});
	});

	/*------------------------------------------------------------------
	[ Animation ]
	*/
	
	jQuery('.rating-item').find('.line').find('div').css('width', '0%');
	jQuery(window).on("load scroll", function(){
		jQuery('.rating-item').each(function(){
			var num = parseInt(jQuery(this).find('.line div').attr('data-value')),
				top = jQuery(document).scrollTop()+(jQuery(window).height()),
				pos_top = jQuery(this).offset().top;

			if (top > pos_top && !jQuery(this).hasClass('active')) {
				jQuery(this).addClass('active').find('.line div').css('width', num+'%');
			}
		});
	});

	/*------------------------------------------------------------------
	[ Load more ]
	*/

	if(jQuery('.load-items').length > 0) {
		var button = 0;
		jQuery('.load-button a').on('click', function() {
			var id = jQuery(this).attr('data-id'),
				el = jQuery('.load-items-id'+id),
				cout_pages = el.length;
			button++;
			if(cout_pages == 1) {
				jQuery(this).parent('.load-button').fadeOut();
			}
			var $items = jQuery('.load-items-id'+id+'.load-items-page'+button).find('.item');
			if(jQuery(this).parent().hasClass('filter') || jQuery(this).parent().hasClass('masonry')) {
  				jQuery('.load-items-id'+id+'.load-items-page'+button).parent().append( $items ).isotope( 'appended', $items );
  				jQuery('.load-items-id'+id+'.load-items-page'+button).remove();
			} else {
				jQuery('.load-items-id'+id+'.load-items-page'+button).parent().append( $items );
				jQuery('.load-items-id'+id+'.load-items-page'+button).remove();
			}
			return false;
		});
	}

	/*------------------------------------------------------------------
	[ Comment reply ]
	*/

	jQuery('.replytocom').on('click', function(){
		var id_parent = jQuery(this).attr('data-id');
		jQuery('#comment_parent').val(id_parent);
		jQuery('#respond').appendTo(jQuery(this).parents('.comment-item'));
		jQuery('#cancel-comment-reply-link').show();
		return false;
	});

	jQuery('#cancel-comment-reply-link').on('click', function(){
		jQuery('#comment_parent').val('0');
		jQuery('#respond').appendTo(jQuery('#commentform-area'));
		jQuery('#cancel-comment-reply-link').hide();
		return false;
	});



	/*------------------------------------------------------------------
	[ Popup image ]
	*/
	/*
	if(jQuery('.popup-link').length > 0) {
		jQuery('.popup-link').append('<div></div>');
		jQuery('.popup-link').magnificPopup({
			type: 'image',
			mainClass: 'mfp-fade'
		});
	}
	
	if(jQuery('.popup-gallery').length > 0) {
		jQuery('.popup-gallery').magnificPopup({
			type: 'image',
			delegate: 'a',
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
		});
	*/

	/*------------------------------------------------------------------
	[ Parallax ]
	*/

	jQuery(window).on('load scroll', function(){
		jQuery('.background-parallax').each(function(){
			var wScroll = jQuery(window).scrollTop()-jQuery(this).parent().offset().top+jQuery('#wpadminbar').height()+jQuery('.header-space').height();
	 		jQuery(this).css('transform', 'translate(0px,' + wScroll + 'px)');
		});
	});

	/*------------------------------------------------------------------
	[ Tabs ]
	*/

	jQuery('.tabs-head').on('click', '.item:not(.active) > div', function() {  
		jQuery(this).parent().addClass('active').siblings().removeClass('active')  
		.parents('.tabs-container').find('.tab-content').eq(jQuery(this).parent().index()).removeClass('active').fadeIn(500).siblings('.tab-content').hide();
		jQuery(this).parents('.fw-row').find('.side-image').css('height', 'auto').css('height', jQuery(this).parents('.fw-row').height());
	});

	/*------------------------------------------------------------------
	[ Quantity ]
	*/

	jQuery('.quantity-buttons .down').on("click", function(){
		var val = jQuery(this).parent().parent().find('.input-text').val();
		if(val > 1) {
			val = parseInt(val) - 1;
			jQuery(this).parent().parent().find('.input-text').val(val);
		}
		return false;
	});

	jQuery('.quantity-buttons .up').on("click", function(){
		var val = jQuery(this).parent().parent().find('.input-text').val();
		val = parseInt(val) + 1;
		jQuery(this).parent().parent().find('.input-text').val(val);
		return false;
	});


	if(jQuery('.popup-gallery').length > 0) {
		jQuery('body').append('<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"> <div class="pswp__bg"></div><div class="pswp__scroll-wrap"> <div class="pswp__container"> <div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"> <div class="pswp__top-bar"> <div class="pswp__counter"></div><button class="pswp__button pswp__button--close" title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button> <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> <div class="pswp__preloader"> <div class="pswp__preloader__icn"> <div class="pswp__preloader__cut"> <div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"> <div class="pswp__share-tooltip"></div></div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"> </button> <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"> </button> <div class="pswp__caption"> <div class="pswp__caption__center"></div></div></div></div></div>')

		var $pswp = jQuery('.pswp')[0];
	    var image = [];

	    jQuery('.popup-gallery').each( function() {
	        var $pic     = jQuery(this),
	            getItems = function() {
	                var items = [];
	                $pic.find('a').each(function() {
	                    var $href   = jQuery(this).attr('href'),
	                        $size   = jQuery(this).data('size').split('x'),
	                        $width  = $size[0],
	                        $height = $size[1];

	                    var item = {
	                        src : $href,
	                        w   : $width,
	                        h   : $height
	                    }

	                    items.push(item);
	                });
	                return items;
	            }

	        var items = getItems();

	        jQuery.each(items, function(index, value) {
	            image[index]     = new Image();
	            image[index].src = value['src'];
	        });

	        $pic.on('click', '.popup-item, article', function(event) {
	            event.preventDefault();
	            
	            var $index = jQuery(this).index();
	            if(jQuery(this).parent().hasClass('thumbnails')) {
	            	$index++;
	            }
	            var options = {
	                index: $index,
	                bgOpacity: 0.7,
	                showHideOpacity: true
	            }

	            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
	            lightBox.init();
	        });
	    });
	}
});

