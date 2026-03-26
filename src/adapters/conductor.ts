import { BaseAdapter } from './base.js';
import { stat } from 'node:fs/promises';
import { join } from 'node:path';

export class ConductorAdapter extends BaseAdapter {
  get name(): string { return 'conductor'; }
  get relPath(): string { return '.context/aimemory.md'; }

  async detect(): Promise<boolean> {
    try {
      await stat(join(this.projectDir, '.context'));
      return true;
    } catch {
      return false;
    }
  }
}
