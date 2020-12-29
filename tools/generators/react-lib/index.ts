import { join } from 'path';
import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  readProjectConfiguration,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/react';
import { Schema as ExtReactLibSchema } from '@nrwl/react/src/schematics/library/schema';
import { Linter } from '@nrwl/workspace';
import { ReactLibSchema } from './schema';

export default async function (host: Tree, schema: ReactLibSchema) {
  const { name } = schema;
  const options: ExtReactLibSchema = {
    name: name,
    linter: Linter.EsLint,
    skipFormat: false,
    skipTsConfig: false,
    style: 'none',
    publishable: false,
    component: false,
    unitTestRunner: 'jest',
    tags: 'ui-lib',
  };
  await libraryGenerator(host, options);
  await formatFiles(host);
  const o = readProjectConfiguration(host, name);
  // Copy overrides over
  generateFiles(host, join(__dirname, 'files'), o.root, {});
  return () => {
    installPackagesTask(host);
  };
}
