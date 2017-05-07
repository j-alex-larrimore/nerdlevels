/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './signin.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../node_modules/@angular/forms/src/directives/reactive_directives/form_group_directive.ngfactory';
import * as import9 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import10 from '../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import11 from '../node_modules/@angular/forms/src/directives/reactive_directives/form_control_name.ngfactory';
import * as import12 from '@angular/core/src/linker/element_ref';
import * as import13 from '@angular/forms/src/directives/default_value_accessor';
import * as import14 from '@angular/forms/src/directives/control_value_accessor';
import * as import15 from '@angular/forms/src/directives/reactive_directives/form_control_name';
import * as import16 from '@angular/forms/src/directives/ng_control';
import * as import17 from '@angular/forms/src/directives/ng_control_status';
import * as import18 from '@angular/forms/src/directives/reactive_directives/form_group_directive';
import * as import19 from '@angular/forms/src/directives/control_container';
export class Wrapper_SigninComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SigninComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.SigninComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
var renderType_SigninComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SigninComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SigninComponent>;
  _SigninComponent_0_3:Wrapper_SigninComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SigninComponent_Host0,renderType_SigninComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'app-signin',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SigninComponent0(this.viewUtils,this,0,this._el_0);
    this._SigninComponent_0_3 = new Wrapper_SigninComponent();
    this.compView_0.create(this._SigninComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SigninComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SigninComponent) && (0 === requestNodeIndex))) { return this._SigninComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SigninComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SigninComponentNgFactory:import7.ComponentFactory<import0.SigninComponent> = new import7.ComponentFactory<import0.SigninComponent>('app-signin',View_SigninComponent_Host0,import0.SigninComponent);
const styles_SigninComponent:any[] = ([] as any[]);
var renderType_SigninComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_SigninComponent,{});
export class View_SigninComponent0 extends import1.AppView<import0.SigninComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _FormGroupDirective_2_3:import8.Wrapper_FormGroupDirective;
  _ControlContainer_2_4:any;
  _NgControlStatusGroup_2_5:import9.Wrapper_NgControlStatusGroup;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _DefaultValueAccessor_9_3:import10.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_9_4:any[];
  _FormControlName_9_5:import11.Wrapper_FormControlName;
  _NgControl_9_6:any;
  _NgControlStatus_9_7:import9.Wrapper_NgControlStatus;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _DefaultValueAccessor_17_3:import10.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_17_4:any[];
  _FormControlName_17_5:import11.Wrapper_FormControlName;
  _NgControl_17_6:any;
  _NgControlStatus_17_7:import9.Wrapper_NgControlStatus;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  /*private*/ _expr_37:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SigninComponent0,renderType_SigninComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._expr_37 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','col-md-8 col-md-offset-2'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'form',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._FormGroupDirective_2_3 = new import8.Wrapper_FormGroupDirective((null as any),(null as any));
    this._ControlContainer_2_4 = this._FormGroupDirective_2_3.context;
    this._NgControlStatusGroup_2_5 = new import9.Wrapper_NgControlStatusGroup(this._ControlContainer_2_4);
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'label',new import3.InlineArray2(2,'for','email'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'Mail',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n            ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_4,'input',new import3.InlineArray8(8,'class','form-control','formControlName','email','id','email','type','email'),(null as any));
    this._DefaultValueAccessor_9_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer,new import12.ElementRef(this._el_9));
    this._NG_VALUE_ACCESSOR_9_4 = [this._DefaultValueAccessor_9_3.context];
    this._FormControlName_9_5 = new import11.Wrapper_FormControlName(this._ControlContainer_2_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_9_4);
    this._NgControl_9_6 = this._FormControlName_9_5.context;
    this._NgControlStatus_9_7 = new import9.Wrapper_NgControlStatus(this._NgControl_9_6);
    this._text_10 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_11 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_12,'label',new import3.InlineArray2(2,'for','password'),(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'Password',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_12,'input',new import3.InlineArray8(8,'class','form-control','formControlName','password','id','password','type','password'),(null as any));
    this._DefaultValueAccessor_17_3 = new import10.Wrapper_DefaultValueAccessor(this.renderer,new import12.ElementRef(this._el_17));
    this._NG_VALUE_ACCESSOR_17_4 = [this._DefaultValueAccessor_17_3.context];
    this._FormControlName_17_5 = new import11.Wrapper_FormControlName(this._ControlContainer_2_4,(null as any),(null as any),this._NG_VALUE_ACCESSOR_17_4);
    this._NgControl_17_6 = this._FormControlName_17_5.context;
    this._NgControlStatus_17_7 = new import9.Wrapper_NgControlStatus(this._NgControl_17_6);
    this._text_18 = this.renderer.createText(this._el_12,'\n        ',(null as any));
    this._text_19 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_2,'button',new import3.InlineArray4(4,'class','btn btn-primary','type','submit'),(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'Submit',(null as any));
    this._text_22 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_23 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_2,new import3.InlineArray8(6,'ngSubmit',(null as any),'submit',(null as any),'reset',(null as any)),this.eventHandler(this.handleEvent_2));
    this._FormGroupDirective_2_3.subscribe(this,this.eventHandler(this.handleEvent_2),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_9,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_9));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_17,new import3.InlineArray4(4,'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_17));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.DefaultValueAccessor) && (9 === requestNodeIndex))) { return this._DefaultValueAccessor_9_3.context; }
    if (((token === import14.NG_VALUE_ACCESSOR) && (9 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_9_4; }
    if (((token === import15.FormControlName) && (9 === requestNodeIndex))) { return this._FormControlName_9_5.context; }
    if (((token === import16.NgControl) && (9 === requestNodeIndex))) { return this._NgControl_9_6; }
    if (((token === import17.NgControlStatus) && (9 === requestNodeIndex))) { return this._NgControlStatus_9_7.context; }
    if (((token === import13.DefaultValueAccessor) && (17 === requestNodeIndex))) { return this._DefaultValueAccessor_17_3.context; }
    if (((token === import14.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_17_4; }
    if (((token === import15.FormControlName) && (17 === requestNodeIndex))) { return this._FormControlName_17_5.context; }
    if (((token === import16.NgControl) && (17 === requestNodeIndex))) { return this._NgControl_17_6; }
    if (((token === import17.NgControlStatus) && (17 === requestNodeIndex))) { return this._NgControlStatus_17_7.context; }
    if (((token === import18.FormGroupDirective) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._FormGroupDirective_2_3.context; }
    if (((token === import19.ControlContainer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._ControlContainer_2_4; }
    if (((token === import17.NgControlStatusGroup) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._NgControlStatusGroup_2_5.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.context.myForm;
    this._FormGroupDirective_2_3.check_form(currVal_2_0_0,throwOnChange,false);
    this._FormGroupDirective_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this._NgControlStatusGroup_2_5.ngDoCheck(this,this._el_2,throwOnChange);
    this._DefaultValueAccessor_9_3.ngDoCheck(this,this._el_9,throwOnChange);
    const currVal_9_1_0:any = 'email';
    this._FormControlName_9_5.check_name(currVal_9_1_0,throwOnChange,false);
    this._FormControlName_9_5.ngDoCheck(this,this._el_9,throwOnChange);
    this._NgControlStatus_9_7.ngDoCheck(this,this._el_9,throwOnChange);
    this._DefaultValueAccessor_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    const currVal_17_1_0:any = 'password';
    this._FormControlName_17_5.check_name(currVal_17_1_0,throwOnChange,false);
    this._FormControlName_17_5.ngDoCheck(this,this._el_17,throwOnChange);
    this._NgControlStatus_17_7.ngDoCheck(this,this._el_17,throwOnChange);
    this._NgControlStatusGroup_2_5.checkHost(this,this,this._el_2,throwOnChange);
    this._NgControlStatus_9_7.checkHost(this,this,this._el_9,throwOnChange);
    this._NgControlStatus_17_7.checkHost(this,this,this._el_17,throwOnChange);
    const currVal_37:boolean = !this.context.myForm.valid;
    if (import3.checkBinding(throwOnChange,this._expr_37,currVal_37)) {
      this.renderer.setElementProperty(this._el_20,'disabled',currVal_37);
      this._expr_37 = currVal_37;
    }
  }
  destroyInternal():void {
    this._FormControlName_9_5.ngOnDestroy();
    this._FormControlName_17_5.ngOnDestroy();
    this._FormGroupDirective_2_3.ngOnDestroy();
  }
  handleEvent_2(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._FormGroupDirective_2_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngSubmit')) {
      const pd_sub_0:any = ((<any>this.context.onSubmit()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_9(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_9_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_17(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_17_3.handleEvent(eventName,$event) && result);
    return result;
  }
}