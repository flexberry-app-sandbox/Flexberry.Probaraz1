import { Serializer as МастерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-probaraz-мастер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(МастерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
