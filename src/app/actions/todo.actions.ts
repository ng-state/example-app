import { HasStore, InjectStore } from 'ng-state';
import * as Immutable from 'immutable';

@InjectStore(['${stateIndex}'])
export class TodoStateActions extends HasStore<Immutable.Map<any, any>> {
    get todoDescription() {
        return this.state.get('description');
    }
}