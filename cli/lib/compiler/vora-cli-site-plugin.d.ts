/*
 * @Author: wanlixin
 * @Date: 2020-05-09 22:23:49
 * @LastEditors: wanlixin
 * @LastEditTime: 2020-05-17 08:48:57
 * @Description: 
 */
import { Compiler } from 'webpack';
export declare function genSiteEntry(): Promise<unknown>;
export declare class VoraCliSitePlugin {
    apply(compiler: Compiler): void;
}
