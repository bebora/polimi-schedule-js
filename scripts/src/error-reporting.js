const supaKeyPieces = [
  "3yBR5pjy9xZqnRm5KK4cWK2tiQVWQwWSpmRQjBuoFi4",
  "eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsa2dtcmpyZ3ZvcWdsbHRrZ2dvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk1Mjc0ODEsImV4cCI6MjA1NTEwMzQ4MX0",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
];

const supaKey = supaKeyPieces.reverse().join(".");
const apiSubdomain = "ylkgmrjrgvoqglltkggo";
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
