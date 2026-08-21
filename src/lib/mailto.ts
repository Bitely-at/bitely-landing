export const CONTACT_EMAIL = "d.fedorov@panda-insurtech.com";

const SUBJECT = "Bitely – Ich möchte mehr erfahren";
const BODY =
  "Hallo, ich interessiere mich für Bitely und würde gerne mehr erfahren. Bitte melden Sie sich bei mir.";

export const CTA_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  SUBJECT
)}&body=${encodeURIComponent(BODY)}`;
