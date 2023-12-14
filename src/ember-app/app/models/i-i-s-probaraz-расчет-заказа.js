import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасчетЗаказаMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-расчет-заказа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасчетЗаказаMixin, Validations, {
});

defineProjections(Model);

export default Model;
