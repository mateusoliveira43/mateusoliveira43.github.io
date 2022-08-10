import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../../../src/components/footer';

describe('Website footer', () => {
  beforeEach(() => render(<Footer />));

  describe('Copyright information', () => {
    it('should render the name of the author', () => {
      const footer = screen.getByText(/Mateus Oliveira/);
      expect(footer).toBeVisible();
    });

    it('should render the initial and current year of the website', () => {
      const footer = screen.getByText(/Mateus Oliveira/);
      const CURRENT_YEAR = new Date().getFullYear();
      expect(footer.innerHTML).toContain(`2020-${CURRENT_YEAR}`);
    });
  });

  it("should render the links to author's social medias", () => {
    const socialMedias = screen.getAllByRole('link');
    expect(socialMedias).toHaveLength(3);
  });
});
