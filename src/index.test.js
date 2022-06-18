const generateNotes = require('./generate-notes.js');
const pluginConfiguration = require('./index.js');

describe('Plugin configuration (index.js)', () => {
  it('should handle the generateNotes lifecycle step', () => {
    expect(pluginConfiguration.generateNotes).toEqual(generateNotes);
  });
});
