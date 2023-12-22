import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe('Form Component', () => {
  it('should update input value', () => {
    render(
      <Provider store={store}>
        <Form inputValue={''} placeholder={'What to do'} />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText(/What to do/i); 
    fireEvent.change(inputElement, { target: { value: 'Add todo' } });
    expect(inputElement.value).toBe('Add todo');
  });
});
