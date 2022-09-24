const supaKeyPieces = [
  "wwPttUUOIWAu_giTon7gdEXNXS0MWMrREnQw8CeZLpM",
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFobXBrdXNoa2tja29kbnFwYm56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQwMTQ2OTQsImV4cCI6MTk3OTU5MDY5NH0",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
];

const supaKey = supaKeyPieces.reverse().join(".");
const apiSubdomain = "qhmpkushkkckodnqpbnz";
const supaEndpoint = `https://${apiSubdomain}.supabase.co/rest/v1/error_logs`;

/**
 * Report error to error collector, discarding result
 * @param {string} user_agent
 * @param {string} lessons_timetable
 * @param {string} exception
 */
export function reportAppError(user_agent, lessons_timetable, exception) {
  fetch(supaEndpoint, {
    method: "POST",
    headers: {
      apikey: supaKey,
      Authorization: `Bearer ${supaKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      user_agent: user_agent,
      lessons_timetable: lessons_timetable,
      exception: exception,
    }),
  });
}
