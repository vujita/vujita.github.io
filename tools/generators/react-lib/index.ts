import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/react';
import { Schema as ExtReactLibSchema } from '@nrwl/react/src/schematics/library/schema';
import { Linter } from '@nrwl/workspace';
import { paramCase, pascalCase } from 'change-case';
import { join } from 'path';
import { slashToDash } from '../utils';
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
  const o = readProjectConfiguration(host, slashToDash(name));
  const cmpName = pascalCase(name);
  const fileName = paramCase(name);
  // Copy overrides over
  generateFiles(host, join(__dirname, 'files'), o.root, {
    name,
    cmpName,
    fileName,
    tmpl: '',
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
