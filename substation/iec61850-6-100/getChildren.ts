import { isSCL6100Tag, tags6100 } from './tags.js';

/** Returns SCL valid children from a given [[`parent`]]
 * > NOTE: !!only valid for 2007B4 (Ed2.1) projects
 * > children are in the correct sequence as defined in the 2007B4 schema
 * @returns SCL children for given [[`parent`]] */
export function get6100Children(parent: Element): string[] {
  const parentTag = parent.localName;

  if (!isSCL6100Tag(parentTag)) return [];

  return tags6100[parentTag].children;
}
