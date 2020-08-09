import Enzyme, { shallow } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ 
  adapter: new ReactSixteenAdapter() 
});