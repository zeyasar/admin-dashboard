import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<BrowserRouter><LoginPage /></BrowserRouter>);
  const linkElement = screen.getByText(/forgot password/i);
  expect(linkElement).toBeInTheDocument();
}); 
