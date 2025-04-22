// noinspection JSUnusedLocalSymbols
'use server';
/**
 * @fileOverview This file defines a Genkit flow for suggesting relevant anime-style stickers or emojis based on the content of a message.
 *
 * - suggestAnimeStickers - A function that takes a message as input and returns a list of suggested stickers or emojis.
 * - SuggestAnimeStickersInput - The input type for the suggestAnimeStickers function.
 * - SuggestAnimeStickersOutput - The return type for the suggestAnimeStickers function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuggestAnimeStickersInputSchema = z.object({
  message: z.string().describe('The content of the message.'),
});
export type SuggestAnimeStickersInput = z.infer<typeof SuggestAnimeStickersInputSchema>;

const SuggestAnimeStickersOutputSchema = z.object({
  suggestions: z.array(
    z.string().describe('A suggested anime-style sticker or emoji.')
  ).describe('A list of suggested anime-style stickers or emojis.'),
});
export type SuggestAnimeStickersOutput = z.infer<typeof SuggestAnimeStickersOutputSchema>;

export async function suggestAnimeStickers(input: SuggestAnimeStickersInput): Promise<SuggestAnimeStickersOutput> {
  return suggestAnimeStickersFlow(input);
}

const suggestAnimeStickersPrompt = ai.definePrompt({
  name: 'suggestAnimeStickersPrompt',
  input: {
    schema: z.object({
      message: z.string().describe('The content of the message.'),
    }),
  },
  output: {
    schema: z.object({
      suggestions: z.array(
        z.string().describe('A suggested anime-style sticker or emoji.')
      ).describe('A list of suggested anime-style stickers or emojis.'),
    }),
  },
  prompt: `You are an AI assistant that suggests relevant anime-style stickers or emojis based on the content of a message.

  Message: {{{message}}}

  Suggestions (List of anime-style stickers or emojis):`,
});

const suggestAnimeStickersFlow = ai.defineFlow<
  typeof SuggestAnimeStickersInputSchema,
  typeof SuggestAnimeStickersOutputSchema
>({
  name: 'suggestAnimeStickersFlow',
  inputSchema: SuggestAnimeStickersInputSchema,
  outputSchema: SuggestAnimeStickersOutputSchema,
}, async input => {
  const {output} = await suggestAnimeStickersPrompt(input);
  return output!;
});
