// lib/getMessages.ts
export async function getMessages(locale: string) {
  switch (locale) {
    case "om":
      return (await import("../app/messages/om.json")).default;
    case "en":
    default:
      return (await import("../app/messages/en.json")).default;
  }
}
