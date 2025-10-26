'use server';

/**
 * @fileOverview A multilingual content generation AI agent.
 *
 * - generateMultilingualContent - A function that generates product descriptions and FAQs in English, French, and Arabic.
 * - MultilingualContentInput - The input type for the generateMultilingualContent function.
 * - MultilingualContentOutput - The return type for the generateMultilingualContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MultilingualContentInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('The description of the product.'),
  faqQuestions: z.array(z.string()).describe('A list of frequently asked questions about the product.'),
});
export type MultilingualContentInput = z.infer<typeof MultilingualContentInputSchema>;

const MultilingualContentOutputSchema = z.object({
  englishDescription: z.string().describe('The product description in English.'),
  frenchDescription: z.string().describe('The product description in French.'),
  arabicDescription: z.string().describe('The product description in Arabic.'),
  englishFaq: z.array(z.string()).describe('The FAQ in English.'),
  frenchFaq: z.array(z.string()).describe('The FAQ in French.'),
  arabicFaq: z.array(z.string()).describe('The FAQ in Arabic.'),
});
export type MultilingualContentOutput = z.infer<typeof MultilingualContentOutputSchema>;

export async function generateMultilingualContent(
  input: MultilingualContentInput
): Promise<MultilingualContentOutput> {
  return multilingualContentGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'multilingualContentGenerationPrompt',
  input: {schema: MultilingualContentInputSchema},
  output: {schema: MultilingualContentOutputSchema},
  prompt: `You are an expert content creator specializing in generating multilingual content.

  You will generate product descriptions and FAQs in English, French, and Arabic.

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  FAQ Questions: {{#each faqQuestions}}{{{this}}}\n{{/each}}

  Output the product descriptions and FAQs in the following JSON format:
  {
    "englishDescription": "",
    "frenchDescription": "",
    "arabicDescription": "",
    "englishFaq": [""],
    "frenchFaq": [""],
    "arabicFaq": [""]
  }`,
});

const multilingualContentGenerationFlow = ai.defineFlow(
  {
    name: 'multilingualContentGenerationFlow',
    inputSchema: MultilingualContentInputSchema,
    outputSchema: MultilingualContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
