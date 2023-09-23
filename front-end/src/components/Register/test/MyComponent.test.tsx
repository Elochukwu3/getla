// import { renderHook, act } from '@testing-library/react';
// import useRegister from '../hook/useRegister';

// describe('useRegister', () => {
//   it('should fetch data successfully', async () => {
//     const originalFetch = global.fetch;
//     global.fetch = jest.fn().mockResolvedValue({
//       ok: true,
//       json: () => ({ message: 'Success' }),
//     });

//     const { result, waitForNextUpdate } = renderHook(() => useRegister());

//     const testData = { /* Your test data here */ };
//     act(() => {
//       result.current.sendData(testData);
//     });

//     await waitForNextUpdate();

//     expect(result.current.responseData).toEqual({ message: 'Success' });
//     expect(result.current.error).toBeNull();
//     expect(result.current.isLoading).toBeFalsy();

//     global.fetch = originalFetch;
//   });

//   it('should handle errors', async () => {
//     global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

//     const { result, waitForNextUpdate } = renderHook(() => useRegister());

//     const testData = { /* Your test data here */ };
//     act(() => {
//       result.current.sendData(testData);
//     });

//     await waitForNextUpdate();

//     expect(result.current.responseData).toBeNull();
//     expect(result.current.error).toEqual(new Error('Network error'));
//     expect(result.current.isLoading).toBeFalsy();
//   });
// });
