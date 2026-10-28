export const CONTACT_MODAL_EVENT = "jattari:open-contact";

export function requestContactModal(trigger: HTMLElement) {
  window.dispatchEvent(
    new CustomEvent<HTMLElement>(CONTACT_MODAL_EVENT, { detail: trigger })
  );
}
