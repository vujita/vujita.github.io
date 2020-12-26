import {
  BuilderContext,
  createBuilder,
  BuilderHandlerFn,
} from '@angular-devkit/architect';
import execa from 'execa';
import { Schema } from '../tsm-build/schema';
import { runBuilder } from '../tsm-build/tsm-build';

export const runTSMCheck: BuilderHandlerFn<Schema> = async (
  options: Schema,
  context: BuilderContext,
): Promise<{ success: boolean }> => {
  await runBuilder(options, context);
  const { stdout } = await execa('git', ['status', '--porcelain']);
  if (stdout !== '') {
    throw new Error('tsm-build was not run after changes');
  }
  return { success: true };
};

export default createBuilder(runTSMCheck);
