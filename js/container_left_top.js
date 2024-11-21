/** 메인광고 랜덤 출력
 * 
*/
document.addEventListener("DOMContentLoaded", () => {
    const ads = [
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043565&amp;calp=-&amp;oj=cQgn6aire5PDd%2FqJliTXGjdVWGPQhPYNwfq4xjOl3lT4DJfP5cG3aHuRXrLC9ZHIJL1qM2Pf%2FamtHcuwOh3ciOZBCrk5WtW9EzygSSSOst9sf4XBtOeMJ%2BMngDAE0ibUKb%2FNAD8liPrIBWexIpibH0plqdgUSG%2BUXrQSw%2B%2FX1bbNCF9%2F110BZDp0hCNKO%2BcHo2M9jEOAPSLbaIdXv9YIFqKzdZWOwZvbRUVbta2VFu8bO%2B%2FYx31CkOXNNd3e%2BJI1Lx%2BDLhsxSYhKyy6dTse9VSndoBsavykbD4aT5kwJwRddzH0aAvMNXg&amp;ac=9050306&amp;src=7358127&amp;br=4633088&amp;evtcd=P901&amp;x_ti=1504&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=OBDmE77FtTWwVPutgxdIqg&amp;eltts=fnzMdtGoQjtA8X8ZEPBEKg%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1514/1514922/af4cdefbb414726961a2_20241120171256315.jpg" width="830" height="130" alt="[광고]1년에 단 한 번, 5시까지 70%"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043565&amp;calp=-&amp;oj=cQgn6aire5PNh6Tw40D0SohOUr8NpL%2BEsWQ9BZCze%2F49%2FH5YXI%2Fi6r4gd1xv0gsjJL1qM2Pf%2FanTTSyDF4P8wlsIrii1ezXSm0wigL%2Bsx81sf4XBtOeMJ%2BMngDAE0ibUmXDN%2Fw3jdrDIBWexIpibH0plqdgUSG%2BUXrQSw%2B%2FX1bbNCF9%2F110BZDp0hCNKO%2BcHo2M9jEOAPSLbaIdXv9YIFqKzdZWOwZvbRUVbta2VFu8bO%2B%2FYx31CkOXNNd3e%2BJI1Lx%2BDLhsxSYhKyy6dTse9VSndoBsavykbD4aT5kwJwRddzH0aAvMNXg&amp;ac=9050748&amp;src=7359721&amp;br=4633872&amp;evtcd=P901&amp;x_ti=1504&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=78Z38i07Vn16nPl5JoSFxg&amp;eltts=m1S3MTXrlqvnpuba5KQZxQ%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1518/1518264/c989b78adee933537fe6_20241121144954887.jpg" width="830" height="130" alt="[광고]고용노동부 대한상공회의소 DB하이텍 반도체 엔지니어가 되는 첫걸음 Dream Big Semicon Academy 1기 모집 모집기간 2024.11.20 수~2024.12.01 일"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043573&amp;calp=1&amp;oj=cQgn6aire5Mo3ILdUDcenkcfT5sNTe5lVLgCYjGGMq1ZuDfaQIPyJWFgizMRWZ%2B9JL1qM2Pf%2FanTTSyDF4P8wlsIrii1ezXSm0wigL%2Bsx81sf4XBtOeMJ%2BMngDAE0ibUn1PM7FJ%2B3MfIBWexIpibH0plqdgUSG%2BUXrQSw%2B%2FX1bbNCF9%2F110BZDp0hCNKO%2BcHo2M9jEOAPSLbaIdXv9YIFqKzdZWOwZvbRUVbta2VFu8bO%2B%2FYx31CkOXNNd3e%2BJI1Lx%2BDLhsxSYhKyy6dTse9VSndoBsavykbD4aT5kwJwRddzH0aAvMNXg&amp;ac=9049514&amp;src=7355734&amp;br=4632031&amp;evtcd=P901&amp;x_ti=1504&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=Yc2Kt-TW6c_f855tp5qEYg&amp;eltts=4lMl1Da1ONLGTZd%2BRDXQiw%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1517/1517809/f509912102c682e35275_20241119095458911.png" width="830" height="130" alt="[광고]수강신청마감 1주일 전 마이크로소프트 클라우드 AI기술을 습득할 수 있는 기회"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043565&amp;calp=-&amp;oj=cQgn6aire5P7TDN4TIpYwBd2RIlQT8ABZtkzokb7rxJwhkoJST4YjA0lY4AfhgbNJL1qM2Pf%2FanTTSyDF4P8wlsIrii1ezXSm0wigL%2Bsx81sf4XBtOeMJ%2BMngDAE0ibU%2Fp%2BTpwcoATDIBWexIpibH0plqdgUSG%2BUXrQSw%2B%2FX1bbNCF9%2F110BZDp0hCNKO%2BcHo2M9jEOAPSLbaIdXv9YIFqKzdZWOwZvbRUVbta2VFu8bO%2B%2FYx31CkOXNNd3e%2BJI1Lx%2BDLhsxSYhKyy6dTse9VU5kfAaHK0LHV4i5bg1X%2BnqjBn%2FJq5lfmQ&amp;ac=9045356&amp;src=7341940&amp;br=4626165&amp;evtcd=P901&amp;x_ti=1504&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=zAZ6B5GD2BkSq_XSb5QW7A&amp;eltts=tGTp1hiUgNr4EsNoU33VQw%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1515/1515390/00056dfadfdf2bb0fac2_20241108120034643.png" width="830" height="130" alt="[광고]가격 깎고 쿠폰 받고 적립 쌓는 네이버플러스 스토어"></a>`
        // 광고 이곳에 추가하면 됨
    ];

    // 랜덤 광고 선택
    const randomIndex = Math.floor(Math.random() * ads.length);
    const randomAd = ads[randomIndex];

    // 광고 컨테이너에 삽입
    document.getElementById('left_main_ad').innerHTML = randomAd;
});