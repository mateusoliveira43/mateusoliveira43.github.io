import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../../src/app/index';

// describe('renders website initial page', () => {
//   it.todo('write integration tests');
// });

describe('test if svgTransform works', () => {
  beforeEach(() => render(<App />));

  it('should render "site pessoal!"', () => {
    const title = screen.getByText(/site pessoal!/);
    expect(title).toBeVisible();
  });
});
