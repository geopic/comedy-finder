// * --------------------------------
// * Helper functions and properties.
// * --------------------------------

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
