import { render } from '@testing-library/react';
import {MainApp} from './App';
import {unmountComponentAtNode} from "react-dom";

test('renders learn react link', () => {
  const div = document.createElement("div");
  render(<MainApp />);
  unmountComponentAtNode(div);
});
