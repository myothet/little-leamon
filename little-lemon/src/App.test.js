// app.test.js
import { initializeTimes } from './BookingPage';  // Import the function to test
import { fetchAPI } from './api';  // Import fetchAPI
import { updateTime } from './BookingPage';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),  // Mock fetchAPI
}));

describe('initializeTimes function', () => {
  it('should return available booking times when fetchAPI is mocked', () => {
    // Example mock response from fetchAPI
    const expectedResponse = [
      "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
      "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
    ];  // Non-empty array of booking times

    // Mock fetchAPI to return the expected response
    fetchAPI.mockReturnValueOnce(expectedResponse);

    const result = initializeTimes();  // Call the function being tested with no parameters
    console.log("result is ",result)

    // Assert that the result matches the expected response
    expect(result).toEqual(expectedResponse);
  });

  it('should handle randomness correctly by mocking Math.random()', () => {
    // Mock Math.random to return a fixed value
    jest.spyOn(Math, 'random').mockReturnValue(0.4);  // Always returns 0.4
    const mockDate = new Date('12-04-2024');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);

    // Mock the seededRandom function to return a predictable random function
    jest.mock('./seededRandom', () => ({
        seededRandom: () => jest.fn(() => 0.4),  // Control the randomness returned by seededRandom
      }));

    const expectedResponse = [
      "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
      "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
    ];  // Adjust based on how you expect the randomness

    const result = initializeTimes();  // Call the function being tested with no parameters
    console.log("result in second test ",result);

    // Verify the result based on the mocked random values
    expect(result).toEqual(expectedResponse);

    Math.random.mockRestore();  // Restore Math.random after the test
  });

  it('should return up date time', () => {




  });

});

describe('updateTime reducer', () => {
    it('should update the state with the filtered times when "update" action is dispatched', () => {
      const mockDate = new Date('12-04-2024');  // Example date
      const expectedResponse = [
        "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
        "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"
      ];  // Example booking times
  
      // Mock fetchAPI to return the expected response
      fetchAPI.mockReturnValueOnce(expectedResponse);
  
      // Initial state (could be an empty array or any initial state you have)
      const initialState = [];
  
      // Action to dispatch
      const action = {
        type: 'update',
        payload: mockDate  // Pass the mock date as payload
      };
  
      // Call the reducer with the action
      const result = updateTime(initialState, action);
  
      // Assert that the result matches the expected response
      expect(result).toEqual(expectedResponse);
    });
  
    it('should return the state unchanged if action type is not "update"', () => {
      const initialState = ["17:00", "17:30"];  // Example initial state
  
      // Action with an unknown type
      const action = {
        type: 'unknown',  // Non-existing action type
        payload: null
      };
  
      // Call the reducer with the action
      const result = updateTime(initialState, action);
  
      // Assert that the state is unchanged
      expect(result).toEqual(initialState);
    });
  });
