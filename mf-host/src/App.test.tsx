import { render, screen } from '@testing-library/react';
import App from '@/App';

// TODO[SM]: Actualizar test 
test('renders Host corriendo', () => {
  render(<App />);
  expect(screen.getByText(/Hello Module Federation/i)).toBeInTheDocument();
});
