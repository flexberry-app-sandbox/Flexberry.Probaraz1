import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as МастерMixin
} from '../mixins/regenerated/models/i-i-s-probaraz-мастер';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(МастерMixin, Validations, {
});

defineProjections(Model);

export default Model;
