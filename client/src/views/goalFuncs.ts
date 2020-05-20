/**
 * Author:      Luxmithan Sukumar
 * File name:   goalFuncs.ts
 * Version:     1.0
 */

export function formatDate(dateArg: number): string {
  const d: Date = new Date(dateArg);
  const year: number = d.getFullYear();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  if (month.length < 2) {
    month = `0${month}`;
  }
  if (day.length < 2) {
    day = `0${day}`;
  }
  return [year, month, day].join('-');
}

export interface GoalParent {
  id?: number;
  goal: string;
  description: string;
  comment?: string | null;
  date?: string;
  userFK?: number;
  finished?: number;
}
