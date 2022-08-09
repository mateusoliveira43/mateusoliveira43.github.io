import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../../src/app/index';

// describe('renders website initial page', () => {
//   it.todo('write integration tests');
// });

describe('test if svgTransform works', () => {
  beforeEach(() => render(<App />));

  it('should render "Bem-vindo(a)!"', () => {
    const title = screen.getByText(/Bem-vindo\(a\)!/);
    expect(title).toBeVisible();
  });
});
