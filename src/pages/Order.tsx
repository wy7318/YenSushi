import React, { useEffect } from 'react';

const NAV_HEIGHT = 80;

const Order: React.FC = () => {
  useEffect(() => {
    // Replace the existing embed.js script element with a fresh clone.
    // This forces re-execution AFTER the data-wehanda-embed div is in the DOM,
    // which is required for Wehanda's one-time DOM scan to find the widget.
    const existing = document.querySelector<HTMLScriptElement>('script[src="https://wehanda.com/embed.js"]');
    if (existing && existing.parentNode) {
      const clone = document.createElement('script');
      clone.src = existing.src;
      clone.async = true;
      existing.parentNode.replaceChild(clone, existing);
    } else {
      const script = document.createElement('script');
      script.src = 'https://wehanda.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Force the iframe to fill the full viewport, overriding Wehanda's auto-height postMessage.
    let styleObserver: MutationObserver | null = null;

    const forceHeight = () => {
      const iframe = document.querySelector<HTMLIFrameElement>('[data-wehanda-embed] iframe');
      if (iframe) {
        iframe.style.setProperty('height', `${window.innerHeight - NAV_HEIGHT}px`, 'important');
      }
    };

    const containerObserver = new MutationObserver(() => {
      const iframe = document.querySelector<HTMLIFrameElement>('[data-wehanda-embed] iframe');
      if (!iframe) return;
      containerObserver.disconnect();
      forceHeight();
      styleObserver = new MutationObserver(forceHeight);
      styleObserver.observe(iframe, { attributes: true, attributeFilter: ['style'] });
      window.addEventListener('resize', forceHeight);
    });

    const embedDiv = document.querySelector('[data-wehanda-embed]');
    if (embedDiv) containerObserver.observe(embedDiv, { childList: true });

    return () => {
      containerObserver.disconnect();
      styleObserver?.disconnect();
      window.removeEventListener('resize', forceHeight);
    };
  }, []);

  return (
    <div className="order-embed">
      <div data-wehanda-embed="" data-restaurant="yen-sushi-sake-bar"></div>
    </div>
  );
};

export default Order;
