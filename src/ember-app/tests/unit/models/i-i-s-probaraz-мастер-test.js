import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probaraz-мастер', 'Unit | Model | i-i-s-probaraz-мастер', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probaraz-журнал-заказов',
    'model:i-i-s-probaraz-заказ',
    'model:i-i-s-probaraz-контрагент',
    'model:i-i-s-probaraz-мастер',
    'model:i-i-s-probaraz-номенклатура',
    'model:i-i-s-probaraz-расчет-заказа',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
