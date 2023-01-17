import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../components/layouts/Header';

describe('<Header />', () => {
  it('renders the header component', () => {
    render(<Header />);

    // check if all components are rendered
    expect(screen.getByTestId('header_container')).toBeInTheDocument();
    expect(screen.getByTestId('home_logo_link')).toBeInTheDocument();
    expect(screen.getByTestId('home_logo_link_image')).toBeInTheDocument();
    expect(screen.getByTestId('navigation_links')).toBeInTheDocument();
  });
});
