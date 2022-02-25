import './tailwind.css';
import renderInitData from './js/showInitData';
import bindEventAddMessages from './js/addMessages';

const init = () => {
  renderInitData();
  bindEventAddMessages();
};
window.addEventListener('DOMContentLoaded', init);
