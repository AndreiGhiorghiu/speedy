"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module2) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module2.exports = arrayMap;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module2) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module2.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module2) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module2.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module2) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module2.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module2.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module2.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module2.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module2) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module2.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module2) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module2.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module2) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module2.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module2) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module2.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module2) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module2.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module2) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module2.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module2) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module2.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module2.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module2) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module2.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module2.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module2) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module2.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module2.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module2) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module2.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module2.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module2) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module2.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module2) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module2.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module2) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module2.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module2.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module2) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module2.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module2) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module2.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module2.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module2) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module2.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module2.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module2) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module2.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module2.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module2) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module2.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module2) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module2.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module2) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module2.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module2) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module2.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module2) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module2.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module2.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module2.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module2.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module2) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module2.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module2) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module2.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module2) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module2.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module2) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module2.exports = Stack;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module2) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module2.exports = arrayEach;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module2) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module2.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module2) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module2.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module2) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module2.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module2) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module2.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module2) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module2.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module2) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module2.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module2.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module2) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module2.exports = isArguments;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module2) {
    var isArray = Array.isArray;
    module2.exports = isArray;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module2) {
    function stubFalse() {
      return false;
    }
    module2.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module2) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module2.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module2.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module2) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module2.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module2.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module2) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module2.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module2) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module2.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module2) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module2.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module2) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module2) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module2.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module2) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module2.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module2) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module2.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module2) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module2) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module2.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module2.exports = keys;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module2.exports = baseAssign;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module2) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module2) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module2.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module2) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module2.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module2) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module2.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module2) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module2 == "object" && module2 && !module2.nodeType && module2;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module2.exports = cloneBuffer;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module2) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module2.exports = copyArray;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module2) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module2.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module2) {
    function stubArray() {
      return [];
    }
    module2.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module2) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module2.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module2) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module2.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module2) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module2.exports = arrayPush;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module2) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module2.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module2.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module2) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module2.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module2.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module2.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module2) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module2.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module2.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module2.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module2.exports = Set;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module2) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module2.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module2) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module2.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module2) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module2.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module2) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module2.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module2) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module2.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module2.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module2) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module2.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module2.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module2.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module2) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module2.exports = initCloneByTag;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module2) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module2.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module2) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module2.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module2.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module2) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module2.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module2) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module2.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module2) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module2.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module2) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module2.exports = baseClone;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module2.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module2) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module2.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module2) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
        if (cache2.has(key)) {
          return cache2.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache2.set(key, result) || cache2;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module2.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module2) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache2.size === MAX_MEMOIZE_SIZE) {
          cache2.clear();
        }
        return key;
      });
      var cache2 = result.cache;
      return result;
    }
    module2.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module2) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module2.exports = stringToPath;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module2) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module2.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module2) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module2.exports = castPath;
  }
});

// node_modules/lodash/last.js
var require_last = __commonJS({
  "node_modules/lodash/last.js"(exports, module2) {
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    module2.exports = last;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module2) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module2.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module2) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path3) {
      path3 = castPath(path3, object);
      var index = 0, length = path3.length;
      while (object != null && index < length) {
        object = object[toKey(path3[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module2.exports = baseGet;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module2) {
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    module2.exports = baseSlice;
  }
});

// node_modules/lodash/_parent.js
var require_parent = __commonJS({
  "node_modules/lodash/_parent.js"(exports, module2) {
    var baseGet = require_baseGet();
    var baseSlice = require_baseSlice();
    function parent(object, path3) {
      return path3.length < 2 ? object : baseGet(object, baseSlice(path3, 0, -1));
    }
    module2.exports = parent;
  }
});

// node_modules/lodash/_baseUnset.js
var require_baseUnset = __commonJS({
  "node_modules/lodash/_baseUnset.js"(exports, module2) {
    var castPath = require_castPath();
    var last = require_last();
    var parent = require_parent();
    var toKey = require_toKey();
    function baseUnset(object, path3) {
      path3 = castPath(path3, object);
      object = parent(object, path3);
      return object == null || delete object[toKey(last(path3))];
    }
    module2.exports = baseUnset;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module2) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module2.exports = isPlainObject;
  }
});

// node_modules/lodash/_customOmitClone.js
var require_customOmitClone = __commonJS({
  "node_modules/lodash/_customOmitClone.js"(exports, module2) {
    var isPlainObject = require_isPlainObject();
    function customOmitClone(value) {
      return isPlainObject(value) ? void 0 : value;
    }
    module2.exports = customOmitClone;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module2) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module2.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module2) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module2.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module2) {
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module2.exports = flatten;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module2) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module2.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module2) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module2.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module2) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module2.exports = constant;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module2) {
    function identity(value) {
      return value;
    }
    module2.exports = identity;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module2) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module2.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module2) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module2.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module2) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module2.exports = setToString;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module2) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module2.exports = flatRest;
  }
});

// node_modules/lodash/omit.js
var require_omit = __commonJS({
  "node_modules/lodash/omit.js"(exports, module2) {
    var arrayMap = require_arrayMap();
    var baseClone = require_baseClone();
    var baseUnset = require_baseUnset();
    var castPath = require_castPath();
    var copyObject = require_copyObject();
    var customOmitClone = require_customOmitClone();
    var flatRest = require_flatRest();
    var getAllKeysIn = require_getAllKeysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var omit2 = flatRest(function(object, paths) {
      var result = {};
      if (object == null) {
        return result;
      }
      var isDeep = false;
      paths = arrayMap(paths, function(path3) {
        path3 = castPath(path3, object);
        isDeep || (isDeep = path3.length > 1);
        return path3;
      });
      copyObject(object, getAllKeysIn(object), result);
      if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
      }
      var length = paths.length;
      while (length--) {
        baseUnset(result, paths[length]);
      }
      return result;
    });
    module2.exports = omit2;
  }
});

// server/config.ts
var import_dotenv = __toESM(require("dotenv"));
var import_dotenv_expand = require("dotenv-expand");
var import_zod = require("zod");
var zConfiguration = import_zod.z.object({
  NODE_ENV: import_zod.z.string(),
  HTTP_HOST: import_zod.z.string(),
  HTTP_PORT: import_zod.z.string(),
  FRONTEND_HOST: import_zod.z.string(),
  FRONTEND_PORT: import_zod.z.string(),
  IS_DEVELOPMENT: import_zod.z.boolean(),
  IS_PRODUCTION: import_zod.z.boolean(),
  URL: import_zod.z.string(),
  SESSION_NAME: import_zod.z.string()
});
var config = {
  ...(0, import_dotenv_expand.expand)(import_dotenv.default.config()).parsed,
  IS_DEVELOPMENT: process.env.NODE_ENV === "development",
  IS_PRODUCTION: process.env.NODE_ENV === "production",
  URL: `http://${process.env.HTTP_HOST}:${process.env.HTTP_PORT}`
};
try {
  zConfiguration.parse(config);
} catch (error) {
  console.error("Missing .env variables:");
  console.error(error.issues.map((e) => " - " + e.path.join()).join("\n"));
  process.exit();
}
var config_default = config;

// server/http/fastify.ts
var import_qs = __toESM(require("qs"));
var import_formbody = __toESM(require("@fastify/formbody"));
var import_session = __toESM(require("@fastify/session"));
var import_cookie = __toESM(require("@fastify/cookie"));
var import_multipart = __toESM(require("@fastify/multipart"));
var import_fastify = __toESM(require("fastify"));

// server/log.ts
var import_pino = __toESM(require("pino"));
var options = {
  name: "server",
  level: config_default.IS_DEVELOPMENT ? "debug" : "info",
  transport: {
    target: "pino-pretty",
    options: config_default.IS_DEVELOPMENT && {
      translateTime: "HH:MM:ss",
      ignore: "pid,hostname"
    }
  }
};
var log_default = (0, import_pino.default)(options);

// server/services/sessions.ts
var import_cuid = __toESM(require("cuid"));
var import_date_fns = require("date-fns");
var sessions_default = {
  add: async function(userId) {
    const session = (0, import_cuid.default)();
    const expiresAt = (0, import_date_fns.addMinutes)(new Date(), 10);
    await prisma.sessions.create({
      data: {
        current: session,
        userId,
        expiresAt
      }
    });
    return session;
  },
  getUserBySession: async function(session) {
    const dbSession = await prisma.sessions.findFirst({
      where: {
        current: session
      },
      include: {
        user: {
          include: {
            settings: true,
            BuyerProducts: true
          }
        }
      }
    });
    if (dbSession?.user?.role) {
      dbSession.user.role = JSON.parse(dbSession?.user.role);
    }
    return dbSession?.user;
  },
  check: async function(session) {
    if (!session) {
      return;
    }
    const dbSession = await prisma.sessions.findFirst({
      where: {
        current: session,
        expiresAt: {
          gte: new Date()
        }
      },
      include: {
        user: true
      }
    });
    return dbSession;
  },
  clearUserSession: async function(userId) {
    return await prisma.sessions.deleteMany({
      where: {
        userId
      }
    });
  },
  update: async function(session) {
    if (!session) {
      return;
    }
    const expiresAt = (0, import_date_fns.addMinutes)(new Date(), 10);
    await prisma.sessions.update({
      where: {
        current: session
      },
      data: {
        expiresAt
      }
    });
    return session;
  }
};

// server/http/fastify.ts
var import_date_fns2 = require("date-fns");
var fastify = (0, import_fastify.default)({
  querystringParser: import_qs.default.parse,
  caseSensitive: false,
  ignoreTrailingSlash: true,
  maxParamLength: 64,
  bodyLimit: 1048576,
  connectionTimeout: 48 * 1e3,
  keepAliveTimeout: 8 * 1e3,
  pluginTimeout: 8 * 1e3,
  onProtoPoisoning: "remove",
  onConstructorPoisoning: "remove",
  return503OnClosing: true
});
fastify.register(import_formbody.default, { parser: import_qs.default.parse });
fastify.register(import_multipart.default);
fastify.register(import_cookie.default);
fastify.register(import_session.default, {
  cookieName: "sessionId",
  secret: "cQctC6D2UTKVQMwd6UrDz6vuXqtjzbPaqBLe8RrTyQh687hx",
  cookie: { secure: true, maxAge: 5e4 },
  maxAge: 5e4
});
fastify.addHook("onRoute", (route2) => {
  route2.preHandler = async (request, reply, done) => {
    const isGuest = route2?.accept?.includes("guest");
    if (!isGuest) {
      const browserSession = request.cookies[config_default.SESSION_NAME];
      if (!browserSession) {
        reply.statusCode = 401;
        done(new Error("not auth"));
      }
      const exist = await sessions_default.check(browserSession);
      if (!exist) {
        reply.statusCode = 401;
        done(new Error("not auth"));
      } else {
        const session = await sessions_default.update(browserSession);
        request.session.user = {
          ...exist.user,
          role: JSON.parse(exist.user.role)[0]
        };
        reply.setCookie(config_default.SESSION_NAME, session, {
          expires: (0, import_date_fns2.addMinutes)(new Date(), 10),
          path: "/"
        });
      }
    }
  };
});
if (config_default.IS_DEVELOPMENT) {
  fastify.addHook("onResponse", async (request, reply) => {
    const time = Math.round(reply.getResponseTime());
    log_default.debug(`${request.method} ${request.url} ${time}ms`);
  });
}
var fastify_default = fastify;

// server/http/index.ts
var import_pino2 = __toESM(require("pino"));
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient();
prisma.$use(async (params, next) => {
  try {
    return await next(params);
  } catch (e) {
    if (params.runInTransaction) {
      console.log("tx failed with", params);
    }
  }
});
var logger = (0, import_pino2.default)(
  {
    transport: {
      target: "pino-pretty",
      options: { colorize: true, levelFirst: true }
    },
    timestamp: () => `,"time":"${new Date(Date.now()).toISOString()}"`
  },
  import_pino2.default.destination("./logger.log")
);
fastify_default.connect = async (port) => {
  await fastify_default.listen({
    host: config_default.HTTP_HOST || "localhost",
    port: port || Number(config_default.HTTP_PORT)
  });
  await prisma.$disconnect();
};
fastify_default.disconnect = async () => {
  await prisma.$disconnect();
  await fastify_default.close();
};
function route(options2) {
  fastify_default.route(options2);
}
var http_default = fastify_default;

// server/services/auth.ts
var auth_default = {
  add: async function(data) {
    data.password = data.password;
    data.role = JSON.stringify(data?.role || ["guest"]);
    const user = await prisma.user.create({
      data
    });
    return user;
  }
};

// server/services/user.ts
var user_default = {
  get: async function(email, password) {
    const user = await prisma.user.findFirst({
      where: {
        email,
        status: "active"
      },
      include: {
        settings: true
      }
    });
    return user;
  }
};

// server/apis/auth.ts
route({
  method: "POST",
  url: "/api/auth/register",
  accept: ["guest"],
  handler: async function(req, rep) {
    const data = req.body;
    try {
      const user = await auth_default.add(data);
      const session = await sessions_default.add(user.id);
      rep.setCookie(config_default.SESSION_NAME, session, { path: "/" });
      return rep.send(user);
    } catch (error) {
      console.log("error", error);
      rep.code(500);
      rep.send({ error: true });
    }
  }
});
route({
  method: "POST",
  url: "/api/auth/login",
  accept: ["guest"],
  handler: async function(req, rep) {
    const { email, password } = req.body;
    const user = await user_default.get(email, password);
    if (!user) {
      return rep.status(404).send();
    }
    const session = await sessions_default.add(user.id);
    rep.setCookie(config_default.SESSION_NAME, session, { path: "/" });
    return rep.send(user);
  }
});
route({
  method: "POST",
  url: "/api/auth/me",
  handler: async function(req, rep) {
    const cookie = rep.getHeader("set-cookie");
    const from = (cookie?.indexOf("=") || 0) + 1;
    const to = cookie?.indexOf(";") || 0;
    const sessionId = cookie?.substring(from, to);
    const user = await sessions_default.getUserBySession(sessionId || "");
    return rep.send({ data: user });
  }
});
route({
  method: "GET",
  url: "/api/auth/logout",
  handler: async function(req, rep) {
    rep.clearCookie("DEKO_NSID", { path: "/" });
    req.session.destroy();
    rep.send({ success: true });
  }
});

// server/apis/user.ts
var import_omit = __toESM(require_omit());
route({
  method: "GET",
  url: "/api/user",
  handler: async function(req, rep) {
    try {
      const filters = req.query;
      const data = await user_default.getAll(filters);
      return rep.send({ data });
    } catch (error) {
      rep.code(500);
      rep.send({ error });
    }
  }
});
route({
  method: "POST",
  url: "/api/user",
  handler: async function(req, rep) {
    try {
      const { body } = req;
      const user = (0, import_omit.default)(body, ["confirmPassword"]);
      const data = await user_default.create(user);
      return rep.send({ data });
    } catch (error) {
      console.log(error);
      rep.code(500);
      rep.send({ error });
    }
  }
});
route({
  method: "GET",
  url: "/api/user/:id",
  handler: async function(req, rep) {
    try {
      const { id } = req.params;
      const data = await user_default.getById(id);
      return rep.send({ data });
    } catch (error) {
      rep.code(500);
      rep.send({ error });
    }
  }
});
route({
  method: "PATCH",
  url: "/api/user/:id",
  handler: async function(req, rep) {
    try {
      const {
        body,
        params: { id }
      } = req;
      let user = (0, import_omit.default)(body, ["confirmPassword", "id"]);
      if (!user?.referenceId) {
        delete user.referenceId;
      }
      const data = await user_default.update(id, user);
      return rep.send({ data });
    } catch (error) {
      console.log("error", error);
      rep.code(500);
      rep.send({ error });
    }
  }
});

// server/services/openai.ts
var import_axios = __toESM(require("axios"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var openai = import_axios.default.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_KEY}`
  }
});
var openai_default = {
  chat: async function(question, files) {
    const data = await Promise.all(
      files.map((file) => {
        try {
          const data2 = import_fs.default.readFileSync(
            import_path.default.join(__dirname, "..", "files", file),
            {
              encoding: "utf8"
            }
          );
          return data2;
        } catch (error) {
          return file;
        }
      })
    );
    const transcript = data.join("\n").split(" ").slice(-2700).join(" ");
    const response = await openai.post("/chat/completions", {
      model: "gpt-4",
      messages: [
        {
          content: transcript,
          role: "system"
        },
        {
          content: `${question}. If you dont have the information please return "I'm sorry I dont understand."`,
          role: "user"
        }
      ]
    });
    return response.data?.choices?.[0]?.message?.content;
  },
  train: async function(transcript) {
    const response = await openai.post("/chat/completions", {
      model: "gpt-4",
      messages: [
        {
          content: transcript,
          role: "system"
        },
        {
          content: "Based on previous information, extract a list of tasks from the meeting transcript above, and label them according to the SPEED catogories: Strategy, Product, Experience, Engineering and Data. Do not include the persons, estimations or irrelevant information to the project. Fill all SPEED categories. Use JSON format.",
          role: "user"
        }
      ]
    });
    return response.data;
  }
};

// server/services/data.ts
var data_default = {
  create: async function(projectID, data) {
    const result = await prisma.data.create({
      data: {
        projectID,
        data
      }
    });
    return result;
  },
  findAll: async function(projectID) {
    const result = await prisma.data.findMany({
      where: {
        projectID
      }
    });
    return result;
  }
};

// server/apis/openai.ts
var import_fs2 = __toESM(require("fs"));
var import_cuid2 = __toESM(require("cuid"));
var import_path2 = __toESM(require("path"));
var import_axios2 = __toESM(require("axios"));
var cache = /* @__PURE__ */ new Map();
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks).toString("utf-8");
}
route({
  method: "POST",
  url: "/api/v1/ask/:projectID",
  accept: ["guest"],
  handler: async function(req, rep) {
    try {
      const { question } = req.body;
      const { projectID } = req.params;
      if (question.includes("?")) {
        const dbTranscripts = await data_default.findAll(projectID);
        const transcripts = dbTranscripts.map((item) => item.data);
        const data = await openai_default.chat(question, transcripts);
        return rep.send({ data });
      }
      await data_default.create(projectID, question);
      return rep.send({ data: "Got it." });
    } catch (error) {
      rep.code(500);
      rep.send({ error });
    }
  }
});
route({
  method: "POST",
  url: "/api/v1/train/:projectId",
  accept: ["guest"],
  handler: async function(req, rep) {
    try {
      const data = await req.file();
      const { projectId } = req.params;
      const id = `res-${(0, import_cuid2.default)()}`;
      if (data) {
        const ext = data.filename.split(".")[1];
        const name = `${id}.${ext}`;
        const filePath = import_path2.default.join(__dirname, "..", "files", name);
        if (cache.get(data.filename)) {
          return cache.get(data.filename) || [];
        }
        const result = await streamToString(data.file);
        await data_default.create(projectId, name);
        import_fs2.default.writeFileSync(filePath, result);
        const responseData = await openai_default.train(result);
        const dataJson = JSON.parse(
          responseData?.choices?.[0]?.message?.content || "[]"
        );
        let ids = 0;
        const finalData = Object.entries(dataJson).reduce(
          (total, [label, tasks]) => {
            tasks.forEach((text) => {
              ids += 1;
              total.push({
                id: ids,
                title: text,
                label,
                storyPoints: "0P"
              });
            });
            return total;
          },
          []
        );
        const response = await import_axios2.default.post(
          "http://127.0.0.1:5000/sp-estimation",
          {
            titles: finalData.map((item) => item.title)
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const final = finalData.map((item, index) => ({
          ...item,
          storyPoints: `${response.data.storypoints[index]}P`
        }));
        cache.set(data.filename, final);
        return rep.send(final || []);
      }
      return rep.send([]);
    } catch (error) {
      rep.code(500);
      rep.send({ error: error.message });
    }
  }
});
route({
  method: "POST",
  url: "/api/v1/train-text/:projectId",
  accept: ["guest"],
  handler: async function(req, rep) {
    try {
      const { text } = req.body;
      const { projectId } = req.params;
      if (text) {
        const id = text.split(" ").slice(0, 6).join("-");
        const filePath = import_path2.default.join(__dirname, "..", "files", `${id}.txt`);
        if (cache.get(id)) {
          return cache.get(id) || [];
        }
        const result = text;
        await data_default.create(projectId, `${id}.txt`);
        import_fs2.default.writeFileSync(filePath, result);
        const responseData = await openai_default.train(result);
        const dataJson = JSON.parse(
          responseData?.choices?.[0]?.message?.content || "[]"
        );
        let ids = 0;
        const finalData = Object.entries(dataJson).reduce(
          (total, [label, tasks]) => {
            tasks.forEach((text2) => {
              ids += 1;
              total.push({
                id: ids,
                title: text2,
                label,
                storyPoints: "0P"
              });
            });
            return total;
          },
          []
        );
        const response = await import_axios2.default.post(
          "http://127.0.0.1:5000/sp-estimation",
          {
            titles: finalData.map((item) => item.title)
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const final = finalData.map((item, index) => ({
          ...item,
          storyPoints: `${response.data.storypoints[index]}P`
        }));
        cache.set(id, final);
        return rep.send(final || []);
      }
      return rep.send([]);
    } catch (error) {
      rep.code(500);
      rep.send({ error: error.message });
    }
  }
});

// server/index.ts
http_default.connect().then(() => {
  const url = `http://${config_default.HTTP_HOST}:${config_default.HTTP_PORT}`;
  process.on("SIGTERM", () => {
    http_default.disconnect();
  });
  log_default.info(`Server started: ${url}`);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlNYXAuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNOYXRpdmUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5RWFjaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzaWduVmFsdWUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weU9iamVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzSW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzSW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlBcnJheS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UHVzaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fV2Vha01hcC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRUYWcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVSZWdFeHAuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVTeW1ib2wuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc01hcC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTWFwLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1NldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU2V0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VDbG9uZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tZW1vaXplQ2FwcGVkLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVG9TdHJpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0UGF0aC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2xhc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9LZXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcGFyZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbnNldC5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzUGxhaW5PYmplY3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3VzdG9tT21pdENsb25lLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzRmxhdHRlbmFibGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZsYXR0ZW4uanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9mbGF0dGVuLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FwcGx5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJSZXN0LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY29uc3RhbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsICIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2hvcnRPdXQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9TdHJpbmcuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZmxhdFJlc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9vbWl0LmpzIiwgIi4uL3NlcnZlci9jb25maWcudHMiLCAiLi4vc2VydmVyL2h0dHAvZmFzdGlmeS50cyIsICIuLi9zZXJ2ZXIvbG9nLnRzIiwgIi4uL3NlcnZlci9zZXJ2aWNlcy9zZXNzaW9ucy50cyIsICIuLi9zZXJ2ZXIvaHR0cC9pbmRleC50cyIsICIuLi9zZXJ2ZXIvc2VydmljZXMvYXV0aC50cyIsICIuLi9zZXJ2ZXIvc2VydmljZXMvdXNlci50cyIsICIuLi9zZXJ2ZXIvYXBpcy9hdXRoLnRzIiwgIi4uL3NlcnZlci9hcGlzL3VzZXIudHMiLCAiLi4vc2VydmVyL3NlcnZpY2VzL29wZW5haS50cyIsICIuLi9zZXJ2ZXIvc2VydmljZXMvZGF0YS50cyIsICIuLi9zZXJ2ZXIvYXBpcy9vcGVuYWkudHMiLCAiLi4vc2VydmVyL2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwgIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsICIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsICJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwgInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsICJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwgInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuIiwgInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsICJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwgInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuIiwgIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcbiIsICIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcbiIsICIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCAidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwgInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCAidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwgIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwgInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCAidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcbiIsICJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuIiwgInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwgIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcbiIsICJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwgIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwgInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwgInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCAidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcbiIsICJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsICIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG4iLCAidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsICJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwgInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcbiIsICJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsICJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcbiIsICJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwgInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsICJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuIiwgInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuIiwgInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCAidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsICJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcbiIsICJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsICIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwgInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG4iLCAidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCAidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuIiwgInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCAiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG4iLCAiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwgInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwgInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcbiIsICIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwgIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCAidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuIiwgIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuXG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlID09ICdudW1iZXInIHx8XG4gICAgICAodHlwZSAhPSAnc3ltYm9sJyAmJiByZUlzVWludC50ZXN0KHZhbHVlKSkpICYmXG4gICAgICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuIiwgIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsICJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcbiIsICIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuIiwgInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwgInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuIiwgInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsICIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG4iLCAiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsICJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCAidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCAidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCAidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuIiwgInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG4iLCAiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuIiwgInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsICJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG4iLCAidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcbiIsICJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUJ1ZmZlcjtcbiIsICIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG4iLCAiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwgIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwgInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG4iLCAidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuIiwgIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG4iLCAidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcbiIsICJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsICJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG4iLCAidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuIiwgInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsICJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuIiwgInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCAidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsICJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwgInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG4iLCAidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwgIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBuZXcgYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG4iLCAidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsICJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG4iLCAidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcbiIsICIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuIiwgInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuIiwgInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiIsICJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBNYXBgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIGBTZXRgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3I7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuIiwgInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwgInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcbiIsICJ2YXIgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWFwYCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNNYXAodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSBtYXBUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWFwO1xuIiwgInZhciBiYXNlSXNNYXAgPSByZXF1aXJlKCcuL19iYXNlSXNNYXAnKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzTWFwID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNNYXA7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBNYXBgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG1hcCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTWFwKG5ldyBNYXApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNNYXAobmV3IFdlYWtNYXApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzTWFwID0gbm9kZUlzTWFwID8gYmFzZVVuYXJ5KG5vZGVJc01hcCkgOiBiYXNlSXNNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXA7XG4iLCAidmFyIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1NldGAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzU2V0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGdldFRhZyh2YWx1ZSkgPT0gc2V0VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1NldDtcbiIsICJ2YXIgYmFzZUlzU2V0ID0gcmVxdWlyZSgnLi9fYmFzZUlzU2V0JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1NldCA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzU2V0O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU2V0YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzZXQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1NldChuZXcgU2V0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU2V0KG5ldyBXZWFrU2V0KTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1NldCA9IG5vZGVJc1NldCA/IGJhc2VVbmFyeShub2RlSXNTZXQpIDogYmFzZUlzU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2V0O1xuIiwgInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNNYXAgPSByZXF1aXJlKCcuL2lzTWFwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTZXQgPSByZXF1aXJlKCcuL2lzU2V0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICBpZiAoaXNTZXQodmFsdWUpKSB7XG4gICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbihzdWJWYWx1ZSkge1xuICAgICAgcmVzdWx0LmFkZChiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN1YlZhbHVlLCB2YWx1ZSwgc3RhY2spKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc01hcCh2YWx1ZSkpIHtcbiAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcbiIsICJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCAidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwgInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwgInZhciBtZW1vaXplID0gcmVxdWlyZSgnLi9tZW1vaXplJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBtYXhpbXVtIG1lbW9pemUgY2FjaGUgc2l6ZS4gKi9cbnZhciBNQVhfTUVNT0laRV9TSVpFID0gNTAwO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IG1lbW9pemUoZnVuYywgZnVuY3Rpb24oa2V5KSB7XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH0pO1xuXG4gIHZhciBjYWNoZSA9IHJlc3VsdC5jYWNoZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplQ2FwcGVkO1xuIiwgInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuIiwgInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsICJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVRvU3RyaW5nJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZy4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkIGZvciBgbnVsbGBcbiAqIGFuZCBgdW5kZWZpbmVkYCB2YWx1ZXMuIFRoZSBzaWduIG9mIGAtMGAgaXMgcHJlc2VydmVkLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b1N0cmluZyhudWxsKTtcbiAqIC8vID0+ICcnXG4gKlxuICogXy50b1N0cmluZygtMCk7XG4gKiAvLyA9PiAnLTAnXG4gKlxuICogXy50b1N0cmluZyhbMSwgMiwgM10pO1xuICogLy8gPT4gJzEsMiwzJ1xuICovXG5mdW5jdGlvbiB0b1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/ICcnIDogYmFzZVRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1N0cmluZztcbiIsICJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBzdHJpbmdUb1BhdGggPSByZXF1aXJlKCcuL19zdHJpbmdUb1BhdGgnKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNhc3RQYXRoKHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBpc0tleSh2YWx1ZSwgb2JqZWN0KSA/IFt2YWx1ZV0gOiBzdHJpbmdUb1BhdGgodG9TdHJpbmcodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0UGF0aDtcbiIsICIvKipcbiAqIEdldHMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiBgYXJyYXlgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmxhc3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gbGFzdChhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuIiwgInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCAidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsICIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwgInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpLFxuICAgIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIHBhcmVudCB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggdG8gZ2V0IHRoZSBwYXJlbnQgdmFsdWUgb2YuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcGFyZW50IHZhbHVlLlxuICovXG5mdW5jdGlvbiBwYXJlbnQob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLmxlbmd0aCA8IDIgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgYmFzZVNsaWNlKHBhdGgsIDAsIC0xKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwgInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpLFxuICAgIHBhcmVudCA9IHJlcXVpcmUoJy4vX3BhcmVudCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bnNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcHJvcGVydHkgcGF0aCB0byB1bnNldC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvcGVydHkgaXMgZGVsZXRlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuICBvYmplY3QgPSBwYXJlbnQob2JqZWN0LCBwYXRoKTtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsIHx8IGRlbGV0ZSBvYmplY3RbdG9LZXkobGFzdChwYXRoKSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbnNldDtcbiIsICJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQbGFpbk9iamVjdDtcbiIsICJ2YXIgaXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJy4vaXNQbGFpbk9iamVjdCcpO1xuXG4vKipcbiAqIFVzZWQgYnkgYF8ub21pdGAgdG8gY3VzdG9taXplIGl0cyBgXy5jbG9uZURlZXBgIHVzZSB0byBvbmx5IGNsb25lIHBsYWluXG4gKiBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBpbnNwZWN0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHVuY2xvbmVkIHZhbHVlIG9yIGB1bmRlZmluZWRgIHRvIGRlZmVyIGNsb25pbmcgdG8gYF8uY2xvbmVEZWVwYC5cbiAqL1xuZnVuY3Rpb24gY3VzdG9tT21pdENsb25lKHZhbHVlKSB7XG4gIHJldHVybiBpc1BsYWluT2JqZWN0KHZhbHVlKSA/IHVuZGVmaW5lZCA6IHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGN1c3RvbU9taXRDbG9uZTtcbiIsICJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcHJlYWRhYmxlU3ltYm9sID0gU3ltYm9sID8gU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGZsYXR0ZW5hYmxlIGBhcmd1bWVudHNgIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmbGF0dGVuYWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0ZsYXR0ZW5hYmxlKHZhbHVlKSB7XG4gIHJldHVybiBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkgfHxcbiAgICAhIShzcHJlYWRhYmxlU3ltYm9sICYmIHZhbHVlICYmIHZhbHVlW3NwcmVhZGFibGVTeW1ib2xdKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZsYXR0ZW5hYmxlO1xuIiwgInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0ZsYXR0ZW5hYmxlID0gcmVxdWlyZSgnLi9faXNGbGF0dGVuYWJsZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmcgZmxhdHRlbmluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGZsYXR0ZW4uXG4gKiBAcGFyYW0ge251bWJlcn0gZGVwdGggVGhlIG1heGltdW0gcmVjdXJzaW9uIGRlcHRoLlxuICogQHBhcmFtIHtib29sZWFufSBbcHJlZGljYXRlPWlzRmxhdHRlbmFibGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc1N0cmljdF0gUmVzdHJpY3QgdG8gdmFsdWVzIHRoYXQgcGFzcyBgcHJlZGljYXRlYCBjaGVja3MuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBkZXB0aCwgcHJlZGljYXRlLCBpc1N0cmljdCwgcmVzdWx0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHByZWRpY2F0ZSB8fCAocHJlZGljYXRlID0gaXNGbGF0dGVuYWJsZSk7XG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChkZXB0aCA+IDAgJiYgcHJlZGljYXRlKHZhbHVlKSkge1xuICAgICAgaWYgKGRlcHRoID4gMSkge1xuICAgICAgICAvLyBSZWN1cnNpdmVseSBmbGF0dGVuIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgICBiYXNlRmxhdHRlbih2YWx1ZSwgZGVwdGggLSAxLCBwcmVkaWNhdGUsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcbiIsICJ2YXIgYmFzZUZsYXR0ZW4gPSByZXF1aXJlKCcuL19iYXNlRmxhdHRlbicpO1xuXG4vKipcbiAqIEZsYXR0ZW5zIGBhcnJheWAgYSBzaW5nbGUgbGV2ZWwgZGVlcC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmZsYXR0ZW4oWzEsIFsyLCBbMywgWzRdXSwgNV1dKTtcbiAqIC8vID0+IFsxLCAyLCBbMywgWzRdXSwgNV1cbiAqL1xuZnVuY3Rpb24gZmxhdHRlbihhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyBiYXNlRmxhdHRlbihhcnJheSwgMSkgOiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmbGF0dGVuO1xuIiwgIi8qKlxuICogQSBmYXN0ZXIgYWx0ZXJuYXRpdmUgdG8gYEZ1bmN0aW9uI2FwcGx5YCwgdGhpcyBmdW5jdGlvbiBpbnZva2VzIGBmdW5jYFxuICogd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgIGFuZCB0aGUgYXJndW1lbnRzIG9mIGBhcmdzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5KGZ1bmMsIHRoaXNBcmcsIGFyZ3MpIHtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgfVxuICByZXR1cm4gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcHBseTtcbiIsICJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuIiwgIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuIiwgIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCAidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuIiwgIi8qKiBVc2VkIHRvIGRldGVjdCBob3QgZnVuY3Rpb25zIGJ5IG51bWJlciBvZiBjYWxscyB3aXRoaW4gYSBzcGFuIG9mIG1pbGxpc2Vjb25kcy4gKi9cbnZhciBIT1RfQ09VTlQgPSA4MDAsXG4gICAgSE9UX1NQQU4gPSAxNjtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU5vdyA9IERhdGUubm93O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0J2xsIHNob3J0IG91dCBhbmQgaW52b2tlIGBpZGVudGl0eWAgaW5zdGVhZFxuICogb2YgYGZ1bmNgIHdoZW4gaXQncyBjYWxsZWQgYEhPVF9DT1VOVGAgb3IgbW9yZSB0aW1lcyBpbiBgSE9UX1NQQU5gXG4gKiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHJlc3RyaWN0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc2hvcnRhYmxlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBzaG9ydE91dChmdW5jKSB7XG4gIHZhciBjb3VudCA9IDAsXG4gICAgICBsYXN0Q2FsbGVkID0gMDtcblxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0YW1wID0gbmF0aXZlTm93KCksXG4gICAgICAgIHJlbWFpbmluZyA9IEhPVF9TUEFOIC0gKHN0YW1wIC0gbGFzdENhbGxlZCk7XG5cbiAgICBsYXN0Q2FsbGVkID0gc3RhbXA7XG4gICAgaWYgKHJlbWFpbmluZyA+IDApIHtcbiAgICAgIGlmICgrK2NvdW50ID49IEhPVF9DT1VOVCkge1xuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG9ydE91dDtcbiIsICJ2YXIgYmFzZVNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fYmFzZVNldFRvU3RyaW5nJyksXG4gICAgc2hvcnRPdXQgPSByZXF1aXJlKCcuL19zaG9ydE91dCcpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGBmdW5jYCB0byByZXR1cm4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgc2V0VG9TdHJpbmcgPSBzaG9ydE91dChiYXNlU2V0VG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvU3RyaW5nO1xuIiwgInZhciBmbGF0dGVuID0gcmVxdWlyZSgnLi9mbGF0dGVuJyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VSZXN0YCB3aGljaCBmbGF0dGVucyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBmbGF0UmVzdChmdW5jKSB7XG4gIHJldHVybiBzZXRUb1N0cmluZyhvdmVyUmVzdChmdW5jLCB1bmRlZmluZWQsIGZsYXR0ZW4pLCBmdW5jICsgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZsYXRSZXN0O1xuIiwgInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyksXG4gICAgYmFzZVVuc2V0ID0gcmVxdWlyZSgnLi9fYmFzZVVuc2V0JyksXG4gICAgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgY3VzdG9tT21pdENsb25lID0gcmVxdWlyZSgnLi9fY3VzdG9tT21pdENsb25lJyksXG4gICAgZmxhdFJlc3QgPSByZXF1aXJlKCcuL19mbGF0UmVzdCcpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgXy5waWNrYDsgdGhpcyBtZXRob2QgY3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2YgdGhlXG4gKiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IHBhdGhzIG9mIGBvYmplY3RgIHRoYXQgYXJlIG5vdCBvbWl0dGVkLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBjb25zaWRlcmFibHkgc2xvd2VyIHRoYW4gYF8ucGlja2AuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7Li4uKHN0cmluZ3xzdHJpbmdbXSl9IFtwYXRoc10gVGhlIHByb3BlcnR5IHBhdGhzIHRvIG9taXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogJzInLCAnYyc6IDMgfTtcbiAqXG4gKiBfLm9taXQob2JqZWN0LCBbJ2EnLCAnYyddKTtcbiAqIC8vID0+IHsgJ2InOiAnMicgfVxuICovXG52YXIgb21pdCA9IGZsYXRSZXN0KGZ1bmN0aW9uKG9iamVjdCwgcGF0aHMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHZhciBpc0RlZXAgPSBmYWxzZTtcbiAgcGF0aHMgPSBhcnJheU1hcChwYXRocywgZnVuY3Rpb24ocGF0aCkge1xuICAgIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuICAgIGlzRGVlcCB8fCAoaXNEZWVwID0gcGF0aC5sZW5ndGggPiAxKTtcbiAgICByZXR1cm4gcGF0aDtcbiAgfSk7XG4gIGNvcHlPYmplY3Qob2JqZWN0LCBnZXRBbGxLZXlzSW4ob2JqZWN0KSwgcmVzdWx0KTtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJlc3VsdCA9IGJhc2VDbG9uZShyZXN1bHQsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX0ZMQVRfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRywgY3VzdG9tT21pdENsb25lKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gcGF0aHMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBiYXNlVW5zZXQocmVzdWx0LCBwYXRoc1tsZW5ndGhdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gb21pdDtcbiIsICJpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5pbXBvcnQgeyBleHBhbmQgYXMgZG90ZW52RXhwYW5kIH0gZnJvbSAnZG90ZW52LWV4cGFuZCc7XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcblxuZXhwb3J0IHR5cGUgQ29uZmlndXJhdGlvbiA9IHouaW5mZXI8dHlwZW9mIHpDb25maWd1cmF0aW9uPjtcbmNvbnN0IHpDb25maWd1cmF0aW9uID0gei5vYmplY3Qoe1xuICBOT0RFX0VOVjogei5zdHJpbmcoKSxcblxuICBIVFRQX0hPU1Q6IHouc3RyaW5nKCksXG4gIEhUVFBfUE9SVDogei5zdHJpbmcoKSxcblxuICBGUk9OVEVORF9IT1NUOiB6LnN0cmluZygpLFxuICBGUk9OVEVORF9QT1JUOiB6LnN0cmluZygpLFxuXG4gIElTX0RFVkVMT1BNRU5UOiB6LmJvb2xlYW4oKSxcbiAgSVNfUFJPRFVDVElPTjogei5ib29sZWFuKCksXG4gIFVSTDogei5zdHJpbmcoKSxcbiAgU0VTU0lPTl9OQU1FOiB6LnN0cmluZygpLFxufSk7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLi4uZG90ZW52RXhwYW5kKGRvdGVudi5jb25maWcoKSkucGFyc2VkLFxuXG4gIElTX0RFVkVMT1BNRU5UOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcbiAgSVNfUFJPRFVDVElPTjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcblxuICBVUkw6IGBodHRwOi8vJHtwcm9jZXNzLmVudi5IVFRQX0hPU1R9OiR7cHJvY2Vzcy5lbnYuSFRUUF9QT1JUfWAsXG59O1xuXG50cnkge1xuICB6Q29uZmlndXJhdGlvbi5wYXJzZShjb25maWcpO1xufSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICBjb25zb2xlLmVycm9yKCdNaXNzaW5nIC5lbnYgdmFyaWFibGVzOicpO1xuICBjb25zb2xlLmVycm9yKGVycm9yLmlzc3Vlcy5tYXAoKGU6IGFueSkgPT4gJyAtICcgKyBlLnBhdGguam9pbigpKS5qb2luKCdcXG4nKSk7XG4gIHByb2Nlc3MuZXhpdCgpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWcgYXMgQ29uZmlndXJhdGlvbjtcbiIsICJpbXBvcnQgcXMgZnJvbSAncXMnO1xuaW1wb3J0IGZvcm1ib2R5LCB7IEZvcm1Cb2R5UGx1Z2luT3B0aW9ucyB9IGZyb20gJ0BmYXN0aWZ5L2Zvcm1ib2R5JztcbmltcG9ydCBmYXN0aWZ5U2Vzc2lvbiBmcm9tICdAZmFzdGlmeS9zZXNzaW9uJztcbmltcG9ydCBmYXN0aWZ5Q29va2llIGZyb20gJ0BmYXN0aWZ5L2Nvb2tpZSc7XG5pbXBvcnQgZmFzdGlmeU11bHRpcGFydCBmcm9tICdAZmFzdGlmeS9tdWx0aXBhcnQnO1xuaW1wb3J0IEZhc3RpZnksIHtcbiAgRmFzdGlmeVJlZ2lzdGVyT3B0aW9ucyxcbiAgRmFzdGlmeVJlcGx5LFxuICBSb3V0ZU9wdGlvbnMsXG59IGZyb20gJ2Zhc3RpZnknO1xuaW1wb3J0IGxvZyBmcm9tICckc2VydmVyL2xvZyc7XG5pbXBvcnQgQ09ORklHIGZyb20gJyRzZXJ2ZXIvY29uZmlnJztcbmltcG9ydCAkc2Vzc2lvbiBmcm9tICckc2VydmljZXMvc2Vzc2lvbnMnO1xuaW1wb3J0IHsgYWRkTWludXRlcyB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICckZW50aXRpZXMudHlwZXMnO1xuXG5jb25zdCBmYXN0aWZ5ID0gRmFzdGlmeSh7XG4gIHF1ZXJ5c3RyaW5nUGFyc2VyOiBxcy5wYXJzZSxcbiAgY2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gIGlnbm9yZVRyYWlsaW5nU2xhc2g6IHRydWUsXG4gIG1heFBhcmFtTGVuZ3RoOiA2NCxcbiAgYm9keUxpbWl0OiAxMDQ4NTc2LCAvLyAxTWlCXG4gIGNvbm5lY3Rpb25UaW1lb3V0OiA0OCAqIDEwMDAsIC8vIDQ4c1xuICBrZWVwQWxpdmVUaW1lb3V0OiA4ICogMTAwMCwgLy8gOHNcbiAgcGx1Z2luVGltZW91dDogOCAqIDEwMDAsIC8vIDhzXG4gIG9uUHJvdG9Qb2lzb25pbmc6ICdyZW1vdmUnLFxuICBvbkNvbnN0cnVjdG9yUG9pc29uaW5nOiAncmVtb3ZlJyxcbiAgcmV0dXJuNTAzT25DbG9zaW5nOiB0cnVlLFxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIG9uRmlsZShwYXJ0KSB7XG4gIGNvbnN0IGJ1ZmYgPSBhd2FpdCBwYXJ0LnRvQnVmZmVyKCk7XG4gIGNvbnN0IGRlY29kZWQgPSBCdWZmZXIuZnJvbShidWZmLnRvU3RyaW5nKCksICdiYXNlNjQnKS50b1N0cmluZygpO1xuXG4gIHBhcnQudmFsdWUgPSBkZWNvZGVkOyAvLyBzZXQgYHBhcnQudmFsdWVgIHRvIHNwZWNpZnkgdGhlIHJlcXVlc3QgYm9keSB2YWx1ZVxufVxuXG4vLyBoYW5kbGVzIEhUVFAgZm9ybSBib2R5IHBhcnNpbmdcbmZhc3RpZnkucmVnaXN0ZXIoZm9ybWJvZHksIHsgcGFyc2VyOiBxcy5wYXJzZSB9IGFzIEZvcm1Cb2R5UGx1Z2luT3B0aW9ucyk7XG5mYXN0aWZ5LnJlZ2lzdGVyKGZhc3RpZnlNdWx0aXBhcnQpO1xuZmFzdGlmeS5yZWdpc3RlcihmYXN0aWZ5Q29va2llKTtcblxuZmFzdGlmeS5yZWdpc3RlcihmYXN0aWZ5U2Vzc2lvbiwge1xuICBjb29raWVOYW1lOiAnc2Vzc2lvbklkJyxcbiAgc2VjcmV0OiAnY1FjdEM2RDJVVEtWUU13ZDZVckR6NnZ1WHF0anpiUGFxQkxlOFJyVHlRaDY4N2h4JyxcbiAgY29va2llOiB7IHNlY3VyZTogdHJ1ZSwgbWF4QWdlOiA1MDAwMCB9LFxuICBtYXhBZ2U6IDUwMDAwLFxufSBhcyBGYXN0aWZ5UmVnaXN0ZXJPcHRpb25zPGFueT4pO1xuXG5mYXN0aWZ5LmFkZEhvb2soJ29uUm91dGUnLCAocm91dGUpID0+IHtcbiAgcm91dGUucHJlSGFuZGxlciA9IGFzeW5jIChyZXF1ZXN0LCByZXBseSwgZG9uZSkgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBpc0d1ZXN0ID0gcm91dGU/LmFjY2VwdD8uaW5jbHVkZXMoJ2d1ZXN0Jyk7XG5cbiAgICBpZiAoIWlzR3Vlc3QpIHtcbiAgICAgIGNvbnN0IGJyb3dzZXJTZXNzaW9uID0gcmVxdWVzdC5jb29raWVzW0NPTkZJRy5TRVNTSU9OX05BTUVdO1xuXG4gICAgICBpZiAoIWJyb3dzZXJTZXNzaW9uKSB7XG4gICAgICAgIHJlcGx5LnN0YXR1c0NvZGUgPSA0MDE7XG4gICAgICAgIGRvbmUobmV3IEVycm9yKCdub3QgYXV0aCcpKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZXhpc3QgPSBhd2FpdCAkc2Vzc2lvbi5jaGVjayhicm93c2VyU2Vzc2lvbik7XG5cbiAgICAgIGlmICghZXhpc3QpIHtcbiAgICAgICAgcmVwbHkuc3RhdHVzQ29kZSA9IDQwMTtcbiAgICAgICAgZG9uZShuZXcgRXJyb3IoJ25vdCBhdXRoJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0ICRzZXNzaW9uLnVwZGF0ZShicm93c2VyU2Vzc2lvbik7XG5cbiAgICAgICAgcmVxdWVzdC5zZXNzaW9uLnVzZXIgPSB7XG4gICAgICAgICAgLi4uZXhpc3QudXNlcixcbiAgICAgICAgICByb2xlOiBKU09OLnBhcnNlKGV4aXN0LnVzZXIucm9sZSlbMF0sXG4gICAgICAgIH0gYXMgVXNlcjtcblxuICAgICAgICByZXBseS5zZXRDb29raWUoQ09ORklHLlNFU1NJT05fTkFNRSwgc2Vzc2lvbiBhcyBzdHJpbmcsIHtcbiAgICAgICAgICBleHBpcmVzOiBhZGRNaW51dGVzKG5ldyBEYXRlKCksIDEwKSxcbiAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pO1xuXG5pZiAoQ09ORklHLklTX0RFVkVMT1BNRU5UKSB7XG4gIGZhc3RpZnkuYWRkSG9vaygnb25SZXNwb25zZScsIGFzeW5jIChyZXF1ZXN0LCByZXBseSkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBNYXRoLnJvdW5kKHJlcGx5LmdldFJlc3BvbnNlVGltZSgpKTtcblxuICAgIGxvZy5kZWJ1ZyhgJHtyZXF1ZXN0Lm1ldGhvZH0gJHtyZXF1ZXN0LnVybH0gJHt0aW1lfW1zYCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmYXN0aWZ5O1xuIiwgImltcG9ydCBwaW5vLCB7IExvZ2dlck9wdGlvbnMgfSBmcm9tICdwaW5vJztcbmltcG9ydCBDT05GSUcgZnJvbSAnJHNlcnZlci9jb25maWcnO1xuXG5jb25zdCBvcHRpb25zID0ge1xuICBuYW1lOiAnc2VydmVyJyxcbiAgbGV2ZWw6IENPTkZJRy5JU19ERVZFTE9QTUVOVCA/ICdkZWJ1ZycgOiAnaW5mbycsXG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcbiAgICBvcHRpb25zOiBDT05GSUcuSVNfREVWRUxPUE1FTlQgJiYge1xuICAgICAgdHJhbnNsYXRlVGltZTogJ0hIOk1NOnNzJyxcbiAgICAgIGlnbm9yZTogJ3BpZCxob3N0bmFtZScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBpbm8ob3B0aW9ucyBhcyBMb2dnZXJPcHRpb25zKTtcbiIsICJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICckc2VydmVyL2h0dHAnO1xuaW1wb3J0IGN1aWQgZnJvbSAnY3VpZCc7XG5pbXBvcnQgeyBhZGRNaW51dGVzIH0gZnJvbSAnZGF0ZS1mbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFkZDogYXN5bmMgZnVuY3Rpb24gKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGN1aWQoKTtcbiAgICBjb25zdCBleHBpcmVzQXQgPSBhZGRNaW51dGVzKG5ldyBEYXRlKCksIDEwKTtcblxuICAgIGF3YWl0IHByaXNtYS5zZXNzaW9ucy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBjdXJyZW50OiBzZXNzaW9uLFxuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgZXhwaXJlc0F0LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBzZXNzaW9uO1xuICB9LFxuICBnZXRVc2VyQnlTZXNzaW9uOiBhc3luYyBmdW5jdGlvbiAoc2Vzc2lvbjogc3RyaW5nKSB7XG4gICAgY29uc3QgZGJTZXNzaW9uID0gYXdhaXQgcHJpc21hLnNlc3Npb25zLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBjdXJyZW50OiBzZXNzaW9uLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIHNldHRpbmdzOiB0cnVlLFxuICAgICAgICAgICAgQnV5ZXJQcm9kdWN0czogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChkYlNlc3Npb24/LnVzZXI/LnJvbGUpIHtcbiAgICAgIGRiU2Vzc2lvbi51c2VyLnJvbGUgPSBKU09OLnBhcnNlKGRiU2Vzc2lvbj8udXNlci5yb2xlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGJTZXNzaW9uPy51c2VyO1xuICB9LFxuICBjaGVjazogYXN5bmMgZnVuY3Rpb24gKHNlc3Npb246IHN0cmluZyB8IHVua25vd24pIHtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYlNlc3Npb24gPSBhd2FpdCBwcmlzbWEuc2Vzc2lvbnMuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGN1cnJlbnQ6IHNlc3Npb24sXG4gICAgICAgIGV4cGlyZXNBdDoge1xuICAgICAgICAgIGd0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXI6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRiU2Vzc2lvbjtcbiAgfSxcbiAgY2xlYXJVc2VyU2Vzc2lvbjogYXN5bmMgZnVuY3Rpb24gKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGF3YWl0IHByaXNtYS5zZXNzaW9ucy5kZWxldGVNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0sXG5cbiAgdXBkYXRlOiBhc3luYyBmdW5jdGlvbiAoc2Vzc2lvbjogc3RyaW5nIHwgdW5rbm93bikge1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGV4cGlyZXNBdCA9IGFkZE1pbnV0ZXMobmV3IERhdGUoKSwgMTApO1xuXG4gICAgYXdhaXQgcHJpc21hLnNlc3Npb25zLnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGN1cnJlbnQ6IHNlc3Npb24sXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBleHBpcmVzQXQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNlc3Npb247XG4gIH0sXG59O1xuIiwgImltcG9ydCBDT05GSUcgZnJvbSAnJHNlcnZlci9jb25maWcnO1xuaW1wb3J0IGZhc3RpZnkgZnJvbSAnLi9mYXN0aWZ5JztcbmltcG9ydCBwaW5vIGZyb20gJ3Bpbm8nO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbnByaXNtYS4kdXNlKGFzeW5jIChwYXJhbXMsIG5leHQpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgbmV4dChwYXJhbXMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHBhcmFtcy5ydW5JblRyYW5zYWN0aW9uKSB7XG4gICAgICBjb25zb2xlLmxvZygndHggZmFpbGVkIHdpdGgnLCBwYXJhbXMpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGxvZ2dlciA9IHBpbm8oXG4gIHtcbiAgICB0cmFuc3BvcnQ6IHtcbiAgICAgIHRhcmdldDogJ3Bpbm8tcHJldHR5JyxcbiAgICAgIG9wdGlvbnM6IHsgY29sb3JpemU6IHRydWUsIGxldmVsRmlyc3Q6IHRydWUgfSxcbiAgICB9LFxuICAgIHRpbWVzdGFtcDogKCkgPT4gYCxcInRpbWVcIjpcIiR7bmV3IERhdGUoRGF0ZS5ub3coKSkudG9JU09TdHJpbmcoKX1cImAsXG4gIH0sXG4gIHBpbm8uZGVzdGluYXRpb24oJy4vbG9nZ2VyLmxvZycpXG4pO1xuXG5mYXN0aWZ5LmNvbm5lY3QgPSBhc3luYyAocG9ydD86IG51bWJlcikgPT4ge1xuICBhd2FpdCBmYXN0aWZ5Lmxpc3Rlbih7XG4gICAgaG9zdDogQ09ORklHLkhUVFBfSE9TVCB8fCAnbG9jYWxob3N0JyxcbiAgICBwb3J0OiBwb3J0IHx8IE51bWJlcihDT05GSUcuSFRUUF9QT1JUKSxcbiAgfSk7XG5cbiAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG59O1xuXG5mYXN0aWZ5LmRpc2Nvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICBhd2FpdCBmYXN0aWZ5LmNsb3NlKCk7XG59O1xuXG5mdW5jdGlvbiByb3V0ZShvcHRpb25zOiBhbnkpIHtcbiAgZmFzdGlmeS5yb3V0ZShvcHRpb25zKTtcbn1cblxuZXhwb3J0IHsgbG9nZ2VyLCBwcmlzbWEsIHJvdXRlIH07XG5leHBvcnQgZGVmYXVsdCBmYXN0aWZ5O1xuIiwgImltcG9ydCB7cHJpc21hfSBmcm9tICckc2VydmVyL2h0dHAnO1xuXG5pbXBvcnQge1VzZXJ9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFkZDogYXN5bmMgZnVuY3Rpb24gKGRhdGE6IE9taXQ8VXNlciAmIHt1c2VybmFtZTogc3RyaW5nfSwgJ2lkJz4pIHtcbiAgICAgICAgZGF0YS5wYXNzd29yZCA9IGRhdGEucGFzc3dvcmQ7XG4gICAgICAgIGRhdGEucm9sZSA9IEpTT04uc3RyaW5naWZ5KGRhdGE/LnJvbGUgfHwgWydndWVzdCddKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGRhdGEsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgIH0sXG59O1xuIiwgImltcG9ydCB7cHJpc21hfSBmcm9tICckc2VydmVyL2h0dHAnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0OiBhc3luYyBmdW5jdGlvbiAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnYWN0aXZlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXNlcjtcbiAgICB9LFxufTtcbiIsICJpbXBvcnQgeyByb3V0ZSB9IGZyb20gJyRzZXJ2ZXIvaHR0cCc7XG5pbXBvcnQgeyBGYXN0aWZ5UmVwbHksIEZhc3RpZnlSZXF1ZXN0IH0gZnJvbSAnZmFzdGlmeSc7XG5pbXBvcnQgJGF1dGggZnJvbSAnJHNlcnZpY2VzL2F1dGgnO1xuaW1wb3J0ICR1c2VyIGZyb20gJyRzZXJ2aWNlcy91c2VyJztcbmltcG9ydCAkc2Vzc2lvbiBmcm9tICckc2VydmljZXMvc2Vzc2lvbnMnO1xuXG5pbXBvcnQgQ09ORklHIGZyb20gJyRzZXJ2ZXIvY29uZmlnJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbnJvdXRlKHtcbiAgbWV0aG9kOiAnUE9TVCcsXG4gIHVybDogJy9hcGkvYXV0aC9yZWdpc3RlcicsXG4gIGFjY2VwdDogWydndWVzdCddLFxuICBoYW5kbGVyOiBhc3luYyBmdW5jdGlvbiAoXG4gICAgcmVxOiBGYXN0aWZ5UmVxdWVzdDx7IEJvZHk6IFVzZXIgfT4sXG4gICAgcmVwOiBGYXN0aWZ5UmVwbHlcbiAgKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCAkYXV0aC5hZGQoZGF0YSk7XG5cbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCAkc2Vzc2lvbi5hZGQodXNlci5pZCk7XG4gICAgICByZXAuc2V0Q29va2llKENPTkZJRy5TRVNTSU9OX05BTUUsIHNlc3Npb24sIHsgcGF0aDogJy8nIH0pO1xuXG4gICAgICByZXR1cm4gcmVwLnNlbmQodXNlcik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKTtcbiAgICAgIHJlcC5jb2RlKDUwMCk7XG4gICAgICByZXAuc2VuZCh7IGVycm9yOiB0cnVlIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5yb3V0ZSh7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICB1cmw6ICcvYXBpL2F1dGgvbG9naW4nLFxuICBhY2NlcHQ6IFsnZ3Vlc3QnXSxcbiAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKFxuICAgIHJlcTogRmFzdGlmeVJlcXVlc3Q8eyBCb2R5OiB7IGVtYWlsOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSB9PixcbiAgICByZXA6IEZhc3RpZnlSZXBseVxuICApIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0ICR1c2VyLmdldChlbWFpbCwgcGFzc3dvcmQpO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gcmVwLnN0YXR1cyg0MDQpLnNlbmQoKTtcbiAgICB9XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0ICRzZXNzaW9uLmFkZCh1c2VyLmlkKTtcblxuICAgIHJlcC5zZXRDb29raWUoQ09ORklHLlNFU1NJT05fTkFNRSwgc2Vzc2lvbiwgeyBwYXRoOiAnLycgfSk7XG5cbiAgICByZXR1cm4gcmVwLnNlbmQodXNlcik7XG4gIH0sXG59KTtcblxucm91dGUoe1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgdXJsOiAnL2FwaS9hdXRoL21lJyxcbiAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKHJlcTogRmFzdGlmeVJlcXVlc3QsIHJlcDogRmFzdGlmeVJlcGx5KSB7XG4gICAgY29uc3QgY29va2llID0gcmVwLmdldEhlYWRlcignc2V0LWNvb2tpZScpIGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBmcm9tID0gKGNvb2tpZT8uaW5kZXhPZignPScpIHx8IDApICsgMTtcbiAgICBjb25zdCB0byA9IGNvb2tpZT8uaW5kZXhPZignOycpIHx8IDA7XG5cbiAgICBjb25zdCBzZXNzaW9uSWQgPSBjb29raWU/LnN1YnN0cmluZyhmcm9tLCB0bykgYXMgc3RyaW5nO1xuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0ICRzZXNzaW9uLmdldFVzZXJCeVNlc3Npb24oc2Vzc2lvbklkIHx8ICcnKTtcblxuICAgIHJldHVybiByZXAuc2VuZCh7IGRhdGE6IHVzZXIgfSk7XG4gIH0sXG59KTtcblxucm91dGUoe1xuICBtZXRob2Q6ICdHRVQnLFxuICB1cmw6ICcvYXBpL2F1dGgvbG9nb3V0JyxcbiAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKHJlcTogRmFzdGlmeVJlcXVlc3QsIHJlcDogRmFzdGlmeVJlcGx5KSB7XG4gICAgcmVwLmNsZWFyQ29va2llKCdERUtPX05TSUQnLCB7IHBhdGg6ICcvJyB9KTtcbiAgICByZXEuc2Vzc2lvbi5kZXN0cm95KCk7XG4gICAgcmVwLnNlbmQoeyBzdWNjZXNzOiB0cnVlIH0pO1xuICB9LFxufSk7XG4iLCAiaW1wb3J0IHsgcm91dGUgfSBmcm9tICckc2VydmVyL2h0dHAnO1xuaW1wb3J0IHsgRmFzdGlmeVJlcGx5LCBGYXN0aWZ5UmVxdWVzdCB9IGZyb20gJ2Zhc3RpZnknO1xuaW1wb3J0ICR1c2VyIGZyb20gJyRzZXJ2aWNlcy91c2VyJztcbmltcG9ydCB7IFVzZXIsIFVzZXJGb3JtRGF0YVVwZGF0ZSB9IGZyb20gJyRlbnRpdGllcy50eXBlcyc7XG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XG5cbnJvdXRlKHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgdXJsOiAnL2FwaS91c2VyJyxcbiAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKFxuICAgIHJlcTogRmFzdGlmeVJlcXVlc3Q8eyBRdWVyeXN0cmluZzogeyBza2lwPzogc3RyaW5nOyB0YWtlPzogc3RyaW5nIH0gfT4sXG4gICAgcmVwOiBGYXN0aWZ5UmVwbHlcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbHRlcnMgPSByZXEucXVlcnk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgJHVzZXIuZ2V0QWxsKGZpbHRlcnMpO1xuXG4gICAgICByZXR1cm4gcmVwLnNlbmQoeyBkYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXAuY29kZSg1MDApO1xuICAgICAgcmVwLnNlbmQoeyBlcnJvciB9KTtcbiAgICB9XG4gIH0sXG59KTtcblxucm91dGUoe1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgdXJsOiAnL2FwaS91c2VyJyxcbiAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKFxuICAgIHJlcTogRmFzdGlmeVJlcXVlc3Q8eyBCb2R5OiBVc2VyICYgeyBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyB9IH0+LFxuICAgIHJlcDogRmFzdGlmeVJlcGx5XG4gICkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGJvZHkgfSA9IHJlcTtcbiAgICAgIGNvbnN0IHVzZXIgPSBvbWl0KGJvZHksIFsnY29uZmlybVBhc3N3b3JkJ10pIGFzIFVzZXI7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgJHVzZXIuY3JlYXRlKHVzZXIpO1xuXG4gICAgICByZXR1cm4gcmVwLnNlbmQoeyBkYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXAuY29kZSg1MDApO1xuICAgICAgcmVwLnNlbmQoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgfVxuICB9LFxufSk7XG5cbnJvdXRlKHtcbiAgbWV0aG9kOiAnR0VUJyxcbiAgdXJsOiAnL2FwaS91c2VyLzppZCcsXG4gIGhhbmRsZXI6IGFzeW5jIGZ1bmN0aW9uIChcbiAgICByZXE6IEZhc3RpZnlSZXF1ZXN0PHsgUGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9PixcbiAgICByZXA6IEZhc3RpZnlSZXBseVxuICApIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gcmVxLnBhcmFtcztcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAkdXNlci5nZXRCeUlkKGlkKTtcblxuICAgICAgcmV0dXJuIHJlcC5zZW5kKHsgZGF0YSB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVwLmNvZGUoNTAwKTtcbiAgICAgIHJlcC5zZW5kKHsgZXJyb3I6IGVycm9yIH0pO1xuICAgIH1cbiAgfSxcbn0pO1xuXG5yb3V0ZSh7XG4gIG1ldGhvZDogJ1BBVENIJyxcbiAgdXJsOiAnL2FwaS91c2VyLzppZCcsXG4gIGhhbmRsZXI6IGFzeW5jIGZ1bmN0aW9uIChcbiAgICByZXE6IEZhc3RpZnlSZXF1ZXN0PHtcbiAgICAgIEJvZHk6IFBhcnRpYWw8VXNlckZvcm1EYXRhVXBkYXRlPjtcbiAgICAgIFBhcmFtczogeyBpZDogc3RyaW5nIH07XG4gICAgfT4sXG4gICAgcmVwOiBGYXN0aWZ5UmVwbHlcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYm9keSxcbiAgICAgICAgcGFyYW1zOiB7IGlkIH0sXG4gICAgICB9ID0gcmVxO1xuXG4gICAgICBsZXQgdXNlciA9IG9taXQoYm9keSwgWydjb25maXJtUGFzc3dvcmQnLCAnaWQnXSkgYXMgUGFydGlhbDxVc2VyPjtcbiAgICAgIGlmICghdXNlcj8ucmVmZXJlbmNlSWQpIHtcbiAgICAgICAgZGVsZXRlIHVzZXIucmVmZXJlbmNlSWQ7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCAkdXNlci51cGRhdGUoaWQsIHVzZXIpO1xuXG4gICAgICByZXR1cm4gcmVwLnNlbmQoeyBkYXRhIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcik7XG4gICAgICByZXAuY29kZSg1MDApO1xuICAgICAgcmVwLnNlbmQoeyBlcnJvcjogZXJyb3IgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iLCAiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3Qgb3BlbmFpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuQVBJX0tFWX1gLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY2hhdDogYXN5bmMgZnVuY3Rpb24gKHF1ZXN0aW9uOiBzdHJpbmcsIGZpbGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIGZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBmcy5yZWFkRmlsZVN5bmMoXG4gICAgICAgICAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnZmlsZXMnLCBmaWxlKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZW5jb2Rpbmc6ICd1dGY4JyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGZpbGU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IHRyYW5zY3JpcHQgPSBkYXRhLmpvaW4oJ1xcbicpLnNwbGl0KCcgJykuc2xpY2UoLTI3MDApLmpvaW4oJyAnKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLnBvc3QoJy9jaGF0L2NvbXBsZXRpb25zJywge1xuICAgICAgbW9kZWw6ICdncHQtNCcsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogdHJhbnNjcmlwdCxcbiAgICAgICAgICByb2xlOiAnc3lzdGVtJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IGAke3F1ZXN0aW9ufS4gSWYgeW91IGRvbnQgaGF2ZSB0aGUgaW5mb3JtYXRpb24gcGxlYXNlIHJldHVybiBcIkknbSBzb3JyeSBJIGRvbnQgdW5kZXJzdGFuZC5cImAsXG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhPy5jaG9pY2VzPy5bMF0/Lm1lc3NhZ2U/LmNvbnRlbnQ7XG4gIH0sXG5cbiAgdHJhaW46IGFzeW5jIGZ1bmN0aW9uICh0cmFuc2NyaXB0OiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IG9wZW5haS5wb3N0KCcvY2hhdC9jb21wbGV0aW9ucycsIHtcbiAgICAgIG1vZGVsOiAnZ3B0LTQnLFxuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IHRyYW5zY3JpcHQsXG4gICAgICAgICAgcm9sZTogJ3N5c3RlbScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgJ0Jhc2VkIG9uIHByZXZpb3VzIGluZm9ybWF0aW9uLCBleHRyYWN0IGEgbGlzdCBvZiB0YXNrcyBmcm9tIHRoZSBtZWV0aW5nIHRyYW5zY3JpcHQgYWJvdmUsIGFuZCBsYWJlbCB0aGVtIGFjY29yZGluZyB0byB0aGUgU1BFRUQgY2F0b2dvcmllczogU3RyYXRlZ3ksIFByb2R1Y3QsIEV4cGVyaWVuY2UsIEVuZ2luZWVyaW5nIGFuZCBEYXRhLiBEbyBub3QgaW5jbHVkZSB0aGUgcGVyc29ucywgZXN0aW1hdGlvbnMgb3IgaXJyZWxldmFudCBpbmZvcm1hdGlvbiB0byB0aGUgcHJvamVjdC4gRmlsbCBhbGwgU1BFRUQgY2F0ZWdvcmllcy4gVXNlIEpTT04gZm9ybWF0LicsXG4gICAgICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KTtcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9LFxufTtcbiIsICJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tICckc2VydmVyL2h0dHAnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZTogYXN5bmMgZnVuY3Rpb24gKHByb2plY3RJRDogc3RyaW5nLCBkYXRhOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuZGF0YS5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBwcm9qZWN0SUQsXG4gICAgICAgIGRhdGEsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcblxuICBmaW5kQWxsOiBhc3luYyBmdW5jdGlvbiAocHJvamVjdElEOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEuZGF0YS5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBwcm9qZWN0SUQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSxcbn07XG4iLCAiaW1wb3J0IHsgcm91dGUgfSBmcm9tICckc2VydmVyL2h0dHAnO1xuaW1wb3J0IHsgRmFzdGlmeVJlcGx5LCBGYXN0aWZ5UmVxdWVzdCB9IGZyb20gJ2Zhc3RpZnknO1xuaW1wb3J0ICRvcGVuYWkgZnJvbSAnJHNlcnZpY2VzL29wZW5haSc7XG5pbXBvcnQgJGRhdGEgZnJvbSAnJHNlcnZpY2VzL2RhdGEnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBjdWlkIGZyb20gJ2N1aWQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuYXN5bmMgZnVuY3Rpb24gc3RyZWFtVG9TdHJpbmcoc3RyZWFtOiBhbnkpIHtcbiAgY29uc3QgY2h1bmtzID0gW107XG5cbiAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBzdHJlYW0pIHtcbiAgICBjaHVua3MucHVzaChCdWZmZXIuZnJvbShjaHVuaykpO1xuICB9XG5cbiAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoY2h1bmtzKS50b1N0cmluZygndXRmLTgnKTtcbn1cblxucm91dGUoe1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgdXJsOiAnL2FwaS92MS9hc2svOnByb2plY3RJRCcsXG4gIGFjY2VwdDogWydndWVzdCddLFxuICBoYW5kbGVyOiBhc3luYyBmdW5jdGlvbiAoXG4gICAgcmVxOiBGYXN0aWZ5UmVxdWVzdDx7XG4gICAgICBCb2R5OiB7IHF1ZXN0aW9uOiBzdHJpbmcgfTtcbiAgICAgIFBhcmFtczoge1xuICAgICAgICBwcm9qZWN0SUQ6IHN0cmluZztcbiAgICAgIH07XG4gICAgfT4sXG4gICAgcmVwOiBGYXN0aWZ5UmVwbHlcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcXVlc3Rpb24gfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc3QgeyBwcm9qZWN0SUQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgICAgIGlmIChxdWVzdGlvbi5pbmNsdWRlcygnPycpKSB7XG4gICAgICAgIGNvbnN0IGRiVHJhbnNjcmlwdHMgPSBhd2FpdCAkZGF0YS5maW5kQWxsKHByb2plY3RJRCk7XG4gICAgICAgIGNvbnN0IHRyYW5zY3JpcHRzID0gZGJUcmFuc2NyaXB0cy5tYXAoKGl0ZW0pID0+IGl0ZW0uZGF0YSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0ICRvcGVuYWkuY2hhdChxdWVzdGlvbiwgdHJhbnNjcmlwdHMpO1xuXG4gICAgICAgIHJldHVybiByZXAuc2VuZCh7IGRhdGEgfSk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0ICRkYXRhLmNyZWF0ZShwcm9qZWN0SUQsIHF1ZXN0aW9uKTtcblxuICAgICAgcmV0dXJuIHJlcC5zZW5kKHsgZGF0YTogJ0dvdCBpdC4nIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXAuY29kZSg1MDApO1xuICAgICAgcmVwLnNlbmQoeyBlcnJvciB9KTtcbiAgICB9XG4gIH0sXG59KTtcblxucm91dGUoe1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgdXJsOiAnL2FwaS92MS90cmFpbi86cHJvamVjdElkJyxcbiAgYWNjZXB0OiBbJ2d1ZXN0J10sXG4gIGhhbmRsZXI6IGFzeW5jIGZ1bmN0aW9uIChcbiAgICByZXE6IEZhc3RpZnlSZXF1ZXN0PHtcbiAgICAgIEJvZHk6IHsgcXVlc3Rpb246IHN0cmluZyB9O1xuICAgICAgUGFyYW1zOiB7IHByb2plY3RJZDogc3RyaW5nIH07XG4gICAgfT4sXG4gICAgcmVwOiBGYXN0aWZ5UmVwbHlcbiAgKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXEuZmlsZSgpO1xuICAgICAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHJlcS5wYXJhbXM7XG4gICAgICBjb25zdCBpZCA9IGByZXMtJHtjdWlkKCl9YDtcblxuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZXh0ID0gZGF0YS5maWxlbmFtZS5zcGxpdCgnLicpWzFdO1xuICAgICAgICBjb25zdCBuYW1lID0gYCR7aWR9LiR7ZXh0fWA7XG4gICAgICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uJywgJ2ZpbGVzJywgbmFtZSk7XG5cbiAgICAgICAgaWYgKGNhY2hlLmdldChkYXRhLmZpbGVuYW1lKSkge1xuICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoZGF0YS5maWxlbmFtZSkgfHwgW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJlYW1Ub1N0cmluZyhkYXRhLmZpbGUpO1xuXG4gICAgICAgIGF3YWl0ICRkYXRhLmNyZWF0ZShwcm9qZWN0SWQsIG5hbWUpO1xuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIHJlc3VsdCk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgJG9wZW5haS50cmFpbihyZXN1bHQpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFKc29uID0gSlNPTi5wYXJzZShcbiAgICAgICAgICByZXNwb25zZURhdGE/LmNob2ljZXM/LlswXT8ubWVzc2FnZT8uY29udGVudCB8fCAnW10nXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGlkcyA9IDA7XG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGFKc29uKS5yZWR1Y2UoXG4gICAgICAgICAgKHRvdGFsOiBhbnksIFtsYWJlbCwgdGFza3NdOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBpZHMgKz0gMTtcblxuICAgICAgICAgICAgICB0b3RhbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogaWRzLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICBzdG9yeVBvaW50czogJzBQJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zcC1lc3RpbWF0aW9uJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZXM6IGZpbmFsRGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS50aXRsZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaW5hbCA9IGZpbmFsRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgc3RvcnlQb2ludHM6IGAke3Jlc3BvbnNlLmRhdGEuc3Rvcnlwb2ludHNbaW5kZXhdfVBgLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY2FjaGUuc2V0KGRhdGEuZmlsZW5hbWUsIGZpbmFsKTtcblxuICAgICAgICByZXR1cm4gcmVwLnNlbmQoZmluYWwgfHwgW10pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVwLnNlbmQoW10pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXAuY29kZSg1MDApO1xuICAgICAgcmVwLnNlbmQoeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9KTtcbiAgICB9XG4gIH0sXG59KTtcblxucm91dGUoe1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgdXJsOiAnL2FwaS92MS90cmFpbi10ZXh0Lzpwcm9qZWN0SWQnLFxuICBhY2NlcHQ6IFsnZ3Vlc3QnXSxcbiAgaGFuZGxlcjogYXN5bmMgZnVuY3Rpb24gKFxuICAgIHJlcTogRmFzdGlmeVJlcXVlc3Q8e1xuICAgICAgQm9keTogeyB0ZXh0OiBzdHJpbmcgfTtcbiAgICAgIFBhcmFtczogeyBwcm9qZWN0SWQ6IHN0cmluZyB9O1xuICAgIH0+LFxuICAgIHJlcDogRmFzdGlmeVJlcGx5XG4gICkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHRleHQgfSA9IHJlcS5ib2R5O1xuICAgICAgY29uc3QgeyBwcm9qZWN0SWQgfSA9IHJlcS5wYXJhbXM7XG5cbiAgICAgIGlmICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGV4dC5zcGxpdCgnICcpLnNsaWNlKDAsIDYpLmpvaW4oJy0nKTtcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnZmlsZXMnLCBgJHtpZH0udHh0YCk7XG5cbiAgICAgICAgaWYgKGNhY2hlLmdldChpZCkpIHtcbiAgICAgICAgICByZXR1cm4gY2FjaGUuZ2V0KGlkKSB8fCBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRleHQ7XG5cbiAgICAgICAgYXdhaXQgJGRhdGEuY3JlYXRlKHByb2plY3RJZCwgYCR7aWR9LnR4dGApO1xuXG4gICAgICAgIGZzLndyaXRlRmlsZVN5bmMoZmlsZVBhdGgsIHJlc3VsdCk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgJG9wZW5haS50cmFpbihyZXN1bHQpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFKc29uID0gSlNPTi5wYXJzZShcbiAgICAgICAgICByZXNwb25zZURhdGE/LmNob2ljZXM/LlswXT8ubWVzc2FnZT8uY29udGVudCB8fCAnW10nXG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGlkcyA9IDA7XG4gICAgICAgIGNvbnN0IGZpbmFsRGF0YSA9IE9iamVjdC5lbnRyaWVzKGRhdGFKc29uKS5yZWR1Y2UoXG4gICAgICAgICAgKHRvdGFsOiBhbnksIFtsYWJlbCwgdGFza3NdOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBpZHMgKz0gMTtcblxuICAgICAgICAgICAgICB0b3RhbC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZDogaWRzLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0ZXh0LFxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgICAgICBzdG9yeVBvaW50czogJzBQJyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zcC1lc3RpbWF0aW9uJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZXM6IGZpbmFsRGF0YS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS50aXRsZSksXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBmaW5hbCA9IGZpbmFsRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoe1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgc3RvcnlQb2ludHM6IGAke3Jlc3BvbnNlLmRhdGEuc3Rvcnlwb2ludHNbaW5kZXhdfVBgLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgY2FjaGUuc2V0KGlkLCBmaW5hbCk7XG5cbiAgICAgICAgcmV0dXJuIHJlcC5zZW5kKGZpbmFsIHx8IFtdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlcC5zZW5kKFtdKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVwLmNvZGUoNTAwKTtcbiAgICAgIHJlcC5zZW5kKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XG4gICAgfVxuICB9LFxufSk7XG4iLCAiaW1wb3J0IENPTkZJRyBmcm9tICckc2VydmVyL2NvbmZpZyc7XG5pbXBvcnQgaHR0cCBmcm9tICckc2VydmVyL2h0dHAnO1xuaW1wb3J0IGxvZyBmcm9tICckc2VydmVyL2xvZyc7XG5cbmh0dHAuY29ubmVjdCgpLnRoZW4oKCkgPT4ge1xuICBjb25zdCB1cmwgPSBgaHR0cDovLyR7Q09ORklHLkhUVFBfSE9TVH06JHtDT05GSUcuSFRUUF9QT1JUfWA7XG5cbiAgcHJvY2Vzcy5vbignU0lHVEVSTScsICgpID0+IHtcbiAgICBodHRwLmRpc2Nvbm5lY3QoKTtcbiAgfSk7XG5cbiAgbG9nLmluZm8oYFNlcnZlciBzdGFydGVkOiAke3VybH1gKTtcbn0pO1xuXG5pbXBvcnQgJyRzZXJ2ZXIvYXBpcy9hdXRoJztcbmltcG9ydCAnJHNlcnZlci9hcGlzL3VzZXInO1xuaW1wb3J0ICckc2VydmVyL2FwaXMvb3BlbmFpJztcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsOENBQUFBLFNBQUE7QUFTQSxhQUFTLFNBQVMsT0FBTyxVQUFVO0FBQ2pDLFVBQUksUUFBUSxJQUNSLFNBQVMsU0FBUyxPQUFPLElBQUksTUFBTSxRQUNuQyxTQUFTLE1BQU0sTUFBTTtBQUV6QixhQUFPLEVBQUUsUUFBUSxRQUFRO0FBQ3ZCLGVBQU8sU0FBUyxTQUFTLE1BQU0sUUFBUSxPQUFPLEtBQUs7QUFBQSxNQUNyRDtBQUNBLGFBQU87QUFBQSxJQUNUO0FBRUEsSUFBQUEsUUFBTyxVQUFVO0FBQUE7QUFBQTs7O0FDcEJqQjtBQUFBLG9EQUFBQyxTQUFBO0FBT0EsYUFBUyxpQkFBaUI7QUFDeEIsV0FBSyxXQUFXLENBQUM7QUFDakIsV0FBSyxPQUFPO0FBQUEsSUFDZDtBQUVBLElBQUFBLFFBQU8sVUFBVTtBQUFBO0FBQUE7OztBQ1pqQjtBQUFBLHVDQUFBQyxTQUFBO0FBZ0NBLGFBQVMsR0FBRyxPQUFP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QztBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUM3TkQsYUFBSyxRQUFRLEVBQUUsS0FBSyxNQUFNO0FBQ3hCLFFBQU0sTUFBTSxVQUFVLGVBQU8sYUFBYSxlQUFPO0FBRWpELFVBQVEsR0FBRyxXQUFXLE1BQU07QUFDMUIsaUJBQUssV0FBVztBQUFBLEVBQ2xCLENBQUM7QUFFRCxjQUFJLEtBQUssbUJBQW1CLEtBQUs7QUFDbkMsQ0FBQzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIk1hcCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIk1hcCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIk1hcCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiQnVmZmVyIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJCdWZmZXIiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJQcm9taXNlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIk1hcCIsICJQcm9taXNlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiVWludDhBcnJheSIsICJtb2R1bGUiLCAiVWludDhBcnJheSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAia2V5IiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImNhY2hlIiwgIm1vZHVsZSIsICJjYWNoZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgInBhdGgiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJwYXRoIiwgIm1vZHVsZSIsICJwYXRoIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm9taXQiLCAicGF0aCIsICJkb3RlbnZFeHBhbmQiLCAiZG90ZW52IiwgInBpbm8iLCAiY3VpZCIsICJpbXBvcnRfZGF0ZV9mbnMiLCAiRmFzdGlmeSIsICJxcyIsICJmb3JtYm9keSIsICJxcyIsICJmYXN0aWZ5TXVsdGlwYXJ0IiwgImZhc3RpZnlDb29raWUiLCAiZmFzdGlmeVNlc3Npb24iLCAicm91dGUiLCAiaW1wb3J0X3Bpbm8iLCAicGlubyIsICJvcHRpb25zIiwgIm9taXQiLCAiYXhpb3MiLCAiZGF0YSIsICJmcyIsICJwYXRoIiwgImltcG9ydF9mcyIsICJpbXBvcnRfY3VpZCIsICJpbXBvcnRfcGF0aCIsICJpbXBvcnRfYXhpb3MiLCAiY3VpZCIsICJwYXRoIiwgImZzIiwgImF4aW9zIiwgInRleHQiXQp9Cg==
