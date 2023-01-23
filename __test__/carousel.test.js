import '@testing-library/jest-dom';
import { render, cleanup, screen } from '@testing-library/react';
import CarouselContainer from '../components/Carousel';

// clean up the dom before each render
beforeEach(cleanup);

describe('<CarouselContainer />', () => {
  describe('Success', () => {
    it('renders the hompage carousel', () => {
      render(<CarouselContainer />);

      screen.debug();

      expect(screen.queryByTestId('carousel-container')).toBeInTheDocument();
    });
  });
});
