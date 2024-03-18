import { fireEvent, render, screen } from '@testing-library/react';
import Sort from './App';

const setup = () => {
  render(<Sort />);
}

describe('Component: Sort', () => {
  beforeEach(() => {
    setup();
  })

  describe('when package is not bulky or heavy', () => {
    beforeEach(async () => {
      fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '60' } });
      fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '60' } });
      fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '10' } });
      fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '60' } });
      fireEvent.click(await screen.findByTestId('button'));
    });

    it('should notify the user that the package will be dispatched as STANDARD', () => {
      expect(screen.getByText('Package will be dispatched as STANDARD')).toBeInTheDocument();
    })
  })

  describe('when is bulky', () => {
    describe('when package volume > 1,000,000cm^3', () => {
      beforeEach(async () => {
        fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '120' } });
        fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '1620' } });
        fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '10' } });
        fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '120' } });
        fireEvent.click(await screen.findByTestId('button'));
      });

      it('should notify the user that the package will be dispatched as SPECIAL', () => {
        expect(screen.getByText('Package will be dispatched as SPECIAL')).toBeInTheDocument();
      })
    })

    describe('when width >= 150cm', () => {
      beforeEach(async () => {
        fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '60' } });
        fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '60' } });
        fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '10' } });
        fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '150' } });
        fireEvent.click(await screen.findByTestId('button'));
      });

      it('should notify the user that the package will be dispatched as SPECIAL', () => {
        expect(screen.getByText('Package will be dispatched as SPECIAL')).toBeInTheDocument();
      })
    })

    describe('when height >= 150cm', () => {
      beforeEach(async () => {
        fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '150' } });
        fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '60' } });
        fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '10' } });
        fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '60' } });
        fireEvent.click(await screen.findByTestId('button'));
      });

      it('should notify the user that the package will be dispatched as SPECIAL', () => {
        expect(screen.getByText('Package will be dispatched as SPECIAL')).toBeInTheDocument();
      })
    })

    describe('when length > 150cm', () => {
      beforeEach(async () => {
        fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '60' } });
        fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '150' } });
        fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '10' } });
        fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '60' } });
        fireEvent.click(await screen.findByTestId('button'));
      });

      it('should notify the user that the package will be dispatched as SPECIAL', () => {
        expect(screen.getByText('Package will be dispatched as SPECIAL')).toBeInTheDocument();
      })
    })
  })

  describe('when package weight >= 20', () => {
    beforeEach(async () => {
      fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '60' } });
      fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '60' } });
      fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '20' } });
      fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '60' } });
      fireEvent.click(await screen.findByTestId('button'));
    });

    it('should notify the user that the package will be dispatched as SPECIAL', () => {
      expect(screen.getByText('Package will be dispatched as SPECIAL')).toBeInTheDocument();
    })
  })

  describe('when package is heavy AND bulky', () => {
    beforeEach(async () => {
      fireEvent.change(await screen.findByTestId('input-height'), { target: { value: '120' } });
      fireEvent.change(await screen.findByTestId('input-length'), { target: { value: '120' } });
      fireEvent.change(await screen.findByTestId('input-weight'), { target: { value: '120' } });
      fireEvent.change(await screen.findByTestId('input-width'), { target: { value: '120' } });
      fireEvent.click(await screen.findByTestId('button'));
    });

    it('should notify the user that the package will be REJECTED', () => {
      expect(screen.getByText('Package is too big or heavy and is REJECTED')).toBeInTheDocument();
    })
  })
});
