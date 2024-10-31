import { z } from 'zod';

export const trainerSchema = () =>
  z.object({
    name: z
      .string({ message: 'Field is required' })
      .min(2, 'Required from 2 to 20 symbols')
      .max(20, 'Required from 2 to 20 symbols'),
    age: z
      .number({ message: 'Field is required' })
      .min(16, 'Required range from 16-99')
      .max(99, 'Required range from 16-99'),
    pokemon: z
      .object({
        id: z.string(),
        name: z.string()
      })
      .superRefine((data, ctx) => {
        if (!data.id || !data.name) {
          ctx.addIssue({
            code: 'custom',
            path: [],
            message: 'Field is required'
          });
        }
      })
  });

export type TrainerFormValues = z.infer<ReturnType<typeof trainerSchema>>;
