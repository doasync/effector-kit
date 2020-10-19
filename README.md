# Effector kit

🧰

---

## Installation

```bash
npm install effector effector-kit
```

or

```bash
yarn add effector effector-kit
```

## Usage

getVoid:

```ts
sample({
  source: initMapFx.done,
  fn: getVoid,
  target: createPopupFx,
});
```

getInverted:
```ts
sample({
  source: $loader,
  clock: guard($pending, { filter: getInverted }),
  target: removeLoaderFx,
});
```

setPayload:
```ts
$countries.on(fetchCountriesFx.doneData, setPayload);
$schoolId.on(changeSchoolId, setPayload);
```

### Helpers

<details>
<summary>
  All
</summary>

```ts
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
```

</details>
