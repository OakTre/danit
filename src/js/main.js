// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import menu from './modules/menu';
import anchorLinks from './modules/anchorLInks';
import blocksReveal from './modules/animatedBlocks';
import validation from './modules/validation';
import weTakeCare from './modules/weTakeCare';
import delivery from './modules/delivery';
import geoSlider from './modules/geoSlider';

documenReady(() => {
  lazyIMages();
  initModal();
  menu();
  anchorLinks();
  blocksReveal();
  validation();
  weTakeCare();
  delivery();
  geoSlider();
});
