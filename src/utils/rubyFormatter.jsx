import React from 'react';

// Transforms text formatted as [漢字|かんじ] into JSX with <ruby> tags
export const renderRubyText = (text, enableFurigana) => {
  if (!text) return '';
  if (!enableFurigana) {
    return text.replace(/\[([^\|]+)\|([^\]]+)\]/g, '$1');
  }
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, idx) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const match = part.slice(1, -1).split('|');
      if (match.length === 2) {
        return (
          <ruby key={idx}>
            {match[0]}
            <rt>{match[1]}</rt>
          </ruby>
        );
      }
    }
    return part;
  });
};
