import React from 'react';

/**
 * Component that renders HTML with <ruby> tags if furigana is enabled,
 * or strips HTML/ruby tags if furigana is disabled.
 */
export const FuriganaText = ({ htmlContent, plainText, showFurigana = true, className = '' }) => {
  if (showFurigana && htmlContent) {
    return (
      <span
        className={`furigana-text ${className}`}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  }
  
  // Fallback to plain text without ruby tags
  const clean = plainText || (htmlContent ? htmlContent.replace(/<ruby>(.*?)<rt>.*?<\/rt><\/ruby>/g, '$1').replace(/<[^>]+>/g, '') : '');
  return <span className={`plain-text ${className}`}>{clean}</span>;
};
