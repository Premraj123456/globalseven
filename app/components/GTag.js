'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Load the gtag.js script
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-G5Q431YDBN';
    script1.async = true;
    document.head.appendChild(script1);

    // Inline configuration
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G5Q431YDBN');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}
