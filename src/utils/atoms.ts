import { atom } from "jotai";

type YYYY = `20${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
type MM = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `1${0 | 1 | 2}`
type DD = `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `${1 | 2}${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}` | `3${0 | 1}`
export type YYYYMMDD = `${YYYY}-${MM}-${DD}`

export const currentDateAtom = atom<YYYYMMDD>('2024-04-13')
export const datesListAtom = atom<YYYYMMDD[]>(['2024-04-13', '2024-04-14'])