import Form from './Form';
import { shallow } from 'enzyme';

describe('Form', () => {
  let wrapper;

  it('should render Form', () => {
    wrapper = shallow(<Form />);
    let commentInput = wrapper.find('input').first();
    let buttonSubmit = wrapper.find('#submit');

    expect(commentInput.props().value).toEqual('');

    commentInput.simulate('change', {
      target: { value: 'Hello' }
    });

    commentInput = wrapper.find('input').first();

    expect(wrapper.find('form').length).toEqual(1);
    expect(commentInput.props().value).toEqual('Hello');

    // it will reset the value of comment from useState
    buttonSubmit.simulate('submit', { preventDefault () {} });

    let commentInputText = wrapper.find('input').first();

    expect(commentInputText.props().value).toEqual('');
  });
});