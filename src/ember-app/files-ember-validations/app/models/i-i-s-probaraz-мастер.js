import {
  defineNamespace,
  defineProjections,
  Model as МастерMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-мастер';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МастерMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
