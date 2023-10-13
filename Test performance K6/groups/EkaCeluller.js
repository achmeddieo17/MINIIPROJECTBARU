import { group } from "k6"
import http from "k6/http"
import { describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export default function withekaCell () {
	describe('Test Halaman Account EkaCeluller', function() {
        const reswithLogin = http.get('https://ekaceluller.com/index.php?route=account/account')
        expect(reswithLogin.status, 'status').to.equals(200)
    })
	describe('Test Halaman Tabungan EkaCeluller', function() {
        const resTabungan = http.get('https://tabungan.ekaceluller.com/')
        expect(resTabungan.status, 'status').to.equals(200)
    })
	describe('Test Halaman Product EkaCeluller', function() {
        const resProduct = http.get('https://ekaceluller.com/index.php?route=product/category&path=-1')
        expect(resProduct.status, 'status').to.equals(200)
    })
	describe('Test Halaman Detail Product EkaCeluller', function() {
        const resDetailProduct = http.get('https://ekaceluller.com/index.php?route=product/product&path=-1&product_id=410')
        expect(resDetailProduct.status, 'status').to.equals(200)
    })
	describe('Test Halaman Checkout EkaCeluller', function() {
        const resCheckout = http.get('https://ekaceluller.com/index.php?route=checkout/cart')
        expect(resCheckout.status, 'status').to.equals(200)
    })
}