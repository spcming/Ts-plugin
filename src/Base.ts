import { TYPE } from "./Tab";

abstract class Base {

    private _curIndex: number = 0;
    private _el: HTMLElement;
    private _tabItems: HTMLCollection;
    private _methodArr: any[] = [];
    private _pageElement: HTMLElement | HTMLCollection;

    constructor (el: HTMLElement, type: TYPE) {
        this._el = el;
        this._tabItems = this._el.getElementsByClassName('tab-item')

        switch (type) {
            case TYPE.FADE:
                this._pageElement = this._el.getElementsByClassName('page-item');
                break;
            case TYPE.SLIDE:
                this._pageElement = this._el.getElementsByClassName('inner')[0] as HTMLElement;
                break;
            default:
                break;
        }
        
        this.init();
    }

    private init () {
        this.bindEvent();
    }

    private bindEvent () {
        this._el.addEventListener('click', this.setTab.bind(this), false)
    }

    private setTab (e: MouseEvent) {
        const tar = e.target as HTMLElement;
        const className = tar.className;

        if (className === 'tab-item') {
            this._tabItems[this._curIndex].className = 'tab-item';
            this._curIndex = [].indexOf.call(this._tabItems, tar);
            this._tabItems[this._curIndex].className += ' active'
            this.notify();
        }
    }

    private notify () {
        this._methodArr.forEach((item: any) => {
            item(this._pageElement, this._curIndex);
        })
    } 

    protected getMethod (method: any) {
        this._methodArr.push(method)
    }
}

export default Base