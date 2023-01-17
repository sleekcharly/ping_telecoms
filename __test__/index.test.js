import Home from '../pages/index';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('<Home />', () => {
  it('renders the Ping telecoms home page', () => {
    render(<Home />);

    // check if all components are rendered
    expect(screen.getByTestId('home_page')).toBeInTheDocument();
  });
});
