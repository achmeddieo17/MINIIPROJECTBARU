import http from 'k6/http'
import { check } from 'k6'
import { Trend } from 'k6/metrics'
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

import { headers } from '../config/headers.js'

const pageDuration = new Trend ('Page_Checkout_Duration', true)

export default function() {
    describe('05_Checkout_Page', function () {

        const responses = http.batch([
            ['GET','https://ekaceluller.com/index.php?route=checkout/cart',headers],
            ['GET','https://ekaceluller.com/catalog/view/javascript/bootstrap/css/bootstrap.min.css',headers],
            ['GET','https://ekaceluller.com/catalog/view/javascript/font-awesome/css/font-awesome.min.css',headers],
            ['GET','https://ekaceluller.com/catalog/view/javascript/jquery/jquery-2.1.1.min.js',headers],
            ['GET','https://ekaceluller.com/catalog/view/javascript/bootstrap/js/bootstrap.min.js',headers],
            ['GET','https://ekaceluller.com/catalog/view/javascript/common.js',headers],
            ['GET','https://ekaceluller.com/catalog/view/javascript/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0',headers],
            ['GET','https://ekaceluller.com/image/catalog/newlogo.jpg',headers],
            ['GET','https://ekaceluller.com/image/catalog/whatsapp.png',headers],
            ['GET','https://ekaceluller.com/image/cache/catalog/EKASERIES/USB-C%2018W%20POWER%20ADAPTER-125x125.jpg',headers],
        ])
        for (const res of responses){
            pageDuration.add(res.timings.duration)
            expect(res.status, ' status ').to.equals(200)
        }
    })
}