import 'jest-styled-components';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { mockComponent, mockEventListeners, findMock, recordSaga } from './utils';

const apiMock = new MockAdapter(axios);

global['mockComponent'] = mockComponent;
global['findMock'] = findMock;
global['mockEventListeners'] = mockEventListeners;
global['recordSaga'] = recordSaga;
global['apiMock'] = apiMock;
