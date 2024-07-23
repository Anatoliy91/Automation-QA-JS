const { test: base } = require('@playwright/test');

const test = base.extend({
  context: async ({ context }, use) => {
    const theme = context._options.colorScheme;
    await context.addInitScript(theme => {
      window.matchMedia = window.matchMedia || function() {
        return {
          matches: theme === 'dark',
          addListener: () => {},
          removeListener: () => {},
        };
      };
    }, theme);
    await use(context);
  },
});

module.exports = test;
