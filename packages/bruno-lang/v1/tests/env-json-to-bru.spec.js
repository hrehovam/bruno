const fs = require('fs');
const path = require('path');

const { envJsonToBru } = require('../src');

describe('envJsonToBru', () => {
  it('should convert json file into .bru file', () => {
    const env = {
      variables: [
        {
          enabled: true,
          name: 'host',
          value: 'https://www.google.com',
          type: 'text'
        },
        {
          enabled: true,
          name: 'jwt',
          value: 'secret',
          type: 'text'
        },
        {
          enabled: false,
          name: 'Content-type',
          value: 'application/json',
          type: 'text'
        }
      ]
    };

    const expectedBruFile = fs.readFileSync(path.join(__dirname, 'fixtures', 'env.bru'), 'utf8');
    const actualBruFile = envJsonToBru(env);

    const expectedLines = expectedBruFile.split('\n').map(line => line.trim());
    const actualLines = actualBruFile.split('\n').map(line => line.trim());

    expect(expectedLines).toEqual(actualLines);
  });
});


