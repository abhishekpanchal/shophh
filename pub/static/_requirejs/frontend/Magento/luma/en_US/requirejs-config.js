(function(require){
(function() {
var config = {
	map: {
		'*': {
			'altima/note': 'Altima_Lookbookslider/js/jquery/slider/jquery-ads-note',
			'altima/impress': 'Altima_Lookbookslider/js/report/impress',
			'altima/clickslide': 'Altima_Lookbookslider/js/report/clickbanner',
		},
	},
	paths: {
		'altima/cycle': 'Altima_Lookbookslider/js/jquery.cycle2',
		'altima/cyclecarousel': 'Altima_Lookbookslider/js/jquery.cycle2.carousel',
		'altima/cyclecenter': 'Altima_Lookbookslider/js/jquery.cycle2.center.min',
		'altima/cycleAddEffects': 'Altima_Lookbookslider/js/jquery.cycle2.addEffects',
		'altima/cycleflip': 'Altima_Lookbookslider/js/jquery.cycle2.flip.min',
		'altima/actual': 'Altima_Lookbookslider/js/jquery.actual',
		'altima/hotspots': 'Altima_Lookbookslider/js/hotspots',
		'altima/flexslider': 'Altima_Lookbookslider/js/jquery/slider/jquery-flexslider-min',
		'altima/evolutionslider': 'Altima_Lookbookslider/js/jquery/slider/jquery-slider-min',
		'altima/popup': 'Altima_Lookbookslider/js/jquery.bpopup.min',
	},
	shim: {
                'altima/actual': {
                    	deps: ['jquery']
                },
		'altima/cycle': {
			deps: ['jquery', 'altima/actual']
		},
		'altima/cyclecarousel': {
			deps: ['altima/cycle']
		},
		'altima/cyclecenter': {
			deps: ['altima/cycle']
		},
		'altima/cycleAddEffects': {
			deps: ['altima/cycle']
		},
		'altima/cycleflip': {
			deps: ['altima/cycle']
		},
		'altima/flexslider': {
			deps: ['jquery']
		},
		'altima/evolutionslider': {
			deps: ['jquery']
		},
		'altima/zebra-tooltips': {
			deps: ['jquery']
		},
	}
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    "waitSeconds": 0,
    "map": {
        "*": {
            "ko": "knockoutjs/knockout",
            "knockout": "knockoutjs/knockout",
            "mageUtils": "mage/utils/main",
            "rjsResolver": "mage/requirejs/resolver"
        }
    },
    "shim": {
        "jquery/jquery-migrate": ["jquery"],
        "jquery/jquery.hashchange": ["jquery", "jquery/jquery-migrate"],
        "jquery/jstree/jquery.hotkeys": ["jquery"],
        "jquery/hover-intent": ["jquery"],
        "mage/adminhtml/backup": ["prototype"],
        "mage/captcha": ["prototype"],
        "mage/common": ["jquery"],
        "mage/new-gallery": ["jquery"],
        "mage/webapi": ["jquery"],
        "jquery/ui": ["jquery"],
        "MutationObserver": ["es6-collections"],
        "tinymce": {
            "exports": "tinymce"
        },
        "moment": {
            "exports": "moment"
        },
        "matchMedia": {
            "exports": "mediaCheck"
        },
        "jquery/jquery-storageapi": {
            "deps": ["jquery/jquery.cookie"]
        }
    },
    "paths": {
        "jquery/validate": "jquery/jquery.validate",
        "jquery/hover-intent": "jquery/jquery.hoverIntent",
        "jquery/file-uploader": "jquery/fileUploader/jquery.fileupload-fp",
        "jquery/jquery.hashchange": "jquery/jquery.ba-hashchange.min",
        "prototype": "legacy-build.min",
        "jquery/jquery-storageapi": "jquery/jquery.storageapi.min",
        "text": "mage/requirejs/text",
        "domReady": "requirejs/domReady",
        "tinymce": "tiny_mce/tiny_mce_src"
    },
    "deps": [
        "jquery/jquery-migrate"
    ],
    "config": {
        "mixins": {
            "jquery/jstree/jquery.jstree": {
                "mage/backend/jstree-mixin": true
            }
        }
    }
};

require(['jquery'], function ($) {
    $.noConflict();
});

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        "*": {
            "rowBuilder":             "Magento_Theme/js/row-builder",
            "toggleAdvanced":         "mage/toggle",
            "translateInline":        "mage/translate-inline",
            "sticky":                 "mage/sticky",
            "tabs":                   "mage/tabs",
            "zoom":                   "mage/zoom",
            "collapsible":            "mage/collapsible",
            "dropdownDialog":         "mage/dropdown",
            "dropdown":               "mage/dropdowns",
            "accordion":              "mage/accordion",
            "loader":                 "mage/loader",
            "tooltip":                "mage/tooltip",
            "deletableItem":          "mage/deletable-item",
            "itemTable":              "mage/item-table",
            "fieldsetControls":       "mage/fieldset-controls",
            "fieldsetResetControl":   "mage/fieldset-controls",
            "redirectUrl":            "mage/redirect-url",
            "loaderAjax":             "mage/loader",
            "menu":                   "mage/menu",
            "popupWindow":            "mage/popup-window",
            "validation":             "mage/validation/validation",
            "welcome":                "Magento_Theme/js/view/welcome"
        }
    },
    paths: {
        "jquery/ui": "jquery/jquery-ui"
    },
    deps: [
        "jquery/jquery.mobile.custom",
        "js/responsive",
        "mage/common",
        "mage/dataPost",
        "js/theme",
        "mage/bootstrap"
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            checkoutBalance:    'Magento_Customer/js/checkout-balance',
            address:            'Magento_Customer/address',
            changeEmailPassword: 'Magento_Customer/change-email-password',
            passwordStrengthIndicator: 'Magento_Customer/js/password-strength-indicator',
            zxcvbn: 'Magento_Customer/js/zxcvbn'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            compareItems:           'Magento_Catalog/js/compare',
            compareList:            'Magento_Catalog/js/list',
            relatedProducts:        'Magento_Catalog/js/related-products',
            upsellProducts:         'Magento_Catalog/js/upsell-products',
            productListToolbarForm: 'Magento_Catalog/js/product/list/toolbar',
            catalogGallery:         'Magento_Catalog/js/gallery',
            priceBox:               'Magento_Catalog/js/price-box',
            priceOptionDate:        'Magento_Catalog/js/price-option-date',
            priceOptionFile:        'Magento_Catalog/js/price-option-file',
            priceOptions:           'Magento_Catalog/js/price-options',
            priceUtils:             'Magento_Catalog/js/price-utils',
            catalogAddToCart:       'Magento_Catalog/js/catalog-add-to-cart'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            creditCardType: 'Magento_Payment/cc-type'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            quickSearch: 'Magento_Search/form-mini'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*jshint browser:true jquery:true*/
/*global alert*/
var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/place-order': {
                'Magento_CheckoutAgreements/js/model/place-order-mixin': true
            },
            'Magento_Checkout/js/action/set-payment-information': {
                'Magento_CheckoutAgreements/js/model/set-payment-information-mixin': true
            }
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            addToCart: 'Magento_Msrp/js/msrp'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            requireCookie: 'Magento_Cookie/js/require-cookie',
            cookieNotices: 'Magento_Cookie/js/notices'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftMessage:    'Magento_Sales/gift-message',
            ordersReturns:  'Magento_Sales/orders-returns'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            downloadable: 'Magento_Downloadable/downloadable'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            bundleOption:   'Magento_Bundle/bundle',
            priceBundle:    'Magento_Bundle/js/price-bundle',
            slide:          'Magento_Bundle/js/slide',
            productSummary: 'Magento_Bundle/js/product-summary'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            giftOptions:    'Magento_GiftMessage/gift-options',
            extraOptions:   'Magento_GiftMessage/extra-options'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            discountCode:           'Magento_Checkout/js/discount-codes',
            shoppingCart:           'Magento_Checkout/js/shopping-cart',
            regionUpdater:          'Magento_Checkout/js/region-updater',
            sidebar:                'Magento_Checkout/js/sidebar',
            checkoutLoader:         'Magento_Checkout/js/checkout-loader',
            checkoutData:           'Magento_Checkout/js/checkout-data',
            proceedToCheckout:      'Magento_Checkout/js/proceed-to-checkout'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {
        'ui/template': 'Magento_Ui/templates'
    },
    map: {
        '*': {
            uiElement:      'Magento_Ui/js/lib/core/element/element',
            uiCollection:   'Magento_Ui/js/lib/core/collection',
            uiComponent:    'Magento_Ui/js/lib/core/collection',
            uiClass:        'Magento_Ui/js/lib/core/class',
            uiEvents:       'Magento_Ui/js/lib/core/events',
            uiRegistry:     'Magento_Ui/js/lib/registry/registry',
            uiLayout:       'Magento_Ui/js/core/renderer/layout',
            buttonAdapter:  'Magento_Ui/js/form/button-adapter'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            configurable: 'Magento_ConfigurableProduct/js/configurable'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            multiShipping: 'Magento_Multishipping/js/multi-shipping',
            orderOverview: 'Magento_Multishipping/js/overview',
            payment: 'Magento_Multishipping/js/payment'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            pageCache:  'Magento_PageCache/js/page-cache'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            orderReview:            'Magento_Paypal/order-review',
            paypalCheckout:         'Magento_Paypal/js/paypal-checkout'
        }
    },
    paths: {
        paypalInContextExpressCheckout: 'https://www.paypalobjects.com/api/checkout'
    },
    shim: {
        paypalInContextExpressCheckout: {
            exports: 'paypal'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent:            'Magento_Payment/transparent'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*eslint no-unused-vars: 0*/
var config = {
    map: {
        '*': {
            loadPlayer: 'Magento_ProductVideo/js/load-player',
            fotoramaVideoEvents: 'Magento_ProductVideo/js/fotorama-add-video-events'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            captcha: 'Magento_Captcha/captcha'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            recentlyViewedProducts: 'Magento_Reports/js/recently-viewed'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            transparent: 'Magento_Payment/transparent'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            catalogSearch: 'Magento_CatalogSearch/form-mini'
        }
    }
};
require.config(config);
})();
(function() {
var config = {
    'map': {
        '*': {
            aweMenuLoader: 'Kahanit_AweMenu/js/jquery.awemenu.loader',
            aweMenu: 'Kahanit_AweMenu/js/jquery.awemenu'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            editTrigger:   'mage/edit-trigger',
            addClass:      'Magento_Translation/add-class'
        }
    },
    deps: [
        'mage/translate-inline'
    ]
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            braintree: 'https://js.braintreegateway.com/js/braintree-2.17.6.min.js'
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        "*": {
            "taxToggle": "Magento_Weee/tax-toggle"
        }
    }
};

require.config(config);
})();
(function() {
/**
 * Copyright © 2016 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            wishlist:       'Magento_Wishlist/wishlist',
            addToWishlist:  'Magento_Wishlist/js/add-to-wishlist',
            wishlistSearch: 'Magento_Wishlist/js/search'
        }
    }
};
require.config(config);
})();
(function() {
/**
 * Copyright � 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'mageplaza/core/jquery/popup': 'Mageplaza_Core/js/jquery.magnific-popup.min',
            'mageplaza/core/owl.carousel': 'Mageplaza_Core/js/owl.carousel.min',
            'mageplaza/core/bootstrap': 'Mageplaza_Core/js/bootstrap.min'
        }
    },
    shim: {
        "mageplaza/core/jquery/popup": {
            "deps": ["jquery"]
        },
        "mageplaza/core/owl.carousel": {
            "deps": ["jquery"]
        },
        "mageplaza/core/bootstrap": {
            "deps": ["jquery"]
        }
    }
};

require.config(config);
})();
(function() {

var config = {
    config: {
        mixins: {
            'Magento_Swatches/js/swatch-renderer': {
                'MagicToolbox_MagicZoomPlus/js/swatch-renderer': true
            },
            /* NOTE: for Magento v2.0.x */
            'Magento_Swatches/js/SwatchRenderer': {
                'MagicToolbox_MagicZoomPlus/js/swatch-renderer': true
            }
        }
    },
    map: {
        '*': {
            magicToolboxThumbSwitcher: 'MagicToolbox_MagicZoomPlus/js/thumb-switcher',
            configurable:              'MagicToolbox_MagicZoomPlus/js/configurable'
        }
    }
};

require.config(config);
})();
(function() {
var config = {
    map: {
        '*': {
            magnificPopup: 'WeltPixel_Quickview/js/jquery.magnific-popup.min',            
            weltpixel_quickview: 'WeltPixel_Quickview/js/weltpixel_quickview'
        }
    },
    shim: {
        magnificPopup: {
            deps: ['jquery']
        }
    }
};
require.config(config);
})();



})(require);