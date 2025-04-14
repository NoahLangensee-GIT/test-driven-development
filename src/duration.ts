export function formatDuration(totalSeconds: number): string {
  if (totalSeconds < 0) {
    throw new Error("Negative Zahlen können nicht formatiert werden");
  }

  // Round the total seconds to the nearest whole number
  const roundedSecondsTotal = Math.round(totalSeconds);
  if (roundedSecondsTotal === 0) {
    return '0s';
  }
  const hours = Math.floor(roundedSecondsTotal / 3600);
  const minutes = Math.floor((roundedSecondsTotal % 3600) / 60);
  const seconds = roundedSecondsTotal % 60;
  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours}h`);
  }
  if (minutes > 0) {
    parts.push(`${minutes}m`);
  }
  if (seconds > 0) {
    parts.push(`${seconds}s`);
  }
  return parts.join('');
}
