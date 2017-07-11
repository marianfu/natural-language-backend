import bookshelf from './../persistence/connector';
import _ from 'lodash';

const BaseModel = bookshelf.Model.extend({
  // convert keys from snake_case to camelCase
  parse: (attrs) => _.mapKeys(attrs, (val, key) => _.camelCase(key)),

  // convert keys from camelCase to snake_case
  format: (attrs) => _.mapKeys(attrs, (val, key) => _.snakeCase(key))
});

export default BaseModel;