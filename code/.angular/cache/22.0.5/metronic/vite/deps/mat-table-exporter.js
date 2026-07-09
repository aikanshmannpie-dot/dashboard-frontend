import {
  MatTable,
  MatTableModule
} from "./chunk-UP2KCASU.js";
import {
  CdkTableModule
} from "./chunk-46XR66UI.js";
import "./chunk-5WOB5N2N.js";
import "./chunk-4KJOA44O.js";
import "./chunk-PLJ2QXBA.js";
import "./chunk-N4DOILP3.js";
import "./chunk-BYKNE3HZ.js";
import "./chunk-GUGIMSVJ.js";
import "./chunk-NBTZCOI7.js";
import "./chunk-PQSWMWST.js";
import "./chunk-TF62UFC7.js";
import "./chunk-PBFWOT3S.js";
import "./chunk-7ENES7XB.js";
import "./chunk-3EXXPICE.js";
import {
  Directive,
  EventEmitter,
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  Optional,
  Output,
  Self,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵinject,
  ɵɵinvalidFactory
} from "./chunk-VL3LZLGD.js";
import "./chunk-GVFRXGC7.js";
import "./chunk-YYNRWHHG.js";
import "./chunk-KHYTP7BM.js";
import "./chunk-AT63LGFU.js";
import "./chunk-AJZJRYBU.js";
import {
  __async
} from "./chunk-C2MXH2NC.js";

// node_modules/file-saver-es/src/FileSaver.js
var _global = typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : void 0;
function bom(blob, opts) {
  if (typeof opts === "undefined") opts = { autoBom: false };
  else if (typeof opts !== "object") {
    console.warn("Deprecated: Expected third argument to be a object");
    opts = { autoBom: !opts };
  }
  if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
    return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
  }
  return blob;
}
function download(url, name, opts) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.onload = function() {
    saveAs(xhr.response, name, opts);
  };
  xhr.onerror = function() {
    console.error("could not download file");
  };
  xhr.send();
}
function corsEnabled(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", url, false);
  try {
    xhr.send();
  } catch (e) {
  }
  return xhr.status >= 200 && xhr.status <= 299;
}
function click(node) {
  try {
    node.dispatchEvent(new MouseEvent("click"));
  } catch (e) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent(
      "click",
      true,
      true,
      window,
      0,
      0,
      0,
      80,
      20,
      false,
      false,
      false,
      false,
      0,
      null
    );
    node.dispatchEvent(evt);
  }
}
var isMacOSWebView = _global.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent);
var saveAs = _global.saveAs || // probably in some web worker
(typeof window !== "object" || window !== _global ? function saveAs2() {
} : "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? function saveAs3(blob, name, opts) {
  var URL = _global.URL || _global.webkitURL;
  var a = document.createElement("a");
  name = name || blob.name || "download";
  a.download = name;
  a.rel = "noopener";
  if (typeof blob === "string") {
    a.href = blob;
    if (a.origin !== location.origin) {
      corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = "_blank");
    } else {
      click(a);
    }
  } else {
    a.href = URL.createObjectURL(blob);
    setTimeout(function() {
      URL.revokeObjectURL(a.href);
    }, 4e4);
    setTimeout(function() {
      click(a);
    }, 0);
  }
} : "msSaveOrOpenBlob" in navigator ? function saveAs4(blob, name, opts) {
  name = name || blob.name || "download";
  if (typeof blob === "string") {
    if (corsEnabled(blob)) {
      download(blob, name, opts);
    } else {
      var a = document.createElement("a");
      a.href = blob;
      a.target = "_blank";
      setTimeout(function() {
        click(a);
      });
    }
  } else {
    navigator.msSaveOrOpenBlob(bom(blob, opts), name);
  }
} : function saveAs5(blob, name, opts, popup) {
  popup = popup || open("", "_blank");
  if (popup) {
    popup.document.title = popup.document.body.innerText = "downloading...";
  }
  if (typeof blob === "string") return download(blob, name, opts);
  var force = blob.type === "application/octet-stream";
  var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
  var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
    var reader = new FileReader();
    reader.onloadend = function() {
      var url2 = reader.result;
      url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
      if (popup) popup.location.href = url2;
      else location = url2;
      popup = null;
    };
    reader.readAsDataURL(blob);
  } else {
    var URL = _global.URL || _global.webkitURL;
    var url = URL.createObjectURL(blob);
    if (popup) popup.location = url;
    else location.href = url;
    popup = null;
    setTimeout(function() {
      URL.revokeObjectURL(url);
    }, 4e4);
  }
});
_global.saveAs = saveAs.saveAs = saveAs;

// node_modules/cdk-table-exporter/fesm2020/cdk-table-exporter.mjs
var CdkTableExporterModule = class {
};
CdkTableExporterModule.ɵfac = function CdkTableExporterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CdkTableExporterModule)();
};
CdkTableExporterModule.ɵmod = ɵɵdefineNgModule({
  type: CdkTableExporterModule,
  imports: [CdkTableModule]
});
CdkTableExporterModule.ɵinj = ɵɵdefineInjector({
  imports: [CdkTableModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableExporterModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [CdkTableModule],
      exports: []
    }]
  }], null, null);
})();
var ExportType;
(function(ExportType2) {
  ExportType2["XLS"] = "xls";
  ExportType2["XLSX"] = "xlsx";
  ExportType2["CSV"] = "csv";
  ExportType2["TXT"] = "txt";
  ExportType2["JSON"] = "json";
  ExportType2["OTHER"] = "other";
})(ExportType || (ExportType = {}));
var Mime = class {
  constructor(extension, contentTypeHeader) {
    this.extension = extension;
    this.contentTypeHeader = contentTypeHeader;
  }
};
var MAT_TABLE_EXPORTER = "mat-table-exporter";
var TYPE_ARRAY = "array";
var CHAR_SET_UTF = ";charset=utf-";
var CHAR_SET_UTF_8 = CHAR_SET_UTF + "8";
var CONTENT_TYPE_TEXT = ExportType.TXT + "/";
var CONTENT_TYPE_APPLICATION = "application/";
var CONTENT_TYPE_EXCEL = CONTENT_TYPE_APPLICATION + "octet-stream";
var DOT = ".";
var COMMA = ",";
var EXTENSION_XLS = DOT + ExportType.XLS;
var EXTENSION_XLSX = DOT + ExportType.XLSX;
var EXTENSION_CSV = DOT + ExportType.CSV;
var EXTENSION_JSON = DOT + ExportType.JSON;
var EXTENSION_TEXT = DOT + ExportType.TXT;
var MIME_EXCEL_XLS = new Mime(EXTENSION_XLS, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
var MIME_EXCEL_XLSX = new Mime(EXTENSION_XLSX, CONTENT_TYPE_EXCEL + CHAR_SET_UTF_8);
var MIME_JSON = new Mime(EXTENSION_JSON, CONTENT_TYPE_TEXT + JSON + CHAR_SET_UTF_8);
var MIME_TXT = new Mime(EXTENSION_TEXT, CONTENT_TYPE_TEXT + ExportType.TXT + CHAR_SET_UTF_8);
var MIME_CSV = new Mime(EXTENSION_CSV, CONTENT_TYPE_TEXT + ExportType.CSV + CHAR_SET_UTF_8);
var REF = "!ref";
var XLS_REGEX = DOT + "*." + ExportType.XLS + "$";
var RETURN = "\n";
var TAB = "	";
var XLSX_COLS = "!cols";
var BOM = "\uFEFF";
var XLSX_LIGHTWEIGHT = new InjectionToken("XLSX_LIGHTWEIGHT");
var FileUtil = class _FileUtil {
  static save(content, mime, options) {
    const blob = new Blob([content], {
      type: mime.contentTypeHeader
    });
    let fileName = MAT_TABLE_EXPORTER;
    if (options && options.fileName) {
      fileName = options.fileName;
    }
    saveAs(blob, fileName + mime.extension);
  }
  static isXls(fileName) {
    return fileName.toLowerCase().match(XLS_REGEX) != null;
  }
  static identifyExportType(fileName) {
    if (fileName && _FileUtil.isXls(fileName)) {
      return ExportType.XLS;
    } else {
      return ExportType.XLSX;
    }
  }
  static removeExtension(options) {
    if (options) options.fileName = options.fileName?.split(DOT)[0];
  }
};
var FileExporter = class {
  constructor() {
  }
  export(rows, options) {
    if (!rows) {
      throw new Error("Empty json array is provided, rows parameter is mandatory!");
    }
    const mimeType = this.getMimeType();
    this.createContent(rows, options).then((content) => {
      FileUtil.save(content, mimeType, options);
    });
  }
};
FileExporter.ɵfac = function FileExporter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FileExporter)();
};
FileExporter.ɵprov = ɵɵdefineInjectable({
  token: FileExporter,
  factory: FileExporter.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileExporter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var SheetjsHelperService = class {
  constructor(xlsxLightweight) {
    this.xlsxLightweight = xlsxLightweight;
  }
  getXlsx() {
    return __async(this, null, function* () {
      if (this.xlsxLightweight) {
        return yield import("./xlsx.mini.min-XC3U4W27.js");
      } else {
        return yield import("./xlsx-6ET4LMI5.js");
      }
    });
  }
};
SheetjsHelperService.ɵfac = function SheetjsHelperService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SheetjsHelperService)(ɵɵinject(XLSX_LIGHTWEIGHT, 8));
};
SheetjsHelperService.ɵprov = ɵɵdefineInjectable({
  token: SheetjsHelperService,
  factory: SheetjsHelperService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SheetjsHelperService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Inject,
        args: [XLSX_LIGHTWEIGHT]
      }]
    }];
  }, null);
})();
var WorksheetExporter = class extends FileExporter {
  constructor(sheetJsHelper) {
    super();
    this.sheetJsHelper = sheetJsHelper;
  }
  createContent(rows, options) {
    return __async(this, null, function* () {
      const workSheet = (yield this.sheetJsHelper.getXlsx()).utils.json_to_sheet(rows, {
        skipHeader: true
        // we don't want to see object properties as our headers
      });
      return yield this.workSheetToContent(workSheet, options);
    });
  }
};
WorksheetExporter.ɵfac = function WorksheetExporter_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || WorksheetExporter)(ɵɵinject(SheetjsHelperService));
};
WorksheetExporter.ɵprov = ɵɵdefineInjectable({
  token: WorksheetExporter,
  factory: WorksheetExporter.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WorksheetExporter, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
var CsvExporterService = class extends WorksheetExporter {
  constructor(sheetJsHelper) {
    super(sheetJsHelper);
  }
  workSheetToContent(worksheet, options) {
    return __async(this, null, function* () {
      const content = (yield this.sheetJsHelper.getXlsx()).utils.sheet_to_csv(worksheet, {
        FS: options?.delimiter ?? COMMA
      });
      return BOM + content;
    });
  }
  getMimeType() {
    return MIME_CSV;
  }
};
CsvExporterService.ɵfac = function CsvExporterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CsvExporterService)(ɵɵinject(SheetjsHelperService));
};
CsvExporterService.ɵprov = ɵɵdefineInjectable({
  token: CsvExporterService,
  factory: CsvExporterService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CsvExporterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
var TxtExporterService = class extends FileExporter {
  constructor() {
    super();
  }
  createContent(rows, options) {
    return __async(this, null, function* () {
      let content = "";
      rows.forEach((element) => {
        content += Object.values(element).join(this.getDelimiter(options)) + RETURN;
      });
      return content;
    });
  }
  getMimeType() {
    return MIME_TXT;
  }
  getDelimiter(options) {
    if (options && options.delimiter) {
      return options.delimiter;
    } else {
      return TAB;
    }
  }
};
TxtExporterService.ɵfac = function TxtExporterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TxtExporterService)();
};
TxtExporterService.ɵprov = ɵɵdefineInjectable({
  token: TxtExporterService,
  factory: TxtExporterService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TxtExporterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var XlsExporterService = class extends WorksheetExporter {
  constructor(sheetJsHelper) {
    super(sheetJsHelper);
  }
  workSheetToContent(_0) {
    return __async(this, arguments, function* (worksheet, options = {}) {
      const {
        utils,
        write
      } = yield this.sheetJsHelper.getXlsx();
      const workBook = utils.book_new();
      if (options.columnWidths) {
        worksheet[XLSX_COLS] = this.convertToWch(options.columnWidths);
      }
      this.correctTypes(options);
      utils.book_append_sheet(workBook, worksheet, options.sheet);
      return write(workBook, options);
    });
  }
  getMimeType() {
    return MIME_EXCEL_XLS;
  }
  correctTypes(options) {
    if (!options.type) {
      options.type = TYPE_ARRAY;
    }
    options.bookType = this.getMimeType().extension.replace(".", "");
  }
  convertToWch(columnWidths) {
    return columnWidths.map((width) => ({
      wch: width
    }));
  }
};
XlsExporterService.ɵfac = function XlsExporterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || XlsExporterService)(ɵɵinject(SheetjsHelperService));
};
XlsExporterService.ɵprov = ɵɵdefineInjectable({
  token: XlsExporterService,
  factory: XlsExporterService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XlsExporterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
var JsonExporterService = class extends FileExporter {
  constructor() {
    super();
  }
  createContent(rows, options) {
    return __async(this, null, function* () {
      return JSON.stringify(rows);
    });
  }
  getMimeType() {
    return MIME_JSON;
  }
};
JsonExporterService.ɵfac = function JsonExporterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || JsonExporterService)();
};
JsonExporterService.ɵprov = ɵɵdefineInjectable({
  token: JsonExporterService,
  factory: JsonExporterService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JsonExporterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var XlsxExporterService = class extends XlsExporterService {
  constructor(sheetJsHelper) {
    super(sheetJsHelper);
  }
  getMimeType() {
    return MIME_EXCEL_XLSX;
  }
};
XlsxExporterService.ɵfac = function XlsxExporterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || XlsxExporterService)(ɵɵinject(SheetjsHelperService));
};
XlsxExporterService.ɵprov = ɵɵdefineInjectable({
  token: XlsxExporterService,
  factory: XlsxExporterService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XlsxExporterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: SheetjsHelperService
    }];
  }, null);
})();
var ServiceLocatorService = class {
  constructor(injector) {
    this.injector = injector;
  }
  getService(exportType, customExporter) {
    switch (exportType) {
      case ExportType.XLS.valueOf():
        return this.injector.get(XlsExporterService);
      case ExportType.XLSX.valueOf():
        return this.injector.get(XlsxExporterService);
      case ExportType.JSON.valueOf():
        return this.injector.get(JsonExporterService);
      case ExportType.TXT.valueOf():
        return this.injector.get(TxtExporterService);
      case ExportType.CSV.valueOf():
        return this.injector.get(CsvExporterService);
      case ExportType.OTHER.valueOf():
        if (!customExporter) {
          console.error("Provide a custom exporter implementation. Using default exporter.");
          return this.injector.get(XlsxExporterService);
        } else {
          return customExporter;
        }
      default:
        return this.injector.get(XlsxExporterService);
    }
  }
};
ServiceLocatorService.ɵfac = function ServiceLocatorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ServiceLocatorService)(ɵɵinject(Injector));
};
ServiceLocatorService.ɵprov = ɵɵdefineInjectable({
  token: ServiceLocatorService,
  factory: ServiceLocatorService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceLocatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: Injector
    }];
  }, null);
})();
var DataExtractorService = class {
  constructor() {
  }
  extractRows(cdkTable, hiddenColumns, outlet) {
    return this.getRowsAsJsonArray(cdkTable, outlet ?? cdkTable._rowOutlet, hiddenColumns);
  }
  getRowsAsJsonArray(cdkTable, outlet, hiddenColumns) {
    const renderedRows = this.getRenderedRows(cdkTable, outlet);
    return this.convertToJsonArray(renderedRows, hiddenColumns);
  }
  getRenderedRows(cdkTable, outlet) {
    return cdkTable._getRenderedRows(outlet);
  }
  convertToJsonArray(rows, hiddenColumns) {
    const result = new Array();
    for (let i = 0; i < rows.length; i++) {
      const row = this.convertRow(rows[i], hiddenColumns);
      result.push(this.createExcelItem(row));
    }
    return result;
  }
  convertRow(row, hiddenColumns) {
    const result = new Array();
    const cells = row.children;
    for (let i = 0; i < cells.length; i++) {
      if (!this.shouldHide(i, hiddenColumns)) {
        const element = cells.item(i).innerText.trim();
        result.push(element);
      }
    }
    return result;
  }
  shouldHide(columnIndex, hiddenColumns) {
    if (hiddenColumns && hiddenColumns.includes(columnIndex)) {
      return true;
    } else {
      return false;
    }
  }
  createExcelItem(row) {
    return Object.assign({}, row);
  }
};
DataExtractorService.ɵfac = function DataExtractorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || DataExtractorService)();
};
DataExtractorService.ɵprov = ɵɵdefineInjectable({
  token: DataExtractorService,
  factory: DataExtractorService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataExtractorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var CdkTableExporter = class {
  constructor(serviceLocator, dataExtractor, _cdkTable) {
    this.serviceLocator = serviceLocator;
    this.dataExtractor = dataExtractor;
    this._cdkTable = _cdkTable;
    this.exportCompleted = new EventEmitter();
    this.exportStarted = new EventEmitter();
  }
  /**
   * Triggers page event chain thus extracting and exporting all the rows in nativetables in pages
   */
  exportTable(exportType, options) {
    this.loadExporter(exportType);
    this._options = options;
    this.exportStarted.emit();
    this._isIterating = true;
    this._isExporting = true;
    this._data = new Array();
    this.extractTableHeader();
    try {
      this.exportWithPagination();
    } catch (notPaginated) {
      this.exportSinglePage();
    }
  }
  toggleRow(index) {
    const paginatedRowIndex = this.getPaginatedRowIndex(index);
    if (this.isToggleOn(paginatedRowIndex)) {
      this.toggleOff(paginatedRowIndex);
    } else {
      this.toggleOn(paginatedRowIndex);
    }
  }
  /**
   * This event will clear rows selection done using toggleRow functionality
   */
  resetToggleRows() {
    this._selectedRows = [];
  }
  toggleOn(index) {
    this._selectedRows = [...this._selectedRows || [], index];
  }
  toggleOff(index) {
    this._selectedRows = this._selectedRows.filter((x) => x !== index);
  }
  isToggleOn(index) {
    return this._selectedRows?.includes(index);
  }
  loadExporter(exportType) {
    this._exporterService = this.serviceLocator.getService(exportType, this.exporter);
  }
  exportWithPagination() {
    this._initialPageIndex = this.getCurrentPageIndex();
    this.initPageHandler();
    this.goToPage(0);
  }
  exportSinglePage() {
    this.extractDataOnCurrentPage();
    this.extractTableFooter();
    this.exportExtractedData();
  }
  extractDataOnCurrentPage() {
    const rows = this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns);
    this._data = this._data.concat(this.getSelectedRows(rows));
  }
  getSelectedRows(rows) {
    if (this.isSelectiveExport()) {
      return rows.filter((_, i) => this._selectedRows.includes(this.getPaginatedRowIndex(i)));
    } else {
      return rows;
    }
  }
  isSelectiveExport() {
    return this._selectedRows && !this.isMasterToggleOff() && !this.isMasterToggleOn();
  }
  isMasterToggleOn() {
    return this.compareSelectedRowCount(this.getTotalItemsCount());
  }
  isMasterToggleOff() {
    return this.compareSelectedRowCount(0);
  }
  compareSelectedRowCount(rowCount) {
    return !!(this._selectedRows.length === rowCount);
  }
  initPageHandler() {
    if (!this._subscription) {
      this._subscription = this.getPageChangeObservable()?.subscribe(() => {
        setTimeout(() => {
          if (this._isIterating) {
            this.extractDataOnCurrentPage();
            if (this.hasNextPage()) {
              this.nextPage();
            } else {
              this._isIterating = false;
              this.goToPage(this._initialPageIndex);
            }
          } else if (this._isExporting) {
            this._isExporting = false;
            this.extractTableFooter();
            this.exportExtractedData();
          }
        });
      });
    }
  }
  exportExtractedData() {
    this._exporterService.export(this._data, this._options);
    this._data = new Array();
    this.exportCompleted.emit();
  }
  extractSpecialRows(outlet) {
    this._data.push(...this.dataExtractor.extractRows(this._cdkTable, this.hiddenColumns, outlet));
  }
  extractTableHeader() {
    this.extractSpecialRows(this._cdkTable._headerRowOutlet);
  }
  extractTableFooter() {
    this.extractSpecialRows(this._cdkTable._footerRowOutlet);
  }
  hasNextPage() {
    if (this.getCurrentPageIndex() < this.getPageCount() - 1) {
      return true;
    } else {
      return false;
    }
  }
  nextPage() {
    this.goToPage(this.getCurrentPageIndex() + 1);
  }
  getPaginatedRowIndex(index) {
    return index + this.getPageSize() * this.getCurrentPageIndex();
  }
};
CdkTableExporter.ɵfac = function CdkTableExporter_Factory(__ngFactoryType__) {
  ɵɵinvalidFactory();
};
CdkTableExporter.ɵdir = ɵɵdefineDirective({
  type: CdkTableExporter,
  inputs: {
    hiddenColumns: "hiddenColumns",
    exporter: "exporter"
  },
  outputs: {
    exportCompleted: "exportCompleted",
    exportStarted: "exportStarted"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableExporter, [{
    type: Directive
  }], function() {
    return [{
      type: ServiceLocatorService
    }, {
      type: DataExtractorService
    }, {
      type: void 0
    }];
  }, {
    hiddenColumns: [{
      type: Input
    }],
    exporter: [{
      type: Input
    }],
    exportCompleted: [{
      type: Output
    }],
    exportStarted: [{
      type: Output
    }]
  });
})();

// node_modules/mat-table-exporter/fesm2020/mat-table-exporter.mjs
var MatTableExporterDirective = class extends CdkTableExporter {
  /**
   * Overriding ngAfterViewInit of TableExporter
   */
  ngAfterViewInit() {
    this.exportStarted.subscribe((_) => {
      this.enablePaginator(false);
    });
    this.exportCompleted.subscribe((_) => {
      this.enablePaginator(true);
    });
  }
  constructor(serviceLocator, dataExtractor, table) {
    super(serviceLocator, dataExtractor, table);
  }
  /**
   * MatTable implementation of getPageCount
   */
  getPageCount() {
    const pageSize = this.getPageSize();
    if (pageSize == 0) {
      return 0;
    }
    const pageCount = this.getTotalItemsCount() / this.getPageSize();
    return Math.ceil(pageCount) ?? 1;
  }
  /**
   * MatTable implementation of getPageSize
   */
  getPageSize() {
    return this.getPaginator()?.pageSize ?? 0;
  }
  /**
   * MatTable implementation of getCurrentPageIndex
   */
  getCurrentPageIndex() {
    return this.getPaginator()?.pageIndex ?? 0;
  }
  /**
   * MatTable implementation of getTotalItemsCount
   */
  getTotalItemsCount() {
    return this.getPaginator()?.length ?? this.getDataSource()?.data?.length ?? 0;
  }
  /**
   * MatTable implementation of goToPage
   */
  goToPage(index) {
    const paginator = this.getPaginator();
    paginator.pageIndex = index;
    paginator._changePageSize(paginator.pageSize);
  }
  /**
   * MatTable implementation of getPageChangeObservable
   */
  getPageChangeObservable() {
    return this.getPaginator()?.page;
  }
  getDataSource() {
    return this._cdkTable.dataSource;
  }
  getPaginator() {
    return this.getDataSource()?.paginator;
  }
  enablePaginator(value) {
    const paginator = this.getPaginator();
    paginator.disabled = !value;
    paginator._changePageSize(paginator.pageSize);
  }
};
MatTableExporterDirective.ɵfac = function MatTableExporterDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatTableExporterDirective)(ɵɵdirectiveInject(ServiceLocatorService), ɵɵdirectiveInject(DataExtractorService), ɵɵdirectiveInject(MatTable, 11));
};
MatTableExporterDirective.ɵdir = ɵɵdefineDirective({
  type: MatTableExporterDirective,
  selectors: [["", "matTableExporter", ""]],
  exportAs: ["matTableExporter"],
  standalone: false,
  features: [ɵɵInheritDefinitionFeature]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableExporterDirective, [{
    type: Directive,
    args: [{
      selector: "[matTableExporter]",
      exportAs: "matTableExporter"
    }]
  }], function() {
    return [{
      type: ServiceLocatorService
    }, {
      type: DataExtractorService
    }, {
      type: MatTable,
      decorators: [{
        type: Host
      }, {
        type: Self
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var MatTableExporterModule = class _MatTableExporterModule {
  static forRoot(configuration) {
    return {
      ngModule: _MatTableExporterModule,
      providers: [{
        provide: XLSX_LIGHTWEIGHT,
        useValue: configuration.xlsxLightWeight
      }]
    };
  }
};
MatTableExporterModule.ɵfac = function MatTableExporterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || MatTableExporterModule)();
};
MatTableExporterModule.ɵmod = ɵɵdefineNgModule({
  type: MatTableExporterModule,
  declarations: [MatTableExporterDirective],
  imports: [MatTableModule, CdkTableExporterModule],
  exports: [MatTableExporterDirective]
});
MatTableExporterModule.ɵinj = ɵɵdefineInjector({
  imports: [MatTableModule, CdkTableExporterModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableExporterModule, [{
    type: NgModule,
    args: [{
      declarations: [MatTableExporterDirective],
      imports: [MatTableModule, CdkTableExporterModule],
      exports: [MatTableExporterDirective]
    }]
  }], null, null);
})();
export {
  BOM,
  CHAR_SET_UTF,
  CHAR_SET_UTF_8,
  COMMA,
  CONTENT_TYPE_APPLICATION,
  CONTENT_TYPE_EXCEL,
  CONTENT_TYPE_TEXT,
  CdkTableExporter,
  CdkTableExporterModule,
  CsvExporterService,
  DOT,
  DataExtractorService,
  EXTENSION_CSV,
  EXTENSION_JSON,
  EXTENSION_TEXT,
  EXTENSION_XLS,
  EXTENSION_XLSX,
  ExportType,
  FileExporter,
  FileUtil,
  JsonExporterService,
  MAT_TABLE_EXPORTER,
  MIME_CSV,
  MIME_EXCEL_XLS,
  MIME_EXCEL_XLSX,
  MIME_JSON,
  MIME_TXT,
  MatTableExporterDirective,
  MatTableExporterModule,
  Mime,
  REF,
  RETURN,
  ServiceLocatorService,
  TAB,
  TYPE_ARRAY,
  TxtExporterService,
  WorksheetExporter,
  XLSX_COLS,
  XLSX_LIGHTWEIGHT,
  XLS_REGEX,
  XlsExporterService,
  XlsxExporterService
};
//# sourceMappingURL=mat-table-exporter.js.map
