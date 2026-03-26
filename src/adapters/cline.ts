import { BaseAdapter } from './base.js';

export class ClineAdapter extends BaseAdapter {
  get name(): string { return 'cline'; }
  get relPath(): string { return '.clinerules'; }
}
