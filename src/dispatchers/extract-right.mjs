import {isFuture} from '../future';
import {throwInvalidFuture} from '../internal/throw';

export function extractRight(m){
  if(!isFuture(m)) throwInvalidFuture('Future.extractRight', 0, m);
  return m.extractRight();
}
