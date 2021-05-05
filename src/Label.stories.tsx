import { storiesOf } from '@storybook/react'
import { Label } from './Label'

storiesOf('Label', module)
  .add('with default style', () => <Label>Default</Label>)
  .add('with primary style', () => <Label primary>Primary</Label>)
