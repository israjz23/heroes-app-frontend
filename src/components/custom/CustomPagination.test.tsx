import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { CustomPagination } from './CustomPagination';
import { MemoryRouter } from 'react-router';
import type { PropsWithChildren } from 'react';

vi.mock('../ui/button', () => ({
  Button: ({ children, ...props }: PropsWithChildren) => (
    <button {...props}>{children}</button>
  ),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

describe('CustomPagination', () => {
  test('should render component with default values', () => {
    renderWithRouter(<CustomPagination totalPages={5} />);

    expect(screen.getByText('Anteriores')).toBeDefined();
    expect(screen.getByText('Siguientes')).toBeDefined();

    expect(screen.getByText('1')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText('4')).toBeDefined();
    expect(screen.getByText('5')).toBeDefined();
  });
});
