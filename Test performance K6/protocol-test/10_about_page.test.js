import http from 'k6/http'
import { check } from 'k6'
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

import { headers } from '../config/headers.js'

const pageDuration = new Trend('Page_About_Duration', true)

export default function () {
    describe('10_About_Page', function () {

        const responses = http.batch([
            ['GET', 'https://ekaceluller.com/?page_id=553', headers],
            ['GET', 'https://ekaceluller.com/sw-check-permissions-e2a8b.js', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/css/frontend-lite.min.css?ver=3.5.2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.5.2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.5.2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/nav-menu.fd64b77e7258ee4c6205.bundle.min.js', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/search-form.e36b4b7c26157bb965fe.bundle.min.js', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.5.2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.0.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.16.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.16.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.16.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/text-editor.2c35aafbe5bf0e127950.bundle.min.js', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/video.fea4f8dfdf17262f23e8.bundle.min.js', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.16.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.16.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.0', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.23.0', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff2?5.23.0', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-brands-400.woff2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-regular-400.woff2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-solid-900.woff2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/swiper/css/swiper.min.css?ver=5.3.6', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/libs/framework/assets/js/frontend-script.js?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/css/ekiticons.css?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/fonts/elementskit.woff?y24e1e', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/responsive.css?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/css/widget-styles.css?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.js?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/elementor.js?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=2.6.1', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/dist/css/style.css?ver=6.0.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/dist/js/njt-whatsapp.js?ver=3.1.8', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/js/whatsapp-button.js?ver=3.1.8', headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/js/whatsapp-popup.js?ver=6.0.5', headers],
            ['GET', 'https://ekaceluller.com/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=1.0.0', headers],
            ['GET', 'https://ekaceluller.com/wp-content/themes/hello-elementor/style.min.css?ver=2.5.0', headers],
            ['GET', 'https://ekaceluller.com/wp-content/themes/hello-elementor/theme.min.css?ver=2.5.0', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/bg.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/ekacelullerbulat-1-100x100.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/logopanjang2020-1-1024x269.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/logopanjang2020-1536x404.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-19-at-18.54.08.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/Untitled-5.jpg', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/cara-pembayaran-4-scaled.jpg', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/homeh-1.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/homeh-e1631414381985.png', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/elementor/css/post-244.css?ver=1666770055', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/elementor/css/post-270.css?ver=1666770055', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/elementor/css/post-275.css?ver=1666770055', headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/elementor/css/post-569.css?ver=1666770055', headers],
            ['GET', 'https://ekaceluller.com/wp-includes/css/dist/block-library/style.min.css?ver=6.0.5', headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2', headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0', headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.1', headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/wp-emoji-release.min.js?ver=6.0.5', headers],
        ])
        for (const res of responses) {
            pageDuration.add(res.timings.duration)
            expect(res.status, ' status ').to.equals(200)
        }
    })
}