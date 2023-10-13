const thresholds = {
        http_req_failed: ['rate<0.01'], 
        http_req_duration: ['p(90)<10000'], 
        http_req_receiving: ['max<300'],
        browser_web_vital_cls: ['p(75)<0.25'], //Cumulative Layout Shift (CLS)
        browser_web_vital_fcp: ['p(75)<3000'], //First Contentful Paint (FCP)
        browser_web_vital_lcp: ['p(75)<400'],  //Largest Contentful Paint (LCP)
        browser_web_vital_ttfb: ['p(75)<1800'] //Time to First Byte (TTFB)
}

export default thresholds

// Cls ga sengaja pindah ditempat 
// Fcp konten/komponen pertama muncul
// Lcp nunggu gambar size tergede muncul
// Ttfb Semenjak pertama refresh konten yang muncul pertama kali download di network