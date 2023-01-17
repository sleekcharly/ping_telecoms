import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Layout from '../components/layouts/Layout';

describe('<Layout />', () => {
  it('renders the Layout of the page', () => {
    render(<Layout />);

    // check if all components are rendered
    expect(screen.getByTestId('layout')).toBeInTheDocument();
  });
});
