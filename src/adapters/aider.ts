import { BaseAdapter } from './base.js';
import { parse, serialize } from '../markdown.js';

export class AiderAdapter extends BaseAdapter {
  get name(): string { return 'aider'; }
  get relPath(): string { return '.aider/instructions.md'; }

  async detect(): Promise<boolean> {
    // Aider uses CONVENTIONS.md or .aider/ directory
    const { stat } = await import('node:fs/promises');
    const { join } = await import('node:path');
    try {
      await stat(join(this.projectDir, '.aider'));
      return true;
    } catch {
      try {
        await stat(join(this.projectDir, 'CONVENTIONS.md'));
        return true;
      } catch {
        return false;
      }
    }
  }
}
