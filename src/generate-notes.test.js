const generateNotes = require('./generate-notes.js');

describe('generateNotes', () => {
  it('should return "Hello World!"', async () => {
    const changelogNotes = await generateNotes();

    expect(changelogNotes).toBe('Hello World!');
  });
});
