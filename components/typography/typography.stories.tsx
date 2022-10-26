import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Typography from '.'

export default {
  title: 'Antd/typography 排版',
  component: Typography
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
)

export const Basic = Template.bind({})

Basic.args = {
  children:
    '蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。'
}
