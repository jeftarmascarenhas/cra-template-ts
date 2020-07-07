import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Button',
  decorators: [withKnobs],
}

export const ButtonStory = () => (
  <Button onClick={action('Click')} title={text('title', 'Button')} />
)
