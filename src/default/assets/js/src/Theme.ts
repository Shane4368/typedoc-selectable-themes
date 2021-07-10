// I copy pasted some stuff from ./typedoc/components/Filter.
// It works!!!

import { FilterItem } from "./typedoc/components/Filter";
import { pointerDown, pointerUp } from "./typedoc/utils/pointer";

export class ThemeItemSelect extends FilterItem<string> {
    private select!: HTMLElement;

    protected initialize() {
        const select = document.querySelector<HTMLElement>("#" + this.key);

        if (!select) return;

        this.select = select;
        const onActivate = () => {
            this.select.classList.add("active");
        };
        const onDeactivate = () => {
            this.select.classList.remove("active");
        };

        this.select.addEventListener(pointerDown, onActivate);
        this.select.addEventListener("mouseover", onActivate);
        this.select.addEventListener("mouseleave", onDeactivate);

        this.select.querySelectorAll("li").forEach((el) => {
            el.addEventListener(pointerUp, (e) => {
                select.classList.remove("active");
                this.setValue((e.target as HTMLElement).dataset.value || "");
            });
        });

        document.addEventListener(pointerDown, (e) => {
            if (this.select.contains(e.target as HTMLElement)) return;

            this.select.classList.remove("active");
        });
    }

    protected handleValueChange(oldValue: string, newValue: string) {
        this.select.querySelectorAll("li.selected").forEach((el) => {
            el.classList.remove("selected");
        });

        const selected = this.select.querySelector<HTMLElement>(
            'li[data-value="' + newValue + '"]'
        );
        const label = this.select.querySelector<HTMLElement>(
            ".tsd-select-label"
        );

        if (selected && label) {
            selected.classList.add("selected");
            label.textContent = selected.textContent;
        }

        document.documentElement.dataset.theme = newValue;
    }

    protected fromLocalStorage(value: string): string {
        return value;
    }

    protected toLocalStorage(value: string): string {
        return value;
    }
}
