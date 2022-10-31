import { initThumbnail } from './thumbnail.js';
import { getSimilarWizards } from './mock.js';
import { initModal } from './form.js';

const data = getSimilarWizards();
initThumbnail(data);
initModal();
