/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './header.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import9 from '@angular/core/src/linker/query_list';
import * as import10 from './node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '@angular/router/src/router';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '@angular/router/src/directives/router_link_active';
export class Wrapper_HeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeaderComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.HeaderComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_HeaderComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_HeaderComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.HeaderComponent>;
  _HeaderComponent_0_3:Wrapper_HeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent_Host0,renderType_HeaderComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-header',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._HeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeaderComponentNgFactory:import7.ComponentFactory<import0.HeaderComponent> = new import7.ComponentFactory<import0.HeaderComponent>('app-header',View_HeaderComponent_Host0,import0.HeaderComponent);
const styles_HeaderComponent:any[] = ([] as any[]);
var renderType_HeaderComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_HeaderComponent,{});
export class View_HeaderComponent0 extends import1.AppView<import0.HeaderComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkActive_7_3:import8.Wrapper_RouterLinkActive;
  _query_RouterLink_7_0:import9.QueryList<any>;
  _query_RouterLinkWithHref_7_1:import9.QueryList<any>;
  _el_8:any;
  _RouterLinkWithHref_8_3:import10.Wrapper_RouterLinkWithHref;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _RouterLinkActive_11_3:import8.Wrapper_RouterLinkActive;
  _query_RouterLink_11_0:import9.QueryList<any>;
  _query_RouterLinkWithHref_11_1:import9.QueryList<any>;
  _el_12:any;
  _RouterLinkWithHref_12_3:import10.Wrapper_RouterLinkWithHref;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _arr_26:any;
  _arr_27:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent0,renderType_HeaderComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_26 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_27 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n        ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'header',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n            ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'nav',new import3.InlineArray2(2,'class','col-md-8 col-md-offset-2'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n                ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'ul',new import3.InlineArray2(2,'class','nav nav-pills'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_5,'li',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkActive_7_3 = new import8.Wrapper_RouterLinkActive(this.parentView.injectorGet(import11.Router,this.parentIndex),new import12.ElementRef(this._el_7),this.renderer);
    this._query_RouterLink_7_0 = new import9.QueryList<any>();
    this._query_RouterLinkWithHref_7_1 = new import9.QueryList<any>();
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_8_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_9 = this.renderer.createText(this._el_8,'Messenger',(null as any));
    this._text_10 = this.renderer.createText(this._el_5,'\n                    ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_5,'li',new import3.InlineArray2(2,'routerLinkActive','active'),(null as any));
    this._RouterLinkActive_11_3 = new import8.Wrapper_RouterLinkActive(this.parentView.injectorGet(import11.Router,this.parentIndex),new import12.ElementRef(this._el_11),this.renderer);
    this._query_RouterLink_11_0 = new import9.QueryList<any>();
    this._query_RouterLinkWithHref_11_1 = new import9.QueryList<any>();
    this._el_12 = import3.createRenderElement(this.renderer,this._el_11,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_12_3 = new import10.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import11.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._text_13 = this.renderer.createText(this._el_12,'Authentication',(null as any));
    this._text_14 = this.renderer.createText(this._el_5,'\n                ',(null as any));
    this._text_15 = this.renderer.createText(this._el_3,'\n            ',(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_12,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_12));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._text_17
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.RouterLinkWithHref) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkWithHref_8_3.context; }
    if (((token === import16.RouterLinkActive) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._RouterLinkActive_7_3.context; }
    if (((token === import15.RouterLinkWithHref) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._RouterLinkWithHref_12_3.context; }
    if (((token === import16.RouterLinkActive) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 13)))) { return this._RouterLinkActive_11_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_7_0_0:any = 'active';
    this._RouterLinkActive_7_3.check_routerLinkActive(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkActive_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_8_0_0:any = this._arr_26('/messages');
    this._RouterLinkWithHref_8_3.check_routerLink(currVal_8_0_0,throwOnChange,false);
    this._RouterLinkWithHref_8_3.ngDoCheck(this,this._el_8,throwOnChange);
    const currVal_11_0_0:any = 'active';
    this._RouterLinkActive_11_3.check_routerLinkActive(currVal_11_0_0,throwOnChange,false);
    this._RouterLinkActive_11_3.ngDoCheck(this,this._el_11,throwOnChange);
    const currVal_12_0_0:any = this._arr_27('/auth');
    this._RouterLinkWithHref_12_3.check_routerLink(currVal_12_0_0,throwOnChange,false);
    this._RouterLinkWithHref_12_3.ngDoCheck(this,this._el_12,throwOnChange);
    if (!throwOnChange) {
      if (this._query_RouterLink_7_0.dirty) {
        this._query_RouterLink_7_0.reset(([] as any[]));
        this._RouterLinkActive_7_3.context.links = this._query_RouterLink_7_0;
        this._query_RouterLink_7_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_7_1.dirty) {
        this._query_RouterLinkWithHref_7_1.reset([this._RouterLinkWithHref_8_3.context]);
        this._RouterLinkActive_7_3.context.linksWithHrefs = this._query_RouterLinkWithHref_7_1;
        this._query_RouterLinkWithHref_7_1.notifyOnChanges();
      }
      if (this._query_RouterLink_11_0.dirty) {
        this._query_RouterLink_11_0.reset(([] as any[]));
        this._RouterLinkActive_11_3.context.links = this._query_RouterLink_11_0;
        this._query_RouterLink_11_0.notifyOnChanges();
      }
      if (this._query_RouterLinkWithHref_11_1.dirty) {
        this._query_RouterLinkWithHref_11_1.reset([this._RouterLinkWithHref_12_3.context]);
        this._RouterLinkActive_11_3.context.linksWithHrefs = this._query_RouterLinkWithHref_11_1;
        this._query_RouterLinkWithHref_11_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_7_3.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._RouterLinkActive_11_3.context.ngAfterContentInit(); }
    }
    this._RouterLinkWithHref_8_3.checkHost(this,this,this._el_8,throwOnChange);
    this._RouterLinkWithHref_12_3.checkHost(this,this,this._el_12,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_8_3.ngOnDestroy();
    this._RouterLinkActive_7_3.ngOnDestroy();
    this._RouterLinkWithHref_12_3.ngOnDestroy();
    this._RouterLinkActive_11_3.ngOnDestroy();
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_8_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_12(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_12_3.handleEvent(eventName,$event) && result);
    return result;
  }
}