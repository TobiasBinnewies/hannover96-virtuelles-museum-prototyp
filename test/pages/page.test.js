import React from 'react'
import Home from '../../src/app/page'
import { render, screen } from '../test-utils'

test('Home', () => {
  render(<Home />)
  const heading = screen.getByText('Get started by editing')

  expect(heading).toBeInTheDocument()
})
