import React, { useEffect } from 'react';

const EMBED_SRC = 'https://www.wehanda.com/embed.js';

const Menu: React.FC = () => {
  useEffect(() => {
    // The SPA renders the embed div after initial page load, so the script must be
    // (re)loaded at runtime once the div exists — always from Wehanda's URL, never bundled.
    document
      .querySelectorAll(`script[src="${EMBED_SRC}"]`)
      .forEach((s) => s.parentNode?.removeChild(s));
    const script = document.createElement('script');
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="pt-20">
      <div data-wehanda-embed="" data-restaurant="yen-sushi-sake-bar" data-view="menu"></div>
    </div>
  );
};

export default Menu;
