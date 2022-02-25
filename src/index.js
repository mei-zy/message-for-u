import './tailwind.css';
import renderInitData from './js/showInitData';
import addMessages from './js/addMessages';

const init = () => {
  renderInitData();
  addMessages();
};
window.addEventListener('DOMContentLoaded', init);
