import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

type OgFont = {
  name: string;
  data: Buffer;
  style: 'normal';
  weight: 500 | 700;
};

export async function loadOgFonts(): Promise<OgFont[]> {
  const [inter, spaceGrotesk] = await Promise.all([
    readFile(join(process.cwd(), 'assets/fonts/Inter.woff')),
    readFile(join(process.cwd(), 'assets/fonts/SpaceGrotesk.woff')),
  ]);

  return [
    {
      name: 'Inter',
      data: inter,
      style: 'normal',
      weight: 500,
    },
    {
      name: 'Space Grotesk',
      data: spaceGrotesk,
      style: 'normal',
      weight: 700,
    },
  ];
}
