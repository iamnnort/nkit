import { fork, all } from 'redux-saga/effects';

import gitSagas from '@common/store/git/sagas';

export function waitAll(sagas: any[]) {
  return function*() {
    yield all(sagas.map((saga) => fork(saga)));
  };
}

export default function*() {
  yield all({
    git: fork(gitSagas),
  });
}
