import { render, screen } from '@testing-library/react';
import App from './App';
import reportWebVitals from './reportWebVitals';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

reportWebVitals();

