(function() {
    const scriptScript = document.currentScript;
    const scriptUrl = scriptScript ? scriptScript.src : '';
    const scriptOrigin = scriptUrl ? new URL(scriptUrl).origin : '';

    const APP_URL = window.voron_app_url || scriptOrigin || "https://mark.voron.io";

    const css = `
        :root {
            --voron-gold: #FACC15;
            --voron-black: #000000;
            --voron-z-index: 2147483647;
        }

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

        .voron-launcher-icon {
            width: 32px;
            height: 32px;
            color: var(--voron-gold);
            transition: transform 0.3s ease, opacity 0.3s ease;
        }

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

        .voron-widget-container {
            position: fixed;
            bottom: 90px;
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
            transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            transform-origin: bottom right;
        }

        .voron-widget-container.visible {
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: all;
        }

        .voron-iframe {
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
        }

        @media (max-width: 480px) {
            .voron-widget-container {
                bottom: 0;
                right: 0;
                width: 100%;
                height: 100%;
                max-height: 100vh;
                border-radius: 0;
            }
            
            .voron-launcher-btn.opened {
                bottom: 20px;
                right: 20px;
                background: rgba(255, 255, 255, 0.1);
            }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    const wrapper = document.createElement('div');
    wrapper.id = 'voron-widget-wrapper';

    const btn = document.createElement('div');
    btn.className = 'voron-launcher-btn';
    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="voron-launcher-icon voron-icon-open">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="voron-launcher-icon voron-icon-close">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    `;

    const container = document.createElement('div');
    container.className = 'voron-widget-container';

    const iframe = document.createElement('iframe');
    iframe.className = 'voron-iframe';
    iframe.title = "Voron AI Assistant";
    // Права доступа
    iframe.allow = "camera *; microphone *; geolocation *; autoplay *; clipboard-read; clipboard-write; display-capture *; screen-wake-lock *; accelerometer *; gyroscope *; fullscreen *";

    container.appendChild(iframe);
    wrapper.appendChild(container);
    wrapper.appendChild(btn);
    document.body.appendChild(wrapper);

    let isOpen = false;
    let isLoaded = false;

    function toggleWidget() {
        if (!isLoaded) {
            iframe.src = APP_URL;
            isLoaded = true;
        }

        isOpen = !isOpen;

        if (isOpen) {
            container.classList.add('visible');
            btn.classList.add('opened');
        } else {
            container.classList.remove('visible');
            btn.classList.remove('opened');
        }
    }

    btn.addEventListener('click', toggleWidget);

    window.addEventListener('message', (event) => {
        if (event.data === 'close_voron_widget') {
            if (isOpen) toggleWidget();
        }
    });

})();