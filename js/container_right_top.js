/** 메인광고 랜덤 출력
 * 
*/
document.addEventListener("DOMContentLoaded", () => {
    const ads = [
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043564&amp;calp=-&amp;oj=cQgn6aire5MJsIGS3CGuNmpA96j1o1BI7WVTa86TAJ1yl%2FgPb6Hoad51iGL0jNB%2BZMZ3M1iF1RsCqkX1CsiiYayFu4hx3NWzDqGP%2BhPfmSf15kRpl8Rp%2BUe6gYfRni59DloQOLDDL%2BnbGM9bV6WyqvW1YEqVwubmAQMCMuhPEN0KK%2FL1aEQ3aHPnKyGox%2B%2FOIWptTJi1%2Bun6Q03gbIO7AU9SANRnAatvsVQY00Y52lrSBXLlLuiKzHksq5tTslRW1qYNWXGuY5MvV6Hp3yIx%2BGZOBAlyb5uSCKN3yp28GxEX1GG3ByM%2BT5ZNNIeTb5Soa0QOPnenAgVGbLgjTgA4kT0lNgIgiD0kPSb0dOSA67s&amp;ac=9049694&amp;src=7356338&amp;br=4632291&amp;evtcd=P901&amp;x_ti=1501&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=NSFHZIYqWSgKo0_ny6HaCg&amp;eltts=fnzMdtGoQjvAL63C8EopgQ%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1510/1510738/a71bfc41d6e5cf78244d_20241119160615632.jpg" width="420" height="240" alt="[광고]넷마블 레이븐2 글로벌 유저들과의 전투를 준비하라 글로벌 신서버 OPEN 지금 플레이하세요 확률형 아이템 포함"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043564&amp;calp=-&amp;oj=cQgn6aire5Oxda4PsubimrwBfruBIWsYVptG%2Bpd8tkytf1HhjslXMAbdPQ8u6lvpZMZ3M1iF1RsCqkX1CsiiYayFu4hx3NWzDqGP%2BhPfmSf15kRpl8Rp%2BUe6gYfRni59YjN%2BPNyyfqpo1F%2FjYPtOq%2FW1YEqVwubmAQMCMuhPEN0KK%2FL1aEQ3aCjz3AiJE3NDIWptTJi1%2Bun6Q03gbIO7AU9SANRnAatvsVQY00Y52lrSBXLlLuiKzHksq5tTslRW1qYNWXGuY5MvV6Hp3yIx%2BGZOBAlyb5uSCKN3yp28GxEX1GG3ByM%2BT5ZNNIeTb5Soa0QOPnenAgVGbLgjTgA4kT0lNgIgiD0kPSb0dOSA67s&amp;ac=8933608&amp;src=6978919&amp;br=4463505&amp;evtcd=P901&amp;x_ti=1501&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=kJGeSYMD-37ej8M1yw7zBQ&amp;eltts=m1S3MTXrlqvnpuba5KQZxQ%3D%3D&amp;lu=&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1472/1472902/5cbdccbfecb390ec3eef_20240313092016792.png" width="420" height="240" alt="[광고]디즈니랜드 입장권, 도쿄 항공권 호텔 최대 5% 할인 +7% 적립 네이버 티켓 패키지 보러가기"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043564&amp;calp=-&amp;oj=cQgn6aire5ORo5TjOk7vykikp4P4Fd6PXJdztt3CzdlDbweGqRjgeDvyL1oGBqrqZMZ3M1iF1RsCqkX1CsiiYayFu4hx3NWzDqGP%2BhPfmSf15kRpl8Rp%2BUe6gYfRni59YjN%2BPNyyfqpo1F%2FjYPtOq%2FW1YEqVwubmAQMCMuhPEN0KK%2FL1aEQ3aFu%2B3J6730yGIWptTJi1%2Bun6Q03gbIO7AU9SANRnAatvsVQY00Y52lrSBXLlLuiKzHksq5tTslRW1qYNWXGuY5MvV6Hp3yIx%2BGZOBAlyb5uSCKN3yp28GxEX1GG3ByM%2BT5ZNNIeTb5Soa0QOPnenAgVGbLgjTgA4kT0lNgIgiD0kPSb0dOSA67s&amp;ac=9038959&amp;src=7320971&amp;br=4617165&amp;evtcd=P901&amp;x_ti=1501&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=k64m_6WLPbQQKIphueiB0w&amp;eltts=s%2BRpMzvoIEE2UOv5jtfVWA%3D%3D&amp;lu=&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1515/1515756/f1c5e7248715d721b3ef_20241028105331400.png" width="420" height="240" alt="[광고]네이버가 코노 쏜다 코노챌린지 총 상금 2억 참여만 해도 네이버페이 1만원"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043564&amp;calp=-&amp;oj=cQgn6aire5OElIr4jjbhMTrZJBr%2BKvXr3TpejScq8%2F0AiSxsoa5tSxb5hCP3vkKfZMZ3M1iF1RsCqkX1CsiiYayFu4hx3NWzDqGP%2BhPfmSf15kRpl8Rp%2BUe6gYfRni59YjN%2BPNyyfqpo1F%2FjYPtOq%2FW1YEqVwubmAQMCMuhPEN0KK%2FL1aEQ3aMdTqB811sxxIWptTJi1%2Bun6Q03gbIO7AU9SANRnAatvsVQY00Y52lrSBXLlLuiKzHksq5tTslRW1qYNWXGuY5MvV6Hp3yIx%2BGZOBAlyb5uSCKN3yp28GxEX1GG3ByM%2BT5ZNNIeTb5Soa0QOPnenAgVGbLgjTgA4kT0lNgIgiD0kPSb0dOSA67s&amp;ac=9049420&amp;src=7355527&amp;br=4631950&amp;evtcd=P901&amp;x_ti=1501&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=ZoAM4I-qmCqk2eyDYIdizA&amp;eltts=s%2BRpMzvoIEH0QRNBsxQuEw%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1517/1517606/f7e3afc2c66948ef2939_20241105150759972.jpg" width="420" height="240" alt="[광고]희망을 기다리는 우리 지역에 두 배로 행복을 전해주세요"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043564&amp;calp=-&amp;oj=cQgn6aire5MletzIRnHk6gQzMIx9PdrMXqPhlHhJIRgxwuLSUwp7qJhP7auqgLxsZMZ3M1iF1RsCqkX1CsiiYayFu4hx3NWzDqGP%2BhPfmSf15kRpl8Rp%2BUe6gYfRni59YjN%2BPNyyfqpo1F%2FjYPtOq%2FW1YEqVwubmAQMCMuhPEN0KK%2FL1aEQ3aMvo0wLEQAZCIWptTJi1%2Bun6Q03gbIO7AU9SANRnAatvsVQY00Y52lrSBXLlLuiKzHksq5tTslRW1qYNWXGuY5MvV6Hp3yIx%2BGZOBAlyb5uSCKN3yp28GxEX1GG3ByM%2BT5ZNNIeTb5Soa0QOPnenAgVGbLgjTgA4kT0lNgIgiD0kPSb0dOSA67s&amp;ac=9047946&amp;src=7350894&amp;br=4629988&amp;evtcd=P901&amp;x_ti=1501&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=5gSbMTGOY2ln_ZR2lOzQEw&amp;eltts=mMbZjZeLrPyQXVt41%2FHSNA%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1508/1508776/d891627c0020ca066998_20241114165248481.jpg" width="420" height="240" alt="[광고]굿네이버스. 딸아이 같다는 생각에 시작했어요. 생리대로 힘겨워 하는 소녀들에게. 생리대 후원."></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10043564&amp;calp=-&amp;oj=cQgn6aire5NzYOpGYxNsOHJ0WmIBHom2Z90axAsDrIcuObwtkXiwTcxY%2FfwIITfpZMZ3M1iF1RsCqkX1CsiiYayFu4hx3NWzDqGP%2BhPfmSf15kRpl8Rp%2BUe6gYfRni59YjN%2BPNyyfqpo1F%2FjYPtOq%2FW1YEqVwubmAQMCMuhPEN0KK%2FL1aEQ3aPpkgNZtMzxQIWptTJi1%2Bun6Q03gbIO7AU9SANRnAatvsVQY00Y52lrSBXLlLuiKzHksq5tTslRW1qYNWXGuY5MvV6Hp3yIx%2BGZOBAlyb5uSCKN3yp28GxEX1GG3ByM%2BT5ZNNIeTb5Soa0QOPnenAgVGbLgjTgA4kZadn6qUrnSUQIne2vcsrNg&amp;ac=9049672&amp;src=7356287&amp;br=4632261&amp;evtcd=P901&amp;x_ti=1501&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=KNZbRDCgnQasLYqJPpbN8A&amp;eltts=QDl%2FwjquubRo9UzGaUNl%2BA%3D%3D&amp;brs=Y&amp;" id="ac_banner_a" target="_blank" style="display:block"><img src="https://ssl.pstatic.net/melona/libs/1517/1517604/bae88d163c0598d68d24_20241105171233904.jpg" width="420" height="240" alt="[광고]경기도 마을 기업 제품 사면, Npay 3천 포인트 적립!"></a>`
        // 광고 이곳에 추가하면 됨
    ];

    // 랜덤 광고 선택
    const randomIndex = Math.floor(Math.random() * ads.length);
    const randomAd = ads[randomIndex];

    // 광고 컨테이너에 삽입
    document.getElementById('right_main_ad').innerHTML = randomAd;
});

/** 서브광고1 랜덤 출력
 * 
*/
document.addEventListener("DOMContentLoaded", () => {
    const ads = [
        `<a href="https://mkt.naver.com/p1/atrb?channel_id=naver_pcstockbottom&amp;campaign_id=2411-shopping-012&amp;material=C&amp;target=https%3A%2F%2Fmkt.naver.com%2Fopenrun06%3Fa%3Dcoupon%26dtm_detail%3DC%26dtm_source%3Dnaver_pcstockbottom%26dtm_medium%3Dmktatrb%26dtm_campaign%3D2411-shopping-012" class="Layout-module__banner_area___CUXNe" target="_blank"><img src="https://s.pstatic.net/static/www/mobile/edit/20241115_1095/upload_1731656649928VPOK0.jpg" width="420" height="80" alt="네이버 오픈런 온라인에서 가장 빠르게 만나는 신"></a>`
        ,
        `<a href="https://mkt.naver.com/p1/atrb?channel_id=naver_pcstockbottom&amp;campaign_id=2410-shopping-003&amp;material=kv_photo_2&amp;target=https%3A%2F%2Fshopping.naver.com%2Fns%2Fhome%3Fdtm_detail%3Dkv_photo_2%26dtm_source%3Dnaver_pcstockbottom%26dtm_medium%3Dmktatrb%26dtm_campaign%3D2410-shopping-003" class="Layout-module__banner_area___CUXNe" target="_blank"><img src="https://s.pstatic.net/static/www/mobile/edit/20241115_1095/upload_1731666483398cyalt.png" width="420" height="80" alt="깎고 받고 쌓고 샘이 다른 쇼핑 네이버플러스 스토어"></a>`
        // 광고 이곳에 추가하면 됨
    ];

    // 랜덤 광고 선택
    const randomIndex = Math.floor(Math.random() * ads.length);
    const randomAd = ads[randomIndex];

    // 광고 컨테이너에 삽입
    document.getElementById('right_sub_ad').innerHTML = randomAd;
});