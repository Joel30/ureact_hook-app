import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

jest.mock('../../../components/03-examples/MultipleCustomHooks');

describe('Pruebas en RealexampleRef', () => {

  const wrapper = shallow(<RealExampleRef />);

  
  test('debe mostrarse correctamente',() => {
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
  });

  test('debe de mostrar el componete MultipleCustomHooks',() => {

    wrapper.find('button').simulate('click');

    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

  });
})