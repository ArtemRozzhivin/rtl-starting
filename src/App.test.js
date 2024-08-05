import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders 6 cards after App starting', async () => {
  render(<App />);

  const cards = await screen.findAllByTestId('product-card');
  expect(cards).toHaveLength(6);
});

test('renders 12 cards after clicking "Load More" button', async () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /load more/i });

  button.click();

  await waitFor(async () => {
    const cards = await screen.findAllByTestId('product-card');
    expect(cards).toHaveLength(12);
  });
});
