import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en <TodoListItem />', () => {
  //todo, index, handleDelete, handleToggle}
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const index = 1;
  const wrapper = shallow(<TodoListItem todo={demoTodos[1]} index={index} handleDelete={handleDelete} handleToggle={handleToggle} />);
  
  test('debe de mostrarse correctamente', ()=> {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de llamar la función handleDelete', ()=> {
    //jest.fn() - toHaveBeenCalledWith

    wrapper.find('button').simulate('click');
    
    expect(handleDelete).toHaveBeenCalledWith(2); // o demoTodos[1].id

  });

  test('debe de llamar la functión handleToggle', ()=> {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(2) // o demoTodos[1].id
  });

  test('debe de mostrar el texto correctamente', ()=> {
    const text = wrapper.find('p').text().trim();

    expect(text).toBe( (index +1) + '. ' + demoTodos[1].desc);
  });

  test('debe de tener la clase complete si el TODO.done = true', ()=> {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find('p').hasClass('complete')).toBe(true)
  });
});