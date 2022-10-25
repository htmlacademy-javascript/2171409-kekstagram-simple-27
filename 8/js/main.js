import { initThumbnail } from './thumbnail.js';
import { getSimilarWizards } from './mock.js';

const data = getSimilarWizards();
initThumbnail(data);
