import {isFuture} from '../future';
import {throwInvalidFuture} from '../internal/throw';

export function swap(m){
  if(!isFuture(m)) throwInvalidFuture('Future.swap', 0, m);
  return m.swap();
}
