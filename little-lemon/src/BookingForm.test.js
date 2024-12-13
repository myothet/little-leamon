import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import { waitFor } from '@testing-library/react';

describe('BookingForm Component', () => {
  const mockSubmitForm = jest.fn();
  const availableTimes = ['17:00', '18:00', '19:00'];

  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  it('renders all form fields and the submit button', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /make your reservation/i })).toBeInTheDocument();
  });

  it('displays validation errors for empty required fields', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/number of guests is required/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });

  it('updates form fields correctly on input', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-10' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    expect(screen.getByLabelText(/choose date/i).value).toBe('2024-12-10');
    expect(screen.getByLabelText(/choose time/i).value).toBe('18:00');
    expect(screen.getByLabelText(/number of guests/i).value).toBe('4');
    expect(screen.getByLabelText(/occasion/i).value).toBe('Birthday');
  });

  it('enables the submit button when the form is valid', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '12-20-2024' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    const button = screen.getByRole('button', { name: /make your reservation/i });
    
        
        expect(button).not.toBeDisabled();
      
  });

  it('disables the submit button when the form is invalid', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });

    const button = screen.getByRole('button', { name: /make your reservation/i });
    //expect(button).toBeDisabled();
    
        expect(button).toBeDisabled();
      

  });

  it('calls submitForm with correct data on valid form submission', () => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '12-20-2024' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '12-20-2024',
      time: '18:00',
      guests: '4',
      occasion: 'Birthday',
    });
  });
});
