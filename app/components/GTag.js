'use client';

import { useEffect } from 'react';

export default function GTag() {
  useEffect(() => {
    // Load the external script manually
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-G5Q431YDBN';
    script.async = true;
    document.head.appendChild(script);

    // Add inline script
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-G5Q431YDBN');
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
}
