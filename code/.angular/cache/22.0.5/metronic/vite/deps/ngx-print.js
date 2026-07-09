import {
  CSP_NONCE,
  DOCUMENT,
  Directive,
  Input,
  NgModule,
  Output,
  Service,
  inject,
  input,
  output,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefineService,
  ɵɵgetInheritedFactory,
  ɵɵlistener
} from "./chunk-VL3LZLGD.js";
import "./chunk-GVFRXGC7.js";
import "./chunk-YYNRWHHG.js";
import {
  Subject,
  take
} from "./chunk-KHYTP7BM.js";
import "./chunk-AT63LGFU.js";
import "./chunk-AJZJRYBU.js";
import "./chunk-C2MXH2NC.js";

// node_modules/ngx-print/fesm2022/ngx-print.mjs
var PrintOptions = class {
  printSectionId = "";
  printTitle = "";
  useExistingCss = false;
  bodyClass = "";
  printMethod = "window";
  previewOnly = false;
  closeWindow = true;
  printDelay = 0;
  constructor(options) {
    if (options) {
      Object.assign(this, options);
    }
  }
};
var PrintBase = class _PrintBase {
  document = inject(DOCUMENT);
  nonce = inject(CSP_NONCE, {
    optional: true
  });
  _iframeElement;
  _printStyle = [];
  _styleSheetFile = "";
  printComplete = new Subject();
  //#region Getters and Setters
  /**
   * Sets the print styles based on the provided values.
   *
   * @param values - Either a key-value pairs object representing print styles, or a raw CSS string.
   * @protected
   */
  setPrintStyle(values) {
    if (typeof values === "string") {
      this._printStyle = values ? [values] : [];
      return;
    }
    this._printStyle = [];
    for (const [selector, declarations] of Object.entries(values)) {
      const body = Object.entries(declarations).map(([property, value]) => `${property}:${value}`).join(";");
      this._printStyle.push(`${selector}{${body}}`);
    }
  }
  /**
   * @returns the string that create the stylesheet which will be injected
   * later within <style></style> tag.
   */
  returnStyleValues() {
    const styleNonce = this.nonce ? ` nonce="${this.nonce}"` : "";
    return `<style${styleNonce}> ${this._printStyle.join(" ")} </style>`;
  }
  /**
   * @returns string which contains the link tags containing the css which will
   * be injected later within <head></head> tag.
   *
   */
  returnStyleSheetLinkTags() {
    return this._styleSheetFile;
  }
  /**
   * Sets the style sheet file based on the provided CSS list.
   *
   * @param {string} cssList - CSS file or list of CSS files.
   * @protected
   */
  // prettier-ignore
  setStyleSheetFile(cssList) {
    if (!cssList) {
      this._styleSheetFile = "";
      return;
    }
    const files = cssList.split(",").map((f) => f.trim());
    const nonceAttr = this.nonce ? ` nonce="${this.nonce}"` : "";
    this._styleSheetFile = files.map((url) => `<link${nonceAttr} rel="stylesheet" type="text/css" href="${url}">`).join("");
  }
  //#endregion
  //#region Private methods used by PrintBase
  syncFormValues(source, clone) {
    const selector = "input, select, textarea";
    const sourceEls = source.querySelectorAll(selector);
    const cloneEls = clone.querySelectorAll(selector);
    for (let i = 0; i < sourceEls.length; i++) {
      const srcNode = sourceEls[i];
      const cloneNode = cloneEls[i];
      if (srcNode instanceof HTMLInputElement) {
        if (srcNode.type === "checkbox" || srcNode.type === "radio") {
          if (srcNode.checked) cloneNode.setAttribute("checked", "");
          else cloneNode.removeAttribute("checked");
        } else if (srcNode.type === "file") {
          continue;
        } else {
          cloneNode.setAttribute("value", srcNode.value);
        }
      } else if (srcNode instanceof HTMLTextAreaElement) {
        cloneNode.textContent = srcNode.value;
      } else if (srcNode instanceof HTMLSelectElement) {
        Array.from(cloneNode.options).forEach((opt, idx) => {
          if (idx === srcNode.selectedIndex) {
            opt.setAttribute("selected", "");
          } else {
            opt.removeAttribute("selected");
          }
        });
      }
    }
  }
  /**
   * Converts a canvas element to an image and returns its HTML string.
   *
   * @param {HTMLCanvasElement} canvasElm - The canvas element to convert.
   * @returns {HTMLImageElement | null} - HTML Element of the image.
   * @private
   */
  canvasToImageHtml(canvasElm) {
    try {
      const dataUrl = canvasElm.toDataURL();
      const img = this.document.createElement("img");
      img.src = dataUrl;
      img.style.maxWidth = "100%";
      const rect = canvasElm.getBoundingClientRect();
      if (rect.width) img.style.width = `${rect.width}px`;
      if (rect.height) img.style.height = `${rect.height}px`;
      return img;
    } catch (err) {
      console.warn(`Canvas conversion failed for ${canvasElm}. Likely the canvas is tainted:`, err);
      return null;
    }
  }
  /**
   * Includes canvas contents in the print section via img tags.
   *
   * @private
   * @param source
   * @param clone
   */
  updateCanvasToImage(source, clone) {
    const sourceCanvases = source.querySelectorAll("canvas");
    const cloneCanvases = clone.querySelectorAll("canvas");
    for (let i = 0; i < sourceCanvases.length; i++) {
      const srcCanvas = sourceCanvases[i];
      const cloneCanvas = cloneCanvases[i];
      const img = this.canvasToImageHtml(srcCanvas);
      if (img) {
        cloneCanvas.replaceWith(img);
      }
    }
  }
  /**
   * Retrieves the HTML content of a specified printing section.
   *
   * @param {string} printSectionId - Id of the printing section.
   * @returns {string | null} - HTML content of the printing section, or null if not found.
   * @private
   */
  getHtmlContents(printSectionId) {
    const sourceElm = this.document.getElementById(printSectionId);
    if (!sourceElm) return null;
    const cloneElm = sourceElm.cloneNode(true);
    this.syncFormValues(sourceElm, cloneElm);
    this.updateCanvasToImage(sourceElm, cloneElm);
    return cloneElm.outerHTML;
  }
  /**
   * Retrieves the HTML content of elements with the specified tag.
   *
   * @param {keyof HTMLElementTagNameMap} tag - HTML tag name.
   * @returns {string} - Concatenated outerHTML of elements with the specified tag.
   * @private
   */
  getElementTag(tag) {
    const html = [];
    const elements = this.document.getElementsByTagName(tag);
    for (const el of Array.from(elements)) {
      html.push(el.outerHTML);
    }
    return html.join("\r\n");
  }
  //#endregion
  notifyPrintComplete() {
    this.printComplete.next();
  }
  /**
   * Prints the specified content using the provided print options.
   *
   * @public
   * @param printOptionInput - Options for printing.
   */
  print(printOptionInput) {
    const printOptions = new PrintOptions(printOptionInput);
    if (printOptions.printMethod === "iframe") {
      this.printWithIframe(printOptions);
    } else {
      this.printWithWindow(printOptions);
    }
  }
  printWithWindow(printOptions) {
    const popOut = printOptions.printMethod === "tab" ? "" : "top=0,left=0,height=auto,width=auto";
    const popupWin = window.open("", "_blank", popOut);
    if (!popupWin) {
      console.error("Could not open print window.");
      return;
    }
    popupWin.document.open();
    this.buildPrintDocument(popupWin.document, printOptions);
    popupWin.document.close();
    const checkClosedInterval = setInterval(() => {
      if (popupWin.closed) {
        clearInterval(checkClosedInterval);
        this.notifyPrintComplete();
      }
    }, 500);
    popupWin.addEventListener("load", () => {
      if (!printOptions.previewOnly) {
        setTimeout(() => {
          popupWin.print();
          if (printOptions.closeWindow) popupWin.close();
        }, printOptions.printDelay || 0);
      }
    });
  }
  printWithIframe(printOptions) {
    if (this._iframeElement) {
      this._iframeElement.remove();
    }
    this._iframeElement = this.document.createElement("iframe");
    const iframe = this._iframeElement;
    iframe.id = "print-iframe-" + (/* @__PURE__ */ new Date()).getTime();
    iframe.style.position = "absolute";
    iframe.style.left = "-9999px";
    iframe.style.top = "-9999px";
    iframe.style.width = "0px";
    iframe.style.height = "0px";
    iframe.ariaHidden = "true";
    this.document.body.appendChild(iframe);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) {
      console.error("Could not access iframe document.");
      this.document.body.removeChild(iframe);
      return;
    }
    iframeDoc.open();
    const success = this.buildPrintDocument(iframeDoc, printOptions);
    if (!success) {
      iframeDoc.close();
      this.document.body.removeChild(iframe);
      return;
    }
    iframeDoc.close();
    iframe.onload = () => {
      const printWindow = iframe.contentWindow;
      if (!printWindow) {
        console.error("Could not access iframe window.");
        this.document.body.removeChild(iframe);
        return;
      }
      setTimeout(() => {
        if (printOptions.previewOnly) {
          return;
        }
        printWindow.focus();
        printWindow.print();
        const mediaQueryList = printWindow.matchMedia("print");
        const listener = (mql) => {
          if (!mql.matches) {
            this.notifyPrintComplete();
            mediaQueryList.removeEventListener("change", listener);
          }
        };
        mediaQueryList.addEventListener("change", listener);
      }, printOptions.printDelay || 0);
    };
  }
  prepareDocumentComponents(printOptions) {
    let styles = "";
    let links = "";
    const baseTag = this.getElementTag("base");
    if (printOptions.useExistingCss) {
      styles = this.getElementTag("style");
      links = this.getElementTag("link");
    }
    const printContents = this.getHtmlContents(printOptions.printSectionId);
    return {
      styles,
      links,
      baseTag,
      printContents
    };
  }
  buildPrintDocument(doc, printOptions) {
    const components = this.prepareDocumentComponents(printOptions);
    if (!components.printContents) {
      console.error(`Print section with id "${printOptions.printSectionId}" not found.`);
      return false;
    }
    const html = doc.createElement("html");
    const head = doc.createElement("head");
    const body = doc.createElement("body");
    const title = doc.createElement("title");
    title.textContent = printOptions.printTitle || "";
    head.appendChild(title);
    if (components.baseTag) {
      head.innerHTML += components.baseTag;
    }
    head.innerHTML += this.returnStyleValues();
    head.innerHTML += this.returnStyleSheetLinkTags();
    head.innerHTML += components.styles;
    head.innerHTML += components.links;
    if (printOptions.bodyClass) body.className = printOptions.bodyClass;
    body.innerHTML += components.printContents;
    html.appendChild(head);
    html.appendChild(body);
    doc.appendChild(html);
    return true;
  }
  static ɵfac = function PrintBase_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrintBase)();
  };
  static ɵprov = ɵɵdefineService({
    token: _PrintBase,
    factory: _PrintBase.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrintBase, [{
    type: Service
  }], null, null);
})();
var NgxPrintDirective = class _NgxPrintDirective extends PrintBase {
  /**
   * Prevents the print dialog from opening on the window
   */
  previewOnly = input(
    false,
    ...ngDevMode ? [{
      debugName: "previewOnly"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  printSectionId = input(
    "",
    ...ngDevMode ? [{
      debugName: "printSectionId"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  printTitle = input(
    "",
    ...ngDevMode ? [{
      debugName: "printTitle"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  useExistingCss = input(
    false,
    ...ngDevMode ? [{
      debugName: "useExistingCss"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
   */
  printDelay = input(
    0,
    ...ngDevMode ? [{
      debugName: "printDelay"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Whether to close the window after print() returns.
   */
  closeWindow = input(
    true,
    ...ngDevMode ? [{
      debugName: "closeWindow"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Class attribute to apply to the body element.
   */
  bodyClass = input(
    "",
    ...ngDevMode ? [{
      debugName: "bodyClass"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  /**
   * Which PrintMethod (iframe/window/tab) to use.
   */
  printMethod = input(
    "window",
    ...ngDevMode ? [{
      debugName: "printMethod"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  printStyle = input(
    {},
    ...ngDevMode ? [{
      debugName: "printStyle"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  styleSheetFile = input(
    "",
    ...ngDevMode ? [{
      debugName: "styleSheetFile"
    }] : (
      /* istanbul ignore next */
      []
    )
  );
  printCompleted = output();
  print() {
    super.setPrintStyle(this.printStyle());
    super.setStyleSheetFile(this.styleSheetFile());
    super.print({
      printSectionId: this.printSectionId(),
      printTitle: this.printTitle(),
      useExistingCss: this.useExistingCss(),
      bodyClass: this.bodyClass(),
      printMethod: this.printMethod(),
      previewOnly: this.previewOnly(),
      closeWindow: this.closeWindow(),
      printDelay: this.printDelay()
    });
    this.printComplete.pipe(take(1)).subscribe(() => {
      this.printCompleted.emit();
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵNgxPrintDirective_BaseFactory;
    return function NgxPrintDirective_Factory(__ngFactoryType__) {
      return (ɵNgxPrintDirective_BaseFactory || (ɵNgxPrintDirective_BaseFactory = ɵɵgetInheritedFactory(_NgxPrintDirective)))(__ngFactoryType__ || _NgxPrintDirective);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _NgxPrintDirective,
    selectors: [["", "ngxPrint", ""]],
    hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function NgxPrintDirective_click_HostBindingHandler() {
          return ctx.print();
        });
      }
    },
    inputs: {
      previewOnly: [1, "previewOnly"],
      printSectionId: [1, "printSectionId"],
      printTitle: [1, "printTitle"],
      useExistingCss: [1, "useExistingCss"],
      printDelay: [1, "printDelay"],
      closeWindow: [1, "closeWindow"],
      bodyClass: [1, "bodyClass"],
      printMethod: [1, "printMethod"],
      printStyle: [1, "printStyle"],
      styleSheetFile: [1, "styleSheetFile"]
    },
    outputs: {
      printCompleted: "printCompleted"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxPrint]",
      standalone: true,
      host: {
        "(click)": "print()"
      }
    }]
  }], null, {
    previewOnly: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "previewOnly",
        required: false
      }]
    }],
    printSectionId: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "printSectionId",
        required: false
      }]
    }],
    printTitle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "printTitle",
        required: false
      }]
    }],
    useExistingCss: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "useExistingCss",
        required: false
      }]
    }],
    printDelay: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "printDelay",
        required: false
      }]
    }],
    closeWindow: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "closeWindow",
        required: false
      }]
    }],
    bodyClass: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "bodyClass",
        required: false
      }]
    }],
    printMethod: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "printMethod",
        required: false
      }]
    }],
    printStyle: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "printStyle",
        required: false
      }]
    }],
    styleSheetFile: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "styleSheetFile",
        required: false
      }]
    }],
    printCompleted: [{
      type: Output,
      args: ["printCompleted"]
    }]
  });
})();
var NgxPrintModule = class _NgxPrintModule {
  static ɵfac = function NgxPrintModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxPrintModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgxPrintModule,
    imports: [NgxPrintDirective],
    exports: [NgxPrintDirective]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintModule, [{
    type: NgModule,
    args: [{
      imports: [NgxPrintDirective],
      exports: [NgxPrintDirective]
    }]
  }], null, null);
})();
var NgxPrintService = class _NgxPrintService extends PrintBase {
  printComplete$ = this.printComplete.asObservable();
  /**
   * Initiates the printing process using the provided print options.
   *
   * @param {PrintOptions} printOptions - Options for configuring the printing process.
   * @memberof NgxPrintService
   * @returns {void}
   */
  print(printOptions) {
    super.print(printOptions);
  }
  /**
   * Sets the print style for the printing process.
   *
   * @param values - Either a dictionary representing the print styles, or a raw CSS string.
   * @memberof NgxPrintService
   * @setter
   */
  set printStyle(values) {
    super.setPrintStyle(values);
  }
  /**
   * Sets the stylesheet file for the printing process.
   *
   * @param {string} cssList - A string representing the path to the stylesheet file.
   * @memberof NgxPrintService
   * @setter
   */
  set styleSheetFile(cssList) {
    super.setStyleSheetFile(cssList);
  }
  static ɵfac = function NgxPrintService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxPrintService)();
  };
  static ɵprov = ɵɵdefineService({
    token: _NgxPrintService,
    factory: _NgxPrintService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxPrintService, [{
    type: Service
  }], null, null);
})();
export {
  NgxPrintDirective,
  NgxPrintModule,
  NgxPrintService,
  PrintOptions
};
//# sourceMappingURL=ngx-print.js.map
