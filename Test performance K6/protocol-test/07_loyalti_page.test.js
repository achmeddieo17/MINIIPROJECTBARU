import http from 'k6/http'
import { check } from 'k6'
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

import { headers } from '../config/headers.js'

const pageDuration = new Trend('Page_Loyalti_Duration', true)

export default function () {
    describe('06_Loyalti_Page', function () {

        const responses = http.batch([
            ['GET', 'https://ekaceluller.com/?page_id=565',headers],
            ['GET', 'https://ekaceluller.com/sw-check-permissions-e2a8b.js',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/elements-handlers.min.js?ver=3.5.2',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/frontend.min.js?ver=3.5.2',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/nav-menu.fd64b77e7258ee4c6205.bundle.min.js',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/search-form.e36b4b7c26157bb965fe.bundle.min.js',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/slides.39da68ee3c8123589b2e.bundle.min.js',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/js/webpack-pro.runtime.min.js?ver=3.5.2',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor-pro/assets/lib/smartmenus/jquery.smartmenus.min.js?ver=1.0.1',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/frontend-modules.min.js?ver=3.16.5',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/frontend.min.js?ver=3.16.5',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js?ver=3.16.5',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/dialog/dialog.min.js?ver=4.9.0',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/eicons/fonts/eicons.woff2?5.23.0',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/font-awesome/webfonts/fa-solid-900.woff2',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=2.6.1',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/swiper/swiper.min.js?ver=5.3.6',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js?ver=4.0.2',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/libs/framework/assets/js/frontend-script.js?ver=2.6.1',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/modules/elementskit-icon-pack/assets/fonts/elementskit.woff?y24e1e',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/animate-circle.js?ver=2.6.1',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/elementor.js?ver=2.6.1',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/elementskit-lite/widgets/init/assets/js/widget-scripts.js?ver=2.6.1',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/dist/js/njt-whatsapp.js?ver=3.1.8',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/js/whatsapp-button.js?ver=3.1.8',headers],
            ['GET', 'https://ekaceluller.com/wp-content/plugins/wp-whatsapp/assets/js/whatsapp-popup.js?ver=6.0.5',headers],
            ['GET', 'https://ekaceluller.com/wp-content/themes/hello-elementor/assets/js/hello-frontend.min.js?ver=1.0.0',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/bg.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/ekacelullerbulat-1-100x100.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/logopanjang2020-1-1024x269.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/08/logopanjang2020-1536x404.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/WEB-M1.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/home-web-1.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/homeh-1.png',headers],
            ['GET', 'https://ekaceluller.com/wp-content/uploads/2021/09/homeh-e1631414381985.png',headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/imagesloaded.min.js?ver=4.1.4',headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2',headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0',headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/jquery/ui/core.min.js?ver=1.13.1',headers],
            ['GET', 'https://ekaceluller.com/wp-includes/js/wp-emoji-release.min.js?ver=6.0.5',headers],
        ])
        for (const res of responses) {
            pageDuration.add(res.timings.duration)
            expect(res.status, ' status ').to.equals(200)
        }
    })
}