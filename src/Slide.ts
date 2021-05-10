import Base from "./Base";
import { TYPE } from "./Tab";

class Slide extends Base{
    constructor (el: HTMLElement) {
        super(el, TYPE.SLIDE);

        this.getMethod(this.setPage)
    }

    private setPage (pageInner: HTMLElement, curIndex: number) {
        pageInner.style.transform = `translate3d(${-(curIndex * 500)}px, 0, 0)`;
    }
}

export default Slide