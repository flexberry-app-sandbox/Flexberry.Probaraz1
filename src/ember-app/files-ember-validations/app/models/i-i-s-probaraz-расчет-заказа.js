import {
  defineNamespace,
  defineProjections,
  Model as РасчетЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-расчет-заказа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетЗаказаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
