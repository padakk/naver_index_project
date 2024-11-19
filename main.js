/* 페이지 실행 시 검색바 포커스 */
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