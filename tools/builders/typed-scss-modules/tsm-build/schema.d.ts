import { JsonObject } from '@angular-devkit/core';

export interface Schema extends JsonObject {
  globPattern: string;
  includePaths: string[];
  watch: boolean;
}
