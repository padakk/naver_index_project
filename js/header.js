/** 페이지 실행 시 검색바 포커스
 * 
 */ 
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.search_input').focus();
});

/** 검색바 로고 페이드 인, 페이드 아웃 효과 부여
 * 
 */
document.addEventListener("DOMContentLoaded", () => {
    const logoHat = document.querySelector('.naver_logo_hat');
    const logo = document.querySelector('.naver_logo');

    // 1. naver_logo_hat 페이드아웃
    setTimeout(() => {
        logoHat.style.opacity = 0; // 페이드아웃
    }, 2500); //실행되는 시간

    // 2. naver_logo 페이드인
    setTimeout(() => {
        logo.style.opacity = 1; // 페이드인
    }, 3000); //실행되는 시간
});

/** 메인광고 랜덤 출력
 * 
*/
document.addEventListener("DOMContentLoaded", () => {
    let ads = [
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10044129&amp;calp=-&amp;oj=ZJlEFeSBKmLf40n3ktJ9%2FNNNLIMXg%2FzCWwiuKLV7NdKbTCKAv6zHzWx%2FhcG054wn4yeAMATSJtTUn%2BH4hJIXV%2Bg1h%2BW6Pa9F7lG1W0iaxrFkCelLEvoe2w&amp;ac=9050164&amp;src=7357904&amp;br=4632967&amp;evtcd=P901&amp;x_ti=1585&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=WuR8PoCkUFR1BuccLKA3Tw&amp;eltts=mm0Yo4l8j36rp2RlvRegbw%3D%3D&amp;brs=Y&amp;&amp;a=8911F0840B61333EFCB85B490CA964766093A11131D8E1DC00FA41142F88A973968AD746CC5E00B4C70B66B31B68278B137E6E6221E118A884B2242BF89A5F48EE11BE6754CC4540F5215E5C4AB2CE36E4114C560F99F2500B81469D2A6A45D5D58C3CC1EECC1DE9BD94430A50BA96D2349B0479865B60359354C1B737BADC737FDA54BE81B8B2F1BEE678581AB3FB79540B5DABA12CE4A28E8D4BF39A74569022A25EA6663A16F913C94630559EA89166D2B07D593FFB9E822C47F71C4B" class="link_headline" target="_blank"><img src="https://ssl.pstatic.net/melona/libs/1517/1517841/6d8c7b230844235090c5_20241120154700078.png" width="244" height="108" alt="[광고]자립준비청년 응원 캠페인 스킨푸드 초록우산"></a>`
        ,
        `<a href="https://siape.veta.naver.com/fxclick?eu=EU10044129&amp;calp=-&amp;oj=ZJlEFeSBKmLf40n3ktJ9%2FEP4AZPxpQRi5kEKuTla1b1tsxZtgxD2yGx%2FhcG054wn4yeAMATSJtS2um%2BMDCK7f%2Bg1h%2BW6Pa9F7lG1W0iaxrFkCelLEvoe2w&amp;ac=9050577&amp;src=7359092&amp;br=4633552&amp;evtcd=P901&amp;x_ti=1585&amp;tb=&amp;oid=&amp;sid1=&amp;sid2=&amp;rk=L8S07EFlNvpLZDW_9d7IgA&amp;eltts=buCN79w0N7luxgxBgpCA2w%3D%3D&amp;brs=Y&amp;&amp;a=B58290F4D1D708AB5AE6DCEBB279B7866560A6886B2887ED84C7C8061E23A56C2FA3E59FBE7CDC4EF87B274DA6B165F75A81CC91E14C5392264961D84AAE88C3636DC5756FF3F0AD83ABBA6B2D709A144CDAC74ADF7417485DC38B1CBDC0480975F81B32DC72BC30D314717C44BDA58EEED32A9938F3EC5B3D859E46B5C939458B6F8665DB10633AE39B15464945B62688D7C4E27CC4EBB65147B7244DF320BCD590011BFE36880561795E29025E3DC777FC4B62A7563156DC52A5AC5ECAF71A9F8E1490A98FB8CE2E468BCF2596C0102C628A2FCAFB70C105415ECD856940F19CD44E34B4D542EA63240293883EE4D8DD6DC70B4B" class="link_headline" target="_blank"><img src="https://ssl.pstatic.net/melona/libs/1518/1518106/5216d4d5daff58d55540_20241120185155807.png" width="244" height="108" alt="[광고]르노 전국 전시장 이벤트 뉴 르노 그랑 콜레오스"></a>`
        // 광고 이곳에 추가하면 됨
    ];

    // 랜덤 광고 선택
    let randomIndex = Math.floor(Math.random() * ads.length);
    let randomAd = ads[randomIndex];

    // 광고 컨테이너에 삽입
    document.getElementById('header_ad').innerHTML = randomAd;
});
