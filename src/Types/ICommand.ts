import IArgument from './IArgument';

export interface ICommand {
  /**
   * @name Name
   * @description The name of the command
   */
  Name: string,
  /**
   * @name Aliases
   * @description Command Aliases; self explanatory
   * @note If not specified, treat as no aliases (excluding user-provided)
   */
  Aliases?: string[],
  /**
   * @name Arguments
   * @description Parameters for the command
   * @see IArgument
   * @note If not specified, treat as no args
   */
  Arguments?: IArgument[];
};
export default ICommand;
