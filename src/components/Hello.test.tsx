import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders greeting with name', () => {
  const { container } = render(<Hello>Tester</Hello>);

  expect(container.querySelector('h1')).not.toBe(null);
  expect(screen.getByText('Tester')).toBeInTheDocument();
});

test('renders a node', () => {
  render(
    <Hello>
      <div data-testid="child" />
    </Hello>,
  );
  expect(screen.getByTestId('child')).toBeInTheDocument();
});

test('renders nothing', () => {
  const { container } = render(<Hello />);

  expect(container.querySelector('h1').children.length).toBe(0);
});
