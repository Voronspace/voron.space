(function() {
    // --- КОНФИГУРАЦИЯ ---
    // Если переменная window.voron_app_url не задана до подключения скрипта, 
    // скрипт попытается использовать домен, с которого он был загружен (если это возможно),
    // или дефолтный URL (замените на адрес, где развернут ваш React апп).
    
    // Получаем базовый URL скрипта, чтобы знать, откуда грузить картинки/ресурсы, если нужно
    const scriptScript = document.currentScript;
    const scriptUrl = scriptScript ? scriptScript.src : '';
    const scriptOrigin = scriptUrl ? new URL(scriptUrl).origin : '';

    const APP_URL = window.voron_app_url || scriptOrigin || "https://voron.io"; 

    // --- СТИЛИ WIDGET ---
    const css = `
        :root {
            --voron-gold: #FACC15;
            --voron-black: #000000;
            --voron-z-index: 2147483647; /* Max Z-Index */
        }

        /* Контейнер кнопки запуска */
        .voron-launcher-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(250, 204, 21, 0.1);
            z-index: var(--voron-z-index);
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .voron-launcher-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 30px rgba(250, 204, 21, 0.2), 0 0 0 2px rgba(250, 204, 21, 0.4);
            border-color: rgba(250, 204, 21, 0.5);
        }

        .voron-launcher-btn:active {
            transform: scale(0.95);
        }

        /* Иконка внутри кнопки */
        .voron-launcher-icon {
            width: 32px;
            height: 32px;
            color: var(--voron-gold);
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* Состояние "Открыто" (крестик) */
        .voron-launcher-btn.opened .voron-icon-open {
            opacity: 0;
            transform: rotate(90deg) scale(0);
            position: absolute;
        }
        
        .voron-launcher-btn .voron-icon-close {
            opacity: 0;
            transform: rotate(-90deg) scale(0);
            position: absolute;
            color: white;
        }

        .voron-launcher-btn.opened .voron-icon-close {
            opacity: 1;
            transform: rotate(0deg) scale(1);
        }

        /* Контейнер IFrame (Окно чата) */
        .voron-widget-container {
            position: fixed;
            bottom: 90px; /* Над кнопкой */
            right: 20px;
            width: 400px;
            height: 700px;
            max-height: calc(100vh - 120px);
            background: #000;
            border-radius: 24px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.1);
            z-index: var(--voron-z-index);
            overflow: hidden;
            opacity: 0;
            transform: translateY(20px) scale(0.95);
            pointer-events: none;
            transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease, right 0.3s ease, bottom 0.3s ease, border-radius 0.3s ease;
            transform-origin: bottom right;
        }

        .voron-widget-container.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: all;
        }

        /* Expanded State (Full Screen) */
        .voron-widget-container.expanded {
            width: 100vw !important;
            height: 100vh !important;
            max-height: 100vh !important;
            /* Removed top: 0 and left: 0 to enforce anchor at bottom-right */
            right: 0 !important;
            bottom: 0 !important;
            border-radius: 0 !important;
            transform: none !important;
        }

        .voron-iframe {
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
        }

        /* Expand Button (PC Only) */
        .voron-expand-btn {
            position: absolute;
            top: 20px;
            left: 20px;
            width: 32px;
            height: 32px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10;
            transition: all 0.2s ease;
        }
        .voron-expand-btn:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #FACC15;
            border-color: rgba(250, 204, 21, 0.3);
        }
        
        .voron-expand-icon {
            width: 18px;
            height: 18px;
        }

        /* --- MOBILE STYLES --- */
        @media (max-width: 480px) {
            .voron-widget-container {
                bottom: 0 !important;
                right: 0 !important;
                width: 100% !important;
                /* FIX 1: Use 100dvh for dynamic viewport height support */
                height: 100dvh !important;
                max-height: 100dvh !important;
                border-radius: 0 !important;
            }
            
            /* Стили для открытой кнопки на мобильном: 
               Уменьшаем размер и перемещаем наверх, чтобы не перекрывать нижнее меню 
               FIX: Added !important to force override base styles
            */
            .voron-launcher-btn.opened {
                bottom: auto !important; /* Убираем привязку к низу */
                top: 15px !important;    /* Перемещаем наверх */
                right: 15px !important;
                width: 40px !important;  /* Уменьшаем размер */
                height: 40px !important; /* Уменьшаем размер */
                background: rgba(0, 0, 0, 0.6) !important; /* Полупрозрачный фон */
                backdrop-filter: blur(4px);
                border: 1px solid rgba(255, 255, 255, 0.2) !important;
            }

            /* Уменьшаем иконку крестика внутри маленькой кнопки */
            .voron-launcher-btn.opened .voron-launcher-icon {
                width: 20px !important;
                height: 20px !important;
            }

            /* HIDE Expand button on mobile */
            .voron-expand-btn {
                display: none !important;
            }
        }
    `;

    // 1. Вставка стилей
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    // 2. Создание DOM элементов
    const wrapper = document.createElement('div');
    wrapper.id = 'voron-widget-wrapper';

    // Кнопка
    const btn = document.createElement('div');
    btn.className = 'voron-launcher-btn';
    btn.innerHTML = `
        <!-- Icon: Sparkles / Chat (Open) -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="voron-launcher-icon voron-icon-open">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
        <!-- Icon: X Mark (Close) -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="voron-launcher-icon voron-icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;

    // Контейнер для IFrame
    const container = document.createElement('div');
    container.className = 'voron-widget-container';

    // Кнопка развертывания (Expand)
    const expandBtn = document.createElement('div');
    expandBtn.className = 'voron-expand-btn';
    expandBtn.title = 'Развернуть на весь экран';
    expandBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="voron-expand-icon icon-expand">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="voron-expand-icon icon-compress" style="display: none;">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
        </svg>
    `;

    let isExpanded = false;
    expandBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isExpanded = !isExpanded;
        if (isExpanded) {
            container.classList.add('expanded');
            expandBtn.querySelector('.icon-expand').style.display = 'none';
            expandBtn.querySelector('.icon-compress').style.display = 'block';
            expandBtn.title = 'Свернуть';
        } else {
            container.classList.remove('expanded');
            expandBtn.querySelector('.icon-expand').style.display = 'block';
            expandBtn.querySelector('.icon-compress').style.display = 'none';
            expandBtn.title = 'Развернуть на весь экран';
        }
    });

    // IFrame
    const iframe = document.createElement('iframe');
    iframe.className = 'voron-iframe';
    iframe.title = "Voron AI Assistant";
    
    // ВАЖНО: Разрешения для микрофона, камеры и геолокации.
    iframe.allow = "camera *; microphone *; geolocation *; autoplay *; encrypted-media *; display-capture *; accelerometer *; gyroscope *; fullscreen *";
    
    // --- Добавление параметра source=widget ---
    try {
        const urlObj = new URL(APP_URL);
        urlObj.searchParams.set('source', 'widget');
        iframe.src = urlObj.toString();
    } catch(e) {
        // Fallback если APP_URL некорректный, просто клеим строку (хотя URL() надежнее)
        const separator = APP_URL.includes('?') ? '&' : '?';
        iframe.src = APP_URL + separator + "source=widget";
    }

    container.appendChild(expandBtn); // Add expand button
    container.appendChild(iframe);
    wrapper.appendChild(container);
    wrapper.appendChild(btn);
    document.body.appendChild(wrapper);

    // 3. Логика открытия/закрытия
    let isOpen = false;

    function toggleWidget() {
        isOpen = !isOpen;
        
        if (isOpen) {
            container.classList.add('visible');
            btn.classList.add('opened');
            
            // --- START/RESUME ASSISTANT LOGIC ---
            if (iframe.contentWindow) {
                iframe.contentWindow.postMessage({ type: 'RESUME_VORON_SESSION' }, '*');
            }
        } else {
            container.classList.remove('visible');
            btn.classList.remove('opened');
            
            // Если свернули весь виджет - сбрасываем и "развернутость"
            if (isExpanded) {
                isExpanded = false;
                container.classList.remove('expanded');
                expandBtn.querySelector('.icon-expand').style.display = 'block';
                expandBtn.querySelector('.icon-compress').style.display = 'none';
            }

            // --- STOP ASSISTANT LOGIC ---
            if (iframe.contentWindow) {
                iframe.contentWindow.postMessage({ type: 'PAUSE_VORON_SESSION' }, '*');
            }
        }
    }

    btn.addEventListener('click', toggleWidget);

    // Слушаем сообщения из IFrame
    window.addEventListener('message', (event) => {
        if (event.data === 'close_voron_widget') {
            if (isOpen) toggleWidget();
        }
    });

})();