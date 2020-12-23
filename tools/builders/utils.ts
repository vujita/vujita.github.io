import { join, resolve as resolvePath } from 'path';
import { Observable, of, zip } from 'rxjs';
import { filter, first, map } from 'rxjs/operators';
import {
  BuilderContext,
  BuilderOutput,
  scheduleTargetAndForget,
  targetFromTargetString,
} from '@angular-devkit/architect';
import { NxJson } from '@nrwl/workspace';
import * as fs from 'fs-extra';

/**
 * (@see https://github.com/nrwl/nx/blob/master/packages/node/src/builders/execute/execute.impl.ts#L162)
 */
export const runWaitUntilTargets = (
  options: { waitUntilTargets?: string[] } = { waitUntilTargets: [] },
  context: BuilderContext
): Observable<BuilderOutput> => {
  // Nothing to wait for
  if (!options.waitUntilTargets || options.waitUntilTargets.length === 0) {
    return of({ success: true });
  }

  return zip(
    ...options.waitUntilTargets.map((b) => {
      return scheduleTargetAndForget(context, targetFromTargetString(b)).pipe(
        filter((e) => e.success !== undefined),
        first()
      );
    })
  ).pipe(
    map((results) => {
      return { success: !results.some((r) => !r.success) };
    })
  );
};

export const getProjectRoot = async (
  context: BuilderContext
): Promise<string> => {
  const projectMeta = await context.getProjectMetadata(context.target!.project);
  if (projectMeta.root) {
    return projectMeta.root as string;
  }
  context.reportStatus('Error');
  const message = `${
    context.target!.project
  } is missing a root. It needs to be defined`;
  context.logger.error(message);
  throw new Error(message);
};

export const wsPath = (relPath: string, context: BuilderContext) =>
  resolvePath(context.workspaceRoot, relPath);

export const removeWsDir = async (path: string): Promise<void> => {
  try {
    const dirPath = await fs.stat(path);
    if (dirPath.isDirectory()) {
      await fs.remove(path);
    }
  } catch (err) {
    console.error(`${path} doesn't exist`);
  }
};

export const getNxJson = async (workspaceRoot: string): Promise<NxJson> => {
  const nxJsonPath = join(workspaceRoot, 'nx.json');
  const nxJsonExists = await fs.stat(nxJsonPath);
  if (!nxJsonExists) {
    throw new Error(`${nxJsonPath} doesn't exists`);
  }
  const data = await fs.readFile(join(workspaceRoot, 'nx.json'), 'utf-8');
  return JSON.parse(data);
};
