import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {
  const initialFrom = {
    name: 'Joel',
    email: 'joel@gmail.com'
  }

  test('debe de regresar un formulario por defecto', () => {
    const {result} = renderHook(() => useForm(initialFrom));


    expect(result.current[0]).toEqual(initialFrom);
    expect(typeof result.current[1]).toBe('function');
    expect(typeof result.current[2]).toBe('function');

  });

  test('debe de cambiar el valor del formulario (cambiar name)', () => {

    const {result} = renderHook(() => useForm(initialFrom));

    const [,handleInputChange] = result.current;

    act(() => {
      handleInputChange({target:{name:'name', value:'jhon'}});
    });


    const newIF = {...initialFrom, name: 'jhon'}
    expect(result.current[0]).toEqual( newIF );

  });

  test('debe de re-establecer el formulario con RESET', () => {
    const {result} = renderHook(() => useForm(initialFrom));

    const [,handleInputChange,reset] = result.current;

    act(() => {
      handleInputChange({target:{name:'name', value:'jhon'}});
      reset()
    });

    expect(result.current[0]).toEqual( initialFrom );
  });
});