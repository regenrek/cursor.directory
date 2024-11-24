import fs from 'fs/promises';
import path from 'path';
import { rules } from '../src/data';

async function combineRules() {
  try {
    // Create dist directory if it doesn't exist
    const distPath = path.join(process.cwd(), 'data');
    await fs.mkdir(distPath, { recursive: true });

    // Write combined rules to rules.db.json
    await fs.writeFile(
      path.join(distPath, 'rules.db.json'),
      JSON.stringify(rules, null, 2)
    );

    console.log('Successfully combined rules into dist/rules.db.json');
  } catch (error) {
    console.error('Error combining rules:', error);
    process.exit(1);
  }
}

combineRules(); 