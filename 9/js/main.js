import { initThumbnail } from './thumbnail.js';
import { getSimilarWizards } from './mock.js';
import './form.js';

const data = getSimilarWizards();
initThumbnail(data);
