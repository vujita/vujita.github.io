import {
  BuilderContext,
  createBuilder,
  BuilderHandlerFn,
  BuilderOutput,
} from '@angular-devkit/architect';
import { join } from 'path';
import { fork } from 'child_process';
import { Schema } from './schema';
import { getProjectRoot } from '../../utils';

const createTSMOptions = (options: Schema): string[] => {
  const cmdArgs: string[] = [];
  cmdArgs.push(options.globPattern);
  if (options.includePaths.length > 0) {
    cmdArgs.push(`--includePaths ${options.includePaths}`);
  }
  if (options.watch) {
    cmdArgs.push('--watch');
  }
  return cmdArgs;
};
export const runBuilder: BuilderHandlerFn<Schema> = async (
  options: Schema,
  context: BuilderContext
): Promise<BuilderOutput> => {
  const workspaceRoot = context.workspaceRoot;
  const projectRoot = await getProjectRoot(context);
  return new Promise<BuilderOutput>((resolve, reject): void => {
    const cp = fork(
      join(workspaceRoot, './node_modules/.bin/tsm'),
      createTSMOptions(options),
      {
        cwd: join(workspaceRoot, projectRoot),
      }
    );
    cp.on('error', (err): void => {
      reject({ success: false, err });
    });
    cp.on('exit', (code): void => {
      if (code === 0) {
        resolve({ success: true });
      } else {
        reject({ success: false, code });
      }
    });
  });
};

export default createBuilder(runBuilder);
