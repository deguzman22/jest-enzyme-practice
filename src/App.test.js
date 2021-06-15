import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';
import axios from 'axios';

jest.mock('axios');

const mockData = [{ name: "sample"}, { name: "testing" }];

describe('App', () => {
  let wrapper;

  it('should render app', () => {
    wrapper = shallow(<App />);

    expect(wrapper.find('.App').length).toEqual(1);
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('should render list of names', async () => {
    
    await act(async () => {
     
      await axios.get.mockImplementation(() => 
        Promise.resolve({ data: mockData })
      );

      await axios.get.mockResolvedValue({ data: mockData });

      wrapper = mount(<App />);
    });

    wrapper.update();
    
    jest.spyOn(React, 'useEffect').mockImplementation(() => {
      jest.fn();
    });

    expect(wrapper.find('li').length).toEqual(2);
  });
});