/**
 * Todo API
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LookupDto } from './lookupDto';
import { TodoListDto } from './todoListDto';


export interface TodosVm { 
    priorityLevels?: Array<LookupDto> | null;
    lists?: Array<TodoListDto> | null;
}

