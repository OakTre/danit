// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import aboutSlider from './modules/aboutSlider';
import menu from './modules/menu';
import anchorLinks from './modules/anchorLInks';
import blocksReveal from './modules/animatedBlocks';
import howItWorksFlag from './modules/howItWorksFlag';
import validation from './modules/validation';

documenReady(() => {
  lazyIMages();
  initModal();
  aboutSlider();
  menu();
  anchorLinks();
  blocksReveal();
  howItWorksFlag();
  validation();
});
