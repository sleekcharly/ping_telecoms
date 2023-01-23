import '@testing-library/jest-dom';
import { fireEvent, render, cleanup, screen } from '@testing-library/react';
import Header from '../components/layouts/Header';

// clean up the dom before each render
beforeEach(cleanup);

describe('<Header />', () => {
  describe('Success', () => {
    it('renders the <Header />', () => {
      render(<Header />);

      // check if all components are rendered
      expect(screen.getByTestId('header_container')).toBeTruthy();
      expect(screen.getByTestId('home_logo_link')).toBeInTheDocument();
      expect(screen.getByTestId('home_logo_link_image')).toBeInTheDocument();
      expect(screen.getByTestId('navigation_links')).toBeInTheDocument();
    });

    it('renders the mobile menu when bread crumb is clicked', () => {
      render(<Header />);

      // check the rendered components
      expect(screen.queryByTestId('mobile-nav-menu')).toHaveClass('hidden');

      fireEvent.click(screen.getByTestId('mobile-menu-toggle-button'));

      fireEvent.keyDown(screen.queryByTestId('mobile-menu-toggle-button'), {
        key: 'a',
        code: 65,
      });

      fireEvent.keyDown(screen.queryByTestId('mobile-menu-toggle-button'), {
        key: 'Enter',
        code: 13,
      });

      expect(screen.queryByTestId('mobile-nav-menu')).toHaveClass(
        'w-[30%] absolute z-10 top-6 right-4 bg-white text-[#80000] font-sans transition duration-600',
      );

      expect(
        screen.queryByTestId('mobile-nav-menu').classList.contains('hidden'),
      ).toBeFalsy();
    });

    it('closes the mobile navigation menu', () => {
      render(<Header />);

      // run click event
      fireEvent.click(screen.queryByTestId('mobile-menu-nav-close-button'));

      // run keyDown event
      fireEvent.keyDown(screen.queryByTestId('mobile-menu-nav-close-button'), {
        key: 'a',
        code: 65,
      });

      fireEvent.keyDown(screen.queryByTestId('mobile-menu-nav-close-button'), {
        key: 'Enter',
        code: 13,
      });

      // check the rendered components
      expect(screen.queryByTestId('mobile-nav-menu')).toHaveClass(
        'w-[30%] absolute z-10 top-6 right-4 bg-white text-[#80000] font-sans transition duration-600',
      );
    });
  });
});
