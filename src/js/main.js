// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import menu from './modules/menu';
import anchorLinks from './modules/anchorLInks';
import blocksReveal from './modules/animatedBlocks';
import validation from './modules/validation';

documenReady(() => {
  lazyIMages();
  initModal();
  menu();
  anchorLinks();
  blocksReveal();
  validation();
});
