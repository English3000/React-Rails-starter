import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AuthForm from '../AuthForm';
import { Button } from '../../../utils/elements';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore([thunk]);

jest.useFakeTimers(); //otherwise setTimeout fails

//end-to-end testing
describe('AuthForm', () => {
  let testStore;
  let AuthFormWrapper;

  beforeEach(() => {
    testStore = mockStore({ session: {currentUser: null}, errors: [] });
    AuthFormWrapper = mount(<AuthForm store={testStore}/>).find(AuthForm);
  });

  it('handles invalid Sign Up', () => { //async; await || snapshots
    expect(testStore.getState().errors.length).toBe(0);
    AuthFormWrapper.find(Button).first().simulate('click');
  });

  it('handles invalid Sign In', () => {
    expect(testStore.getState().errors.length).toBe(0);
    AuthFormWrapper.find(Button).last().simulate('click');
  });

  afterEach(done => {
    function callback() {
      console.log(testStore.getState().errors);
      expect(testStore.getState().errors.length).toBeGreaterThan(0);
      done(); // async/await & Promise.resolve().then don't work
    }

    setTimeout(callback, 0);
    console.log(testStore.getState().errors); //=> []
    // makes 2 AJAX requests
    // errors are dispatched, but never reach reducer

    //Timeout - Async callback was not invoked (done is never called)
    // within the 20-second timeout specified by jest.setTimeout.

    // it's an issue w/ setTimeout (commented out the clicks)

    // jest.runAllTimers();
    // jest.advanceTimersByTime(1000);
    // now the tests run but the AJAX request doesn't have time to reach the server
  });
});
//Dallas recommends--
// https://alligator.io/testing/asynchronous-testing-jest/
// https://alligator.io/testing/snapshot-testing-jest/
