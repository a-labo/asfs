/**
 * Test case for asfs.
 * Runs with mocha.
 */
'use strict'

const asfs = require('../lib/asfs.js')
const assert = require('assert')

describe('asfs', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Asfs', async () => {
    await asfs.mkdirpAsync(`${__dirname}/../tmp/foo`)
    await asfs.writeFileAsync(`${__dirname}/../tmp/foo/bar.txt`, 'This is bar')
    const exists = await asfs.existsAsync(`${__dirname}/../tmp/foo/bar.txt`)
    assert.ok(exists)
    const content = await asfs.readFileAsync(`${__dirname}/../tmp/foo/bar.txt`)
    assert.equal(content.toString(), 'This is bar')

    // With encode
    {
      const content = await asfs.readFileAsync(`${__dirname}/../tmp/foo/bar.txt`, 'base64')
      assert.equal(content.toString(), 'VGhpcyBpcyBiYXI=')
    }

    {
      const stat = await asfs.statAsync(`${__dirname}/../tmp/foo/bar.txt`, 'base64')
      console.log(stat)
      assert.equal(stat.size, 11)
    }
    {
      const filenames = await asfs.readdirAsync(__dirname)
      assert.ok(filenames)
    }

    {
      await asfs.copyDirAsync(
        `${__dirname}/../example`,
        `${__dirname}/../tmp/dir-copy-test`,
        {}
      )
    }
  })
})

/* global describe, before, after, it */
