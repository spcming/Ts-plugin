import Base from "./Base";
import { TYPE } from "./Tab";

class Fade extends Base{
    constructor (el: HTMLElement) {
        super(el, TYPE.FADE)
        this.getMethod(this.setPage)
    }

    private setPage (pageItems: HTMLCollection, curIndex:number) {
        [...pageItems].map((item:Element)=>{
            item.className = 'page-item'
        });

        pageItems[curIndex].className += ' active'
    }
}
export default Fade