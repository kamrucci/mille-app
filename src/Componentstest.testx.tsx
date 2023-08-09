import React from 'react';
import { render, screen } from '@testing-library/react';
import Components from './Components';


describe('Testing component from outside', () => {
  it('should render outside component', () => {
    const screen = render(<Components />);
    expect(screen.getByTestId('buttonnnn')).toBeInTheDocument();
  });
});