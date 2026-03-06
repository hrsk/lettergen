import { type InstancePlugin, OverlayScrollbars } from "overlayscrollbars";

const fieldTags = "textarea";
const getField = (osInstance: OverlayScrollbars) => {
  const { target, content } = osInstance.elements();
  const { childElementCount, firstElementChild } = target.contains(content) ? content : target;

  return (
    firstElementChild &&
    childElementCount === 1 &&
    firstElementChild !== null &&
    fieldTags === firstElementChild.tagName.toLowerCase() &&
    (firstElementChild as HTMLElement)
  );
};

export const osFieldPlugin = {
  fieldPlugin: {
    instance: (osInstance, event) => {
      const field = getField(osInstance);

      if (!field) {
        return;
      }

      const fieldSizingSupported =
        (field.style as CSSStyleDeclaration & { fieldSizing?: string }).fieldSizing === "content";

      const placeholderDiv = document.createElement("div");
      const updateField = () => {
        const { style, parentElement } = field;

        if (parentElement) {
          const rect = field.getBoundingClientRect();
          placeholderDiv.style.width = `${rect.width}px`;
          placeholderDiv.style.height = `${rect.height}px`;
          parentElement.append(placeholderDiv);
        }

        style.width = "0";
        style.height = "0";

        const w = field.scrollWidth;
        const h = field.scrollHeight;

        style.width = `${w}px`;
        style.height = `${h}px`;

        placeholderDiv.remove();
      };

      placeholderDiv.dataset.overlayscrollbarsField = "";

      event("initialized", () => {
        if (fieldSizingSupported) {
          return;
        }
        field.addEventListener("input", updateField);
        field.addEventListener("change", updateField);
        updateField();
      });

      event("updated", () => {
        if (fieldSizingSupported) {
          return;
        }
        updateField();
      });

      event("destroyed", () => {
        field.removeEventListener("input", updateField);
        field.removeEventListener("change", updateField);
        placeholderDiv.remove();
      });
    },
  },
} satisfies InstancePlugin;
