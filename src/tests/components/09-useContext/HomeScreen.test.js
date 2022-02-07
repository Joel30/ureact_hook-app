import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en <HomeScreen />', () => {

  const user = {
    name: 'Joel',
    email: 'joel@gmail.com'
  }
  const wrapper = mount( //shallow -> mount
    <UserContext.Provider value={{user}}> {/* Probar un 'useContext' */}
      <HomeScreen />
    </UserContext.Provider>
  );
  
  test('debe de mostrarse correctamente', ()=> {
    expect(wrapper).toMatchSnapshot();
  });
});