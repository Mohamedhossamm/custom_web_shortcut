/** @odoo-module **/

const KEY_LABELS = {
    control: "Ctrl",
    arrowup: "\u2191",
    arrowdown: "\u2193",
    arrowleft: "\u2190",
    arrowright: "\u2192",
    backspace: "\u232B",
    delete: "Del",
    pageup: "PgUp",
    pagedown: "PgDn",
    enter: "\u21B5",
    space: "Space",
};

/**
 * "alt+shift+arrowright" -> "Alt + Shift + →"
 *
 * @param {string} hotkey stored, lowercase, "+"-separated
 * @returns {string}
 */
export function formatHotkey(hotkey) {
    return (hotkey || "")
        .split("+")
        .filter(Boolean)
        .map((part) => KEY_LABELS[part] || part.charAt(0).toUpperCase() + part.slice(1))
        .join(" + ");
}
