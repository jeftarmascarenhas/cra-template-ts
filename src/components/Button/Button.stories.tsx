import * as React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'componentes/Button',
  decorators: [withKnobs],
}

export const ButtonDefault = () => (
  <Button onClick={action('Click')} title={text('title', 'Button')}>
    <span>Text 1</span>
  </Button>
)

export const ButtonCustom = () => (
  <Button onClick={action('Click')} title={text('title', 'Button')}>
    <span>TExto 2</span>
  </Button>
)

export const ButtonDisabled = () => (
  <Button onClick={action('Click')} disabled title={text('title', 'Button')}>
    <span>TExto 2</span>
  </Button>
)
