// .eslintrc.js
module.exports = {
    env: {
      browser: true,  // Ensures that browser globals like `window` are available
      node: true,     // Ensures that Node.js globals are available if necessary
    },
    globals: {
      monaco: 'readonly', // Tells ESLint that the monaco object is a global variable
    },
    rules: {
      // Add any custom rules you might have
    },
  };
  