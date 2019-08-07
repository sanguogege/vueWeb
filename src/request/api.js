/**   
 * api接口统一管理
 */
import { get, post } from './http';

export const IndexGet = p => get('http://127.0.0.1:7001/api/v2/topics', p);