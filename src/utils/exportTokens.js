// src/utils/exportTokens.js
import { designTokens } from '../design-tokens/tokens';

export const exportTokensAsJSON = () => {
  const dataStr = JSON.stringify(designTokens, null, 2);
  const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  const exportFileDefaultName = `design-tokens-${designTokens.version}.json`;
  
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
};

export const exportTokensAsCSS = () => {
  let cssVars = ':root {\n';
  
  // Add CSS custom properties
  const addCSSVars = (obj, prefix = '') => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        addCSSVars(obj[key], `${prefix}${key}-`);
      } else {
        const varName = `--${prefix}${key}`.replace(/_/g, '-');
        cssVars += `  ${varName}: ${obj[key]};\n`;
      }
    }
  };
  
  addCSSVars(designTokens);
  cssVars += '}\n';
  
  const dataUri = 'data:text/css;charset=utf-8,'+ encodeURIComponent(cssVars);
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', `design-tokens.css`);
  linkElement.click();
};

export const exportTokensAsSCSS = () => {
  let scssVars = '';
  
  const addSCSSVars = (obj, prefix = '') => {
    for (const key in obj) {
      if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        addSCSSVars(obj[key], `${prefix}${key}-`);
      } else {
        const varName = `$${prefix}${key}`.replace(/_/g, '-');
        scssVars += `${varName}: ${obj[key]};\n`;
      }
    }
  };
  
  addSCSSVars(designTokens);
  
  const dataUri = 'data:text/scss;charset=utf-8,'+ encodeURIComponent(scssVars);
  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', `design-tokens.scss`);
  linkElement.click();
};

export const copyTokensToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(designTokens, null, 2));
    return true;
  } catch (err) {
    console.error('Failed to copy: ', err);
    return false;
  }
};