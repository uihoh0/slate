/** @jsx h */

import { h } from '../../../helpers'

export const run = editor => {
  editor.insertText('a')
}

export const input = (
  <value>
    <block void>
      <cursor />
    </block>
  </value>
)

export const output = (
  <value>
    <block void>
      <cursor />
    </block>
  </value>
)