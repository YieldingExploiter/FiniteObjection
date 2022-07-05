export interface IArgument {
  /**
   * @name Name
   * @description The name of the parameter
   */
  Name: string,
  /**
   * @name Required
   * @description Is this argument required? FiniteObjection will error if it is and it isn't provided.
   */
  Required: boolean,
  /**
   * @name Type
   * @description The type of argument - FiniteObjection will automatically convert to this type & error on type mismatch
   */
  Type: 'string'|'bool'|'number'
};
export default IArgument;
