/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @format
 */

'use strict';

const SourceMetadataMapConsumer = require('../SourceMetadataMapConsumer.js');

describe('SourceMetadataMapConsumer', () => {
  it('ignores metadata beyond the range of the sources array', () => {
    const consumer = new SourceMetadataMapConsumer({
      version: 3,
      mappings: '',
      sources: ['foo'],
      names: [],
      x_facebook_sources: [
        null,
        [
          {
            mappings: '',
            names: [],
          },
        ],
      ],
    });
    expect(consumer.toArray(['foo'])).toEqual([null]);
  });

  it('ignores metadata for a null source', () => {
    const consumer = new SourceMetadataMapConsumer({
      version: 3,
      mappings: '',
      sources: ['foo', null],
      names: [],
      x_facebook_sources: [
        [
          {
            mappings: '',
            names: [],
          },
        ],
      ],
    });
    expect(consumer.toArray(['foo', null])).toEqual([
      [
        {
          mappings: '',
          names: [],
        },
      ],
      undefined,
    ]);
  });
});
