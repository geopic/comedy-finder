/**
 * src/utils.ts
 * Helper functions and properties.
 * © George Pickering 2019, https://github.com/tedjenkins
 */

// Global site title.
const siteName = 'ComedyFinder';

// Site host (same host in production, localhost in dev).
const siteHost =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3010';

export const props = {
  siteName,
  siteHost
};

export const utils = {};
