import { Serializer as РасчетЗаказаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaraz-расчет-заказа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасчетЗаказаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
