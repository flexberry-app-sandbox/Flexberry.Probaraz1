import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЖурналЗаказовMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-журнал-заказов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЖурналЗаказовMixin, Validations, {
});

defineProjections(Model);

export default Model;
