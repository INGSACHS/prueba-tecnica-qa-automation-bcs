import fs from 'fs';
import path from 'path';

export function loadTestData<T>(fileName: string): T[] {
    const filePath = path.resolve(__dirname, `../data/${fileName}`);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}
