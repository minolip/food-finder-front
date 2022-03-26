import { mount, shallow } from 'enzyme';
import App from './App';

it("renders without crashing", () => {
    mount(<App />);
});