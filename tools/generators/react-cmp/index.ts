import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  readProjectConfiguration,
  Tree,
} from '@nrwl/devkit';
import { paramCase, pascalCase } from 'change-case';
import * as fs from 'fs';
import * as jscodeshift from 'jscodeshift';
import { join } from 'path';
import { slashToDash } from '../utils';
import { ReactCmp } from './schema';

export default async function (host: Tree, schema: ReactCmp) {
  const { name, project } = schema;
  console.log('schema', schema, 'host', host);
  const o = readProjectConfiguration(host, slashToDash(project));
  console.log('o', o);
  const cmpName = pascalCase(name);
  const fileName = paramCase(name);

  // Copy overrides over
  generateFiles(host, join(__dirname, 'files'), o.sourceRoot || o.root, {
    name,
    cmpName,
    fileName,
    tmpl: '',
  });

  if (o.sourceRoot) {
    const indexFilePath = join(host.root, o.sourceRoot, 'index.ts');
    const exportPath = `./lib/${fileName}`;

    const root = jscodeshift(fs.readFileSync(indexFilePath, 'utf-8'));
    root
      .find(jscodeshift.ExportNamedDeclaration, {
        source: {
          value: exportPath,
        },
      })
      .remove();
    root
      .get()
      .node.program.body.unshift(`export { ${cmpName} } from '${exportPath}';`);
    fs.writeFileSync(indexFilePath, root.toSource());
  }

  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
