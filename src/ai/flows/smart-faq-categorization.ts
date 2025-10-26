'use server';

/**
 * @fileOverview A flow that categorizes FAQ entries into predefined categories using AI.
 *
 * - categorizeFaqEntry - A function that categorizes a FAQ entry.
 * - CategorizeFaqEntryInput - The input type for the categorizeFaqEntry function.
 * - CategorizeFaqEntryOutput - The return type for the categorizeFaqEntry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeFaqEntryInputSchema = z.object({
  faqEntry: z.string().describe('The FAQ entry to categorize.'),
});

export type CategorizeFaqEntryInput = z.infer<typeof CategorizeFaqEntryInputSchema>;

const CategorizeFaqEntryOutputSchema = z.object({
  category: z
    .enum(['General', 'Inscription', 'Parent Portal', 'Dentist'])
    .describe('The category the FAQ entry belongs to.'),
});

export type CategorizeFaqEntryOutput = z.infer<typeof CategorizeFaqEntryOutputSchema>;

export async function categorizeFaqEntry(
  input: CategorizeFaqEntryInput
): Promise<CategorizeFaqEntryOutput> {
  return categorizeFaqEntryFlow(input);
}

const categorizeFaqEntryPrompt = ai.definePrompt({
  name: 'categorizeFaqEntryPrompt',
  input: {schema: CategorizeFaqEntryInputSchema},
  output: {schema: CategorizeFaqEntryOutputSchema},
  prompt: `You are an expert at categorizing FAQ entries for a website.

  Given the following FAQ entry, determine which category it belongs to. The possible categories are: General, Inscription, Parent Portal, and Dentist.

  FAQ Entry: {{{faqEntry}}}

  Return only the category name.
  Category:`,
});

const categorizeFaqEntryFlow = ai.defineFlow(
  {
    name: 'categorizeFaqEntryFlow',
    inputSchema: CategorizeFaqEntryInputSchema,
    outputSchema: CategorizeFaqEntryOutputSchema,
  },
  async input => {
    const {output} = await categorizeFaqEntryPrompt(input);
    return output!;
  }
);
