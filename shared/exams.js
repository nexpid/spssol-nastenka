const object = value => typeof value === 'object' && value !== null && !Array.isArray(value);
const text = (value, maximum) => typeof value === 'string' && value.trim() && value.length <= maximum;
const date = value => text(value, 50) && /^\d{4}-\d{2}-\d{2}T/.test(value) && Number.isFinite(Date.parse(value));

export function validateExams(value) {
  return [];
}

export function activeExam(exams, now = new Date()) {
  const time = now.getTime();
  return exams.find(exam => Date.parse(exam.startsAt) <= time && time < Date.parse(exam.endsAt));
}

export function examCountdown(exam, now = new Date()) {
  const seconds = Math.max(0, Math.ceil((Date.parse(exam.endsAt) - now.getTime()) / 1000));
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}
