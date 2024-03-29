/* eslint-disable @typescript-eslint/no-unused-vars */
export const getVoid = (payload?: unknown): void => undefined;
export const getInverted = (payload: unknown): boolean => !payload;
export const setBoolean = (state: unknown, value: unknown): boolean =>
  Boolean(value);
export const setTrue = (state?: unknown, payload?: unknown): true => true;
export const setFalse = (state?: unknown, payload?: unknown): false => false;
export const setNull = (state?: unknown, payload?: unknown): null => null;
export const setPayload = <Payload = unknown>(
  state: unknown,
  payload: Payload
): Payload => payload;
