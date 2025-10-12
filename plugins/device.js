import Vue from 'vue';

const getDeviceDetails = () => {
  if (typeof navigator === 'undefined') {
    // Мы на сервере, navigator не доступен
    return { isMobile: false, isDesktop: true, os: 'ssr', userAgent: 'ssr' };
  }

  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  let os = 'unknown';
  let isMobile = false;

  if (/windows phone/i.test(userAgent)) {
    os = 'Windows Phone';
    isMobile = true;
  } else if (/android/i.test(userAgent)) {
    os = 'Android';
    isMobile = true;
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    os = 'iOS';
    isMobile = true;
  } else if (/Macintosh|MacIntel|MacPPC|Mac OS X/i.test(userAgent)) {
    os = 'MacOS';
    isMobile = false; // MacOS считаем десктопом
  } else if (/Windows NT/i.test(userAgent)) {
    os = 'Windows';
    isMobile = false; // Windows считаем десктопом
  } else if (/Linux/i.test(userAgent) && !/android/i.test(userAgent)) {
    os = 'Linux'; // Linux без Android считаем десктопом
    isMobile = false;
  }

  // Если не удалось определить как мобильный по userAgent
  if (!isMobile && typeof window !== 'undefined' && window.innerWidth < 768) {
    isMobile = true; // Если экран узкий, считаем мобильным (может быть планшет в портретном режиме)
  }

  return {
    isMobile: isMobile,
    isDesktop: !isMobile,
    os: os,
    userAgent: userAgent
  };
};

// Создаем нереактивный объект, который будет доступен глобально.
const deviceDetails = getDeviceDetails();

// Инъекция в Vue instance
Vue.prototype.$device = deviceDetails;

