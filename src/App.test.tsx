import { render, screen } from '@testing-library/react';
import App from './App';

test('renders team page', () => {
   render(<App />);
   const    _teamMembers = screen.getByRole('main');
   expect(_teamMembers).toBeInTheDocument();
});