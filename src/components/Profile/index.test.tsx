import { render, screen } from '@testing-library/react';
import Profile from './index';

test('renders profile', () => {
   render(<Profile profile={{address: {}}} />);
   const  _profile = screen.getByText('User Profile');
   expect(_profile).toBeInTheDocument();
});