import {
  ClassConstructor,
  ClassTransformOptions,
} from 'class-transformer/types/interfaces';
import { plainToInstance } from 'class-transformer';

export function customPlainToInstance<T>(
  cls: ClassConstructor<T>,
  plain: T,
  options?: ClassTransformOptions
): T {
  return plainToInstance(cls, plain, options);
}
