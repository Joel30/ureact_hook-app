import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en del HookApp', () => {
  test('debe de mostrarse correctamente', () =>{
    const wrapper = shallow(<HookApp/>);
    expect(wrapper).toMatchSnapshot();
  });
});