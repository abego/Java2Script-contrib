﻿/* http://j2s.sf.net/ *//******************************************************************************
 * Copyright (c) 2007 java2script.org and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Zhou Renjian - initial API and implementation
 *****************************************************************************/
/*******
 * @author zhou renjian
 * @create Nov 5, 2005
 *******/

if (window["Clazz"] == null) {
/*
 * The following *-# are used to compress the JavaScript file into small file.
 * For more details, please read /net.sf.j2s.lib/build/build.xml
 */
/*-#
 # _x_CLASS_NAME__ -> C$N
 # _x_PKG_NAME__ -> P$N
 #
 # clazzThis -> Tz
 # objThis -> To
 # clazzHost -> Hz
 # hostThis -> Th
 # hostSuper -> Sh
 # clazzFun -> Fc
 # clazzName -> Nc
 # funName -> Nf
 # funBody -> Bf
 # objType -> oT
 #  
 # qClazzName ->Nq
 #-*/
/**
 * Class Clazz. All the methods are static in this class.
 */
/* static */
Class = Clazz = function () {
};

NullObject = function () {
};

JavaObject = Object;

/* protected */
Clazz.supportsNativeObject = window["j2s.object.native"];

if (Clazz.supportsNativeObject) {
	JavaObject = function () {};
}

JavaObject.prototype.equals = function (obj) {
	return this == obj;
};

JavaObject.prototype.hashCode = function () {
	try {
		return this.toString ().hashCode ();
	} catch (e) {
		var str = ":";
		for (var s in this) {
			str += s + ":"
		}
		return str.hashCode ();
	}
};

JavaObject.prototype.getClass = function () {
	return Clazz.getClass (this);
};

JavaObject.prototype.clone = function () {
	var o = new this.constructor ();
	for (var i in this) {
		o[i] = this[i];
	}
	return o;
};

/*
 * Methods for thread in Object
 */
JavaObject.prototype.finalize = function () {};
JavaObject.prototype.notify = function () {};
JavaObject.prototype.notifyAll = function () {};
JavaObject.prototype.wait = function () {};

JavaObject.prototype.to$tring = Object.prototype.toString;
JavaObject.prototype.toString = function () {
	if (this.__CLASS_NAME__ != null) {
		return "[" + this.__CLASS_NAME__ + " object]";
	} else {
		return this.to$tring ();
	}
};

if (Clazz.supportsNativeObject) {
	/* protected */
	Clazz.extendedObjectMethods = [
			"equals", "hashCode", "getClass", "clone", "finalize", "notify", "notifyAll", "wait", "to$tring", "toString"
	];

	for (var i = 0; i < Clazz.extendedObjectMethods.length; i++) {
		var p = Clazz.extendedObjectMethods[i];
		Array.prototype[p] = JavaObject.prototype[p];
	}
	JavaObject.__CLASS_NAME__ = "Object";
	JavaObject["getClass"] = function () { return JavaObject; }; 
}

/**
 * Try to fix bug on Safari
 */
InternalFunction = Object;

/**
 * Return the class name of the given class or object.
 *
 * @param clazzHost given class or object
 * @return class name
 */
/* public */
Clazz.getClassName = function (clazzHost) {
	if (clazzHost == null) {
		/* 
		 * null is always treated as Object.
		 * But what about "undefined"?
		 */
		return "NullObject";
	}
	if (typeof clazzHost == "function") {
		var clazz = clazzHost;
		if (clazz.__CLASS_NAME__ != null) {
			if (arguments[1] != true) {
				return "Class";
			}
			/* user defined class name */
			return clazz.__CLASS_NAME__;
		}
		/*-# clazzStr -> Sc #-*/
		var clazzStr = clazz.toString ();
		var idx0 = clazzStr.indexOf ("function");
		if (idx0 == -1) {
			// For Firefox 1.5.0.1+, those HTML element are no longer
			// bound with function () { [native] } constructors
			if (clazzStr.charAt (0) == '[') {
				var clazzName = clazzStr.substring (1, clazzStr.length - 1);
				if (clazzName.indexOf ("object ") != -1) { // IE
					return clazzName.substring (7);
				}
				return clazzName;
			} else {
				return clazzStr.replace(/[^a-zA-Z0-9]/g, '');
			}
		}
		var idx1 = idx0 + 8;
		var idx2 = clazzStr.indexOf ("(", idx1);
		if (idx2 == -1) {
			return "Object";
		}
		var clazzName = clazzStr.substring (idx1, idx2)
				.replace (/^\s+/, "").replace (/\s+$/, ""); // .trim ()
		if (clazzName == "anonymous") {
			return "Function";
		} else {
			return clazzName;
		}
	} else {
		var obj = clazzHost;
		if (obj instanceof Clazz.CastedNull) {
			return obj.clazzName;
		} else {
			var objType = typeof obj;
			if (objType == "string") {
				/* 
				 * Always treat the constant string as String object.
				 * This will be compatiable with Java String instance.
				 */
				return "String";
			} else if (objType == "object") {
				if (obj.__CLASS_NAME__ != null) {
					/* user defined class name */
					return obj.__CLASS_NAME__;
				} else if (obj.constructor == null) {
					return "Object"; // For HTML Element in IE
				} else {
					if (obj.constructor.__CLASS_NAME__ == null) {
						if (obj instanceof Number) {
							return "Number";
						} else if (obj instanceof Boolean) {
							return "Boolean";
						} else if (obj instanceof Array) {
							return "Array";
						}
					}
					return Clazz.getClassName (obj.constructor, true);
				}
			} else if (objType == "number") {
				return "Number";
			} else if (objType == "boolean") {
				return "Boolean";
			}
			return Clazz.getClassName (obj.constructor, true);
		}
	}
};
/**
 * Return the class of the given class or object.
 *
 * @param clazzHost given class or object
 * @return class name
 */
/* public */
Clazz.getClass = function (clazzHost) {
	if (clazzHost == null) {
		/* 
		 * null is always treated as Object.
		 * But what about "undefined"?
		 */
		return JavaObject;
	}
	if (typeof clazzHost == "function") {
		return clazzHost;
	} else {
		var clazzName = null;
		var obj = clazzHost;
		if (obj instanceof Clazz.CastedNull) {
			clazzName = obj.clazzName;
		} else {
			var objType = typeof obj;
			if (objType == "string") {
				return String;
			} else if (typeof obj == "object") {
				/* user defined class name */
				if (obj.__CLASS_NAME__ != null) {
					clazzName = obj.__CLASS_NAME__;
				} else if (obj.constructor == null) {
					return JavaObject; // Is it safe?
				} else {
					return obj.constructor;
				}
			}
		}
		if (clazzName != null) {
			//var hostedClazz = null;
			//eval ("hostedClazz = " + clazzName + ";");
			//return hostedClazz;
			return Clazz.evalType (clazzName, true);
		} else {
			return obj.constructor;
		}
	}
};

/*
 * Be used to copy members of class
 */
/* protected */
/*-# extendsProperties -> eP #-*/
Clazz.extendsProperties = function (hostThis, hostSuper) {
	for (var o in hostSuper) {
		if (o != "b$" && o != "prototype" && o != "superClazz"
				&& o != "__CLASS_NAME__" && o != "implementz"
				&& !Clazz.checkInnerFunction (hostSuper, o)) {
			hostThis[o] = hostSuper[o];
		}
	}
};

/* private */
/*-# checkInnerFunction -> cIF #-*/
Clazz.checkInnerFunction = function (hostSuper, funName) {
	for (var k = 0; k < Clazz.innerFunctionNames.length; k++) {
		if (funName == Clazz.innerFunctionNames[k] && 
				Clazz.innerFunctions[funName] === hostSuper[funName]) {
			return true;
		}
	}
	return false;
};

/*
 * Be used to copy members of interface
 */
/* protected */
/*-# implementsProperties -> ip #-*/
Clazz.implementsProperties = function (hostThis, hostSuper) {
	for (var o in hostSuper) {
		if (o != "b$" && o != "prototype" && o != "superClazz"
				&& o != "__CLASS_NAME__" && o != "implementz") {
			if (typeof hostSuper[o] == "function") {
				/*
				 * static final member of interface may be a class, which may
				 * be function.
				 */
				if (Clazz.checkInnerFunction (hostSuper, o)) {
					continue;
				}
			}
			hostThis[o] = hostSuper[o];
			hostThis.prototype[o] = hostSuper[o];
		}
	}
	/*
	 * There is no concrete fields or methods in interfaces!
	 * Folllowing lines see non-sense!
	 * March 10, 2006
	 */
	/*
	for (var o in hostSuper.prototype) { 
		if (o != "__CLASS_NAME__") {
			hostThis.prototype[o] = hostSuper.prototype[o];
		}
	}
	*/
};

/*-# args4InheritClass -> aIC #-*/
Clazz.args4InheritClass = function () {
};
Clazz.inheritArgs = new Clazz.args4InheritClass ();

/**
 * Inherit class with "extends" keyword and also copy those static members. 
 * Example, as in Java, if NAME is a static member of ClassA, and ClassB 
 * extends ClassA then ClassB.NAME can be accessed in some ways.
 *
 * @param clazzThis child class to be extended
 * @param clazzSuper super class which is inherited from
 * @param objSuper super class instance
 */
/* protected */
/*-#
 # inheritClass -> xic 
 #
 # objSuper -> oSp
 #-*/
Clazz.inheritClass = function (clazzThis, clazzSuper, objSuper) {
	//var thisClassName = Clazz.getClassName (clazzThis);
	Clazz.extendsProperties (clazzThis, clazzSuper);
	if (Clazz.isClassUnloaded (clazzThis)) {
		// Don't change clazzThis.protoype! Keep it!
	} else if (objSuper != null) {
		// ! Unsafe of refrence prototype to an instance!
		// Feb 19, 2006 --josson
		// OK for this refrence to an instance, as this is anonymous instance,
		// which is not referenced elsewhere.
		// March 13, 2006
		clazzThis.prototype = objSuper; 
	} else if (clazzSuper !== Number) {
		clazzThis.prototype = new clazzSuper (Clazz.inheritArgs);
	} else { // Number
		clazzThis.prototype = new Number ();
	}
	clazzThis.superClazz = clazzSuper;
	/*
	 * Is it necessary to reassign the class name?
	 * Mar 10, 2006 --josson
	 */
	//clazzThis.__CLASS_NAME__ = thisClassName;
	clazzThis.prototype.__CLASS_NAME__ = clazzThis.__CLASS_NAME__;
};

/**
 * Implementation of Java's keyword "implements".
 * As in JavaScript there are on "implements" keyword implemented, a property
 * of "implementz" is added to the class to record the interfaces the class
 * is implemented.
 * 
 * @param clazzThis the class to implement
 * @param interfacez Array of interfaces
 */
/* public */
Clazz.implementOf = function (clazzThis, interfacez) {
	if (arguments.length >= 2) {
		if (clazzThis.implementz == null) {
			clazzThis.implementz = new Array ();
		}
		var impls = clazzThis.implementz;
		if (arguments.length == 2) {
			if (typeof interfacez == "function") {
				impls[impls.length] = interfacez;
				Clazz.implementsProperties (clazzThis, interfacez);
			} else if (interfacez instanceof Array) {
				for (var i = 0; i < interfacez.length; i++) {
					impls[impls.length] = interfacez[i];
					Clazz.implementsProperties (clazzThis, interfacez[i]);
				}
			}
		} else {
			for (var i = 1; i < arguments.length; i++) {
				impls[impls.length] = arguments[i];
				Clazz.implementsProperties (clazzThis, arguments[i]);
			}
		}
	}
};

/**
 * TODO: More should be done for interface's inheritance
 */
/* public */
Clazz.extendInterface = Clazz.implementOf;

/* protected */
/*-#
 # equalsOrExtendsLevel -> eOE 
 #
 # clazzAncestor -> anc
 #-*/
Clazz.equalsOrExtendsLevel = function (clazzThis, clazzAncestor) {
	if (clazzThis === clazzAncestor) {
		return 0;
	}
	if (clazzThis.implementz != null) {
		var impls = clazzThis.implementz;
		for (var i = 0; i < impls.length; i++) {
			var level = Clazz.equalsOrExtendsLevel (impls[i], clazzAncestor);
			if (level >= 0) {
				return level + 1;
			}
		}
	}
	return -1;
};

/* protected */
/*-#
 # getInheritedLevel -> gIL 
 #
 # clazzBase -> bs
 # clazzTarget -> tg
 #-*/
Clazz.getInheritedLevel = function (clazzTarget, clazzBase) {
	if (clazzTarget === clazzBase) {
		return 0;
	}
	var isTgtStr = (typeof clazzTarget == "string");
	var isBaseStr = (typeof clazzBase == "string");
	if ((isTgtStr && ("void" == clazzTarget || "unknown" == clazzTarget)) 
			|| (isBaseStr && ("void" == clazzBase 
					|| "unknown" == clazzBase))) {
		return -1;
	}
	/*
	 * ? The following lines are confusing
	 * March 10, 2006
	 */
	if ((isTgtStr && "NullObject" == clazzTarget) 
			|| NullObject === clazzTarget) {
		if (clazzBase !== Number && clazzBase !== Boolean
				&& clazzBase !== NullObject) {
			return 0;
		}
	}
	if (isTgtStr) {
		clazzTarget = Clazz.evalType (clazzTarget);
	}
	if (isBaseStr) {
		clazzBase = Clazz.evalType (clazzBase);
	}
	if (clazzBase == null || clazzTarget == null) {
		return -1;
	}
	var level = 0;
	var zzalc = clazzTarget; // zzalc <--> clazz
	while (zzalc !== clazzBase && level < 10) {
		/* maybe clazzBase is interface */
		if (zzalc.implementz != null) {
			var impls = zzalc.implementz;
			for (var i = 0; i < impls.length; i++) {
				var implsLevel = Clazz.equalsOrExtendsLevel (impls[i], 
						clazzBase);
				if (implsLevel >= 0) {
					return level + implsLevel + 1;
				}
			}
		}
		
		zzalc = zzalc.superClazz;
		if (zzalc == null) {
			if (clazzBase === Object || clazzBase === JavaObject) {
				/*
				 * getInheritedLevel(String, CharSequence) == 1
				 * getInheritedLevel(String, Object) == 1.5
				 * So if both #test(CharSequence) and #test(Object) existed,
				 * #test("hello") will correctly call #test(CharSequence)
				 * insted of #test(Object).
				 */
				return level + 1.5; // 1.5! Special!
			} else {
				return -1;
			}
		}
		level++;
	}
	return level;
};

/**
 * Implements Java's keyword "instanceof" in JavaScript's way.
 * As in JavaScript part of the object inheritance is implemented in only-
 * JavaScript way.
 *
 * @param obj the object to be tested
 * @param clazz the class to be checked
 * @return whether the object is an instance of the class
 */
/* public */
Clazz.instanceOf = function (obj, clazz) {
	if (obj == null) {
		return clazz == undefined; // should usually false
	}
	if (clazz == null) {
		return false;
	}
	if (obj instanceof clazz) {
		return true;
	} else {
		/*
		 * To check all the inherited interfaces.
		 */
		var clazzName = Clazz.getClassName (obj);
		return Clazz.getInheritedLevel (clazzName, clazz) >= 0;
	}
};

/**
 * Call super method of the class. 
 * The same effect as Java's expression:
 * <code> super.* () </code>
 * 
 * @param objThis host object
 * @param clazzThis class of declaring method scope. It's hard to determine 
 * which super class is right class for "super.*()" call when it's in runtime
 * environment. For example,
 * 1. ClasssA has method #run()
 * 2. ClassB extends ClassA overriding method #run() with "super.run()" call
 * 3. ClassC extends ClassB
 * 4. objC is an instance of ClassC
 * Now we have to decide which super #run() method is to be invoked. Without
 * explicit clazzThis parameter, we only know that objC.getClass() is ClassC 
 * and current method scope is #run(). We do not known we are in scope 
 * ClassA#run() or scope of ClassB#run(). if ClassB is given, Clazz can search
 * all super methods that are before ClassB and get the correct super method.
 * This is the reason why there must be an extra clazzThis parameter.
 * @param funName method name to be called
 * @param funParams Array of method parameters
 */
/* public */
Clazz.superCall = function (objThis, clazzThis, funName, funParams) {
	var fx = null;
	var i = -1;
	var clazzFun = objThis[funName];
	if (clazzFun != null) {
		if (clazzFun.claxxOwner != null) { 
			// claxxOwner is a mark for methods that is single.
			if (clazzFun.claxxOwner !== clazzThis) {
				// This is a single method, call directly!
				fx = clazzFun;
			}
		} else if (clazzFun.stacks == null && !(clazzFun.lastClaxxRef != null
					&& clazzFun.lastClaxxRef.prototype[funName] != null
					&& clazzFun.lastClaxxRef.prototype[funName].stacks != null)) { // super.toString
			fx = clazzFun;
		} else { // normal wrapped method
			var stacks = clazzFun.stacks;
			if (stacks == null) {
				stacks = clazzFun.lastClaxxRef.prototype[funName].stacks;
			}
			var length = stacks.length;
			for (i = length - 1; i >= 0; i--) {
				/*
				 * Once super call is computed precisely, there are no need 
				 * to calculate the inherited level but just an equals
				 * comparision
				 */
				//var level = Clazz.getInheritedLevel (clazzThis, stacks[i]);
				if (clazzThis === stacks[i]) { // level == 0
					if (i > 0) {
						i--;
						fx = stacks[i].prototype[funName];
					} else {
						/*
						 * Will this case be reachable?
						 * March 4, 2006
						 * Should never reach here if all things are converted
						 * by Java2Script
						 */
						fx = stacks[0].prototype[funName]["\\unknown"];
					}
					break;
				} else if (Clazz.getInheritedLevel (clazzThis, 
						stacks[i]) > 0) {
					fx = stacks[i].prototype[funName];
					break;
				}
			} // end of for loop
		} // end of normal wrapped method
	} // end of clazzFun != null
	if (fx != null) {
		/* there are members which are initialized out of the constructor */
		/*if (i == -1) {
			// unreachable
			//var oo = clazzFun.claxxOwner;
			//if (oo.superClazz == null && oo.con$truct != null) {
			//	clazzFun.claxxOwner.con$truct.apply (objThis, []);
			//}
		} else */if (i == 0 && funName == "construct") {
			var ss = clazzFun.stacks;
			if (ss != null && ss[0].superClazz == null
					&& ss[0].con$truct != null) {
				ss[0].con$truct.apply (objThis, []);
			}
		}
		/*# {$no.debug.support} >>x #*/
		if (Clazz.tracingCalling) {
			var caller = arguments.callee.caller;
			if (caller === Clazz.superConstructor) {
				caller = caller.arguments.callee.caller;
			}
			Clazz.pu$hCalling (new Clazz.callingStack (caller, clazzThis));
			var ret = fx.apply (objThis, (funParams == null) ? [] : funParams);
			Clazz.p0pCalling ();
			return ret;
		}
		/*# x<< #*/
		return fx.apply (objThis, (funParams == null) ? [] : funParams);
	} else if (funName == "construct") {
		/* there are members which are initialized out of the constructor */
		/*
		if (i == -1) {
			// should be ignore as there are codes calling con$truct in 
			// #superConstructor
		} else {
			// unreachable
			//var ss = clazzFun.stacks;
			//if (ss != null && ss[0].superClazz == null 
			//		&& ss[0].con$truct != null) {
			//	ss[0].con$truct.apply (objThis, []);
			//}
		}
		*/
		/* No super constructor! */
		return ;
	}
	throw new Clazz.MethodNotFoundException (objThis, clazzThis, funName, 
			Clazz.getParamsType (funParams).typeString);
};

/**
 * Call super constructor of the class. 
 * The same effect as Java's expression: 
 * <code> super () </code>
 */
/* public */
Clazz.superConstructor = function (objThis, clazzThis, funParams) {
	Clazz.superCall (objThis, clazzThis, "construct", funParams);
	/* If there are members which are initialized out of the constructor */
	if (clazzThis.con$truct != null) {
		clazzThis.con$truct.apply (objThis, []);
	}
};

/**
 * Class for null with a given class as to be casted.
 * This class will be used as an implementation of Java's casting way.
 * For example,
 * <code> this.call ((String) null); </code>
 */
/* protcted */
Clazz.CastedNull = function (asClazz) {
	if (asClazz != null) {
		if (asClazz instanceof String) {
			this.clazzName = asClazz;
		} else if (asClazz instanceof Function) {
			this.clazzName = Clazz.getClassName (asClazz, true);
		} else {
			this.clazzName = "" + asClazz;
		}
	} else {
		this.clazzName = "Object";
	}
	this.toString = function () {
		return null;
	};
	this.valueOf = function () {
		return null;
	};
};

/**
 * API for Java's casting null.
 * @see Clazz.CastedNull
 *
 * @param asClazz given class
 * @return an instance of class Clazz.CastedNull
 */
/* public */
Clazz.castNullAs = function (asClazz) {
	return new Clazz.CastedNull (asClazz);
};

/** 
 * MethodException will be used as a signal to notify that the method is
 * not found in the current clazz hierarchy.
 */
/* private */
Clazz.MethodException = function () {
	/*
	this.message = "The static Clazz instance can not found the method!";
	this.toString = function () {
		return this.message;
	};
	*/
};
/* protected */
Clazz.MethodNotFoundException = function () {
	this.toString = function () {
		return "MethodNotFoundException";
	};
};

/* private */
/*x-# getParamsType -> gPT #-x*/
Clazz.getParamsType = function (funParams) {
	var params = new Array ();
	params.hasCastedNull = false;
	if (funParams != null) {
		for (var i = 0; i < funParams.length; i++) {
			params[i] = Clazz.getClassName (funParams[i]);
			if (funParams[i] instanceof Clazz.CastedNull) {
				params.hasCastedNull = true;
			}
		}
	}
	if (params.length == 0) {
		params[0] = "void";
	}
	params.typeString = "\\" + params.join ('\\');
	//params.hasCastedNull = hasCastedNull;
	return params;
};
/**
 * Search the given class prototype, find the method with the same
 * method name and the same parameter signatures by the given 
 * parameters, and then run the method with the given parameters.
 *
 * @param objThis the current host object
 * @param claxxRef the current host object's class
 * @param fxName the method name
 * @param funParams the given arguments
 * @return the result of the specified method of the host object,
 * the return maybe void.
 * @throws Clazz.MethodNotFoundException if no matched method is found
 */
/* protected */
/*-# searchAndExecuteMethod -> saem #-*/
Clazz.searchAndExecuteMethod = function (objThis, claxxRef, fxName, funParams) {
	var params = Clazz.getParamsType (funParams);
	var fx = objThis[fxName];
	/*
	 * Cache last matched method
	 */
	if (fx.lastParams == params.typeString && fx.lastClaxxRef === claxxRef) {
		var methodParams = null;
		if (params.hasCastedNull) {
			methodParams = new Array ();
			for (var k = 0; k < funParams.length; k++) {
				if (funParams[k] instanceof Clazz.CastedNull) {
					/*
					 * For Clazz.CastedNull instances, the type name is
					 * already used to indentified the method in Clazz#
					 * searchMethod.
					 */
					methodParams[k] = null;
				} else {
					methodParams[k] = funParams[k];
				}
			}
		} else {
			methodParams = funParams;
		}
		if (fx.lastMethod != null) {
			return fx.lastMethod.apply (objThis, methodParams);
		} else { // missed default constructor ?
			return ;
		}
	}
	fx.lastParams = params.typeString;
	fx.lastClaxxRef = claxxRef;

	var stacks = fx.stacks;
	if (stacks == null) {
		stacks = claxxRef.prototype[fxName].stacks;
	}
	var length = stacks.length;
	/*
	 * Search the inheritance stacks to get the given class' function
	 */
	var began = false; // began to search its super classes
	for (var i = length - 1; i > -1; i--) {
		//if (Clazz.getInheritedLevel (claxxRef, stacks[i]) >= 0) {
		/*
		 * No need to calculate the inherited level as there always exist a 
		 * right claxxRef in the stacks, and the inherited level of stacks
		 * are in order.
		 */
		if (began || stacks[i] === claxxRef) {
			/*
			 * First try to search method within the same class scope
			 * with stacks[i] === claxxRef
			 */
			var clazzFun = stacks[i].prototype[fxName];
			
			var ret = Clazz.tryToSearchAndExecute (objThis, clazzFun, params, 
					funParams/*, isSuper, clazzThis*/, fx);
			if (!(ret instanceof Clazz.MethodException)) {
				return ret;
			}
			/*
			 * As there are no such methods in current class, Clazz will try 
			 * to search its super class stacks. Here variable began indicates
			 * that super searchi is began, and there is no need checking
			 * <code>stacks[i] === claxxRef</code>
			 */
			began = true; 
		} // end of if
	} // end of for
	if ("construct" == fxName) {
		/*
		 * For non existed constructors, just return without throwing
		 * exceptions. In Java codes, extending Object can call super
		 * default Object#constructor, which is not defined in JS.
		 */
		return ;
	}
	// TODO: should be java.lang.NoSuchMethodException
	throw new Clazz.MethodNotFoundException (objThis, claxxRef, 
			fxName, params.typeString);
};

/*
 * Internet Explorer will result the following expression as 1, while the
 * other browser will have result of 2.
 * Consider IE will take extra CPU times on #substring(1) method, the
 * following variable is used to make optimization.
 */
/* private */
Clazz.ie$plit = "\\2".split (/\\/).length == 1;

/*# {$no.debug.support} >>x #*/
Clazz.tracingCalling = false;
/*# x<< #*/

/* private */
/*-# tryToSearchAndExecute -> tsae #-*/
Clazz.tryToSearchAndExecute = function (objThis, clazzFun, params, funParams/*, 
		isSuper, clazzThis*/, fx) {
	var methods = new Array ();
	//var xfparams = null;
	var generic = true;
	for (var fn in clazzFun) {
		//if (fn.indexOf ('\\') == 0) {
		if (fn.charCodeAt (0) == 92) { // 92 == '\\'.charCodeAt (0)
			var ps = (Clazz.ie$plit ? fn : fn.substring (1)).split (/\\/);
			if (ps.length == params.length) {
				methods[methods.length] = ps;
			}
			generic = false;
			continue;
		}
		/*
		 * When there are only one method in the class, use the funParams
		 * to identify the parameter type.
		 *
		 * AbstractCollection.remove (Object)
		 * AbstractList.remove (int)
		 * ArrayList.remove (int)
		 *
		 * Then calling #remove (Object) method on ArrayList instance will 
		 * need to search up to the AbstractCollection.remove (Object),
		 * which contains only one method.
		 */
		/*
		 * See Clazz#defineMethod --Mar 10, 2006, josson
		 */
		if (generic && fn == "funParams" && clazzFun.funParams != null) {
			//xfparams = clazzFun.funParams;
			fn = clazzFun.funParams;
			var ps = (Clazz.ie$plit ? fn : fn.substring (1)).split (/\\/);
			if (ps.length == params.length) {
				methods[0] = ps;
			}
			break;
		}
	}
	if (methods.length == 0) {
		//throw new Clazz.MethodException ();
		return new Clazz.MethodException ();
	}
	//if (methods.length == 0 && xfparams != null) {
	//	methods[0] = xfparams.substring (1);
	//}
	var method = Clazz.searchMethod (methods, params);
	if (method != null) {
		var f = null;
		if (generic) { /* Use the generic method */
			/*
			 * Will this case be reachable?
			 * March 4, 2006 josson
			 * 
			 * Reachable for calling #remove (Object) method on 
			 * ArrayList instance
			 * May 5, 2006 josson
			 */
			f = clazzFun; // call it directly
		} else {
			f = clazzFun["\\" + method];
		}
		//if (f != null) { // always not null
			var methodParams = null;
			if (params.hasCastedNull) {
				methodParams = new Array ();
				for (var k = 0; k < funParams.length; k++) {
					if (funParams[k] instanceof Clazz.CastedNull) {
						/*
						 * For Clazz.CastedNull instances, the type name is
						 * already used to indentified the method in Clazz#
						 * searchMethod.
						 */
						methodParams[k] = null;
					} else {
						methodParams[k] = funParams[k];
					}
				}
			} else {
				methodParams = funParams;
			}
			/*# {$no.debug.support} >>x #*/
			if (Clazz.tracingCalling) {
				var caller = arguments.callee.caller; // SAEM
				caller = caller.arguments.callee.caller; // Delegating
				caller = caller.arguments.callee.caller; 
				var xpushed = f.exName == "construct" 
						&& Clazz.getInheritedLevel (f.exClazz, Throwable) >= 0
						&& !Clazz.initializingException;
				if (xpushed) {
					Clazz.initializingException = true;
					// constructor is wrapped
					var xcaller = caller.arguments.callee.caller // Delegate
							.arguments.callee.caller; // last method
					var fun = xcaller.arguments.callee;
					var owner = fun.claxxReference;
					if (owner == null) {
						owner = fun.exClazz;
					}
					if (owner == null) {
						owner = fun.claxxOwner;
					}
					/*
					 * Keep the environment that Throwable instance is created
					 */
					Clazz.pu$hCalling (new Clazz.callingStack (xcaller, owner));
				}
				
				var noInnerWrapper = caller !== Clazz.instantialize 
						&& caller !== Clazz.superCall;
				if (noInnerWrapper) {
					var fun = caller.arguments.callee;
					var owner = fun.claxxReference;
					if (owner == null) {
						owner = fun.exClazz;
					}
					if (owner == null) {
						owner = fun.claxxOwner;
					}
					Clazz.pu$hCalling (new Clazz.callingStack (caller, owner));
				}
				fx.lastMethod = f;
				var ret = f.apply (objThis, methodParams);
				if (noInnerWrapper) {
					Clazz.p0pCalling ();
				}
				if (xpushed) {
					Clazz.p0pCalling ();
				}
				return ret;
			}
			/*# x<< #*/
			fx.lastMethod = f;
			return f.apply (objThis, methodParams);
		//}
	}
	//throw new Clazz.MethodException ();
	return new Clazz.MethodException ();
};

/*# {$no.debug.support} >>x #*/
Clazz.initializingException = false;
/*# x<< #*/

/**
 * Search the existed polymorphic methods to get the matched method with
 * the given parameter types.
 *
 * @param existedMethods Array of string which contains method parameters
 * @param paramTypes Array of string that is parameter type.
 * @return string of method parameters seperated by "\\"
 */
/* private */
/*-# 
 # searchMethod -> sM 
 #
 # roundOne -> rO
 # paramTypes -> pts
 #-*/
Clazz.searchMethod = function (roundOne, paramTypes) {
	/*
	var roundOne = new Array ();
	for (var i = 0; i < existedMethods.length; i++) {
		var split = existedMethods[i].split (/\\/);
		if (split.length == paramTypes.length) {
			roundOne[roundOne.length] = split;
		}
	}
	if (roundOne.length == 0) {
		return null;
	}
	var resultOne = roundOne;
	*/
	//var roundOne = existedMethods;
	/*
	 * Filter out all the fitted methods for the given parameters
	 */
	/*-# roundTwo -> rT #-*/
	var roundTwo = new Array ();
	for (var i = 0; i < roundOne.length; i++) {
		/*-# fittedLevel -> fL #-*/
		var fittedLevel = new Array ();
		var isFitted = true;
		for (var j = 0; j < roundOne[i].length; j++) {
			fittedLevel[j] = Clazz.getInheritedLevel (paramTypes[j], 
					roundOne[i][j]);
			if (fittedLevel[j] < 0) {
				isFitted = false;
				break;
			}
		}
		if (isFitted) {
			fittedLevel[paramTypes.length] = i; // Keep index for later use
			roundTwo[roundTwo.length] = fittedLevel;
		}
	}
	if (roundTwo.length == 0) {
		return null;
	}
	/*
	 * Find out the best method according to the inheritance.
	 */
	/*-# resultTwo -> rtT #-*/
	var resultTwo = roundTwo;
	var min = resultTwo[0];
	for (var i = 1; i < resultTwo.length; i++) {
		/*-# isVectorLesser -> vl #-*/
		var isVectorLesser = true;
		for (var j = 0; j < paramTypes.length; j++) {
			if (min[j] < resultTwo[i][j]) {
				isVectorLesser = false;;
				break;
			}
		}
		if (isVectorLesser) {
			min = resultTwo[i];
		}
	}
	var index = min[paramTypes.length]; // Get the previously stored index
	/*
	 * Return the method parameters' type string as indentifier of the
	 * choosen method.
	 */
	return roundOne[index].join ('\\');
};

/**
 * Generate delegating function for the given method name.
 *
 * @param claxxRef the specified class for the method
 * @funName method name of the specified method
 * @return the method delegate which will try to search the method
 * from the given class by the parameters
 */
/* private */
/*-# generateDelegatingMethod -> gDM #-*/
Clazz.generateDelegatingMethod = function (claxxRef, funName) {
	/*
	 * Delegating method.
	 * Each time the following expression will generate a new 
	 * function object.
	 */
	var delegating = function () {
			var r = arguments;
			return SAEM (this, r.callee.claxxReference, r.callee.methodName, r);
	};
	delegating.methodName = funName;
	delegating.claxxReference = claxxRef;
	return delegating;
};

SAEM = Clazz.searchAndExecuteMethod;

/* private */
Clazz.expExpandParameters = function ($0, $1) {
	if ($1 == 'N') {
		return "Number";
	} else if ($1 == 'B') {
		return "Boolean"
	} else if ($1 == 'S') {
		return "String";
	} else if ($1 == 'O') {
		return "Object";
	} else if ($1 == 'A') {
		return "Array"
	}
	return "Unknown";
};

/*
 * Other developers may need to extend this formatParameters method
 * to deal complicated situation.
 */
/* protected */
Clazz.formatParameters = function (funParams) {
	if (funParams == null || funParams.length == 0) {
		return "\\void";
	} else {
		/* 
		 * If funParams is Array, funParams.toString() will
		 * also return "*,*,..." string.
		 */
		var s = funParams; //.toString (); // Google Chrome v8native.js error
		s = s.replace (/~([NABSO])/g, Clazz.expExpandParameters);
		return s.replace (/\s+/g, "").replace (/^|,/g, "\\")
				.replace (/\$/g, "org.eclipse.s");
	}
};

/*
 * Override the existed methods which are in the same name.
 * Overriding methods is provided for the purpose that the JavaScript
 * does not need to search the whole hierarchied methods to find the
 * correct method to execute.
 * Be cautious about this method. Incorrectly using this method may
 * break the inheritance system.
 *
 * @param clazzThis host class in which the method to be defined
 * @param funName method name
 * @param funBody function object, e.g function () { ... }
 * @param funParams paramether signature, e.g ["string", "number"]
 */
/* public */
Clazz.overrideMethod = function (clazzThis, funName, funBody, funParams) {
	if (Clazz.assureInnerClass) Clazz.assureInnerClass (clazzThis, funBody);
	funBody.exName = funName;
	var fpName = Clazz.formatParameters (funParams);
	/*
	 * Replace old methods with new method. No super methods are kept.
	 */
	funBody.funParams = fpName; 
	funBody.claxxOwner = clazzThis;
	clazzThis.prototype[funName] = funBody;
	return funBody;
};

/*
 * Define method for the class with the given method name and method
 * body and method parameter signature.
 *
 * @param clazzThis host class in which the method to be defined
 * @param funName method name
 * @param funBody function object, e.g function () { ... }
 * @param funParams paramether signature, e.g ["string", "number"]
 * @return method of the given name. The method may be funBody or a wrapper
 * of the given funBody.
 */
/* public */
Clazz.defineMethod = function (clazzThis, funName, funBody, funParams) {
	if (Clazz.assureInnerClass) Clazz.assureInnerClass (clazzThis, funBody);
	funBody.exName = funName;
	var fpName = Clazz.formatParameters (funParams);
	/*
	 * For method the first time is defined, just keep it rather than
	 * wrapping into deep hierarchies!
	 */
	var f$ = clazzThis.prototype[funName];
	if (f$ == null || (f$.claxxOwner === clazzThis
			&& f$.funParams == fpName)) {
		// property "funParams" will be used as a mark of only-one method
		funBody.funParams = fpName; 
		funBody.claxxOwner = clazzThis;
		clazzThis.prototype[funName] = funBody;
		funBody.exClazz = clazzThis; // make it traceable
		return funBody;
	}
	var oldFun = null;
	var oldStacks = new Array ();
	//if (f$ != null) {
		if (f$.stacks == null) {
			/* method is not defined by Clazz.defineMethod () */
			oldFun = f$;
			if (f$.claxxOwner != null) {
				oldStacks[0] = oldFun.claxxOwner;
			}
		} else {
			oldStacks = f$.stacks;
		}
	//}
	
	//if (oldFun != null && oldFun.claxxOwner != null) {
		// oldFun is not defined by Clazz.defineMethod
		
		/*
		 * oldStacks should be "new Array ()";
		 */
		/*
		 * Here try to fix up the method into Clazz compatiable.
		 */
		//oldStacks[0] = oldFun.claxxOwner;
		/*
		if (oldFun.claxxOwner !== clazzThis) {
			if ("releaseChild" == funName) {
				error (" in here ");
			}
			oldFun.claxxOwner.prototype[funName].stacks = oldStacks;
			oldFun.claxxOwner.prototype[funName] = Clazz
					.generateDelegatingMethod (oldFun.claxxOwner, funName);
			oldFun.claxxOwner.prototype[funName][oldFun.funParams] = oldFun;
			oldFun.claxxOwner = null;
			oldFun.funParams = null;
			oldFun = null;
		}
		//*/
	//}
	/*
	 * Method that is already defined in super class will be overriden
	 * with a new proxy method with class hierarchy stored in a stack.
	 * That is to say, the super methods are lost in this class' proxy
	 * method. 
	 * When method are being called, methods defined in the new proxy 
	 * method will be searched through first. And if no method fitted,
	 * it will then try to search method in the super class stacks.
	 */
	/* method has not been defined yet */
	/* method is not defined by Clazz.defineMethod () */
	/* method is defined in super class */
	if (/*f$ == null 
			|| */f$.stacks == null 
			|| f$.claxxReference !== clazzThis) {
		/*
		 * Generate a new delegating method for the class
		 */
		f$ = clazzThis.prototype[funName] = Clazz
				.generateDelegatingMethod (clazzThis, funName);
		/*
		 * Keep the class inheritance stacks
		 */
		var arr = new Array ();
		for (var i = 0; i < oldStacks.length; i++) {
			arr[i] = oldStacks[i];
		}
		f$.stacks = arr;
	}
	var ss = f$.stacks;

	if (ss.length == 0/* || ss[ss.length - 1] !== clazzThis*/) {
		ss[ss.length] = clazzThis;
	} else {
		var existed = false;
		for (var i = ss.length - 1; i >= 0; i--) {
			if (ss[i] === clazzThis) {
				existed = true;
				break;
			}
		}
		if (!existed) {
			ss[ss.length] = clazzThis;
		}
	}

	if (oldFun != null) {
		if (oldFun.claxxOwner === clazzThis) {
			f$[oldFun.funParams] = oldFun;
			oldFun.claxxOwner = null;
			// property "funParams" will be used as a mark of only-one method
			oldFun.funParams = null; // null ? safe ? // safe for " != null"
		} else if (oldFun.claxxOwner == null) {
			/*
			 * The function is not defined Clazz.defineMethod ().
			 * Try to fixup the method ...
			 * As a matter of lost method information, I just suppose
			 * the method to be fixed is with void parameter!
			 */
			f$["\\unknown"] = oldFun;
		}
	}
	funBody.exClazz = clazzThis; // make it traceable
	f$[fpName] = funBody;
	return f$;
};

/**
 * Make constructor for the class with the given function body and parameters
 * signature.
 * 
 * @param clazzThis host class
 * @param funBody constructor body
 * @param funParams constructor parameters signature
 */
/* public */
Clazz.makeConstructor = function (clazzThis, funBody, funParams) {
	var funName = "construct";
	Clazz.defineMethod (clazzThis, funName, funBody, funParams);
	if (clazzThis.con$truct != null) {
		clazzThis.con$truct.index = clazzThis.con$truct.stacks.length;
	}
	//clazzThis.con$truct = clazzThis.prototype.con$truct = null;
};

/*
 * all root packages. e.g. java.*, org.*, com.*
 */
/* protected */
Clazz.allPackage = new Object ();

/**
 * Will be used to keep value of whether the class is defined or not.
 */
/* protected */
Clazz.allClasses = new Object ();

Clazz.lastPackageName = null;
Clazz.lastPackage = null;

/* protected */
Clazz.unloadedClasses = new Array ();

/* public */
Clazz.isClassUnloaded = function (clzz) {
	var thisClassName = Clazz.getClassName (clzz, true);
	return Clazz.unloadedClasses[thisClassName] != null;
};

/* public */
Clazz.declarePackage = function (pkgName) {
	if (Clazz.lastPackageName == pkgName) {
		return Clazz.lastPackage;
	}
	if (pkgName != null && pkgName.length != 0) {
		var pkgFrags = pkgName.split (/\./);
		var pkg = Clazz.allPackage;
		for (var i = 0; i < pkgFrags.length; i++) {
			if (pkg[pkgFrags[i]] == null) {
				pkg[pkgFrags[i]] = { 
					__PKG_NAME__ : ((pkg.__PKG_NAME__ != null) ? 
						pkg.__PKG_NAME__ + "." + pkgFrags[i] : pkgFrags[i])
				}; 
				// pkg[pkgFrags[i]] = new Object ();
				if (i == 0) {
					// eval ...
					window[pkgFrags[i]] = pkg[pkgFrags[i]];
				}
			}
			pkg = pkg[pkgFrags[i]]
		}
		Clazz.lastPackageName = pkgName;
		Clazz.lastPackage = pkg;
		return pkg;
	}
};

/* protected */
/*x-# evalType -> eT  #-x*/
Clazz.evalType = function (typeStr, isQualified) {
	//*
	var idx = typeStr.lastIndexOf (".");
	if (idx != -1) {
		var pkgName = typeStr.substring (0, idx);
		var pkg = Clazz.declarePackage (pkgName);
		var clazzName = typeStr.substring (idx + 1);
		return pkg[clazzName];
	//*/
	/*
	var frags = typeStr.split (/\./);
	if (frags.length > 1)  {
		var type = Clazz.allPackage[frags[0]];
		for (var i = 1; i < frags.length; i++) {
			type = type[frags[i]];
		}
		return type;
	*/
	} else if (isQualified) {
		return window[typeStr];
	} else if (typeStr == "number") {
		return Number;
	} else if (typeStr == "object") {
		return JavaObject;
	} else if (typeStr == "string") {
		return String;
	} else if (typeStr == "boolean") {
		return Boolean;
	} else if (typeStr == "function") {
		return Function;
	} else if (typeStr == "void" || typeStr == "undefined"
			|| typeStr == "unknown") {
		return typeStr;
	} else if (typeStr == "NullObject") {
		return NullObject;
	} else {
		return window[typeStr];
	}
};

/**
 * Define a class or interface.
 *
 * @param qClazzName String presents the qualified name of the class
 * @param clazzFun Function of the body
 * @param clazzParent Clazz to inherit from, may be null
 * @param interfacez Clazz may implement one or many interfaces
 *   interfacez can be Clazz object or Array of Clazz objects.
 * @return Ruturn the modified Clazz object
 */
/* public */
Clazz.defineType = function (qClazzName, clazzFun, clazzParent, interfacez) {
	var cf = Clazz.unloadedClasses[qClazzName];
	if (cf != null) {
		clazzFun = cf;
	}
	var idx = qClazzName.lastIndexOf (".");
	if (idx != -1) {
		var pkgName = qClazzName.substring (0, idx);
		var pkg = Clazz.declarePackage (pkgName);
		var clazzName = qClazzName.substring (idx + 1);
		if (pkg[clazzName] != null) {
			// already defined! Should throw exception!
			return pkg[clazzName];
		}
		pkg[clazzName] = clazzFun;
	} else {
		if (window[qClazzName] != null) {
			// already defined! Should throw exception!
			return window[qClazzName];
		}
		window[qClazzName] = clazzFun;
	}
	Clazz.decorateAsType (clazzFun, qClazzName, clazzParent, interfacez);
	/*# {$no.javascript.support} >>x #*/
	var iFun = Clazz.innerFunctions;
	clazzFun.defineMethod = iFun.defineMethod;
	clazzFun.defineStaticMethod = iFun.defineStaticMethod;
	clazzFun.makeConstructor = iFun.makeConstructor;
	/*# x<< #*/
	return clazzFun;
};

Clazz.isSafari = (navigator.userAgent.indexOf ("Safari") != -1);
Clazz.isSafari4Plus = false;
if (Clazz.isSafari) {
	var ua = navigator.userAgent;
	var verIdx = ua.indexOf ("Version/");
	if (verIdx  != -1) {
		var verStr = ua.substring (verIdx + 8);
		var verNumber = parseFloat (verStr);
		Clazz.isSafari4Plus = verNumber >= 4.0;
	}
}

/* protected */
Clazz.instantialize = function (objThis, args) {
	if (args != null && args.length == 1 && args[0] != null 
			&& args[0] instanceof Clazz.args4InheritClass) {
		return ;
	}
	/*
	if (objThis.con$truct != null) {
		objThis.con$truct.apply (objThis, args);
	}
	if (objThis.construct != null) {
		objThis.construct.apply (objThis, args);
	}
	*/
	if (objThis instanceof Number) {
		objThis.valueOf = function () {
			return this;
		};
	}
	if (Clazz.isSafari4Plus) { // Fix bug of Safari 4.0+'s over-optimization
		var argsClone = new Array ();
		for (var k = 0; k < args.length; k++) {
			argsClone[k] = args[k];
		}
		args = argsClone;
	}
	var c = objThis.construct;
	if (c != null) {
		if (objThis.con$truct == null) { // no need to init fields
			c.apply (objThis, args);
		} else if (objThis.getClass ().superClazz == null) { // the base class
			objThis.con$truct.apply (objThis, []);
			c.apply (objThis, args);
		} else if ((c.claxxOwner != null 
				&& c.claxxOwner === objThis.getClass ())
				|| (c.stacks != null 
				&& c.stacks[c.stacks.length - 1] == objThis.getClass ())) {
			/*
			 * This #construct is defined by this class itself.
			 * #construct will call Clazz.superConstructor, which will
			 * call #con$truct back
			 */
			c.apply (objThis, args);
		} else { // constructor is a super constructor
			if (c.claxxOwner != null && c.claxxOwner.superClazz == null 
						&& c.claxxOwner.con$truct != null) {
				c.claxxOwner.con$truct.apply (objThis, []);
			} else if (c.stacks != null && c.stacks.length == 1
					&& c.stacks[0].superClazz == null) {
				c.stacks[0].con$truct.apply (objThis, []);
			}
			c.apply (objThis, args);
			objThis.con$truct.apply (objThis, []);
		}
	} else if (objThis.con$truct != null) {
		objThis.con$truct.apply (objThis, []);
	}
};

/**
 * Once there are other methods registered to the Function.prototype, 
 * those method names should be add to the following Array.
 */
/*
 * static final member of interface may be a class, which may
 * be function.
 */
/* protected */
/*-# innerFunctionNames -> iFN #-*/
Clazz.innerFunctionNames = [
	"equals", "getName", "getClassLoader", "getResourceAsStream" /*# {$no.javascript.support} >>x #*/, "defineMethod", "defineStaticMethod",
	"makeConstructor" /*# x<< #*/
];

/*
 * Static methods
 */
/*x-# innerFunctions -> inF #-x*/
Clazz.innerFunctions = {
	/*
	 * Similar to Object#equals
	 */
	equals : function (aFun) {
		return this === aFun;
	},

	/*
	 * Similar to Class#getName
	 */
	getName : function () {
		return Clazz.getClassName (this, true);
	},

	getClassLoader : function () {
		var clazzName = this.__CLASS_NAME__;
		var baseFolder = ClazzLoader.getClasspathFor (clazzName);
		var x = baseFolder.lastIndexOf (clazzName.replace (/\./g, "/"));
		if (x != -1) {
			baseFolder = baseFolder.substring (0, x);
		} else {
			baseFolder = ClazzLoader.getClasspathFor (clazzName, true);
		}
		var loader = ClassLoader.requireLoaderByBase (baseFolder);
		loader.getResourceAsStream = Clazz.innerFunctions.getResourceAsStream;
		return loader;
	},

	getResourceAsStream : function (name) {
		var is = null;
		if (name == null) {
			return is;
		}
		if (java.io.InputStream != null) {
			is = new java.io.InputStream ();
		} else {
			is = new JavaObject ();
			is.__CLASS_NAME__ = "java.io.InputStream";
			is.close = NullObject; // function () {};
		}
		is.read = function () { return 0; };
		name = name.replace (/\\/g, '/');
		/*-# baseFolder -> bFr #-*/
		var baseFolder = null;
		var clazzName = this.__CLASS_NAME__;
		if (arguments.length == 2 && name.indexOf ('/') != 0) { // additional argument
			name = "/" + name;
		}
		if (name.indexOf ('/') == 0) {
			//is.url = name.substring (1);
			if (arguments.length == 2) { // additional argument
				baseFolder = arguments[1];
				if (baseFolder == null) {
					baseFolder = ClazzLoader.binaryFolders[0];
				}
			} else if (window["ClazzLoader"] != null) {
				baseFolder = ClazzLoader.getClasspathFor (clazzName, true);
			}
			if (baseFolder == null || baseFolder.length == 0) {
				is.url = name.substring (1);
			} else {
				baseFolder = baseFolder.replace (/\\/g, '/');
				var length = baseFolder.length;
				var lastChar = baseFolder.charAt (length - 1);
				if (lastChar != '/') {
					baseFolder += "/";
				}
				is.url = baseFolder + name.substring (1);
			}
		} else {
			if (this.base != null) {
				baseFolder = this.base;
			} else if (window["ClazzLoader"] != null) {
				baseFolder = ClazzLoader.getClasspathFor (clazzName);
				var x = baseFolder.lastIndexOf (clazzName.replace (/\./g, "/"));
				if (x != -1) {
					baseFolder = baseFolder.substring (0, x);
				} else {
					baseFolder = ClazzLoader.getClasspathFor (clazzName, true);
					//baseFolder = null;
				}
			} else {
				var bins = Clazz.binaryFolders;
				if (bins != null && bins.length != 0) {
					baseFolder = bins[0];
				}
			}
			if (baseFolder == null || baseFolder.length == 0) {
				baseFolder = "bin/";
			}
			baseFolder = baseFolder.replace (/\\/g, '/');
			var length = baseFolder.length;
			var lastChar = baseFolder.charAt (length - 1);
			if (lastChar != '/') {
				baseFolder += "/";
			}
			/*
			 * FIXME: bug here for "/"
			 */
			//if (baseFolder.indexOf ('/') == 0) {
			//	baseFolder = baseFolder.substring (1);
			//}
			if (this.base != null) {
				is.url = baseFolder + name;
			} else {
				var idx = clazzName.lastIndexOf ('.');
				if (idx == -1 || this.base != null) {
					is.url = baseFolder + name;
				} else {
					is.url = baseFolder + clazzName.substring (0, idx)
							.replace (/\./g, '/') +  "/" + name;
				}
			}
		}
		return is;
	}/*# {$no.javascript.support} >>x #*/,
	
	/*
	 * For JavaScript programmers
	 */
	defineMethod : function (methodName, funBody, paramTypes) {
		Clazz.defineMethod (this, methodName, funBody, paramTypes);
	},

	/*
	 * For JavaScript programmers
	 */
	defineStaticMethod : function (methodName, funBody, paramTypes) {
		Clazz.defineMethod (this, methodName, funBody, paramTypes);
		this[methodName] = this.prototype[methodName];
	},
	
	/*
	 * For JavaScript programmers
	 */
	makeConstructor : function (funBody, paramTypes) {
		Clazz.makeConstructor (this, funBody, paramTypes);
	}
	/*# x<< #*/
};

/* private */
/*-# decorateFunction -> dF #-*/
Clazz.decorateFunction = function (clazzFun, prefix, name) {
	if (window["ClazzLoader"] != null) {
		//alert ("decorate " + name);
		ClazzLoader.checkInteractive ();
	}
	var qName = null;
	if (prefix == null) {
		// e.g. Clazz.declareInterface (null, "ICorePlugin", 
		//		org.eclipse.ui.IPlugin);
		qName = name;
		window[name] = clazzFun;
	} else if (prefix.__PKG_NAME__ != null) {
		// e.g. Clazz.declareInterface (org.eclipse.ui, "ICorePlugin", 
		//		org.eclipse.ui.IPlugin);
		qName = prefix.__PKG_NAME__ + "." + name;
		prefix[name] = clazzFun;
		if (prefix === java.lang) {
			window[name] = clazzFun;
		}
	} else {
		// e.g. Clazz.declareInterface (org.eclipse.ui.Plugin, "ICorePlugin", 
		//		org.eclipse.ui.IPlugin);
		qName = prefix.__CLASS_NAME__ + "." + name;
		prefix[name] = clazzFun;
	}
	clazzFun.__CLASS_NAME__ = qName;
	if (Clazz.supportsNativeObject) {
		for (var i = 0; i < Clazz.extendedObjectMethods.length; i++) {
			var p = Clazz.extendedObjectMethods[i];
			clazzFun.prototype[p] = JavaObject.prototype[p];
		}
	}
	clazzFun.prototype.__CLASS_NAME__ = qName;
	/*
	clazzFun.equals = Clazz.innerFunctions.equals;
	clazzFun.getName = Clazz.innerFunctions.getName;
	clazzFun.getResourceAsStream = Clazz.innerFunctions.getResourceAsStream;
	*/
	var inF = Clazz.innerFunctionNames;
	for (var i = 0; i < inF.length; i++) {
		clazzFun[inF[i]] = Clazz.innerFunctions[inF[i]];
	}

	if (window["ClazzLoader"] != null) {
		/*-# findClass -> fC #-*/
		var node = ClazzLoader.findClass (qName);
		/*-#
		 # ClazzNode.STATUS_KNOWN -> 1
		 #-*/
		if (node != null && node.status == ClazzNode.STATUS_KNOWN) {
			/*-# 
			 # updateNode -> uN 
			 #-*/
			window.setTimeout((function(nnn) {
				return function() {
					ClazzLoader.updateNode (nnn);
				};
			})(node), 1);
			/*
			 * #updateNode should be delayed! Or the class itself won't
			 * be initialized completely before marking itself as loaded.
			 */
			// ClazzLoader.updateNode (node);
		}
	}
};

/* proected */
Clazz.declareInterface = function (prefix, name, interfacez) {
	var clazzFun = function () {};
	Clazz.decorateFunction (clazzFun, prefix, name);
	if (interfacez != null) {
		Clazz.implementOf (clazzFun, interfacez);
	}
	return clazzFun;
};

/* protected */
/*-# 
 # parentClazzInstance -> pi
 # clazzParent -> pc
 #-*/
Clazz.decorateAsClass = function (clazzFun, prefix, name, clazzParent, 
		interfacez, parentClazzInstance) {
	var prefixName = null;
	if (prefix != null) {
		prefixName = prefix.__PKG_NAME__;
		if (prefixName == null) {
			prefixName = prefix.__CLASS_NAME__;
		}
	}
	var qName = (prefixName == null ? "" : prefixName + ".") + name;
	var cf = Clazz.unloadedClasses[qName];
	if (cf != null) {
		clazzFun = cf;
	}
	var qName = null;
	Clazz.decorateFunction (clazzFun, prefix, name);
	if (parentClazzInstance != null) {
		Clazz.inheritClass (clazzFun, clazzParent, parentClazzInstance);
	} else if (clazzParent != null) {
		Clazz.inheritClass (clazzFun, clazzParent);
	}
	if (interfacez != null) {
		Clazz.implementOf (clazzFun, interfacez);
	}
	return clazzFun;
};

/* public */
Clazz.declareType = function (prefix, name, clazzParent, interfacez, 
		parentClazzInstance) {
	var f = function () {
		Clazz.instantialize (this, arguments);
	};
	return Clazz.decorateAsClass (f, prefix, name, clazzParent, interfacez, 
			parentClazzInstance);
};

/* public */
Clazz.declareAnonymous = function (prefix, name, clazzParent, interfacez, 
		parentClazzInstance) {
	var f = function () {
		Clazz.prepareCallback (this, arguments);
		Clazz.instantialize (this, arguments);
	};
	return Clazz.decorateAsClass (f, prefix, name, clazzParent, interfacez, 
			parentClazzInstance);
};

/* protected */
Clazz.decorateAsType = function (clazzFun, qClazzName, clazzParent, 
		interfacez, parentClazzInstance, inheritClazzFuns) {
	clazzFun.__CLASS_NAME__ = qClazzName;
	if (Clazz.supportsNativeObject) {
		for (var i = 0; i < Clazz.extendedObjectMethods.length; i++) {
			var p = Clazz.extendedObjectMethods[i];
			clazzFun.prototype[p] = JavaObject.prototype[p];
		}
	}
	//if (qClazzName != "String" && qClazzName != "Object"
	//		&& qClazzName != "Number" && qClazzName != "Date") {
		clazzFun.prototype.__CLASS_NAME__ = qClazzName;
	//}
	clazzFun.equals = Clazz.innerFunctions.equals;
	clazzFun.getName = Clazz.innerFunctions.getName;
	if (inheritClazzFuns) {
		for (var i = 0; i < Clazz.innerFunctionNames.length; i++) {
			var methodName = Clazz.innerFunctionNames[i];
			clazzFun[methodName] = Clazz.innerFunctions[methodName];
		}
	}
	if (parentClazzInstance != null) {
		Clazz.inheritClass (clazzFun, clazzParent, parentClazzInstance);
	} else if (clazzParent != null) {
		Clazz.inheritClass (clazzFun, clazzParent);
	}
	if (interfacez != null) {
		Clazz.implementOf (clazzFun, interfacez);
	}
	return clazzFun;
};

Clazz.declarePackage ("java.io");
//Clazz.declarePackage ("java.lang");
Clazz.declarePackage ("java.lang.annotation"); // java.lang
Clazz.declarePackage ("java.lang.instrument"); // java.lang
Clazz.declarePackage ("java.lang.management"); // java.lang
Clazz.declarePackage ("java.lang.reflect"); // java.lang
Clazz.declarePackage ("java.lang.ref");  // java.lang.ref
java.lang.ref.reflect = java.lang.reflect;
Clazz.declarePackage ("java.util");

/*
 * Consider these interfaces are basic!
 */
Clazz.declareInterface (java.io,"Closeable");
Clazz.declareInterface (java.io,"DataInput");
Clazz.declareInterface (java.io,"DataOutput");
Clazz.declareInterface (java.io,"Externalizable");
Clazz.declareInterface (java.io,"Flushable");
Clazz.declareInterface (java.io,"Serializable");
Clazz.declareInterface (java.lang,"Iterable");
Clazz.declareInterface (java.lang,"CharSequence");
Clazz.declareInterface (java.lang,"Cloneable");
Clazz.declareInterface (java.lang,"Appendable");
Clazz.declareInterface (java.lang,"Comparable");
Clazz.declareInterface (java.lang,"Runnable");
Clazz.declareInterface (java.util,"Comparator");

java.lang.ClassLoader = {
	__CLASS_NAME__ : "ClassLoader"
};
}
/******************************************************************************
 * Copyright (c) 2007 java2script.org and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Zhou Renjian - initial API and implementation
 *****************************************************************************/
/*******
 * @author zhou renjian
 * @create March 10, 2006
 *******/

if (window["Clazz"] == null || window["Clazz"].unloadClass == null) {
/**
 * Once ClassExt.js is part of Class.js.
 * In order to make the Class.js as small as possible, part of its content
 * is moved into this ClassExt.js.
 *
 * See also http://j2s.sourceforge.net/j2sclazz/
 */
 
/**
 * Clazz.MethodNotFoundException is used to notify the developer about calling
 * methods with incorrect parameters.
 */
/* protected */
// Override the Clazz.MethodNotFoundException in Class.js to give details
Clazz.MethodNotFoundException = function (obj, clazz, method, params) {
	var paramStr = "";
	if (params != null) {
		paramStr = params.substring (1).replace (/\\/g, ",");
	}
	var leadingStr = "";
	if (method != null && method != "construct") {
		leadingStr = "Method";
	} else {
		leadingStr = "Constructor";
	}
	this.message = leadingStr + " " + Clazz.getClassName (clazz, true) + "." 
					+ method + "(" + paramStr + ") is not found!";
	this.toString = function () {
		return "MethodNotFoundException:" + this.message;
	}
};

/**
 * Prepare callback for instance of anonymous Class.
 * For example for the callback:
 *     this.callbacks.MyEditor.sayHello();
 *
 * @param objThis the host object for callback
 * @param args arguments object. args[0] will be classThisObj -- the "this"
 * object to be hooked
 * 
 * Attention: parameters should not be null!
 */
/* protected */
Clazz.prepareCallback = function (objThis, args) {
	var classThisObj = args[0];
	var cbName = "b$"; // "callbacks";
	if (objThis != null && classThisObj != null && classThisObj !== window) {
		var obs = new Array ();
		if (objThis[cbName] == null) {
			objThis[cbName] = obs;
		} else { // must make a copy!
			for (var s in objThis[cbName]) {
				if (s != "length") {
					obs[s] = objThis[cbName][s];
				}
			}
			objThis[cbName] = obs;
		}
		var className = Clazz.getClassName (classThisObj, true);
		//if (obs[className] == null) { /* == null make no sense! */
			//obs[className] = classThisObj;
			/*
			 * TODO: the following line is SWT-specific! Try to move it out!
			 */
			obs[className.replace (/org\.eclipse\.swt\./, "$wt.")] = classThisObj;
			var clazz = Clazz.getClass (classThisObj);
			while (clazz.superClazz != null) {
				clazz = clazz.superClazz;
				//obs[Clazz.getClassName (clazz)] = classThisObj;
				/*
				 * TODO: the following line is SWT-specific! Try to move it out!
				 */
				obs[Clazz.getClassName (clazz, true)
						.replace (/org\.eclipse\.swt\./, "$wt.")] = classThisObj;
			}
		//}
		var cbs = classThisObj[cbName];
		if (cbs != null && cbs instanceof Array) {
			for (var s in cbs) {
				if (s != "length") {
					obs[s] = cbs[s];
				}
			}
		}
	}
	// Shift the arguments
	for (var i = 0; i < args.length - 1; i++) {
		args[i] = args[i + 1];
	}
	args.length--;
	// arguments will be returned!
};

/**
 * Construct instance of the given inner class.
 *
 * @param classInner given inner class, alway with name like "*$*"
 * @param objThis this instance which can be used to call back.
 * @param finalVars final variables which the inner class may use
 * @return the constructed object
 *
 * @see Clazz#cloneFinals
 */
/* public */
Clazz.innerTypeInstance = function (clazzInner, objThis, finalVars) {
	if (clazzInner == null) {
		clazzInner = arguments.callee.caller;
	}
	var obj = null;
	/*if (arguments.length == 2) {
		obj = new clazzInner (objThis);
	} else */if (arguments.length == 3) {
		obj = new clazzInner (objThis);
	} else if (arguments.length == 4) {
		if (objThis.__CLASS_NAME__ == clazzInner.__CLASS_NAME__
				&& arguments[3] === Clazz.inheritArgs) {
			obj = objThis;
		} else {
			obj = new clazzInner (objThis, arguments[3]);
		}
	} else if (arguments.length == 5) {
		obj = new clazzInner (objThis, arguments[3], arguments[4]);
	} else if (arguments.length == 6) {
		obj = new clazzInner (objThis, arguments[3], arguments[4], 
				arguments[5]);
	} else if (arguments.length == 7) {
		obj = new clazzInner (objThis, arguments[3], arguments[4], 
				arguments[5], arguments[6]);
	} else if (arguments.length == 8) {
		obj = new clazzInner (objThis, arguments[3], arguments[4], 
				arguments[5], arguments[6], arguments[7]);
	} else if (arguments.length == 9) {
		obj = new clazzInner (objThis, arguments[3], arguments[4], 
				arguments[5], arguments[6], arguments[7], arguments[8]);
	} else if (arguments.length == 10) {
		obj = new clazzInner (objThis, arguments[3], arguments[4], 
				arguments[5], arguments[6], arguments[7], arguments[8],
				arguments[9]);
	} else {
		/*
		 * Should construct instance manually.
		 */
		obj = new clazzInner ();
		if (obj.construct == null) {
			throw new String ("No support anonymous class constructor with " 
					+ "more than 7 parameters.");
		}
		var args = new Array ();
		for (var i = 3; i < arguments.length; i++) {
			args[i - 3] = arguments[i];
		}
		obj.construct.apply (obj, args);
	}
	// f$ is short for the once choosen "$finals"
	if (finalVars != null && objThis.f$ == null) {
		obj.f$ = finalVars;
	} else if (finalVars == null && objThis.f$ != null) {
		obj.f$ = objThis.f$;
	} else if (finalVars != null && objThis.f$ != null) {
		var o = new Object ();
		for (var attr in objThis.f$) {
			o[attr] = objThis.f$[attr];
		}
		for (var attr in finalVars) {
			o[attr] = finalVars[attr];
		}
		obj.f$ = o;
	}
	/*
	if (finalVars != null && objThis.$finals == null) {
		obj.$finals = finalVars;
	} else if (finalVars == null && objThis.$finals != null) {
		obj.$finals = objThis.$finals;
	} else if (finalVars != null && objThis.$finals != null) {
		var o = new Object ();
		for (var attr in objThis.$finals) {
			o[attr] = objThis.$finals[attr];
		}
		for (var attr in finalVars) {
			o[attr] = finalVars[attr];
		}
		obj.$finals = o;
	}
	*/
	//Clazz.prepareCallback (obj, objThis);
	return obj;
};

/**
 * Clone variables whose modifier is "final".
 * Usage: var o = Clazz.cloneFinals ("name", name, "age", age);
 *
 * @return Object with all final variables
 */
/* protected */
Clazz.cloneFinals = function () {
	var o = new Object ();
	var length = arguments.length / 2;
	for (var i = 0; i < length; i++) {
		o[arguments[i + i]] = arguments[i + i + 1];
	}
	return o;
};

/* public */
Clazz.isClassDefined = Clazz.isDefinedClass = function (clazzName) {
	if (clazzName != null && clazzName.length != 0) {
		if (Clazz.allClasses[clazzName]) {
			return true;
		}
		var pkgFrags = clazzName.split (/\./);
		var pkg = null;
		for (var i = 0; i < pkgFrags.length; i++) {
			if (pkg == null) {
				if (Clazz.allPackage[pkgFrags[0]] == null) {
					//error (clazzName + " / " + false);
					return false;
				}
				pkg = Clazz.allPackage[pkgFrags[0]];
			} else {
				if (pkg[pkgFrags[i]] == null) {
					//error (clazzName + " / " + false);
					return false;
				}
				pkg = pkg[pkgFrags[i]]
			}
		}
		//error (clazzName + " / " + (pkg != null));
		//return pkg != null;
		if (pkg != null) {
			Clazz.allClasses[clazzName] = true;
			return true;
		} else {
			return false;
		}
	} else {
		/* consider null or empty name as non-defined class */
		return false;
	}
};
/**
 * Define the enum constant.
 * @param classEnum enum type
 * @param enumName enum constant
 * @param enumOrdinal enum ordinal
 * @param initialParams enum constant constructor parameters
 * @return return defined enum constant
 */
/* public */
Clazz.defineEnumConstant = function (clazzEnum, enumName, enumOrdinal, initialParams, clazzEnumExt) {
	var o = null;
	if (clazzEnumExt != null) {
		o = new clazzEnumExt ();
	} else {
		o = new clazzEnum ();
	}
	Clazz.superConstructor (o, clazzEnum, [enumName, enumOrdinal]);
	if (initialParams != null && initialParams.length != 0) {
		o.construct.apply (o, initialParams);
	}
	clazzEnum[enumName] = o;
	clazzEnum.prototype[enumName] = o;
	return o;
};

/**
 * Make arrays.
 *
 * @return the created Array object
 */
/* public */
Clazz.newArray  = function () {
	var args = arguments;
	if (arguments.length == 1) {
		if (arguments[0] instanceof Array) {
			args = arguments[0];
		}
	}
	if (args.length <= 1) {
		return new Array ();
	} else if (args.length == 2) {
		var dim = args[0];
		if (typeof dim == "string") {
			dim = dim.charCodeAt (0); // char
		}
		var val = args[1];
		var arr = new Array (dim);
		for (var i = 0; i < dim; i++) {
			arr[i] = val;
		}
		return arr;
	} else {
		var dim = args[0];
		if (typeof dim == "string") {
			dim = dim.charCodeAt (0); // char
		}
		var len = args.length - 1;
		var xargs = new Array (len);
		for (var i = 0; i < len; i++) {
			xargs[i] = args[i + 1];
		}
		var arr = new Array (dim);
		for (var i = 0; i < dim; i++) {
			// Call recursively!
			arr[i] = Clazz.newArray (xargs);
		}
		return arr;
	}
};

/**
 * Make the RunnableCompatiability instance as a JavaScript function.
 *
 * @param jsr Instance of RunnableCompatiability
 * @return JavaScript function instance represents the method run of jsr.
 */
/* public */
Clazz.makeFunction = function (jsr) {
	return function (e) {
		if (e == null) {
			e = window.event;
		}
		if (jsr.setEvent != null) {
			jsr.setEvent (e);
		}
		jsr.run ();
		/*
		if (e != null && jsr.isReturned != null && jsr.isReturned()) {
			// Is it correct to stopPropagation here? --Feb 19, 2006
			e.cancelBubble = true;
			if (e.stopPropagation) {
				e.stopPropagation();
			}
		}
		*/
		if (jsr.returnSet == 1) {
			return jsr.returnNumber;
		} else if (jsr.returnSet == 2) {
			return jsr.returnBoolean;
		} else if (jsr.returnSet == 3) {
			return jsr.returnObject;
		}
	};
};

/* protected */
Clazz.defineStatics = function (clazz) {
	for (var i = 0; i < (arguments.length - 1) / 2; i++) {
		var name = arguments[i + i + 1];
		clazz[name] = clazz.prototype[name] = arguments[i + i + 2];
	}
};

/* protected */
Clazz.prepareFields = function (clazz, fieldsFun) {
	var stacks = new Array ();
	if (clazz.con$truct != null) {
		var ss = clazz.con$truct.stacks;
		var idx = clazz.con$truct.index;
		for (var i = idx; i < ss.length; i++) {
			stacks[i] = ss[i];
		}
	}
	clazz.con$truct = clazz.prototype.con$truct = function () {
		var stacks = arguments.callee.stacks;
		if (stacks != null) {
			for (var i = 0; i < stacks.length; i++) {
				stacks[i].apply (this, []);
			}
		}
	};
	stacks[stacks.length] = fieldsFun;
	clazz.con$truct.stacks = stacks;
	clazz.con$truct.index = 0;
};

/*
 * Serialize those public or protected fields in class 
 * net.sf.j2s.ajax.SimpleSerializable.
 */
/* protected */
Clazz.registerSerializableFields = function (clazz) {
	var args = arguments;
	var length = args.length;
	var newArr = new Array ();
	if (clazz.declared$Fields != null) {
		for (var i = 0; i < clazz.declared$Fields.length; i++) {
			newArr[i] = clazz.declared$Fields[i];
		}
	}
	clazz.declared$Fields = newArr;
	
	if (length > 0 && length % 2 == 1) {
		var fs = clazz.declared$Fields;
		for (var i = 1; i <= (length - 1) / 2; i++) {
			var o = { name : args[i + i - 1], type : args[i + i] };
			var existed = false;
			for (var j = 0; j < fs.length; j++) {
				if (fs[j].name == o.name) { // reloaded classes
					fs[j].type = o.type; // update type
					existed = true;
					break;
				}
			}
			if (!existed) {
				fs[fs.length] = o;
			}
		}
	}
};

/*
 * Get the caller method for those methods that are wrapped by 
 * Clazz.searchAndExecuteMethod.
 *
 * @param args caller method's arguments
 * @return caller method, null if there is not wrapped by 
 * Clazz.searchAndExecuteMethod or is called directly.
 */
/* protected */
/*-# getMixedCallerMethod -> gMCM  #-*/
Clazz.getMixedCallerMethod = function (args) {
	var o = new Object ();
	var argc = args.callee.caller; // Clazz.tryToSearchAndExecute
	if (argc == null) return null;
	if (argc !== Clazz.tryToSearchAndExecute) { // inherited method's apply
		argc = argc.arguments.callee.caller;
		if (argc == null) return null;
	}
	if (argc !== Clazz.tryToSearchAndExecute) return null;
	argc = argc.arguments.callee.caller; // Clazz.searchAndExecuteMethod
	if (argc == null || argc !== Clazz.searchAndExecuteMethod) return null;
	o.claxxRef = argc.arguments[1];
	o.fxName = argc.arguments[2];
	o.paramTypes = Clazz.getParamsType (argc.arguments[3]);
	argc = argc.arguments.callee.caller; // Clazz.generateDelegatingMethod
	if (argc == null) return null;
	argc = argc.arguments.callee.caller; // the private method's caller
	if (argc == null) return null;
	o.caller = argc;
	return o;
};

/*
 * Check and return super private method.
 * In order make private methods be executed correctly, some extra javascript
 * must be inserted into the beggining of the method body of the non-private 
 * methods that with the same method signature as following:
 * <code>
 *			var $private = Clazz.checkPrivateMethod (arguments);
 *			if ($private != null) {
 *				return $private.apply (this, arguments);
 *			}
 * </code>
 * Be cautious about this. The above codes should be insert by Java2Script
 * compiler or with double checks to make sure things work correctly.
 *
 * @param args caller method's arguments
 * @return private method if there are private method fitted for the current 
 * calling environment
 */
/* public */
Clazz.checkPrivateMethod = function (args) {
	var m = Clazz.getMixedCallerMethod (args);
	if (m == null) return null;
	var callerFx = m.claxxRef.prototype[m.caller.exName];
	if (callerFx == null) return null; // may not be in the class hierarchies
	var ppFun = null;
	if (callerFx.claxxOwner != null) {
		ppFun = callerFx.claxxOwner.prototype[m.fxName];
	} else {
		var stacks = callerFx.stacks;
		for (var i = stacks.length - 1; i >= 0; i--) {
			var fx = stacks[i].prototype[m.caller.exName];
			if (fx === m.caller) {
				ppFun = stacks[i].prototype[m.fxName];
			} else if (fx != null) {
				for (var fn in fx) {
					if (fn.indexOf ('\\') == 0 && fx[fn] === m.caller) {
						ppFun = stacks[i].prototype[m.fxName];
						break;
					}
				}
			}
			if (ppFun != null) {
				break;
			}
		}
	}
	if (ppFun != null && ppFun.claxxOwner == null) {
		ppFun = ppFun["\\" + m.paramTypes];
	}
	if (ppFun != null && ppFun.isPrivate && ppFun !== args.callee) {
		return ppFun;
	}
	return null;
};
var $fz = null; // for private method declaration
//var cla$$ = null;
var c$ = null;
/*-# cla$$$tack -> cst  #-*/
Clazz.cla$$$tack = new Array ();
Clazz.pu$h = function () {
	if (c$ != null) { // if (cla$$ != null) {
		Clazz.cla$$$tack[Clazz.cla$$$tack.length] = c$; // cla$$;
	}
};
Clazz.p0p = function () {
	if (Clazz.cla$$$tack.length > 0) {
		var clazz = Clazz.cla$$$tack[Clazz.cla$$$tack.length - 1];
		Clazz.cla$$$tack.length--;
		return clazz;
	} else {
		return null;
	}
};

/*# {$no.debug.support} >>x #*/
/*
 * Option to switch on/off of stack traces.
 */
/* protect */
Clazz.tracingCalling = false;

/*
 * Use to mark that the Throwable instance is created or not.
 */
/* private */
Clazz.initializingException = false;

/* private */
Clazz.callingStack = function (caller, owner) {
	this.caller = caller;
	this.owner = owner;
};
Clazz.callingStackTraces = new Array ();
Clazz.pu$hCalling = function (stack) {
	Clazz.callingStackTraces[Clazz.callingStackTraces.length] = stack;
};
Clazz.p0pCalling = function () {
	var length = Clazz.callingStackTraces.length;
	if (length > 0) {
		var stack = Clazz.callingStackTraces[length - 1];
		Clazz.callingStackTraces.length--;
		return stack;
	} else {
		return null;
	}
};
/*# x<< #*/

/**
 * The first folder is considered as the primary folder.
 * And try to be compatiable with ClazzLoader system.
 */
/* private */
if (window["ClazzLoader"] != null && ClazzLoader.binaryFolders != null) {
	Clazz.binaryFolders = ClazzLoader.binaryFolders;
} else {
	Clazz.binaryFolders = ["bin/", "", "j2slib/"];
}

Clazz.addBinaryFolder = function (bin) {
	if (bin != null) {
		var bins = Clazz.binaryFolders;
		for (var i = 0; i < bins.length; i++) {
			if (bins[i] == bin) {
				return ;
			}
		}
		bins[bins.length] = bin;
	}
};
Clazz.removeBinaryFolder = function (bin) {
	if (bin != null) {
		var bins = Clazz.binaryFolders;
		for (var i = 0; i < bins.length; i++) {
			if (bins[i] == bin) {
				for (var j = i; j < bins.length - 1; j++) {
					bins[j] = bins[j + 1];
				}
				bins.length--;
				return bin;
			}
		}
	}
	return null;
};
Clazz.setPrimaryFolder = function (bin) {
	if (bin != null) {
		Clazz.removeBinaryFolder (bin);
		var bins = Clazz.binaryFolders;
		for (var i = bins.length - 1; i >= 0; i--) {
			bins[i + 1] = bins[i];
		}
		bins[0] = bin;
	}
};

/**
 * This is a simple implementation for Clazz#load. It just ignore dependencies
 * of the class. This will be fine for jar *.z.js file.
 * It will be overriden by ClazzLoader#load.
 * For more details, see ClazzLoader.js
 */
/* protected */
Clazz.load = function (musts, clazz, optionals, declaration) {
	if (declaration != null) {
		declaration ();
	}
};

/*
 * Invade the Object prototype!
 * TODO: make sure that invading Object prototype does not affect other
 * existed library, such as Dojo, YUI, Prototype, ...
 */
java.lang.Object = JavaObject;

JavaObject.getName = Clazz.innerFunctions.getName;

w$ = window; // Short for browser's window object
d$ = document; // Short for browser's document object
System = {
	currentTimeMillis : function () {
		return new Date ().getTime ();
	},
	props : null, //new java.util.Properties (),
	getProperties : function () {
		return System.props;
	},
	setProperties : function (props) {
		System.props = props;
	},
	getProperty : function (key, def) {
		if (System.props != null) {
			return System.props.getProperty (key, def);
		}
		if (def != null) {
			return def;
		}
		return key;
	},
	setProperty : function (key, val) {
		if (System.props == null) {
			return ;
		}
		System.props.setProperty (key, val);
	},
	currentTimeMillis : function () {
		return new Date ().getTime ();
	},
	arraycopy : function (src, srcPos, dest, destPos, length) {
		if (src !== dest) {
			for (var i = 0; i < length; i++) {
				dest[destPos + i] = src[srcPos + i];
			}
		} else {
			var swap = [];
			for (var i = 0; i < length; i++) {
				swap[i] = src[srcPos + i];
			}
			for (var i = 0; i < length; i++) {
				dest[destPos + i] = swap[i];
			}
		}
	}
};
System.out = new JavaObject ();
System.out.__CLASS_NAME__ = "java.io.PrintStream";
System.out.print = function () {};
System.out.printf = function () {};
System.out.println = function () {};

System.err = new JavaObject ();
System.err.__CLASS_NAME__ = "java.io.PrintStream";
System.err.print = function () {};
System.err.printf = function () {};
System.err.println = function () {};

popup = assert = log = error = window.alert;

Thread = function () {};
Thread.J2S_THREAD = Thread.prototype.J2S_THREAD = new Thread ();
Thread.currentThread = Thread.prototype.currentThread = function () {
	return this.J2S_THREAD;
};

/* public */
Clazz.intCast = function (n) { // 32bit
	var b1 = (n & 0xff000000) >> 24;
	var b2 = (n & 0xff0000) >> 16;
	var b3 = (n & 0xff00) >> 8;
	var b4 = n & 0xff;
	if ((b1 & 0x80) != 0) {
		return -(((b1 & 0x7f) << 24) + (b2 << 16) + (b3 << 8) + b4 + 1);
	} else {
		return (b1 << 24) + (b2 << 16) + (b3 << 8) + b4;
	}
};

/* public */
Clazz.shortCast = function (s) { // 16bit
	var b1 = (n & 0xff00) >> 8;
	var b2 = n & 0xff;
	if ((b1 & 0x80) != 0) {
		return -(((b1 & 0x7f) << 8) + b2 + 1);
	} else {
		return (b1 << 8) + b4;
	}
};

/* public */
Clazz.byteCast = function (b) { // 8bit
	if ((b & 0x80) != 0) {
		return -((b & 0x7f) + 1);
	} else {
		return b & 0xff;
	}
};

/* public */
Clazz.charCast = function (c) { // 8bit
	return String.fromCharCode (c & 0xff).charAt (0);
};

/**
 * Warning: Unsafe conversion!
 */
/* public */
Clazz.floatCast = function (f) { // 32bit
	return f;
};

/*
 * Try to fix JavaScript's shift operator defects on long type numbers.
 */

Clazz.longMasks = [];

Clazz.longReverseMasks = [];

Clazz.longBits = [];

(function () {
	var arr = [1];
	for (var i = 1; i < 53; i++) {
		arr[i] = arr[i - 1] + arr[i - 1]; // * 2 or << 1
	}
	Clazz.longBits = arr;
	Clazz.longMasks[52] = arr[52];
	for (var i = 51; i >= 0; i--) {
		Clazz.longMasks[i] = Clazz.longMasks[i + 1] + arr[i];
	}
	Clazz.longReverseMasks[0] = arr[0];
	for (var i = 1; i < 52; i++) {
		Clazz.longReverseMasks[i] = Clazz.longReverseMasks[i - 1] + arr[i];
	}
}) ();

/* public */
Clazz.longLeftShift = function (l, o) { // 64bit
	if (o == 0) return l;
	if (o >= 64) return 0;
	if (o > 52) {
		error ("[Java2Script] Error : JavaScript does not support long shift!");
		return l;
	}
	if ((l & Clazz.longMasks[o - 1]) != 0) {
		error ("[Java2Script] Error : Such shift operator results in wrong calculation!");
		return l;
	}
	var high = l & Clazz.longMasks[52 - 32 + o];
	if (high != 0) {
		return high * Clazz.longBits[o] + (l & Clazz.longReverseMasks[32 - o]) << 0;
	} else {
		return l << o;
	}
};

/* public */
Clazz.intLeftShift = function (n, o) { // 32bit
	return (n << o) & 0xffffffff;
};

/* public */
Clazz.longRightShift = function (l, o) { // 64bit
	if ((l & Clazz.longMasks[52 - 32]) != 0) {
		return Math.round((l & Clazz.longMasks[52 - 32]) / Clazz.longBits[32 - o]) + (l & Clazz.longReverseMasks[o]) >> o;
	} else {
		return l >> o;
	}
};

/* public */
Clazz.intRightShift = function (n, o) { // 32bit
	return n >> o; // no needs for this shifting wrapper
};

/* public */
Clazz.long0RightShift = function (l, o) { // 64bit
	return l >>> o;
};

/* public */
Clazz.int0RightShift = function (n, o) { // 64bit
	return n >>> o; // no needs for this shifting wrapper
};

// Compress the common public API method in shorter name
$_L=Clazz.load;$_W=Clazz.declareAnonymous;$_T=Clazz.declareType;$_J=Clazz.declarePackage;$_C=Clazz.decorateAsClass;$_Z=Clazz.instantialize;$_I=Clazz.declareInterface;$_D=Clazz.isClassDefined;$_H=Clazz.pu$h;$_P=Clazz.p0p;$_B=Clazz.prepareCallback;$_N=Clazz.innerTypeInstance;$_K=Clazz.makeConstructor;$_U=Clazz.superCall;$_R=Clazz.superConstructor;$_M=Clazz.defineMethod;$_V=Clazz.overrideMethod;$_S=Clazz.defineStatics;$_E=Clazz.defineEnumConstant;$_F=Clazz.cloneFinals;$_Y=Clazz.prepareFields;$_A=Clazz.newArray;$_O=Clazz.instanceOf;$_G=Clazz.inheritArgs;$_X=Clazz.checkPrivateMethod;$_Q=Clazz.makeFunction;$_s=Clazz.registerSerializableFields;


var reflect = Clazz.declarePackage ("java.lang.reflect");
Clazz.declarePackage ("java.security");

Clazz.innerFunctionNames = Clazz.innerFunctionNames.concat (["getSuperclass",
		"isAssignableFrom", "getMethods", "getMethod", "getDeclaredMethods", 
		"getDeclaredMethod", "getConstructor", "getModifiers", "isArray", "newInstance"]);

Clazz.innerFunctions.getSuperclass = function () {
	return this.superClazz;	
};
Clazz.innerFunctions.isAssignableFrom = function (clazz) {
	return Clazz.getInheritedLevel (clazz, this) >= 0;	
};
Clazz.innerFunctions.getConstructor = function () {
	return new java.lang.reflect.Constructor (this, [], [], 
			java.lang.reflect.Modifier.PUBLIC);
};
/**
 * TODO: fix bug for polymorphic methods!
 */
Clazz.innerFunctions.getDeclaredMethods = Clazz.innerFunctions.getMethods = function () {
	var ms = new Array ();
	var p = this.prototype;
	for (var attr in p) {
		if (typeof p[attr] == "function" && p[attr].__CLASS_NAME__ == null) {
			/* there are polynormical methods. */
			ms[ms.length] = new java.lang.reflect.Method (this, attr,
					[], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC);
		}
	}
	p = this;
	for (var attr in p) {
		if (typeof p[attr] == "function" && p[attr].__CLASS_NAME__ == null) {
			ms[ms.length] = new java.lang.reflect.Method (this, attr,
					[], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC
					| java.lang.reflect.Modifier.STATIC);
		}
	}
	return ms;
};
Clazz.innerFunctions.getDeclaredMethod = Clazz.innerFunctions.getMethod = function (name, clazzes) {
	var p = this.prototype;
	for (var attr in p) {
		if (name == attr && typeof p[attr] == "function" 
				&& p[attr].__CLASS_NAME__ == null) {
			/* there are polynormical methods. */
			return new java.lang.reflect.Method (this, attr,
					[], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC);
		}
	}
	p = this;
	for (var attr in p) {
		if (name == attr && typeof p[attr] == "function" 
				&& p[attr].__CLASS_NAME__ == null) {
			return new java.lang.reflect.Method (this, attr,
					[], java.lang.Void, [], java.lang.reflect.Modifier.PUBLIC
					| java.lang.reflect.Modifier.STATIC);
		}
	}
	return null;
};
Clazz.innerFunctions.getModifiers = function () {
	return java.lang.reflect.Modifier.PUBLIC;
};
Clazz.innerFunctions.isArray = function () {
	return false;
};
Clazz.innerFunctions.newInstance = function () {
	var clz = this;
	return new clz ();
};

//Object.newInstance = Clazz.innerFunctions.newInstance;
{
	var inF = Clazz.innerFunctionNames;
	for (var i = 0; i < inF.length; i++) {
		JavaObject[inF[i]] = Clazz.innerFunctions[inF[i]];
		Array[inF[i]] = Clazz.innerFunctions[inF[i]];
	}
	Array["isArray"] = function () {
		return true;
	};
}

/* public */
Clazz.forName = function (clazzName) {
	if (Clazz.isClassDefined (clazzName)) {
		return Clazz.evalType (clazzName);
	}
	if (window["ClazzLoader"] != null) {
		ClazzLoader.setLoadingMode ("xhr.sync");
		ClazzLoader.loadClass (clazzName);
		return Clazz.evalType (clazzName);
	} else {
		alert ("[Java2Script] Error: No ClassLoader!");
	}
};

/* For hotspot and unloading */

/* private */
Clazz.cleanDelegateMethod = function (m) {
	if (m == null) return;
	if (typeof m == "function" && m.lastMethod != null
			&& m.lastParams != null && m.lastClaxxRef != null) {
		m.lastMethod = null;
		m.lastParams = null;
		m.lastClaxxRef = null;
	}
};

/* public */
Clazz.unloadClass = function (qClazzName) {
	var cc = Clazz.evalType (qClazzName);
	if (cc != null) {
		Clazz.unloadedClasses[qClazzName] = cc;
		var clazzName = qClazzName;
		var pkgFrags = clazzName.split (/\./);
		var pkg = null;
		for (var i = 0; i < pkgFrags.length - 1; i++) {
			if (pkg == null) {
				pkg = Clazz.allPackage[pkgFrags[0]];
			} else {
				pkg = pkg[pkgFrags[i]]
			}
		}
		if (pkg == null) {
			Clazz.allPackage[pkgFrags[0]] = null;
			window[pkgFrags[0]] = null;
			// also try to unload inner or anonymous classes
			for (var c in window) {
				if (c.indexOf (qClazzName + "$") == 0) {
					Clazz.unloadClass (c);
					window[c] = null;
				}
			}
		} else {
			pkg[pkgFrags[pkgFrags.length - 1]] = null;
			// also try to unload inner or anonymous classes
			for (var c in pkg) {
				if (c.indexOf (pkgFrags[pkgFrags.length - 1] + "$") == 0) {
					Clazz.unloadClass (pkg.__PKG_NAME__ + "." + c);
					pkg[c] = null;
				}
			}
		}

		if (Clazz.allClasses[qClazzName] == true) {
			Clazz.allClasses[qClazzName] = false;
			// also try to unload inner or anonymous classes
			for (var c in Clazz.allClasses) {
				if (c.indexOf (qClazzName + "$") == 0) {
					Clazz.allClasses[c] = false;
				}
			}
		}
		
		for (var m in cc) {
			Clazz.cleanDelegateMethod (cc[m]);
		}
		for (var m in cc.prototype) {
			Clazz.cleanDelegateMethod (cc.prototype[m]);
		}

		if (window["ClazzLoader"] != null) {
			ClazzLoader.unloadClassExt (qClazzName);
		}
		
		return true;
	}
	return false;
};

//written by Dean Edwards, 2005
//with input from Tino Zijdel, Matthias Miller, Diego Perini

//http://dean.edwards.name/weblog/2005/10/add-event/

// Merge Dean Edwards' addEvent for Java2Script
/* public */
Clazz.addEvent = function (element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler, false);
	} else {
		// assign each event handler a unique ID
		if (!handler.$$guid) handler.$$guid = Clazz.addEvent.guid++;
		// create a hash table of event types for the element
		if (!element.events) element.events = {};
		// create a hash table of event handlers for each element/event pair
		var handlers = element.events[type];
		if (!handlers) {
			handlers = element.events[type] = {};
			// store the existing event handler (if there is one)
			if (element["on" + type]) {
				handlers[0] = element["on" + type];
			}
		}
		// store the event handler in the hash table
		handlers[handler.$$guid] = handler;
		// assign a global event handler to do all the work
		element["on" + type] = Clazz.handleEvent;
	}
};
/* private */
//a counter used to create unique IDs
Clazz.addEvent.guid = 1;

/* public */
Clazz.removeEvent = function (element, type, handler) {
	if (element.removeEventListener) {
		element.removeEventListener(type, handler, false);
	} else {
		// delete the event handler from the hash table
		if (element.events && element.events[type]) {
			delete element.events[type][handler.$$guid];
		}
	}
};

/* private */
Clazz.isVeryOldIE = navigator.userAgent.indexOf("MSIE 6.0") != -1 || navigator.userAgent.indexOf("MSIE 5.5") != -1 || navigator.userAgent.indexOf("MSIE 5.0") != -1;

/* protected */
Clazz.handleEvent = function (event) {
	var returnValue = true;
	// grab the event object (IE uses a global event object)
	if (!Clazz.isVeryOldIE) {
		event = event || Clazz.fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
	} else { // The above line is buggy in IE 6.0
		if (event == null) {
			var evt = null;
			try {
				var pWindow = (this.ownerDocument || this.document || this).parentWindow;
				if (pWindow != null) {
					evt = pWindow.event;
				}
			} catch (e) {
				evt = window.event;
			}
			event = Clazz.fixEvent(evt);
		}
	}
	// get a reference to the hash table of event handlers
	var handlers = this.events[event.type];
	// execute each event handler
	for (var i in handlers) {
		if (isNaN (i)) {
			continue;
		}
		this.$$handleEvent = handlers[i];
		if (typeof this.$$handleEvent != "function") {
			continue;
		}
		if (this.$$handleEvent(event) === false) {
			returnValue = false;
		}
	}
	return returnValue;
};

/* private */
Clazz.fixEvent = function (event) {
	// add W3C standard event methods
	event.preventDefault = Clazz.fixEvent.preventDefault;
	event.stopPropagation = Clazz.fixEvent.stopPropagation;
	return event;
};
Clazz.fixEvent.preventDefault = function() {
	this.returnValue = false;
};
Clazz.fixEvent.stopPropagation = function() {
	this.cancelBubble = true;
};

}
/******************************************************************************
 * Copyright (c) 2007 java2script.org and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Zhou Renjian - initial API and implementation
 *****************************************************************************/
/*******
 * @author zhou renjian
 * @create July 10, 2006
 *******/

if (window["ClazzNode"] == null) {
/**
 * TODO:
 * Make optimization over class dependency tree.
 */

/*
 * ClassLoader Summary
 * 
 * ClassLoader creates SCRIPT elements and setup class path and onload 
 * callback to continue class loading.
 *
 * In the onload callbacks, ClazzLoader will try to calculate the next-to-be-
 * load *.js and load it. In *.js, it will contains some codes like
 * Clazz.load (..., "$wt.widgets.Control", ...);
 * to provide information to build up the class dependency tree.
 *
 * Some known problems of different browsers:
 * 1. In IE, loading *.js through SCRIPT will first triggers onreadstatechange 
 * event, and then executes inner *.js source.
 * 2. In Firefox, loading *.js will first executes *.js source and then 
 * triggers onload event.
 * 3. In Opera, similar to IE, but trigger onload event. (TODO: More details 
 * should be studied. Currently, Opera supports no multiple-thread-loading)
 * 
 * For class dependency tree, actually, it is not a tree. It is a reference
 * net with nodes have n parents and n children. There is a root, which 
 * ClassLoader knows where to start searching and loading classes, for such
 * a net. Each node is a class. Each class may require a set of must-classes, 
 * which must be loaded before itself getting initialized, and also need a set
 * of optional classes, which also be loaded before being called.
 *
 * The class loading status will be in 6 stages.
 * 1. Unknown, the class is newly introduced by other class.
 * 2. Known, the class is already mentioned by other class.
 * 3. Loaded, *.js source is in memory, but may not be initialized yet. It 
 * requires all its must-classes be intiailized, which is in the next stage.
 * 4. Musts loaded, all must classes is already loaded and declared.
 * 5. Delcared, the class is already declared (ClazzLoader#isClassDefined).
 * 6. Optionals loaded, all optional classes is loaded and declared.
 *
 * The ClassLoader tries to load all necessary classes in order, and intialize
 * them in order. For such job, it will traverse the dependency tree, and try 
 * to next class to-be-loaded. Sometime, the class dependencies may be in one
 * or more cycles, which must be broken down so classes is loaded in correct
 * order.
 *
 * Loading order and intializing order is very important for the ClassLoader.
 * The following technical options are considered:
 * 1. SCRIPT is loading asynchronously, which means controling order must use
 * callback methods to continue.
 * 2. Multiple loading threads are later introduced, which requires the 
 * ClassLoader should use variables to record the class status.
 * 3. Different browsers have different loading orders, which means extra tests
 * should be tested to make sure loading order won't be broken.
 * 4. Java2Script simulator itself have some loading orders that must be 
 * honored, which means it should be integrated seamlessly to Clazz system.
 * 5. Packed *.z.js is introduced to avoid lots of small *.js which requires 
 * lots of HTTP connections, which means that packed *.z.js should be treated
 * specially (There will be mappings for such packed classes).
 * 6. *.js or *.css loading may fail according to network status, which means
 * another loading try should be performed, so ClazzLoader is more robust.
 * 7. SWT lazy loading is later introduced, which means that class loading
 * process may be paused and should be resumed later.
 *
 * Some known bugs:
 * <code>$_L(["$wt.graphics.Drawable","$wt.widgets.Widget"],
 *  "$wt.widgets.Control", ...</code>
 * has errors while must classes in different order such as
 * <code>$_L(["$wt.widgets.Widget", "$wt.graphics.Drawable"],
 *  "$wt.widgets.Control", ...</code>
 * has no error.
 * 
 * Other maybe bug scenarios:
 * 1. In <code>ClazzLoader.maxLoadingThreads = 1;</code> single loading thread 
 * mode, there are no errors, but in default multiple thread loading mode, 
 * there are errors.
 * 2. No errors in one browser, but has errors on other browsers (Browser 
 * script loading order differences).
 * 3. First time loading has errors, but reloading it gets no errors (Maybe 
 * HTTP connections timeout, but should not accur in local file system, or it
 * is a loading bug by using JavaScript timeout thread).
 */

/*
 * The following comments with "#" are special configurations for a much
 * smaller *.js file size.
 *
 * @see net.sf.j2s.lib/src/net/sf/j2s/lib/build/SmartJSCompressor.java
 */
/*-#
 # ClazzNode -> $CN$
 # ClazzLoader -> $CL$
 # <<< ClazzLoader = $CL$;
 #-*/
 
/*-#
 # parents -> sp
 # musts -> sm
 # xxxoptionals -> so
 # declaration -> dcl
 # optionalsLoaded -> oled
 # qClazzName ->Nq
 #-*/
 
/**
 * Class dependency tree node
 */
/* private */
ClazzNode = function () {
	this.parents = new Array ();
	this.musts = new Array ();
	this.optionals = new Array ();
	this.declaration = null;
	this.name = null; // id
	this.path = null;
	this.status = 0;
	this.random = 0.13412;
	this.optionalsLoaded = null;
	this.toString = function () {
		if (this.name != null) {
			return this.name;
		} else if (this.path != null) {
			return this.path;
		} else {
			return "ClazzNode";
		}
	};
};

/*-#
 # ClazzNode.STATUS_UNKNOWN = 0
 # ClazzNode.STATUS_KNOWN -> 1
 # ClazzNode.STATUS_CONTENT_LOADED -> 2
 # ClazzNode.STATUS_MUSTS_LOADED -> 3
 # ClazzNode.STATUS_DECLARED -> 4
 # ClazzNode.STATUS_OPTIONALS_LOADED -> 5
 #-*/
/*# >>x #*/
ClazzNode.STATUS_UNKNOWN = 0;
ClazzNode.STATUS_KNOWN = 1;
ClazzNode.STATUS_CONTENT_LOADED = 2;
ClazzNode.STATUS_MUSTS_LOADED = 3;
ClazzNode.STATUS_DECLARED = 4;
ClazzNode.STATUS_OPTIONALS_LOADED = 5;
/*# x<< #*/

/**
 * Static class loader class
 */
ClazzLoader = function () {};

ClazzLoader.loaders = [];

ClazzLoader.requireLoaderByBase = function (base) {
	for (var i = 0; i < ClazzLoader.loaders.length; i++) {
		if (ClazzLoader.loaders[i].base == base) {
			return ClazzLoader.loaders[i];
		}
	}
	var loader = new ClazzLoader ();
	loader.base = base; 
	ClazzLoader.loaders[ClazzLoader.loaders.length] = loader;
	return loader;
};

/**
 * Class dependency tree
 */
/*-# clazzTreeRoot -> tr #-*/
ClazzLoader.clazzTreeRoot = new ClazzNode ();

/**
 * Used to keep the status whether a given *.js path is loaded or not.
 */
/* private */
/*-# loadedScripts -> ls #-*/
ClazzLoader.loadedScripts = new Object ();

/**
 * Multiple threads are used to speed up *.js loading.
 */
/* private */
/*-# inLoadingThreads -> ilt #-*/
ClazzLoader.inLoadingThreads = 0;

/**
 * Maximum of loading threads
 */
/* protected */
ClazzLoader.maxLoadingThreads = 6;

ClazzLoader.userAgent = navigator.userAgent.toLowerCase ();
ClazzLoader.isOpera = (ClazzLoader.userAgent.indexOf ("opera") != -1);
ClazzLoader.isIE = (ClazzLoader.userAgent.indexOf ("msie") != -1) && !ClazzLoader.isOpera;
ClazzLoader.isGecko = (ClazzLoader.userAgent.indexOf ("gecko") != -1);
ClazzLoader.isChrome = (ClazzLoader.userAgent.indexOf ("chrome") != -1);

/*
 * Opera has different loading order which will result in performance degrade!
 * So just return to single thread loading in Opera!
 *
 * FIXME: This different loading order also causes bugs in single thread!
 */
if (ClazzLoader.isOpera) {
	ClazzLoader.maxLoadingThreads = 1;
	var index = ClazzLoader.userAgent.indexOf ("opera/");
	if (index != -1) {
		var verNumber = 9.0;
		try {
			verNumber = parseFloat(ClazzLoader.userAgent.subString (index + 6));
		} catch (e) {}
		if (verNumber >= 9.6) {
			ClazzLoader.maxLoadingThreads = 6;
		}
	} 
}

/**
 * Try to be compatiable with Clazz system.
 * In original design ClazzLoader and Clazz are independent!
 *  -- zhourenjian @ December 23, 2006
 */
if (window["Clazz"] != null && Clazz.isClassDefined) {
	ClazzLoader.isClassDefined = Clazz.isClassDefined;
} else {
	/*-# definedClasses -> dC #-*/
	ClazzLoader.definedClasses = new Object ();
	ClazzLoader.isClassDefined = function (clazzName) {
		return ClazzLoader.definedClasses[clazzName] == true;
	};
}

/*
 * binaryFolders will be used for ResourceBundle to check *.properties
 * files. The default should always be "bin/"!
 */
if (window["Clazz"] != null && Clazz.binaryFolders != null) {
	ClazzLoader.binaryFolders = Clazz.binaryFolders;
} else {
	ClazzLoader.binaryFolders = ["bin/", "", "j2slib/"];
}

/*# {$clazz.existed} >>x #*/
/* public */
ClazzLoader.addBinaryFolder = function (bin) {
	if (bin != null) {
		var bins = ClazzLoader.binaryFolders;
		for (var i = 0; i < bins.length; i++) {
			if (bins[i] == bin) {
				return;
			}
		}
		bins[bins.length] = bin;
	}
};
/* public */
ClazzLoader.removeBinaryFolder = function (bin) {
	if (bin != null) {
		var bins = ClazzLoader.binaryFolders;
		for (var i = 0; i < bins.length; i++) {
			if (bins[i] == bin) {
				for (var j = i; j < bins.length - 1; j++) {
					bins[j] = bins[j + 1];
				}
				bins.length--;
				return bin;
			}
		}
	}
	return null;
};
/* public */
ClazzLoader.setPrimaryFolder = function (bin) {
	if (bin != null) {
		ClazzLoader.removeBinaryFolder (bin);
		var bins = ClazzLoader.binaryFolders;
		for (var i = bins.length - 1; i >= 0; i--) {
			bins[i + 1] = bins[i];
		}
		bins[0] = bin;
	}
};
/*# x<<
 # ClazzLoader.addBinaryFolder = Clazz.addBinaryFolder;
 # ClazzLoader.removeBinaryFolder = Clazz.removeBinaryFolder;
 # ClazzLoader.setPrimaryFolder = Clazz.setPrimaryFolder;
 #*/

/**
 * Indicate whether ClazzLoader is loading script synchronously or 
 * asynchronously.
 */
/* protected */
/*-# isAsynchronousLoading -> async #-*/
ClazzLoader.isAsynchronousLoading = true;

/* protected */
/*-# isUsingXMLHttpRequest -> xhr #-*/
ClazzLoader.isUsingXMLHttpRequest = false;

/* protected */
/*-# loadingTimeLag -> ltl #-*/
ClazzLoader.loadingTimeLag = -1;

/**
 * String mode:
 * asynchronous modes:
 * async(...).script, async(...).xhr, async(...).xmlhttprequest,
 * script.async(...), xhr.async(...), xmlhttprequest.async(...),
 * script
 * 
 * synchronous modes:
 * sync(...).xhr, sync(...).xmlhttprequest,
 * xhr.sync(...), xmlhttprequest.sync(...),
 * xmlhttprequest, xhr
 *
 * Integer mode:
 * Script/XHR bit: 1, 
 * 0: Script, 1: XHR
 * Asynchronous/Synchronous bit: 2
 * 0: Asynchronous, 2: Synchronous
 *
 * 0: Script & Asynchronous
 * 1: XHR & Asynchronous
 * 2: Script & Synchronous [Never]
 * 3: XHR & Synchronous
 */
/* public */
ClazzLoader.setLoadingMode = function (mode, timeLag) {
	if (mode == null) {
		if (ClazzLoader.isAsynchronousLoading && timeLag >= 0) {
			ClazzLoader.loadingTimeLag = timeLag;
		} else {
			ClazzLoader.loadingTimeLag = -1;
		}
		return;
	}
	if (typeof mode == "string") {
		mode = mode.toLowerCase ();
		if (mode.length == 0 || mode.indexOf ("script") != -1) {
			ClazzLoader.isUsingXMLHttpRequest = false;
			ClazzLoader.isAsynchronousLoading = true;
		} else {
			ClazzLoader.isUsingXMLHttpRequest = true;
			if (mode.indexOf ("async") != -1) {
				ClazzLoader.isAsynchronousLoading = true;
			} else {
				ClazzLoader.isAsynchronousLoading = false;
			}
		}
	/*# {$no.clazzloader.mode} >>x #*/
	} else {
		if (mode == ClazzLoader.MODE_SCRIPT) {
			ClazzLoader.isUsingXMLHttpRequest = false;
			ClazzLoader.isAsynchronousLoading = true;
		} else {
			ClazzLoader.isUsingXMLHttpRequest = true;
			if (mode == ClazzLoader.MODE_XHR_ASYNC) {
				ClazzLoader.isAsynchronousLoading = true;
			} else {
				ClazzLoader.isAsynchronousLoading = false;
			}
		}
	/*# x<< #*/
	}
	if (ClazzLoader.isAsynchronousLoading && timeLag >= 0) {
		ClazzLoader.loadingTimeLag = timeLag;
	} else {
		ClazzLoader.loadingTimeLag = -1;
	}
};

/*# {$no.clazzloader.mode} >>x #*/
ClazzLoader.MODE_SCRIPT = 0;
ClazzLoader.MODE_SCRIPT_ASYNC = 0;
ClazzLoader.MODE_XHR = 3;
ClazzLoader.MODE_XHR_SYNC = 3;
ClazzLoader.MODE_XHR_ASYNC = 1;
/*# x<< #*/
/**
 * Expand the shorten list of class names.
 * For example:
 * $wt.widgets.Shell, $.Display, $.Decorations
 * will be expanded to 
 * org.eclipse.swt.widgets.Shell, org.eclipse.swt.widgets.Display, 
 * org.eclipse.swt.widgets.Decorations ....
 * in which "$wt." stands for "org.eclipse.swt.", and "$." stands for
 * the previous class name's package.
 *
 * This method will be used to unwrap the required/optional classes list and 
 * the ignored classes list.
 */
/* private */
/*x-# unwrapArray -> uA #-x*/
ClazzLoader.unwrapArray = function (arr) {
	if (arr == null || arr.length == 0) {
		return arr;
	}
	var last = null;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == null) {
			continue;
		}
		if (arr[i].charAt (0) == '$') {
			if (arr[i].charAt (1) == '.') {
				if (last == null) {
					continue;
				}
				var idx = last.lastIndexOf (".");
				if (idx != -1) {
					var prefix = last.substring (0, idx);
					arr[i] = prefix + arr[i].substring (1);
				}
			} else {
				arr[i] = "org.eclipse.s" + arr[i].substring (1);
			}
		}
		last = arr[i];
	}
	return arr;
};

/**
 * Used to keep to-be-loaded classes.
 */
/* private */
/*-# classQueue -> cq #-*/
ClazzLoader.classQueue = new Array ();

/* private */
/*-# classpathMap -> cm #-*/
ClazzLoader.classpathMap = new Object ();

/* public */
ClazzLoader.packageClasspath = function (pkg, base, index) {
	var map = ClazzLoader.classpathMap;
	/*
	 * In some situation, maybe,
	 * ClazzLoader.packageClasspath ("java", ..., true);
	 * is called after other ClazzLoader#packageClasspath, e.g.
	 * <code>
	 * ClazzLoader.packageClasspath ("org.eclipse.swt", "...", true);
	 * ClazzLoader.packageClasspath ("java", "...", true);
	 * </code>
	 * which is not recommended. But ClazzLoader should try to adjust orders
	 * which requires "java" to be declared before normal ClazzLoader
	 * #packageClasspath call before that line! And later that line
	 * should never initialize "java/package.js" again!
	 */
	var isPkgDeclared = index == true && map["@" + pkg] != null;
	if (index && map["@java"] == null && pkg.indexOf ("java") != 0) {
		ClazzLoader.assurePackageClasspath ("java");
	}
	if (pkg instanceof Array) {
		ClazzLoader.unwrapArray (pkg);
		for (var i = 0; i < pkg.length; i++) {
			ClazzLoader.packageClasspath (pkg[i], base, index);
		}
		return;
	}
	if (pkg == "java" || pkg == "java.*") {
		// support ajax for default
		var key = "@net.sf.j2s.ajax";
		if (map[key] == null) {
			map[key] = base;
		}
		key = "@net.sf.j2s";
		if (map[key] == null) {
			map[key] = base;
		}
	} else if (pkg == "swt") { //abbrev
		pkg = "org.eclipse.swt";
	} else if (pkg == "ajax") { //abbrev
		pkg = "net.sf.j2s.ajax";
	} else if (pkg == "j2s") { //abbrev
		pkg = "net.sf.j2s";
	}
	if (pkg.lastIndexOf (".*") == pkg.length - 2) {
		pkg = pkg.substring (0, pkg.length - 2);
	}
	map["@" + pkg] = base;
	if (index == true && window[pkg + ".registered"] != true && !isPkgDeclared) {
		ClazzLoader.pkgRefCount++;
		ClazzLoader.loadClass (pkg + ".package", function () {
					ClazzLoader.pkgRefCount--;
					if (ClazzLoader.pkgRefCount == 0) {
						ClazzLoader.runtimeLoaded ();
					}
				}, true);
	}
};

ClazzLoader.pkgRefCount = 0;

/**
 * Register classes to a given *.z.js path, so only a single *.z.js is loaded
 * for all those classes.
 */
/* public */
/*-# clazzes -> zs #-*/
ClazzLoader.jarClasspath = function (jar, clazzes) {
	if (clazzes instanceof Array) {
		ClazzLoader.unwrapArray (clazzes);
		for (var i = 0; i < clazzes.length; i++) {
			ClazzLoader.classpathMap["#" + clazzes[i]] = jar;
		}
		ClazzLoader.classpathMap["$" + jar] = clazzes;
	} else {
		ClazzLoader.classpathMap["#" + clazzes] = jar;
		ClazzLoader.classpathMap["$" + jar] = [clazzes];
	}
};

/**
 * Usually be used in .../package.js. All given packages will be registered
 * to the same classpath of given prefix package.
 */
/* public */
ClazzLoader.registerPackages = function (prefix, pkgs) {
	//alert ("package " + pkgs);
	ClazzLoader.checkInteractive ();
	var base = ClazzLoader.getClasspathFor (prefix + ".*", true);
	for (var i = 0; i < pkgs.length; i++) {
		if (window["Clazz"] != null) {
			Clazz.declarePackage (prefix + "." + pkgs[i]);
		}
		ClazzLoader.packageClasspath (prefix + "." + pkgs[i], base);
	}
};

/**
 * Using multiple sites to load *.js in multiple threads. Using multiple
 * sites may avoid 2 HTTP 1.1 connections recommendation limit.
 * Here is a default implementation for http://archive.java2script.org.
 * In site archive.java2script.org, there are 6 sites:
 * 1. http://archive.java2script.org or http://a.java2script.org
 * 2. http://erchive.java2script.org or http://e.java2script.org
 * 3. http://irchive.java2script.org or http://i.java2script.org
 * 4. http://orchive.java2script.org or http://o.java2script.org
 * 5. http://urchive.java2script.org or http://u.java2script.org
 * 6. http://yrchive.java2script.org or http://y.java2script.org
 */
/* protected */
ClazzLoader.multipleSites = function (path) {
	var deltas = window["j2s.update.delta"];
	if (deltas != null && deltas instanceof Array && deltas.length >= 3) {
		var lastOldVersion = null;
		var lastNewVersion = null;
		for (var i = 0; i < deltas.length / 3; i++) {
			var oldVersion = deltas[i + i + i];
			if (oldVersion != "$") {
				lastOldVersion = oldVersion;
			}
			var newVersion = deltas[i + i + i + 1];
			if (newVersion != "$") {
				lastNewVersion = newVersion;
			}
			var relativePath = deltas[i + i + i + 2];
			var key = lastOldVersion + "/" + relativePath;
			var idx = path.indexOf (key);
			if (idx != -1 && idx == path.length - key.length) {
				path = path.substring (0, idx) + lastNewVersion + "/" + relativePath;
				break;
			}
		}
	}
	var length = path.length;
	if (ClazzLoader.maxLoadingThreads > 1 
			&& ((length > 15 && path.substring (0, 15) == "http://archive.")
			|| (length > 9 && path.substring (0, 9) == "http://a."))) {
		var index = path.lastIndexOf ("/");
		if (index < length - 3) {
			var arr = ['a', 'e', 'i', 'o', 'u', 'y'];
			var c1 = path.charCodeAt (index + 1);
			var c2 = path.charCodeAt (index + 2);
			var idx = (length - index) * 3 + c1 * 5 + c2 * 7; // Hash
			return path.substring (0, 7) + arr[idx % 6] + path.substring (8);
		}
	}
	return path;
};

/**
 * Return the *.js path of the given class. Maybe the class is contained
 * in a *.z.js jar file.
 * @param clazz Given class that the path is to be calculated for. May
 * be java.package, or java.lang.String
 * @param forRoot Optional argument, if true, the return path will be root
 * of the given classs' package root path.
 * @param ext Optional argument, if given, it will replace the default ".js"
 * extension.
 */
/* public */
ClazzLoader.getClasspathFor = function (clazz, forRoot, ext) {
	//error ("check js path : " + clazz);
	var path = ClazzLoader.classpathMap["#" + clazz];
	var base = null;
	if (path != null) {
		if (!forRoot && ext == null) { // return directly
			return ClazzLoader.multipleSites (path);
		} else {
			var idx = path.lastIndexOf (clazz.replace (/\./g, "/"));
			if (idx != -1) {
				base = path.substring (0, idx);
			} else {
				/*
				 * Check more: Maybe the same class' *.css is located
				 * in the same folder.
				 */
				idx = clazz.lastIndexOf (".");
				if (idx != -1) {
					idx = path.lastIndexOf (clazz.substring (0, idx)
							.replace (/\./g, "/"));
					if (idx != -1) {
						base = path.substring (0, idx);
					}
				}
			}
		}
	} else {
		/*
		path = ClazzLoader.classpathMap["@" + clazz]; // package
		if (path != null) {
			return ClazzLoader.assureBase (path) + clazz.replace (/\./g, "/") + "/";
		}
		*/
		var idx = clazz.lastIndexOf (".");
		//*
		while (idx != -1) {
			var pkg = clazz.substring (0, idx);
			base = ClazzLoader.classpathMap["@" + pkg];
			if (base != null) {
				break;
			}
			idx = clazz.lastIndexOf (".", idx - 2);
		}
		//*/
		/*
		if (idx != -1) {
			var pkg = clazz.substring (0, idx);
			base = ClazzLoader.classpathMap["@" + pkg];
		}
		//*/
	}
	
	base = ClazzLoader.assureBase (base);
	if (forRoot) {
		return ClazzLoader.multipleSites (base);
	}
	if (clazz.lastIndexOf (".*") == clazz.length - 2) {
		return ClazzLoader.multipleSites (base + clazz.substring (0, idx + 1)
				.replace (/\./g, "/"));
	}
	if (ext == null) {
		ext = ".js";
	} else if (ext.charAt (0) != '.') {
		ext = "." + ext;
	}
	var jsPath = base + clazz.replace (/\./g, "/") + ext;
	return ClazzLoader.multipleSites (jsPath);
};

/* private */
/*-# assureBase -> aB #-*/
ClazzLoader.assureBase = function (base) {
	if (base == null) {
		// Try to be compatiable with Clazz system.
		var bins = "binaryFolders";
		if (window["Clazz"] != null && Clazz[bins] != null
				&& Clazz[bins].length != 0) {
			base = Clazz[bins][0];
		} else if (ClazzLoader[bins] != null 
				&& ClazzLoader[bins].length != 0) {
			base = ClazzLoader[bins][0];
		} else {
			base = "bin";
		}
	}
	if (base.lastIndexOf ("/") != base.length - 1) {
		base += "/";
	}
	return base;
};

/* Used to keep ignored classes */
/* private */
/*-# excludeClassMap -> exmap #-*/
ClazzLoader.excludeClassMap = new Object ();

/**
 * To ignore some classes.
 */
/* public */
ClazzLoader.ignore = function () {
	var clazzes = null;
	if (arguments.length == 1) {
		if (arguments[0] instanceof Array) {
			clazzes = arguments[0];
		}
	}
	if (clazzes == null) {
		clazzes = new Array ();
		for (var i = 0; i < arguments.length; i++) {
			clazzes[clazzes.length] = arguments[i];
		}
	}
	ClazzLoader.unwrapArray (clazzes);
	for (var i = 0; i < clazzes.length; i++) {
		ClazzLoader.excludeClassMap["@" + clazzes[i]] = true;
	}
};

/* private */
/*-# isClassExcluded -> isEx #-*/
ClazzLoader.isClassExcluded = function (clazz) {
	return ClazzLoader.excludeClassMap["@" + clazz] == true;
};

/**
 * The following *.script* can be overriden to indicate the 
 * status of classes loading.
 *
 * TODO: There should be a Java interface with name like INativeLoaderStatus
 */
/* protected */
ClazzLoader.scriptLoading = function (file) {};

/* protected */
ClazzLoader.scriptLoaded = function (file) {};

/* protected */
ClazzLoader.scriptInited = function (file) {};

/* protected */
ClazzLoader.scriptCompleted = function (file) {};

/* protected */
ClazzLoader.classUnloaded = function (clazz) {};

/* protected */
ClazzLoader.classReloaded = function (clazz) {};

/**
 * After all the classes are loaded, this method will be called.
 * Should be overriden to run *.main([]).
 */
/* protected */
ClazzLoader.globalLoaded = function () {};

/* protected */
ClazzLoader.keepOnLoading = true;

/* private */
/*-# mapPath2ClassNode -> p2node #-*/
ClazzLoader.mapPath2ClassNode = new Object ();

/* private */
ClazzLoader.xhrOnload = function (transport, file) {
	if (transport.status >= 400 || transport.responseText == null
			|| transport.responseText.length == 0) { // error
		var fs = ClazzLoader.failedScripts;
		if (fs[file] == null) {
			// Silently take another try for bad network
			fs[file] = 1;
			ClazzLoader.loadedScripts[file] = false;
			ClazzLoader.loadScript (file);
			return;
		} else {
			alert ("[Java2Script] Error in loading " + file + "!");
		}
		ClazzLoader.tryToLoadNext (file);
	} else {
		try {
			/*
			if (transport.responseText.length >= 2048) {
				//fileCount++;
			}
				if (file.indexOf ("examples") != -1) {
				} else {
				log (transport.responseText.length + "::" + file);
				}				
			*/
			//	fileCount += transport.responseText.length;
			eval (transport.responseText);
		} catch (e) {
			alert ("[Java2Script] Script error: " + e.message);
			throw e;
		}
		ClazzLoader.scriptLoaded (file);
		ClazzLoader.tryToLoadNext (file);
	}
};

/**
 * Empty onreadystatechange for fixing IE's memeory leak on XMLHttpRequest
 */
/* private */
/*-# emptyOnRSC -> rsc #-*/
ClazzLoader.emptyOnRSC = function () {
};

/* protected */
/*-# failedScripts -> fss #-*/
ClazzLoader.failedScripts = new Object ();

/* protected */
/*-# failedHandles -> fhs #-*/
ClazzLoader.failedHandles = new Object ();

/* protected */
ClazzLoader.takeAnotherTry = true;

/* private */
/*-# generateRemovingFunction -> gRF #-*/
ClazzLoader.generateRemovingFunction = function (node) {
	return function () {
		if (node.readyState != "interactive") {
			try {
				if (node.parentNode != null) {
					node.parentNode.removeChild (node);
				}
			} catch (e) { }
			node = null;
		}
	};
};

/*
 * Dynamically SCRIPT elements are removed after they are parsed into memory.
 * And removed *.js may not be fetched again by "Refresh" action. And it will
 * save loading time for Java2Script applications.
 *
 * This may disturb debugging tools such as Firebug. Setting
 * window["j2s.script.debugging"] = true;
 * will ignore removing SCRIPT elements requests.
 */
/* private */
/*-# removeScriptNode -> RsN #-*/
ClazzLoader.removeScriptNode = function (n) {
	if (window["j2s.script.debugging"]) {
		return;
	}
	// lazily remove script nodes.
	window.setTimeout (ClazzLoader.generateRemovingFunction (n), 1);
};

/* private */
/*-# generatingXHROnload -> gXOd #-*/
ClazzLoader.generatingXHROnload = function (transport, file) {
	return function () {
		ClazzLoader.xhrOnload (transport, file);
		transport = null;
		file = null;
	};
};

/* private */
/*-# generatingXHRCallback -> gXcb #-*/
ClazzLoader.generatingXHRCallback = function (transport, file) {
	return function () {
		if (transport.readyState == 4) {
			if (ClazzLoader.inLoadingThreads > 0) {
				ClazzLoader.inLoadingThreads--;
			}
			var lazyFun = ClazzLoader.generatingXHROnload (transport, file);
			if (isActiveX) {
				transport.onreadystatechange = ClazzLoader.emptyOnRSC;
				// For IE, try to avoid stack overflow errors
				window.setTimeout (lazyFun,
						ClazzLoader.loadingTimeLag < 0 ? 0 : ClazzLoader.loadingTimeLag);
			} else {
				transport.onreadystatechange = null;
				if (ClazzLoader.loadingTimeLag >= 0) {
					window.setTimeout (lazyFun, ClazzLoader.loadingTimeLag);
				} else {
					ClazzLoader.xhrOnload (transport, file);
				}
			}
			transport = null;
			file = null;
		}
	};
};

/* private */
/*-# loadingNextByPath -> lNBP #-*/
ClazzLoader.loadingNextByPath = function (path) {
	if (ClazzLoader.loadingTimeLag >= 0) {
		window.setTimeout (function () {
					ClazzLoader.tryToLoadNext (path);
				}, ClazzLoader.loadingTimeLag);
	} else {
		ClazzLoader.tryToLoadNext (path);
	}
};

/* private */
/*-# ieToLoadScriptAgain -> iTLA #-*/
ClazzLoader.ieToLoadScriptAgain = function (path, local) {
	var fun = function () {
		if (!ClazzLoader.takeAnotherTry) {
			return;
		}
		// next time in "loading" state won't get waiting!
		ClazzLoader.failedScripts[path] = 0;
		ClazzLoader.loadedScripts[path] = false;
		// failed count down!
		if (ClazzLoader.inLoadingThreads > 0) {
			ClazzLoader.inLoadingThreads--;
		}
		// Take another try!
		// log ("re - loading ... " + path);
		ClazzLoader.loadScript (path);
	};
	// consider 30 seconds available after failing!
	/*
	 * Set 1s waiting in local file system. Is it 1s enough?
	 * What about big *.z.js need more than 1s to initialize?
	 */
	var waitingTime = (local ? 500 : 15000); // 0.5s : 15s
	//alert ("waiting:" + waitingTime + " . " + path);
	return window.setTimeout (fun, waitingTime);
};

/* private */
/*-# w3cFailedLoadingTest -> wFLT #-*/
ClazzLoader.w3cFailedLoadingTest = function (script) {
	return window.setTimeout (function () {
				script.onerror ();
				script.timeoutHandle = null;
				script = null;
			}, 500); // 0.5s for loading a local file is considered enough long
};

/* private */
/*-# generatingW3CScriptOnCallback -> gWSC #-*/
ClazzLoader.generatingW3CScriptOnCallback = function (path, forError) {
	return function () {
		if (ClazzLoader.isGecko && this.timeoutHandle != null) {
			window.clearTimeout (this.timeoutHandle);
			this.timeoutHandle = null;
		}
		if (ClazzLoader.inLoadingThreads > 0) {
			ClazzLoader.inLoadingThreads--;
		}
		this.onload = null;
		this.onerror = null;
		if (!forError && ClazzLoader.isOpera // Opera only
				&& !ClazzLoader.innerLoadedScripts[this.src]) {
			ClazzLoader.checkInteractive();
		}
		if (forError || (!ClazzLoader.innerLoadedScripts[this.src]
					&& ClazzLoader.isOpera)) {
			// Opera will not take another try.
			var fss = ClazzLoader.failedScripts;
			if (fss[path] == null && ClazzLoader.takeAnotherTry) {
				// silently take another try for bad network
				// alert ("re loading " + path + " ... ");
				fss[path] = 1;
				if (!forError) {
					ClazzLoader.innerLoadedScripts[this.src] = false;
				}
				ClazzLoader.loadedScripts[path] = false;
				ClazzLoader.loadScript (path);
				ClazzLoader.removeScriptNode (this);
				return;
			} else {
				alert ("[Java2Script] Error in loading " + path + "!");
			}
			if (forError) {
				ClazzLoader.scriptLoaded (path);
			}
		} else {
			ClazzLoader.scriptLoaded (path);
		}
		ClazzLoader.loadingNextByPath (path);
		ClazzLoader.removeScriptNode (this);
	};
};

/* private */
/*-# generatingIEScriptOnCallback -> gISC #-*/
ClazzLoader.generatingIEScriptOnCallback = function (path) {
	return function () {
		var fhs = ClazzLoader.failedHandles;
		var fss = ClazzLoader.failedScripts;
		var state = "" + this.readyState;
		
		
		
		
		var local = state == "loading" 
				&& (this.src.indexOf ("file:") == 0 
				|| (window.location.protocol == "file:"
				&& this.src.indexOf ("http") != 0));

		// alert (state + "/" + this.src);
		if (state != "loaded" && state != "complete") {
			/*
			 * When no such *.js existed, IE will be
			 * stuck here without loaded event!
			 */
			/*
			if ((window.location.protocol != "file:" 
					&& this.src.indexOf ("file:") != 0)
					|| this.readyState != "loading") {
				return;
			}
			*/
			if (fss[path] == null) {
				fhs[path] = ClazzLoader.ieToLoadScriptAgain (path, local);
				return;
			}
			if (fss[path] == 1) { // above function will be executed?!
				return;
			}
		}
		if (fhs[path] != null) {
			window.clearTimeout (fhs[path]);
			fhs[path] = null;
		}
		if ((local || state == "loaded")
				&& !ClazzLoader.innerLoadedScripts[this.src]) {
			if (!local && (fss[path] == null || fss[path] == 0)
					&& ClazzLoader.takeAnotherTry) {
				// failed! count down
				if (ClazzLoader.inLoadingThreads > 0) {
					ClazzLoader.inLoadingThreads--;
				}
				// silently take another try for bad network
				fss[path] = 1;
				// log ("reloading ... " + path);
				ClazzLoader.loadedScripts[path] = false;
				ClazzLoader.loadScript (path);
				ClazzLoader.removeScriptNode (this);
				return;
			} else {
				alert ("[Java2Script] Error in loading " + path + "!");
			}
		}
		if (ClazzLoader.inLoadingThreads > 0) {
			ClazzLoader.inLoadingThreads--;
		}
		ClazzLoader.scriptLoaded (path);
		// Unset onreadystatechange, leaks mem in IE
		this.onreadystatechange = null; 
		ClazzLoader.loadingNextByPath (path);
		ClazzLoader.removeScriptNode (this);
	};
};

/*
 * There is another thread trying to remove j2slib.z.js or similar SCRIPT.
 * See the end of this file.
 */

/**
 * Load *.js by adding script elements into head. Hook the onload event to
 * load the next class in dependency tree.
 */
/* protected */
/*-#
 # loadScript -> xrpt
 #
 # transport -> tt
 # isActiveX -> iX
 # ignoreOnload -> iol
 #-*/
ClazzLoader.loadScript = function (file) {
	// maybe some scripts are to be loaded without needs to know onload event.
	var ignoreOnload = (arguments[1] == true);
	if (ClazzLoader.loadedScripts[file] && !ignoreOnload) {
		ClazzLoader.tryToLoadNext (file);
		return;
	}
	ClazzLoader.loadedScripts[file] = true;
	/* also remove from those queue */
	var cq = ClazzLoader.classQueue;
	for (var i = 0; i < cq.length; i++) {
		if (cq[i] == file) {
			for (var j = i; j < cq.length - 1; j++) {
				cq[i] = cq[i + 1];
			}
			cq.length--;
			break;
		}
	}

	if (ClazzLoader.isUsingXMLHttpRequest) {
		ClazzLoader.scriptLoading (file);
		var transport = null;
		var isActiveX = false;
		if (window.XMLHttpRequest) {
			transport = new XMLHttpRequest();
		} else {
			isActiveX = true;
			try {
				transport = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				transport = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		if (transport == null) { // should never happen in modern browsers.
			alert ("[Java2Script] XMLHttpRequest not supported!");
			return;
		}

		transport.open ("GET", file, ClazzLoader.isAsynchronousLoading);
		// transport.setRequestHeader ("User-Agent",
		// 		"Java2Script-Pacemaker/1.0 (+http://j2s.sourceforge.net)");
		if (ClazzLoader.isAsynchronousLoading) {
			transport.onreadystatechange = ClazzLoader.generatingXHRCallback (
					transport, file);
			ClazzLoader.inLoadingThreads++;
			try {
				transport.send (null);
			} catch (e) {
				alert ("[Java2Script] Loading file error: " + e.message);
				ClazzLoader.xhrOnload (transport, file);
				//throw e;
			}
		} else {
			try {
				transport.send (null);
			} catch (e) {
				alert ("[Java2Script] Loading file error: " + e.message);
				//throw e;
			}
			ClazzLoader.xhrOnload (transport, file);
		}
		return;
	}
	// Create script DOM element
	var script = document.createElement ("SCRIPT");
	script.type = "text/javascript";
	if (ClazzLoader.isChrome && ClazzLoader.reloadingClasses[file]) {
		script.src = file + "?" + Math.floor (100000 * Math.random ());
	} else {
		script.src = file;
	}
	var head = document.getElementsByTagName ("HEAD")[0];

	if (ignoreOnload) {
		head.appendChild (script);
		// ignore onload event and no call of ClazzLoader.scriptLoading
		return;
	}
	script.defer = true;
	// Alert when the script is loaded
	if (typeof (script.onreadystatechange) == "undefined" || !ClazzLoader.isIE) { // W3C
		if (ClazzLoader.isGecko && (file.indexOf ("file:") == 0 
				|| (window.location.protocol == "file:" && file.indexOf ("http") != 0))) {
			script.timeoutHandle = ClazzLoader.w3cFailedLoadingTest (script);
		}

		/*
		 * What about Safari and Google Chrome?
		 */
		/*
		 * Opera will trigger onload event even there are no *.js existed
		 */
		script.onload = ClazzLoader.generatingW3CScriptOnCallback (file, false);
		/*
		 * For Firefox/Mozilla, unexisted *.js will result in errors.
		 */
		script.onerror = ClazzLoader.generatingW3CScriptOnCallback (file, true);

		if (ClazzLoader.isOpera) {
			ClazzLoader.needOnloadCheck = true;
		}
	} else { // IE
		ClazzLoader.needOnloadCheck = true;
		script.onreadystatechange = ClazzLoader.generatingIEScriptOnCallback (file);
	}
	ClazzLoader.inLoadingThreads++;
	//alert("threads:"+ClazzLoader.inLoadingThreads);
	// Add script DOM element to document tree
	head.appendChild (script);
	ClazzLoader.scriptLoading (file);
};

/* protected */
ClazzLoader.isResourceExisted = function (id, path, base) {
	if (id != null && document.getElementById (id) != null) {
		return true;
	}
	if (path != null) {
		var key = path;
		if (base != null) {
			if (path.indexOf (base) == 0) {
				key = path.substring (base.length);
			}
		}
		if (path.lastIndexOf (".css") == path.length - 4) {
			var resLinks = document.getElementsByTagName ("LINK");
			for (var i = 0; i < resLinks.length; i++) {
				var cssPath = resLinks[i].href;
				var idx = cssPath.lastIndexOf (key);
				if (idx != -1 && idx == cssPath.length - key.length) {
					return true;
				}
			}
			if (window["css." + id] == true) {
				return true;
			}
		} else if (path.lastIndexOf (".js") == path.length - 4) {
			var resScripts = document.getElementsByTagName ("SCRIPT");
			for (var i = 0; i < resScripts.length; i++) {
				var jsPath = resScripts[i].src;
				var idx = jsPath.lastIndexOf (key);
				if (idx != -1 && idx == jsPath.length - key.length) {
					return true;
				}
			}
		}
	}
	return false;
};

/* private */
/*-# queueBe4SWT -> q4T #-*/
ClazzLoader.queueBe4SWT = [];

/* private */
/*-# lockQueueBe4SWT -> l4T #-*/
ClazzLoader.lockQueueBe4SWT = true;

/* private */
/*-# isLoadingEntryClass -> lec #-*/
ClazzLoader.isLoadingEntryClass = true;

/* private */
/*-# besidesJavaPackage -> bJP #-*/
ClazzLoader.besidesJavaPackage = false;

/**
 * After class is loaded, this method will be executed to check whether there
 * are classes in the dependency tree that need to be loaded.
 */
/* private */
/*-# tryToLoadNext -> next #-*/
ClazzLoader.tryToLoadNext = function (file) {
	/*
	 * Try to check whether current status is in SWT lazy loading mode. If
	 * yes, try to keep ClazzLoader#tryToLoadNext in queue and wait until
	 * all SWT core is loaded.
	 */
	if (ClazzLoader.lockQueueBe4SWT && ClazzLoader.pkgRefCount != 0 
			&& file.lastIndexOf ("package.js") != file.length - 10
			&& !ClazzLoader.isOpera) { // No Opera! Opera is in single thread.
		var qbs = ClazzLoader.queueBe4SWT;
		qbs[qbs.length] = file;
		return;
	}

	//alert ("in tryToLoadNext");
	var node = ClazzLoader.mapPath2ClassNode["@" + file];
	if (node == null) { // maybe class tree root
		//error (" null node ?" + file);
		return;
	}
	//alert ("loaded .. " + file);
	var clazzes = ClazzLoader.classpathMap["$" + file];
	if (clazzes != null) {
		for (var i = 0; i < clazzes.length; i++) {
			var nm = clazzes[i];
			if (nm != node.name) {
				var n = ClazzLoader.findClass (nm);
				if (n != null) {
				//*
					if (n.status < ClazzNode.STATUS_CONTENT_LOADED) {
						n.status = ClazzNode.STATUS_CONTENT_LOADED;
						ClazzLoader.updateNode (n);
					}
				//*/
				//ClazzLoader.tryToLoadNext (n.path);
				} else {
					n = new ClazzNode ();
					n.name = nm;
					var pp = ClazzLoader.classpathMap["#" + nm];
					if (pp == null) {
						log (nm);
						error ("Java2Script implementation error! Please report this bug!");
					}
					//n.path = ClazzLoader.lastScriptPath;
					n.path = pp;
					//error ("..." + node.path + "//" + node.name);
					ClazzLoader.mappingPathNameNode (n.path, nm, n);
					n.status = ClazzNode.STATUS_CONTENT_LOADED;
					ClazzLoader.addChildClassNode(ClazzLoader.clazzTreeRoot, n, -1);
					ClazzLoader.updateNode (n);
				}
			}
		}
	}
	if (node instanceof Array) {
		//log ("array of node " + node.length + ">>>>" + file);
		/*
		for (var i = 0; i < node.length; i++) {
			alert ("array of node " + node[i].name);
		}
		*/
		for (var i = 0; i < node.length; i++) {
			if (node[i].status < ClazzNode.STATUS_CONTENT_LOADED) {
				node[i].status = ClazzNode.STATUS_CONTENT_LOADED;
				//error ("updating array : " + node[i].name + "..");
				ClazzLoader.updateNode (node[i]);
			}
		}
	} else {
		if (node.status < ClazzNode.STATUS_CONTENT_LOADED) {
			var stillLoading = false;
			var ss = document.getElementsByTagName ("SCRIPT");
			for (var i = 0; i < ss.length; i++) {
				if (ClazzLoader.isIE) {
					if (ss[i].onreadystatechange != null && ss[i].onreadystatechange.path == node.path
							&& ss[i].readyState == "interactive") {
						stillLoading = true;
						break;
					}
				} else {
					if (ss[i].onload != null && ss[i].onload.path == node.path) {
						stillLoading = true;
						break;
					}
				}
			}
			if (!stillLoading) {
				node.status = ClazzNode.STATUS_CONTENT_LOADED;
				ClazzLoader.updateNode (node);
			}
		}
	}
	/*
	 * Maybe in #optinalLoaded inside above ClazzLoader#updateNode calls, 
	 * ClazzLoader.keepOnLoading is set false (Already loaded the wanted
	 * classes), so here check to stop.
	 */
	if (!ClazzLoader.keepOnLoading) {
		return;
	}

	var loadFurther = false;
	var n = ClazzLoader.findNextMustClass (ClazzLoader.clazzTreeRoot, 
			ClazzNode.STATUS_KNOWN);
	//alert (file + " next ..." + n) ;
	if (n != null) {
		//log ("next ..." + n.name);
		ClazzLoader.loadClassNode (n);
		while (ClazzLoader.inLoadingThreads < ClazzLoader.maxLoadingThreads) {
			var nn = ClazzLoader.findNextMustClass (ClazzLoader.clazzTreeRoot,
					ClazzNode.STATUS_KNOWN);
			if (nn == null) break;
			ClazzLoader.loadClassNode (nn); // will increase inLoadingThreads!
		}
	} else {
		var cq = ClazzLoader.classQueue;
		if (cq.length != 0) { 
			/* queue must be loaded in order! */
			n = cq[0]; // popup class from the queue
			//alert ("load from queue");
			//alert (cq.length + ":" + cq);
			for (var i = 0; i < cq.length - 1; i++) {
				cq[i] = cq[i + 1];
			}
			cq.length--;
			//log (cq.length + ":" + cq);
			if (!ClazzLoader.loadedScripts[n.path] || cq.length != 0 
					|| !ClazzLoader.isLoadingEntryClass
					|| (n.musts != null && n.musts.length != 0)
					|| (n.optionals != null && n.optionals.length != 0)/*
					|| window["org.eclipse.swt.registered"] != null*/) {
				ClazzLoader.addChildClassNode(ClazzLoader.clazzTreeRoot, n, 1);
				ClazzLoader.loadScript (n.path);
			} else {
				if (ClazzLoader.isLoadingEntryClass) {
					/*
					 * The first time reaching here is the time when ClassLoader
					 * is trying to load entry class. Class with #main method and
					 * is to be executed is called Entry Class.
					 *
					 * Here when loading entry class, ClassLoader should not call
					 * the next following loading script. This is because, those
					 * scripts will try to mark the class as loaded directly and
					 * then continue to call #optionalsLoaded callback method,
					 * which results in an script error!
					 */
					ClazzLoader.isLoadingEntryClass = false;
				}
				//alert ("Continue loading by SCRIPT onload event!");
				//ClazzLoader.addChildClassNode(ClazzLoader.clazzTreeRoot, n, 1);
				//ClazzLoader.loadScript (n.path);
			}
		} else { // Optionals
			//log ("options");
			n = ClazzLoader.findNextOptionalClass (ClazzNode.STATUS_KNOWN);
			if (n != null) {
				//log ("in optionals unknown..." + n.name);
				ClazzLoader.loadClassNode (n);
				while (ClazzLoader.inLoadingThreads < ClazzLoader.maxLoadingThreads) {
					var nn = ClazzLoader.findNextOptionalClass (ClazzNode.STATUS_KNOWN);
					//log ("in second loading " + nn);
					if (nn == null) break;
					ClazzLoader.loadClassNode (nn); // will increase inLoadingThreads!
				}
			} else {
				loadFurther = true;
			}
		}
	}
	/*
	 * The following codes still need more tests, e.g. cyclic tests.
	 * And they also need optimization.
	 */
	if (loadFurther && ClazzLoader.inLoadingThreads == 0) {
		//error ("no optionals?");
		while ((n = ClazzLoader.findNextMustClass (ClazzLoader.clazzTreeRoot, ClazzNode.STATUS_CONTENT_LOADED)) != null) {
			ClazzLoader.updateNode (n);
		}
		var lastNode = null;
		while ((n = ClazzLoader.findNextOptionalClass (ClazzNode.STATUS_CONTENT_LOADED)) != null) {
			if (lastNode === n) { // Already existed cycle ?
				n.status = ClazzNode.STATUS_OPTIONALS_LOADED;
			}
			ClazzLoader.updateNode (n);
			lastNode = n;
		}
		while (true) {
			ClazzLoader.tracks = new Array ();
			if (!ClazzLoader.checkOptionalCycle (ClazzLoader.clazzTreeRoot)) {
				break;
			}
		}
		lastNode = null;
		while ((n = ClazzLoader.findNextMustClass (ClazzLoader.clazzTreeRoot, ClazzNode.STATUS_DECLARED)) != null) {
			if (lastNode === n) break;
			ClazzLoader.updateNode (n);
			lastNode = n;
		}
		lastNode = null;
		while ((n = ClazzLoader.findNextOptionalClass (ClazzNode.STATUS_DECLARED)) != null) {
			if (lastNode === n) break;
			ClazzLoader.updateNode (n);
			lastNode = n;
		}
		var dList = [];
		while ((n = ClazzLoader.findNextMustClass (ClazzLoader.clazzTreeRoot, ClazzNode.STATUS_DECLARED)) != null) {
			dList[dList.length] = n;
			n.status = ClazzNode.STATUS_OPTIONALS_LOADED;
		}
		while ((n = ClazzLoader.findNextOptionalClass (ClazzNode.STATUS_DECLARED)) != null) {
			dList[dList.length] = n;
			n.status = ClazzNode.STATUS_OPTIONALS_LOADED;
		}
		for (var i = 0; i < dList.length; i++) {
			// ClazzLoader.updateNode (dList[i]);
			ClazzLoader.destroyClassNode (dList[i]); // Same as above
		}
		for (var i = 0; i < dList.length; i++) {
			var optLoaded = dList[i].optionalsLoaded;
			if (optLoaded != null) {
				dList[i].optionalsLoaded = null;
				//window.setTimeout (optLoaded, 25);
				optLoaded ();
			}
		}

		/*
		 * It seems ClazzLoader#globalLoaded is seldom overrided.
		 */
		ClazzLoader.globalLoaded ();
		//error ("end ?");
	}
};

ClazzLoader.tracks = new Array ();

/*
 * There are classes reference cycles. Try to detect and break those cycles.
 * TODO: Reference cycles should be broken down carefully. Or there will be 
 * bugs!
 */
/* protected */
ClazzLoader.checkOptionalCycle = function (node) {
	var ts = ClazzLoader.tracks;
	var length = ts.length;
	var cycleFound = -1;
	for (var i = 0; i < ts.length; i++) {
		if (ts[i] === node && ts[i].status >= ClazzNode.STATUS_DECLARED) { 
			// Cycle is found;
			cycleFound = i;
			break;
		}
	}
	ts[ts.length] = node;
	if (cycleFound != -1) {
		/*
		for (var i = cycleFound; i < ts.length; i++) {
			alert (ts[i].name + ":::" + ts[i].status);
		}
		alert ("===");
		*/
		for (var i = cycleFound; i < ts.length; i++) {
			ts[i].status = ClazzNode.STATUS_OPTIONALS_LOADED;
			//ClazzLoader.updateNode (ts[i]);
			ClazzLoader.destroyClassNode (ts[i]); // Same as above
			for (var k = 0; k < ts[i].parents.length; k++) {
				//log ("updating parent ::" + ts[i].parents[k].name);
				ClazzLoader.updateNode (ts[i].parents[k]);
			}
			ts[i].parents = new Array ();
			var optLoaded = ts[i].optionalsLoaded;
			if (optLoaded != null) {
				ts[i].optionalsLoaded = null;
				//alert ("check cycle.");
				//window.setTimeout (optLoaded, 25);
				optLoaded ();
			}
		}
		ts.length = 0;
		return true;
	}
	for (var i = 0; i < node.musts.length; i++) {
		if (node.musts[i].status == ClazzNode.STATUS_DECLARED) {
			if (ClazzLoader.checkOptionalCycle (node.musts[i])) {
				return true;
			}
		}
	}
	for (var i = 0; i < node.optionals.length; i++) {
		if (node.optionals[i].status == ClazzNode.STATUS_DECLARED) {
			if (ClazzLoader.checkOptionalCycle (node.optionals[i])) {
				return true;
			}
		}
	}
	ts.length = length;
	return false;
};

/**
 * Update the dependency tree nodes recursively.
 */
/* private */
/*-# 
 # updateNode -> uN 
 #
 # isMustsOK -> mOK
 # isOptionsOK -> oOK
 #-*/
ClazzLoader.updateNode = function (node) {
	if (node.name == null 
			|| node.status >= ClazzNode.STATUS_OPTIONALS_LOADED) {
		ClazzLoader.destroyClassNode (node);
		return;
	}
	var isMustsOK = false;
	if (node.musts == null || node.musts.length == 0 
			|| node.declaration == null) {
		//alert (node.name + " no musts");
		isMustsOK = true;
	} else {
		//alert ("checking " + node.musts.length + " musts");
		isMustsOK = true;
		var mustLength = node.musts.length;
		for (var i = mustLength - 1; i >= 0; i--) {
			/*
			 * Soheil reported a strange bug:
The problem here is that, Widget functions and field are not added to
the Control !
Control is not an instance of Widget! I got an error that says
this.checkOrientation is not a function ( in Control's constructor).

When I changed the order of Drawable and Widget in the definition of
Control's constructor, the line bellow, it works fine!
$_L(["$wt.graphics.Drawable","$wt.widgets.Widget"],"$wt.widgets.Control",
... : has the error
$_L(["$wt.widgets.Widget","$wt.graphics.Drawable"],"$wt.widgets.Control", 
... : does not have the error 
			 *
			 * In the bug fix procedure, it's known that node.musts will
			 * be changed according to the later codes:
			 * ClazzLoader.updateNode (n); // (see about 20 lines below)
			 * 
			 * As node.musts may become smaller, node.musts should be 
			 * traversed in reverse order, so all musts are checked.
			 *
			 * TODO:
			 */
			var n = node.musts[i];
			if (n.status < ClazzNode.STATUS_DECLARED) {
				if (ClazzLoader.isClassDefined (n.name)) {
					var nns = new Array (); // for optional loaded events!
					n.status = ClazzNode.STATUS_OPTIONALS_LOADED;
					// ClazzLoader.updateNode (n); // musts may be changed
					ClazzLoader.destroyClassNode (n); // Same as above
					/*
					 * For those classes within one *.js file, update
					 * them synchronously.
					 */
					if (n.declaration != null 
							&& n.declaration.clazzList != null) {
						var list = n.declaration.clazzList;
						for (var j = 0; j < list.length; j++) {
							var nn = ClazzLoader.findClass (list[j]);
							if (nn.status != ClazzNode.STATUS_OPTIONALS_LOADED
									&& nn !== n) {
								nn.status = n.status;
								nn.declaration = null;
								// ClazzLoader.updateNode (nn);
								// Same as above
								ClazzLoader.destroyClassNode (nn);
								if (nn.optionalsLoaded != null) {
									nns[nns.length] = nn;
								}
							}
						}
						n.declaration = null;
					}
					if (n.optionalsLoaded != null) {
						nns[nns.length] = n;
					}
					for (var j = 0; j < nns.length; j++) {
						var optLoaded = nns[j].optionalsLoaded;
						if (optLoaded != null) {
							nns[j].optionalsLoaded = null;
							//window.setTimeout (optLoaded, 25);
							optLoaded ();
						}
					}
				} else { // why not break? -Zhou Renjian @ Nov 28, 2006
					if (n.status == ClazzNode.STATUS_CONTENT_LOADED) {
						// lazy loading script doesn't work! - 2/26/2007
						ClazzLoader.updateNode (n); // musts may be changed
					}
					if (n.status < ClazzNode.STATUS_DECLARED) {
						isMustsOK = false;
					}
				}
				// fix the above strange bug
				if (node.musts.length != mustLength) {
					// length changed!
					mustLength = node.musts.length;
					i = mustLength; // -1
					isMustsOK = true;
				}
			}
		}
	}
	/*
	var scripts = document.getElementsByTagName ("SCRIPT");
	var count = 0;
	for (var i = 0; i < scripts.length; i++) {
		var s = scripts[i];
		if (s.onload != null) {
			log ("---:---" + s.src);
			count++;
		}
	}
	alert ("There are " + count + " script loading ...");
	*/
	if (isMustsOK) {
		if (node.status < ClazzNode.STATUS_DECLARED) {
			var decl = node.declaration;
			if (decl != null) {
				if (decl.executed == false) {
					decl ();
					decl.executed = true;
				} else {
					decl ();
				}
			}
			node.status = ClazzNode.STATUS_DECLARED;
			if (ClazzLoader.definedClasses != null) {
				ClazzLoader.definedClasses[node.name] = true;
			}
			ClazzLoader.scriptInited (node.path);
					/*
					 * For those classes within one *.js file, update
					 * them synchronously.
					 */
					if (node.declaration != null 
							&& node.declaration.clazzList != null) {
						var list = node.declaration.clazzList;
						for (var j = 0; j < list.length; j++) {
							var nn = ClazzLoader.findClass (list[j]);
							if (nn.status != ClazzNode.STATUS_DECLARED
									&& nn !== node) {
			nn.status = ClazzNode.STATUS_DECLARED;
			if (ClazzLoader.definedClasses != null) {
				ClazzLoader.definedClasses[nn.name] = true;
			}
			ClazzLoader.scriptInited (nn.path);
							}
						}
					}
		}
		var level = ClazzNode.STATUS_DECLARED;
		var isOptionsOK = false;
		if (((node.optionals == null || node.optionals.length == 0) 
				&& (node.musts == null || node.musts.length == 0))
				|| (node.status > ClazzNode.STATUS_KNOWN 
				&& node.declaration == null)) {
			isOptionsOK = true;
		} else {
			isOptionsOK = true;
			for (var i = 0; i < node.musts.length; i++) {
				var n = node.musts[i];
				if (n.status < ClazzNode.STATUS_OPTIONALS_LOADED) {
					isOptionsOK = false;
					break;
				}
			}
			if (isOptionsOK) {
				for (var i = 0; i < node.optionals.length; i++) {
					var n = node.optionals[i];
					if (n.status < ClazzNode.STATUS_OPTIONALS_LOADED) {
						isOptionsOK = false;
						break;
					}
				}
			}
		}
		if (isOptionsOK) {
			level = ClazzNode.STATUS_OPTIONALS_LOADED;
			node.status = level;
			ClazzLoader.scriptCompleted (node.path);
			var optLoaded = node.optionalsLoaded;
			if (optLoaded != null) {
				node.optionalsLoaded = null;
				//window.setTimeout (optLoaded, 25);
				optLoaded ();
				if (!ClazzLoader.keepOnLoading) {
					return false;
				}
			}
			ClazzLoader.destroyClassNode (node);
					/*
					 * For those classes within one *.js file, update
					 * them synchronously.
					 */
					if (node.declaration != null 
							&& node.declaration.clazzList != null) {
						var list = node.declaration.clazzList;
						for (var j = 0; j < list.length; j++) {
							var nn = ClazzLoader.findClass (list[j]);
							if (nn.status != level && nn !== node) {
			nn.status = level;
			nn.declaration = null;
			ClazzLoader.scriptCompleted (nn.path);
			var optLoaded = nn.optionalsLoaded;
			if (optLoaded != null) {
				nn.optionalsLoaded = null;
				//window.setTimeout (optLoaded, 25);
				optLoaded ();
				if (!ClazzLoader.keepOnLoading) {
					return false;
				}
			}
			ClazzLoader.destroyClassNode (node);
							}
						}
					}
		}
		ClazzLoader.updateParents (node, level);
	}
};

/* private */
/*-# updateParents -> uP #-*/
ClazzLoader.updateParents = function (node, level) {
	if (node.parents == null || node.parents.length == 0) {
		return;
	}
	for (var i = 0; i < node.parents.length; i++) {
		var p = node.parents[i];
		if (p.status >= level) {
			continue;
		}
		ClazzLoader.updateNode (p);
	}
	if (level == ClazzNode.STATUS_OPTIONALS_LOADED) {
		node.parents = new Array ();
	}
};

/* private */
/*-# findNextMustClass -> fNM #-*/
ClazzLoader.findNextMustClass = function (node, status) {
	if (node != null) {
		/*
		if (ClazzLoader.isClassDefined (node.name)) {
			node.status = ClazzNode.STATUS_OPTIONALS_LOADED;
		}
		*/
		if (node.musts != null && node.musts.length != 0) {
			for (var i = 0; i < node.musts.length; i++) {
				var n = node.musts[i];
				if (n.status == status && (status != ClazzNode.STATUS_KNOWN 
						|| ClazzLoader.loadedScripts[n.path] != true)
						&& (status == ClazzNode.STATUS_DECLARED
						|| !ClazzLoader.isClassDefined (n.name))) {
					return n;
				} else {
					var nn = ClazzLoader.findNextMustClass (n, status);
					if (nn != null) {
						return nn;
					}
				}
			}
		}
		if (node.status == status && (status != ClazzNode.STATUS_KNOWN 
				|| ClazzLoader.loadedScripts[node.path] != true)
				&& (status == ClazzNode.STATUS_DECLARED
				|| !ClazzLoader.isClassDefined (node.name))) {
			return node;
		}
	}
	return null;
};

/*
 * Be used to record already used random numbers. And next new random
 * number should not be in the property set.
 */
/* private */
/*-# usedRandoms -> Rms #-*/
ClazzLoader.usedRandoms = {};
ClazzLoader.usedRandoms["r" + 0.13412] = 0.13412;

/* private */
/*-# findNextOptionalClass -> fNO #-*/
ClazzLoader.findNextOptionalClass = function (status) {
	var rnd = 0;
	while (true) { // try to generate a never used random number
		rnd = Math.random ();
		var s = "r" + rnd;
		if (ClazzLoader.usedRandoms[s] != rnd) {
			ClazzLoader.usedRandoms[s] = rnd;
			break;
		}
	}
	ClazzLoader.clazzTreeRoot.random = rnd;
	var node = ClazzLoader.clazzTreeRoot;
	return ClazzLoader.findNodeNextOptionalClass (node, status);
};

/* private */
/*-# findNodeNextOptionalClass -> fNNO #-*/
ClazzLoader.findNodeNextOptionalClass = function (node, status) {
	var rnd = ClazzLoader.clazzTreeRoot.random;
	// search musts first
	if (node.musts != null && node.musts.length != 0) {
		var n = ClazzLoader.searchClassArray (node.musts, rnd, status);
		if (n != null && (status != ClazzNode.STATUS_KNOWN 
				|| ClazzLoader.loadedScripts[n.path] != true)
				&& (status == ClazzNode.STATUS_DECLARED
				|| !ClazzLoader.isClassDefined (n.name))) {
			return n;
		}
	}
	// search optionals second
	if (node.optionals != null && node.optionals.length != 0) {
		var n = ClazzLoader.searchClassArray (node.optionals, rnd, status);
		if (n != null && (status != ClazzNode.STATUS_KNOWN 
				|| ClazzLoader.loadedScripts[n.path] != true)
				&& (status == ClazzNode.STATUS_DECLARED
				|| !ClazzLoader.isClassDefined (n.name))) {
			return n;
		}
	}
	// search itself
	if (node.status == status && (status != ClazzNode.STATUS_KNOWN 
			|| ClazzLoader.loadedScripts[node.path] != true)
			&& (status == ClazzNode.STATUS_DECLARED
			|| !ClazzLoader.isClassDefined (node.name))) {
		return node;
	}
	return null;
};

/* private */
ClazzLoader.searchClassArray = function (arr, rnd, status) {
	for (var i = 0; i < arr.length; i++) {
		var n = arr[i];
		if (n.status == status && (status != ClazzNode.STATUS_KNOWN 
				|| ClazzLoader.loadedScripts[n.path] != true)
				&& (status == ClazzNode.STATUS_DECLARED
				|| !ClazzLoader.isClassDefined (n.name))) {
			return n;
		} else {
			if (n.random == rnd) {
				continue;
			}
			n.random = rnd; // mark as visited!
			var nn = ClazzLoader.findNodeNextOptionalClass (n, status);
			if (nn != null) {
				return nn;
			}
		}
	}
	return null;
};

/**
 * This map variable is used to mark that *.js is correctly loaded.
 * In IE, ClazzLoader has defects to detect whether a *.js is correctly
 * loaded or not, so inner loading mark is used for detecting.
 */
/* private */
/*-# innerLoadedScripts -> ilss #-*/
ClazzLoader.innerLoadedScripts = new Object ();

/**
 * This variable is used to keep the latest interactive SCRIPT element.
 */
/* private */
/*-# interactiveScript -> itst #-*/
ClazzLoader.interactiveScript = null;

/**
 * IE and Firefox/Mozilla are different in using <SCRIPT> tag to load *.js.
 */
/* private */
ClazzLoader.needOnloadCheck = false;

/**
 * Check the interactive status of SCRIPT elements to determine whether a
 * *.js file is correctly loaded or not.
 *
 * Only make senses for IE.
 */
/* protected */
ClazzLoader.checkInteractive = function () {
	//alert ("checking...");
	if (!ClazzLoader.needOnloadCheck) {
		return;
	}
	var is = ClazzLoader.interactiveScript;
	if (is != null && is.readyState == "interactive") { // IE
		return;
	}
	ClazzLoader.interactiveScript = null;
	var ss = document.getElementsByTagName ("SCRIPT");
	for (var i = 0; i < ss.length; i++) {
		if (ss[i].readyState == "interactive"
				&& ss[i].onreadystatechange != null) { // IE
			ClazzLoader.interactiveScript = ss[i];
			ClazzLoader.innerLoadedScripts[ss[i].src] = true;
		} else if (ClazzLoader.isOpera) { // Opera
			if (ss[i].readyState == "loaded" 
					&& ss[i].src != null && ss[i].src.length != 0) {
				ClazzLoader.innerLoadedScripts[ss[i].src] = true;
			}
		}
	}
};

/**
 * This method will be called in almost every *.js generated by Java2Script
 * compiler.
 */
/* protected */
ClazzLoader.load = function (musts, clazz, optionals, declaration) {
	//alert ("Loading " + clazz + " ...");
	ClazzLoader.checkInteractive ();

	if (clazz instanceof Array) {
		ClazzLoader.unwrapArray (clazz);
		for (var i = 0; i < clazz.length; i++) {
			ClazzLoader.load (musts, clazz[i], optionals, declaration, clazz);
		}
		return;
	}
	if (clazz.charAt (0) == '$') {
		clazz = "org.eclipse.s" + clazz.substring (1);
	}
	
	var node = ClazzLoader.mapPath2ClassNode["#" + clazz];
	if (node == null) { // ClazzLoader.load called inside *.z.js?
		var n = ClazzLoader.findClass (clazz);
		if (n != null) {
			node = n;
		} else {
			node = new ClazzNode ();
		}
		//*
		//node = new ClazzNode ();
		node.name = clazz;
		var pp = ClazzLoader.classpathMap["#" + clazz];
		if (pp == null) { // TODO: Remove this test in final release
			log (clazz);
			error ("Java2Script implementation error! Please report this bug!");
		}
		//node.path = ClazzLoader.lastScriptPath;
		node.path = pp;
		//error ("..." + node.path + "//" + node.name);
		ClazzLoader.mappingPathNameNode (node.path, clazz, node);
		node.status = ClazzNode.STATUS_KNOWN;
		ClazzLoader.addChildClassNode(ClazzLoader.clazzTreeRoot, node, -1);
		//log (clazz);
		//alert ("[Java2Script] ClazzLoader#load is not executed correctly!");
		//*/
		/*
		if (declaration != null) {
			declaration ();
		}
		alert ("[Java2Script] ClazzLoader#load is not executed correctly!");
		return;
		//*/
	}
	var okToInit = true;
	if (musts != null && musts.length != 0) {
		ClazzLoader.unwrapArray (musts);
		for (var i = 0; i < musts.length; i++) {
			var name = musts[i];
			if (name == null || name.length == 0) {
				continue;
			}
			if (ClazzLoader.isClassDefined (name) 
					|| ClazzLoader.isClassExcluded (name)) {
				continue;
			}
			okToInit = false;
			var n = ClazzLoader.findClass (name);
			if (n == null) {
				n = new ClazzNode ();
				n.name = musts[i];
				n.status = ClazzNode.STATUS_KNOWN;
			}
			ClazzLoader.addChildClassNode (node, n, 1);
		}
	}

	/*
	 * The following lines are commented intentionally.
	 * So lots of class is not declared until there is a must?
	 *
	 * TODO: Test the commented won't break up the dependency tree.
	 */
	/*
	if (okToInit) {
		declaration ();
		node.declaration = null;
		node.status = ClazzNode.STATUS_DECLARED;
	} else {
		node.declaration = declaration;
	}
	*/
	if (arguments.length == 5 && declaration != null) {
		declaration.status = node.status;
		declaration.clazzList = arguments[4];
	}
	node.declaration = declaration;
	if (declaration != null) {
		node.status = ClazzNode.STATUS_CONTENT_LOADED;
	}

	var isOptionalsOK = true;
	if (optionals != null && optionals.length != 0) {
		ClazzLoader.unwrapArray (optionals);
		for (var i = 0; i < optionals.length; i++) {
			var name = optionals[i];
			if (name == null || name.length == 0) {
				continue;
			}
			if (ClazzLoader.isClassDefined (name) 
					|| ClazzLoader.isClassExcluded (name)) {
				continue;
			}
			isOptionalsOK = false;
			var n = ClazzLoader.findClass (name);
			if (n == null) {
				n = new ClazzNode ();
				n.name = optionals[i];
				n.status = ClazzNode.STATUS_KNOWN;
			}
			ClazzLoader.addChildClassNode (node, n, -1);
		}
	}
};

/*
 * Try to be compatiable of Clazz
 */
if (window["Clazz"] != null) {
	Clazz.load = ClazzLoader.load;
	if (window["$_L"] != null) {
		$_L = Clazz.load;
	}
}

/**
 *
 */
/* protected */
/*-# findClass -> fC #-*/
ClazzLoader.findClass = function (clazzName) {
	var rnd = 0;
	while (true) { // try to generate a never used random number
		rnd = Math.random ();
		var s = "r" + rnd;
		if (ClazzLoader.usedRandoms[s] != rnd) {
			ClazzLoader.usedRandoms[s] = rnd;
			break;
		}
	}
	ClazzLoader.clazzTreeRoot.random = rnd;
	return ClazzLoader.findClassUnderNode (clazzName, 
			ClazzLoader.clazzTreeRoot);
};

/* private */
/*-# findClassUnderNode -> fCU #-*/
ClazzLoader.findClassUnderNode = function (clazzName, node) {
	var rnd = ClazzLoader.clazzTreeRoot.random;
	if (node.name == clazzName) {
		return node;
	}
	// musts first
	for (var i = 0; i < node.musts.length; i++) {
		var n = node.musts[i];
		if (n.name == clazzName) {
			return n;
		}
		if (n.random == rnd) {
			continue;
		}
		n.random = rnd;
		var nn = ClazzLoader.findClassUnderNode (clazzName, n);
		if (nn != null) {
			return nn;
		}
	}
	// optionals last
	for (var i = 0; i < node.optionals.length; i++) {
		var n = node.optionals[i];
		if (n.name == clazzName) {
			return n;
		}
		if (n.random == rnd) {
			continue;
		}
		n.random = rnd;
		var nn = ClazzLoader.findClassUnderNode (clazzName, n);
		if (nn != null) {
			return nn;
		}
	}
	return null;
};

/**
 * Map different class to the same path! Many classes may be packed into
 * a *.z.js already.
 *
 * @path *.js path
 * @name class name
 * @node ClazzNode object
 */
/* private */
/*-# mappingPathNameNode -> mpp #-*/
ClazzLoader.mappingPathNameNode = function (path, name, node) {
	var map = ClazzLoader.mapPath2ClassNode;
	var keyPath = "@" + path;
	var v = map[keyPath];
	if (v != null) {
		if (v instanceof Array) {
			var existed = false;
			for (var i = 0; i < v.length; i++) {
				if (v[i].name == name) {
					existed = true;
					break;
				}
			}
			if (!existed) {
				v[v.length] = node;
			}
		} else {
			var arr = new Array ();
			arr[0] = v;
			arr[1] = node;
			map[keyPath] = arr;
		}
	} else {
		map[keyPath] = node;
	}
	map["#" + name] = node;
};

/* protected */
/*-# loadClassNode -> lCN #-*/
ClazzLoader.loadClassNode = function (node) {
	var name = node.name;
	if (!ClazzLoader.isClassDefined (name) 
			&& !ClazzLoader.isClassExcluded (name)) {
		var path = ClazzLoader.getClasspathFor (name/*, true*/);
		node.path = path;
		ClazzLoader.mappingPathNameNode (path, name, node);
		if (!ClazzLoader.loadedScripts[path]) {
			ClazzLoader.loadScript (path);
			return true;
		}
	}
	return false;
};


/* protected */
ClazzLoader.runtimeKeyClass = "java.lang.String";

/**
 * Queue used to store classes before key class is loaded.
 */
/* private */
ClazzLoader.queueBe4KeyClazz = new Array ();

/**
 * Return J2SLib base path from existed SCRIPT src attribute.
 */
/* private */
/*-# getJ2SLibBase -> gLB #-*/
ClazzLoader.getJ2SLibBase = function () {
	var o = window["j2s.lib"];
	if (o != null) {
		if (o.base == null) {
			o.base = "http://archive.java2script.org/";
		}
		return o.base + (o.alias ? o.alias : (o.version ? o.version : "1.0.0")) + "/";
	}
	var ss = document.getElementsByTagName ("SCRIPT");
	for (var i = 0; i < ss.length; i++) {
		var src = ss[i].src;
		var idx = src.indexOf ("j2slib.z.js"); // consider it as key string!
		if (idx != -1) {
			return src.substring (0, idx);
		}
		idx = src.indexOf ("j2slibcore.z.js"); // consider it as key string!
		if (idx != -1) {
			return src.substring (0, idx);
		}
		var base = ClazzLoader.classpathMap["@java"];
		if (base != null) {
			return base;
		}
		idx = src.indexOf ("java/lang/ClassLoader.js"); // may be not packed yet
		if (idx != -1) {
			return src.substring (0, idx);
		}
	}
	return null;
};

/* private static */
/*-# J2SLibBase -> JLB #-*/
ClazzLoader.J2SLibBase = null;
/*-# fastGetJ2SLibBase -> fgLB #-*/
ClazzLoader.fastGetJ2SLibBase = function () {
	if (ClazzLoader.J2SLibBase == null) {
		ClazzLoader.J2SLibBase = ClazzLoader.getJ2SLibBase ();
	}
	return ClazzLoader.J2SLibBase;
};

/*
 * Check whether given package's classpath is setup or not.
 * Only "java" and "org.eclipse.swt" are accepted in argument.
 */
/* private */
/*-# assurePackageClasspath -> acp #-*/
ClazzLoader.assurePackageClasspath = function (pkg) {
	var r = window[pkg + ".registered"];
	if (r != false && r != true && ClazzLoader.classpathMap["@" + pkg] == null) {
		window[pkg + ".registered"] = false;
		var base = ClazzLoader.fastGetJ2SLibBase ();
		if (base == null) {
			base = "http://archive.java2script.org/1.0.0/"; // only after 1.0.0
		}
		ClazzLoader.packageClasspath (pkg, base, true);
	}
};

/**
 * Load the given class ant its related classes.
 */
/* public */
ClazzLoader.loadClass = function (name, optionalsLoaded, forced, async) {
	if (typeof optionalsLoaded == "boolean") {
		return Clazz.evalType (name);
	}

	/*
	 * Make sure that
	 * ClazzLoader.packageClasspath ("java", base, true); 
	 * is called before any ClazzLoader#loadClass is called.
	 */
	ClazzLoader.assurePackageClasspath ("java");
	var swtPkg = "org.eclipse.swt";
	if (name.indexOf (swtPkg) == 0 || name.indexOf ("$wt") == 0) {
		ClazzLoader.assurePackageClasspath (swtPkg);
	}
	if (name.indexOf ("junit") == 0) {
		ClazzLoader.assurePackageClasspath ("junit");
	}

	/*
	 * Any ClazzLoader#loadClass calls will be queued until java.* core classes
	 * is loaded.
	 */
	ClazzLoader.keepOnLoading = true;
	if (!forced && ((ClazzLoader.pkgRefCount != 0 
			&& name.lastIndexOf (".package") != name.length - 8)
			|| (!ClazzLoader.isClassDefined (ClazzLoader.runtimeKeyClass) 
			&& name.indexOf ("java.") != 0))) {
		var qbs = ClazzLoader.queueBe4KeyClazz;
		qbs[qbs.length] = [name, optionalsLoaded];
		return;
	}
	if (!ClazzLoader.isClassDefined (name) 
			&& !ClazzLoader.isClassExcluded (name)) {
		var path = ClazzLoader.getClasspathFor (name/*, true*/);
		var existed = ClazzLoader.loadedScripts[path];
		var qq = ClazzLoader.classQueue;
		if (!existed) {
			for (var i = qq.length - 1; i >= 0; i--) {
				if (qq[i].path == path || qq[i].name == name) {
					existed = true;
				}
			}
		}
		if (!existed) {
			var n = null;
			if (Clazz.unloadedClasses[name] != null) {
				n = ClazzLoader.findClass (name);
			}
			if (n == null) {
				n = new ClazzNode ();
			}
			n.name = name;
			n.path = path;
			ClazzLoader.mappingPathNameNode (path, name, n);
			n.optionalsLoaded = optionalsLoaded;
			n.status = ClazzNode.STATUS_KNOWN;
			/*-# needBeingQueued -> nQ #-*/
			var needBeingQueued = false;
			//error (qq.length + ":" + qq);
			//error (path);
			for (var i = qq.length - 1; i >= 0; i--) {
				if (qq[i].status != ClazzNode.STATUS_OPTIONALS_LOADED) {
					needBeingQueued = true;
					break;
				}
			}
			if (path.lastIndexOf ("package.js") == path.length - 10) {//forced
				// push class to queue
				var inserted = false;
				for (var i = qq.length - 1; i >= 0; i--) {
					var name = qq[i].name;
					if (name.lastIndexOf ("package.js") == name.length - 10) {
						qq[i + 1] = n;
						inserted = true;
						break;
					}
					qq[i + 1] = qq[i];
				}
				if (!inserted) {
					qq[0] = n;
				}
			} else if (needBeingQueued) {
				qq[qq.length] = n;
			}
			if (!needBeingQueued) { // can be loaded directly
				/*-# bakEntryClassLoading -> bkECL #-*/
				var bakEntryClassLoading = false;
				if (optionalsLoaded != null) {
					bakEntryClassLoading = ClazzLoader.isLoadingEntryClass;
					ClazzLoader.isLoadingEntryClass = true;
				}
				ClazzLoader.addChildClassNode(ClazzLoader.clazzTreeRoot, n, 1);
				ClazzLoader.loadScript (n.path);
				if (optionalsLoaded != null) {
					ClazzLoader.isLoadingEntryClass = bakEntryClassLoading;
				}
			}
		} else if (optionalsLoaded != null) {
			var n = ClazzLoader.findClass (name);
			if (n != null) {
				if (n.optionalsLoaded == null) {
					n.optionalsLoaded = optionalsLoaded;
				} else if (optionalsLoaded != n.optionalsLoaded) {
					n.optionalsLoaded = (function (oF, nF) {
						return function () {
							oF();
							nF();
						};
					}) (n.optionalsLoaded, optionalsLoaded);
				}
			}
		}
	} else if (optionalsLoaded != null && ClazzLoader.isClassDefined (name)) {
		var nn = ClazzLoader.findClass (name);
		if (nn == null || nn.status >= ClazzNode.STATUS_OPTIONALS_LOADED) {
			/*if (nn != null) {
				ClazzLoader.destroyClassNode (nn);
			}*/
			if (async) {
				window.setTimeout (optionalsLoaded, 25);
			} else {
				optionalsLoaded ();
			}
		} // else ... should be called later
	}
	
};

/**
 * Load the application by the given class name and run its static main method.
 */
/* public */
$w$ = ClazzLoader.loadJ2SApp = function (clazz, args, loaded) {
	if (clazz == null) {
		return;
	}
	var clazzStr = clazz;
	if (clazz.charAt (0) == '$') {
		clazzStr = "org.eclipse.s" + clazz.substring (1);
	}
	var idx = -1;
	if ((idx = clazzStr.indexOf ("@")) != -1) {
		var path = clazzStr.substring (idx + 1);
		ClazzLoader.setPrimaryFolder (path); // TODO: No primary folder?
		clazzStr = clazzStr.substring (0, idx);
		idx = clazzStr.lastIndexOf (".");
		if (idx != -1) {
			var pkgName = clazzStr.substring (0, idx);
			ClazzLoader.packageClasspath (pkgName, path);
		}
	}
	var agmts = args;
	if (agmts == null || !(agmts instanceof Array)) {
		agmts = [];
	}
	var afterLoaded = loaded;
	if (afterLoaded == null) {
		afterLoaded = (function (clazzName, argv) {
			return function () {
				Clazz.evalType (clazzName).main (argv);
			};
		}) (clazzStr, agmts);
	} else {
		afterLoaded = loaded (clazzStr, agmts);
	}
	ClazzLoader.loadClass (clazzStr, afterLoaded);
};
/**
 * Load JUnit tests by the given class name.
 */
/* public */
$u$ = ClazzLoader.loadJUnit = function (clazz, args) {
	var afterLoaded = function (clazzName, argv) {
		return function () {
			ClazzLoader.loadClass ("junit.textui.TestRunner", function () {
				junit.textui.TestRunner.run (Clazz.evalType (clazzName));
			});
		};
	};
	ClazzLoader.loadJ2SApp (clazz, args, afterLoaded);
};

/* private */
ClazzLoader.runtimeLoaded = function () {
	if (ClazzLoader.pkgRefCount != 0 
			|| !ClazzLoader.isClassDefined (ClazzLoader.runtimeKeyClass)) {
		return;
	}
	var qbs = ClazzLoader.queueBe4KeyClazz;
	for (var i = 0; i < qbs.length; i++) {
		ClazzLoader.loadClass (qbs[i][0], qbs[i][1]);
	}
	ClazzLoader.queueBe4KeyClazz = [];
	/*
	 * Should not set to empty function! Some later package may need this
	 * runtimeLoaded function. For example, lazily loading SWT package may
	 * require this runtimeLoaded function. 
	 * -- zhou renjian @ Dec 17, 2006
	 */
	// ClazzLoader.runtimeLoaded = function () {};
};

/*
 * Load those key *.z.js. This *.z.js will be surely loaded before other 
 * queued *.js.
 */
/* public */
ClazzLoader.loadZJar = function (zjarPath, keyClazz) {
	var keyClass = keyClazz;
	var isArr = (keyClazz instanceof Array);
	if (isArr) {
		keyClass = keyClazz[keyClazz.length - 1];
	}
	ClazzLoader.jarClasspath (zjarPath, isArr ? keyClazz
			: [keyClazz]);
	if (keyClazz == ClazzLoader.runtimeKeyClass) {
		ClazzLoader.loadClass (keyClass, ClazzLoader.runtimeLoaded, true);
	} else {
		ClazzLoader.loadClass (keyClass, null, true);
	}
};

/**
 * The method help constructing the multiple-binary class dependency tree.
 */
/* private */
/*-# addChildClassNode -> addCCN #-*/
ClazzLoader.addChildClassNode = function (parent, child, type) {
	var existed = false;
	var arr = null;
	if (type == 1) {
		arr = parent.musts;
	} else {
		arr = parent.optionals;
	}
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].name == child.name) {
			existed = true;
			break;
		}
	}
	if (!existed) {
		/*
		if (type != 1) { // test cyclic optionals
			existed = false;
			for (var j = 0; j < child.optionals.length; j++) {
				if (child.optionals[j].name == parent.name) {
					existed = true;
					break;
				}
			}
		}
		*/
		/* above existed tests are commented */
		//if (!existed) {
			arr[arr.length] = child;
			var swtPkg = "org.eclipse.swt";
			if (child.name.indexOf (swtPkg) == 0 
					|| child.name.indexOf ("$wt") == 0) {
				window["swt.lazy.loading.callback"] = ClazzLoader.swtLazyLoading;
				ClazzLoader.assurePackageClasspath (swtPkg);
			}
			if (ClazzLoader.isLoadingEntryClass 
					&& child.name.indexOf ("java") != 0 
					&& child.name.indexOf ("net.sf.j2s.ajax") != 0) {
				if (ClazzLoader.besidesJavaPackage) {
					ClazzLoader.isLoadingEntryClass = false;
				}
				ClazzLoader.besidesJavaPackage = true;
			}
		//}
	}
	existed = false;
	for (var i = 0; i < child.parents.length; i++) {
		if (child.parents[i].name == parent.name) {
			existed = true;
			break;
		}
	}
	if (!existed && parent.name != null && parent != ClazzLoader.clazzTreeRoot
			&& parent != child) {
		child.parents[child.parents.length] = parent;
	}
};

/*
 * Some SWT classes may already skip ClazzLoader#tryToLoadNext when it's
 * detected that SWT is in lazy loading mode. Here it will try to re-execute
 * those ClazzLoader#tryToLoadNext
 */
/* private */
ClazzLoader.swtLazyLoading = function () {
	ClazzLoader.lockQueueBe4SWT = false;
	var qbs = ClazzLoader.queueBe4SWT;
	for (var i = 0; i < qbs.length; i++) {
		ClazzLoader.tryToLoadNext (qbs[i]);
	}
	ClazzLoader.queueBe4SWT  = [];
};

/* private */
ClazzLoader.removeFromArray = function (node, arr) {
	if (arr == null || node == null) {
		return false;
	}
	/*var isPackedJS = (node.path != null
			&& node.path.indexOf (".z.js") == node.path.length - 5);
	log ("... remove " + node.path + " :: " + isPackedJS);*/
	var j = 0;
	for (var i = 0; i < arr.length; i++) {
		if (!(arr[i] === node/* || (isPackedJS && arr[i].path == node.path)*/)) {
			if (j < i) {
				arr[j] = arr[i];
			}
			j++;
		}
	}
	arr.length = j;
	return false;
};

/* private */
/*-# destroyClassNode -> dCN #-*/
ClazzLoader.destroyClassNode = function (node) {
	//log (node.name + " // " + node.path);
	var parents = node.parents;
	if (parents != null) {
		for (var k = 0; k < parents.length; k++) {
			if (!ClazzLoader.removeFromArray (node, parents[k].musts)) {
				ClazzLoader.removeFromArray (node, parents[k].optionals);
			}
		}
	}
	/*
	if (node.optionalsLoaded != null) {
		node.optionalsLoaded ();
	}
	if (!ClazzLoader.removeFromArray (node, ClazzLoader.clazzTreeRoot.musts)) {
		ClazzLoader.removeFromArray (node, ClazzLoader.clazzTreeRoot.optionals);
	}
	*/
};

/* For hotspot and unloading */

/* protected */
ClazzLoader.unloadClassExt = function (qClazzName) {
	if (ClazzLoader.definedClasses != null) {
		ClazzLoader.definedClasses[qClazzName] = false;
	}
	if (ClazzLoader.classpathMap["#" + qClazzName] != null) {
		var pp = ClazzLoader.classpathMap["#" + qClazzName];
		ClazzLoader.classpathMap["#" + qClazzName] = null;
		var arr = ClazzLoader.classpathMap["$" + pp];
		var removed = false;
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] == qClazzName) {
				for (var j = i; j < arr.length - 1; j++) {
					arr[j] = arr[j + 1];
				}
				arr.length--;
				removed = true;
				break;
			}
		}
		if (removed) {
			ClazzLoader.classpathMap["$" + pp] = arr;
		}
	}
	var n = ClazzLoader.findClass (qClazzName);
	if (n != null) {
		n.status = ClazzNode.STATUS_KNOWN;
		ClazzLoader.loadedScripts[n.path] = false;
	}
	var path = ClazzLoader.getClasspathFor (qClazzName);
	ClazzLoader.loadedScripts[path] = false;
	if (ClazzLoader.innerLoadedScripts[path]) {
		ClazzLoader.innerLoadedScripts[path] = false;
	}

	ClazzLoader.classUnloaded (qClazzName);
};

/* protected */ /* Clazz#assureInnerClass */
ClazzLoader.assureInnerClass = function (clzz, fun) {
	var clzzName = clzz.__CLASS_NAME__;
	if (Clazz.unloadedClasses[clzzName]) {
		if (clzzName.indexOf ("$") != -1) return;
		var list = new Array ();
		var key = clzzName + "$";
		for (var s in Clazz.unloadedClasses) {
			if (Clazz.unloadedClasses[s] != null && s.indexOf (key) == 0) {
				list[list.length] = s;
			}
		}
		if (list.length == 0) return;
		var funStr = "" + fun;
		var idx1 = funStr.indexOf (key);
		if (idx1 == -1) return;
		var idx2 = funStr.indexOf ("\"", idx1 + key.length);
		if (idx2 == -1) return; // idx2 should never be -1;
		var anonyClazz = funStr.substring (idx1, idx2);
		if (Clazz.unloadedClasses[anonyClazz] == null) return;
		var idx3 = funStr.indexOf ("{", idx2);
		if (idx3 == -1) return;
		idx3++;
		var idx4 = funStr.indexOf ("(" + anonyClazz + ",", idx3 + 3);
		if (idx4 == -1) return; // idx3 should never be -1;
		var idx5 = funStr.lastIndexOf ("}", idx4 - 1);
		if (idx5 == -1) return;
		var innerClazzStr = funStr.substring (idx3, idx5);
		eval (innerClazzStr);
		Clazz.unloadedClasses[anonyClazz] = null;
		/*
		window.setTimeout ((function (clz, str) {
			return function () {
				eval (str);
				Clazz.unloadedClasses[clz] = null;
			};
		}) (anonyClazz, innerClazzStr), 10);
		*/
	}
};

/*-# lastHotspotUpdated -> ltUd #-*/
ClazzLoader.lastHotspotUpdated = new Date ().getTime ();
/*-# lastHotspotSessionID -> ltSI #-*/
ClazzLoader.lastHotspotSessionID = 0;

/* Google Chrome need to load *.js using url + "?" + random number */
if (ClazzLoader.isChrome) {
	ClazzLoader.reloadingClasses = new Object ();
}

/*
 * This method will be called in server-return-script:
 *
 * ClazzLoader.updateHotspot (
 * 134324344, 1, "org.eclipse.swt.widgets.Menu",
 * 134324345, 2, "org.eclipse.swt.widgets.MenuItem",
 * null);
 *
 */
/* public */
ClazzLoader.updateHotspot = function () {
	if (Clazz.assureInnerClass == null) {
		Clazz.assureInnerClass = ClazzLoader.assureInnerClass;
	}
	var args = arguments[0];
	if (arguments.length != 1 || arguments[0] == null) {
		args = arguments;
	}
	var length = (args.length - 1) / 3;
	var lastID = 0;
	/*-# lastUpdated -> lUd #-*/
	var lastUpdated = 0;
	/*-# toUpdateClasses -> tUs #-*/
	var toUpdateClasses = new Array ();
	for (var i = 0; i < length; i++) {
		var time = args[i * 3];
		var id = args[i * 3 + 1];
		var clazz = args[i * 3 + 2];
		if ((time > ClazzLoader.lastHotspotUpdated) 
				|| (time == ClazzLoader.lastHotspotUpdated
				&& id > ClazzLoader.lastHotspotSessionID)) {
			toUpdateClasses[toUpdateClasses.length] = clazz;
			lastID = id;
			lastUpdated = time;
		}
	}
	if (toUpdateClasses.length > 0) {
		ClazzLoader.lastHotspotUpdated = lastUpdated;
		ClazzLoader.lastHotspotSessionID = lastID;
		/*-# needUpdateClasses -> nUC #-*/
		var needUpdateClasses = new Array ();
		for (var i = 0; i < toUpdateClasses.length; i++) {
			needUpdateClasses[i] = Clazz.unloadClass (toUpdateClasses[i]);
		}
		for (var i = 0; i < toUpdateClasses.length; i++) {
			if (needUpdateClasses[i]) {
				var clzz = toUpdateClasses[i];
				if (ClazzLoader.isChrome) {
					ClazzLoader.reloadingClasses[ClazzLoader.getClasspathFor (clzz)] = true;
				}
				ClazzLoader.loadClass (clzz, (function (clazz) {
					return function () {
						// succeeded!
						Clazz.unloadedClasses[clazz] = null;
						ClazzLoader.classReloaded (clazz);
						if (ClazzLoader.isChrome) {
							ClazzLoader.reloadingClasses[ClazzLoader.getClasspathFor (clazz)] = false;
						}
					};
				}) (clzz));
			}
		}
	}
	ClazzLoader.lastHotspotJSFailed = false;
};

/* private */
/*-# removeHotspotScriptNode -> rtSN #-*/
ClazzLoader.removeHotspotScriptNode = function (node) {
	// lazily remove script nodes.
	window.setTimeout (function () {
			if (node.readyState != "interactive") {
				try {
					if (node.parentNode != null) {
						node.parentNode.removeChild (node);
					}
				} catch (e) { }
			}
			node = null;
		}, 1);
	
	if (ClazzLoader.hotspotMonitoringTimeout != null) {
		window.clearTimeout (ClazzLoader.hotspotMonitoringTimeout);
		ClazzLoader.hotspotMonitoringTimeout = null;
	}
};

/*-# lastHotspotScriptLoaded -> ltSL #-*/
ClazzLoader.lastHotspotScriptLoaded = true;
/*-# hotspotJSTimeout -> hJSt #-*/
ClazzLoader.hotspotJSTimeout = null;
/*-# lastHotspotJSFailed -> ltJF #-*/
ClazzLoader.lastHotspotJSFailed = false;

/*-# generatingHotspotW3COnCallback -> gHWC #-*/
ClazzLoader.generatingHotspotW3COnCallback = function () {
	return function () {
		try {
			ClazzLoader.lastHotspotScriptLoaded = true;
			ClazzLoader.removeHotspotScriptNode (this);
		} catch (e) {}; // refreshing browser may cause exceptions
		this.onload = null;
		this.onerror = null;
	};
};

/*-# generatingHotspotIEOnCallback -> gHIC #-*/
ClazzLoader.generatingHotspotIEOnCallback = function () {
	return function () {
		var state = "" + this.readyState;
		if (state == "loaded" || state == "complete") {
			try {
				ClazzLoader.lastHotspotScriptLoaded = true;
				ClazzLoader.removeHotspotScriptNode (this);
			} catch (e) {}; // refreshing browser may cause exceptions
			this.onreadystatechange = null;
		}
	};
};

/* private */
ClazzLoader.loadHotspotScript = function (hotspotURL, iframeID) {
	var script = document.createElement ("SCRIPT");
	script.type = "text/javascript";
	script.defer = true;
	script.src = hotspotURL;
	if (typeof (script.onreadystatechange) == "undefined" || !ClazzLoader.isIE) { // W3C
		script.onload = script.onerror = ClazzLoader.generatingHotspotW3COnCallback ();
	} else {
		script.onreadystatechange = ClazzLoader.generatingHotspotIEOnCallback ();
	}
	var head = document.getElementsByTagName ("HEAD")[0];
	head.appendChild (script);
};

/* private */
/*-# hotspotLoadingTimeout -> hLTo #-*/
ClazzLoader.hotspotLoadingTimeout = function () {
	ClazzLoader.lastHotspotScriptLoaded = true; // timeout
	ClazzLoader.lastHotspotJSFailed = false; // timeout
};

/* protected */
/*-# hotspotMonitoring -> htMr #-*/
ClazzLoader.hotspotMonitoring = function () {
	if (ClazzLoader.lastHotspotScriptLoaded 
			&& !ClazzLoader.lastHotspotJSFailed) {
		var port = window["j2s.hotspot.port"];
		if (port == null) {
			port = 1725;
		}
		var hotspotURL = "http://127.0.0.1:" + port;
		if (ClazzLoader.lastHotspotSessionID == 0) {
			hotspotURL += "/hotspot.js?" + Math.random ();
		} else {
			hotspotURL += "/" + ClazzLoader.lastHotspotSessionID + ".js?"
					+ Math.random ();
		}

		ClazzLoader.lastHotspotJSFailed = true;
		ClazzLoader.lastHotspotScriptLoaded = false;
		
		ClazzLoader.loadHotspotScript (hotspotURL);

		if (ClazzLoader.hotspotJSTimeout != null) {
			window.clearTimeout (ClazzLoader.hotspotJSTimeout);
			ClazzLoader.hotspotJSTimeout = null;
		}
		ClazzLoader.hotspotJSTimeout = window.setTimeout (
				ClazzLoader.hotspotLoadingTimeout, 2000);
		/*
		 * 2 seconds to time out. For local server running inside Eclipse
		 * 2 seconds is already a very long time!
		 */
	}
	
	window.setTimeout (ClazzLoader.hotspotMonitoring, 2500);
};

/*
 * Remove j2slib.z.js, j2slibcore.z.js or Class/Ext/Loader/.js.
 */
window.setTimeout (function () {
	var ss = document.getElementsByTagName ("SCRIPT");
	for (var i = 0; i < ss.length; i++) {
		var src = ss[i].src;
		if (src.indexOf ("chrome:") != 0 && (src.indexOf ("j2slib.z.js") != -1
				|| src.indexOf ("j2slibcore.z.js") != -1)) {
			ClazzLoader.getJ2SLibBase (); // cached ...
			ClazzLoader.removeScriptNode (ss[i]);
			break;
		}
	}
	/* start ClazzLoader hotspot monitoring after 1 second */
	if (window["j2s.script.debugging"] == true && window["j2s.disable.hotspot"] != true) {
		window.setTimeout (ClazzLoader.hotspotMonitoring, 10000); // 10s, initializing 
	}
}, 324); // 0.324 seconds is considered as enough before refresh action

ClassLoader = ClazzLoader;
}
/******************************************************************************
 * Copyright (c) 2007 java2script.org and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Zhou Renjian - initial API and implementation
 *****************************************************************************/
/*******
 * @author zhou renjian
 * @create Jan 11, 2007
 *******/

if (window["ClazzLoaderProgressMonitor"] == null) { 
/*
 * Update: March 5, 2007
 * ClassLoaderProgressMonitor were already in default j2slib.z.js.
 *
 * ClassLoaderProgressMonitor is optional. It's used to display class loading 
 * progress so that user know that background loading is still processing.
 *
 * Example:
<script type="text/javascript" 
	src="../net.sf.j2s.java.core/src/java/lang/ClassLoaderProgressMonitor.js">
</script>
<script>
...
ClazzLoader.scriptLoading = function (file) {
	ClassLoaderProgressMonitor.showStatus ("Loading " + file + "...");
};
ClazzLoader.scriptLoaded = function (file) {
	ClassLoaderProgressMonitor.showStatus (file + " loaded.", true);
};
ClazzLoader.loadClass ("com.example.Notepad", function () {
ClassLoaderProgressMonitor.showStatus("com.example.Notepad loaded.", true);
com.example.Notepad.main([]);
});
</script>
 */

ClazzLoaderProgressMonitor = ClassLoaderProgressMonitor = new Object ();
var clpm = ClassLoaderProgressMonitor;
clpm.fadeOutTimer = null;
clpm.fadeAlpha = 0;
clpm.monitorEl = null;
clpm.lastScrollTop = 0;
clpm.bindingParent = null;
clpm.DEFAULT_OPACITY = 55;
/* private static */ clpm.clearChildren = function (el) {
	if (el == null) return;
	for (var i = el.childNodes.length - 1; i >= 0; i--) {
		var child = el.childNodes[i];
		if (child == null) continue;
		if (child.childNodes != null && child.childNodes.length != 0) {
			this.clearChildren (child);
		}
		try {
			el.removeChild (child);
		} catch (e) {};
	}
};
/* private */ clpm.setAlpha = function (alpha) {
	if (this.fadeOutTimer != null && alpha == this.DEFAULT_OPACITY) {
		window.clearTimeout (this.fadeOutTimer);
		this.fadeOutTimer = null;
	}
	this.fadeAlpha = alpha;
	var ua = navigator.userAgent.toLowerCase ();
	if (ua.indexOf ("msie") != -1 && ua.indexOf ("opera") == -1) {
		this.monitorEl.style.filter = "Alpha(Opacity=" + alpha + ")";
	} else {
		this.monitorEl.style.opacity = alpha / 100.0;
	}
};
/* private */ clpm.hiddingOnMouseOver = function () {
	this.style.display = "none";
};
/* private */ clpm.attached = false;
/* private */ clpm.cleanup = function () {
	var oThis = ClassLoaderProgressMonitor;
	if (oThis.monitorEl != null) {
		oThis.monitorEl.onmouseover = null;
	}
	oThis.monitorEl = null;
	oThis.bindingParent = null;
	Clazz.removeEvent (window, "unload", oThis.cleanup);
	//window.detachEvent ("onunload", oThis.cleanup);
	oThis.attached = false;
};
/* private */ clpm.createHandle = function () {
	var div = document.createElement ("DIV");
	div.id = "clazzloader-status";
	div.style.cssText = "position:absolute;bottom:4px;left:4px;padding:2px 8px;"
			+ "z-index:3333;background-color:#8e0000;color:yellow;" 
			+ "font-family:Arial, sans-serif;font-size:10pt;white-space:nowrap;";
	div.onmouseover = this.hiddingOnMouseOver;
	this.monitorEl = div;
	if (this.bindingParent == null) {
		document.body.appendChild (div);
	} else {
		this.bindingParent.appendChild (div);
	}
	return div;
};
/* private */ clpm.fadeOut = function () {
	if (this.monitorEl.style.display == "none") return;
	if (this.fadeAlpha == this.DEFAULT_OPACITY) {
		this.fadeOutTimer = window.setTimeout (function () {
					ClassLoaderProgressMonitor.fadeOut ();
				}, 750);
		this.fadeAlpha -= 5;
	} else if (this.fadeAlpha - 10 >= 0) {
		this.setAlpha (this.fadeAlpha - 10);
		this.fadeOutTimer = window.setTimeout (function () {
					ClassLoaderProgressMonitor.fadeOut ();
				}, 40);
	}
};
/* private */ clpm.getFixedOffsetTop = function (){
	if (this.bindingParent != null) {
		var b = this.bindingParent;
		return b.scrollTop;
	}
	var dua = navigator.userAgent;
	var b = document.body;
	var p = b.parentNode;
	var pcHeight = p.clientHeight;
	var bcScrollTop = b.scrollTop + b.offsetTop;
	var pcScrollTop = p.scrollTop + p.offsetTop;
	if (dua.indexOf("Opera") == -1 && document.all) {
		return (pcHeight == 0) ? bcScrollTop : pcScrollTop;
	} else if (dua.indexOf("Gecko") != -1) {
		return (pcHeight == p.offsetHeight 
				&& pcHeight == p.scrollHeight) ? bcScrollTop : pcScrollTop;
	}
	return bcScrollTop;
};
/* public */
clpm.initialize = function (parent) {
	this.bindingParent = parent;
	if (parent != null && !this.attached) {
		this.attached = true;
		Clazz.addEvent (window, "unload", this.cleanup);
		// window.attachEvent ("onunload", this.cleanup);
	}
};
/* public */
clpm.showStatus = function (msg, fading) {
	if (this.monitorEl == null) {
		this.createHandle ();
		if (!this.attached) {
			this.attached = true;
			Clazz.addEvent (window, "unload", this.cleanup);
			// window.attachEvent ("onunload", this.cleanup);
		}
	}
	this.clearChildren (this.monitorEl);
	this.monitorEl.appendChild (document.createTextNode ("" + msg));
	if (this.monitorEl.style.display == "none") {
		this.monitorEl.style.display = "";
	}
	this.setAlpha (this.DEFAULT_OPACITY);
	var offTop = this.getFixedOffsetTop ();
	if (this.lastScrollTop != offTop) {
		this.lastScrollTop = offTop;
		this.monitorEl.style.bottom = (this.lastScrollTop + 4) + "px";
	}
	if (fading) {
		this.fadeOut();
	}
};
if (window["ClazzLoader"] != null) {
	ClazzLoader.scriptLoading = function (file) {
		ClassLoaderProgressMonitor.showStatus ("Loading " + file + "...");
	};
	ClazzLoader.scriptLoaded = function (file) {
		ClassLoaderProgressMonitor.showStatus (file + " loaded.", true);
	};
	ClazzLoader.globalLoaded = function (file) {
		ClassLoaderProgressMonitor.showStatus ("Application loaded.", true);
	};
	ClazzLoader.classUnloaded = function (clazz) {
		ClassLoaderProgressMonitor.showStatus ("Class " + clazz + " is unloaded.", true);
	};
	ClazzLoader.classReloaded = function (clazz) {
		ClassLoaderProgressMonitor.showStatus ("Class " + clazz + " is reloaded.", true);
	};

	var ua = navigator.userAgent.toLowerCase ();
	if (ua.indexOf ("msie") != -1 && ua.indexOf ("opera") == -1) {
		ClazzLoader.setLoadingMode ("script", 5);
	}
}
}
/******************************************************************************
 * Copyright (c) 2007 java2script.org and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     Zhou Renjian - initial API and implementation
 *****************************************************************************/
/*******
 * @author zhou renjian
 * @create Nov 5, 2005
 *******/

if (window["Console"] == null) {
/*-#
 # Console -> C_$
 #
 # <<< Console = C_$;
 #-*/
 
/* protected */
Console = {};

/**
 * Setting maxTotalLines to -1 will not limit the console result
 */
/* protected */
/*-# maxTotalLines -> mtl #-*/
Console.maxTotalLines =	1000;

/* protected */
Console.setMaxTotalLines = function (lines) {
	if (lines <= 0) {
		Console.maxTotalLines = 999999; // Won't reach before browser cracks
	} else {
		Console.maxTotalLines = lines;
	}
};

/*
 * The console window will be flicking badly in some situation. Try to use
 * double buffer to avoid flicking.
 */
/* protected */
/*-# buffering -> bi #-*/
Console.buffering = false;

/* protected */
Console.enableBuffering = function (enabled) {
	Console.buffering = enabled;
};

/* protected */
/*-# maxBufferedLines -> mbl #-*/
Console.maxBufferedLines = 20;

/* protected */
Console.setMaxBufferedLines = function (lines) {
	if (lines <= 0) {
		Console.maxBufferedLines = 20;
	} else {
		Console.maxBufferedLines = lines;
	}
};

/* protected */
/*-# maxLatency -> mlc #-*/
Console.maxLatency = 40;

/* protected */
Console.setMaxLatency = function (latency) {
	if (latency <= 0) {
		Console.maxLatency = 40;
	} else {
		Console.maxLatency = latency;
	}
};

/* protected */
/*-# pinning -> pi #-*/
Console.pinning  = false;

/* protected */
Console.enablePinning = function (enabled) {
	Console.pinning = enabled;
};

/* private */
/*-# linesCount -> lc #-*/
Console.linesCount = 0;

/* private */
/*-# metLineBreak -> mbr #-*/
Console.metLineBreak = false;

/* private */
Console.splitNeedFixed = "\n".split (/\n/).length != 2; // IE

/**
 * For IE to get a correct split result.
 */
/* private */
/*-# splitIntoLineByR -> slr #-*/
Console.splitIntoLineByR = function (s) {
	var arr = new Array ();
	var i = 0;
	var last = -1;
	while (true) {
		i = s.indexOf ('\r', last + 1);
		if (i != -1) {
			arr[arr.length] = s.substring (last + 1, i);
			last = i;
			if (last + 1 == s.length) {
				arr[arr.length] = "";
				break;
			}
		} else {
			arr[arr.length] = s.substring (last + 1);
			break;
		}
	}
	return arr;
};

/**
 * For IE to get a correct split result.
 */
/* private */
/*-# splitIntoLines -> sil #-*/
Console.splitIntoLines = function (s) {
	var arr = new Array ();
	if (s == null) {
		return arr;
	}
	var i = 0;
	var last = -1;
	while (true) {
		i = s.indexOf ('\n', last + 1);
		var str = null;
		if (i != -1) {
			if (i > 0 && s.charAt (i - 1) == '\r') {
				str = s.substring (last + 1, i - 1);
			} else {
				str = s.substring (last + 1, i);
			}
			last = i;
		} else {
			str = s.substring (last + 1);
		}
		var rArr = Console.splitIntoLineByR (str);
		for (var k = 0; k < rArr.length; k++) {
			arr[arr.length] = rArr[k];
		}
		if (i == -1) {
			break;
		} else if (last + 1 == s.length) {
			arr[arr.length] = "";
			break;
		}
	}
	return arr;
};

/**
 * Cache the console until the document.body is ready and console element
 * is created.
 */
/* private */
/*-# consoleBuffer -> cB #-*/
Console.consoleBuffer = new Array ();

/* private */
/*-# lastOutputTime -> oT #-*/
Console.lastOutputTime = new Date ().getTime ();

/* private */
/*-# checkingTimer -> lct #-*/
Console.checkingTimer = 0;

/* private */
/*-# loopChecking -> li  #-*/
Console.loopChecking = function () {
	if (Console.consoleBuffer.length == 0) {
		return ;
	}
	var console = document.getElementById ("_console_");;
	if (console == null) {
		if (document.body == null) {
			if (Console.checkingTimer == 0) {
				Console.checkingTimer = window.setTimeout (
						"Console.loopChecking ();", Console.maxLatency);
			}
			return ;
		}
	}
	Console.consoleOutput ();
};

/*
 * Give an extension point so external script can create and bind the console
 * themself.
 *
 * TODO: provide more template of binding console window to browser.
 */
/* protected */
Console.createConsoleWindow = function (parentEl) {
	var console = document.createElement ("DIV");
	console.style.cssText = "font-family:monospace, Arial, sans-serif;";
	document.body.appendChild (console);
	return console;
};

/* protected */
/*-#
 # consoleOutput -> cot 
 #
 # isBuffered -> bed
 #-*/
Console.consoleOutput = function (s, color, isBuffered) {
	var console = document.getElementById ("_console_");;
	if (console == null) {
		if (document.body == null) {
			Console.consoleBuffer[Console.consoleBuffer.length] = {
				message: s,
				color: color
			};
			if (Console.checkingTimer == 0) {
				Console.checkingTimer = window.setTimeout (
						"Console.loopChecking ();", Console.maxLatency);
			}
			return false;
		} else {
			console = Console.createConsoleWindow ();
			console.id = "_console_";
		}
	}
	/*
	 * Try to implement double buffer here for the console
	 */
	if (Console.buffering && !isBuffered && 
			Console.consoleBuffer.length < Console.maxBufferedLines &&
			new Date ().getTime () - Console.lastOutputTime < 
			Console.maxLatency) {
		Console.consoleBuffer[Console.consoleBuffer.length] = {
			message: s,
			color: color
		};
		if (Console.checkingTimer == 0) {
			Console.checkingTimer = window.setTimeout (
					"Console.loopChecking ();", Console.maxLatency);
		}
		return false;
	}
	
	if (Console.buffering && isBuffered && Console.checkingTimer != 0) {
		window.clearTimeout (Console.checkingTimer);
		Console.checkingTimer = 0;
	}
	
	if (!isBuffered && Console.consoleBuffer.length != 0) {
		for (var i = 0; i < Console.consoleBuffer.length; i++) {
			var o = Console.consoleBuffer[i];
			Console.consoleOutput (o.message, o.color, true);
		}
		Console.consoleBuffer = new Array ();
	}
	if (Console.linesCount > Console.maxTotalLines) {
		for (var i = 0; i < Console.linesCount - Console.maxTotalLines; i++) {
			if (console != null && console.childNodes.length > 0) {
				console.removeChild (console.childNodes[0]);
			}
		}
		Console.linesCount = Console.maxTotalLines;
	}
	
	/*-# willMeetLineBreak -> wbr #-*/
	var willMeetLineBreak = false;
	if (typeof s == "undefined") {
		s = "";
	} else if (s == null) {
		s = "null";
	} else {
		s = "" + s;
	}
	if (s.length > 0) {
		/*-# lastChar -> lc #-*/
		var lastChar = s.charAt (s.length - 1);
		if (lastChar == '\n') {
			if (s.length > 1) {
				var preLastChar = s.charAt (s.length - 2);
				if (preLastChar == '\r') {
					s = s.substring (0, s.length - 2);
				} else {
					s = s.substring (0, s.length - 1);
				}
			} else {
				s = "";
			}
			willMeetLineBreak = true;
		} else if (lastChar == '\r') {
			s = s.substring (0, s.length - 1);
			willMeetLineBreak = true;
		}
	}

	var lines = null;
	var c160 = String.fromCharCode (160);
	s = s.replace (/\t/g, c160 + c160 + c160 + c160 + 
			c160 + c160 + c160 + c160);
	if (Console.splitNeedFixed) { // IE
		try {
			lines = Console.splitIntoLines (s);
		} catch (e) {
			window.popup (e.message);
		}
	} else { // Mozilla/Firefox, Opera
		lines = s.split (/\r\n|\r|\n/g);
	}
	for (var i = 0; i < lines.length; i++) {
		/*-# lastLineEl -> lE #-*/
		var lastLineEl = null;
		if (Console.metLineBreak || Console.linesCount == 0 
				|| console.childNodes.length < 1) {
			lastLineEl = document.createElement ("DIV");
			console.appendChild (lastLineEl);
			lastLineEl.style.whiteSpace = "nowrap";
			Console.linesCount++;
		} else {
			try {
				lastLineEl = console.childNodes[console.childNodes.length - 1];
			} catch (e) {
				lastLineEl = document.createElement ("DIV");
				console.appendChild (lastLineEl);
				lastLineEl.style.whiteSpace = "nowrap";
				Console.linesCount++;
			}
		}
		var el = document.createElement ("SPAN");
		lastLineEl.appendChild (el);
		el.style.whiteSpace = "nowrap";
		if (color != null) {
			el.style.color = color;
		}
		if (lines[i].length == 0) {
			lines[i] = String.fromCharCode (160);
			//el.style.height = "1em";
		}
		el.appendChild (document.createTextNode (lines[i]));
		if (!Console.pinning) {
			console.scrollTop += 100;
		}
		
		if (i != lines.length - 1) {
			Console.metLineBreak = true;
		} else {
			Console.metLineBreak = willMeetLineBreak;
		}
	}
	
	var cssClazzName = console.parentNode.className;
	if (!Console.pinning && cssClazzName != null
			&& cssClazzName.indexOf ("composite") != -1) {
		console.parentNode.scrollTop = console.parentNode.scrollHeight;
	}
	Console.lastOutputTime = new Date ().getTime ();
};

/*
 * Clear all contents inside the console.
 */
/* public */
Console.clear = function () {
	Console.metLineBreak = true;
	var console = document.getElementById ("_console_");;
	if (console == null) {
		if (document.body == null) {
			Console.consoleBuffer = [];
		}
		return;
	}
	Console.consoleBuffer = [];
	var childNodes = console.childNodes;
	for (var i = childNodes.length - 1; i >= 0; i--) {
		console.removeChild (childNodes[i]);
	}
	Console.linesCount = 0;
};

/**
 * popup is caching the original alert 
 */
/* public */
window.popup = window.alert;

/* public */
window.alert = function (s) {
	Console.consoleOutput (s + "\r\n");
};

/* public */
window.error = function (s) {
	Console.consoleOutput (s + "\r\n", "red");
};

/* public */
window.log = function (s) {
	Console.consoleOutput (s + "\r\n", "blue");
};

/**
 * TODO: assert need more work
 */
/* public */
window.assert = function () {
	var b = true;
	if (arguments.length == 1) {
		b = arguments[0];
	} else if (arguments.length == 2) {
		var x1 = arguments[0];
		var x2 = arguments[1];
		b = (x1 == x2);
	} else {
		var x1 = arguments[0];
		var x2 = arguments[1];
		var delta = arguments[2];
		b = Math.abs (x1 - x2) < Math.abs (delta);
	}
	if (b) {
		Console.consoleOutput ("Passed\r\n", "green");
	} else {
		// TODO: Should throw exceptions here
		if (arguments.length >= 2) {
			Console.consoleOutput ("Failed: expecting " + arguments[1] 
					+ ", but " + arguments[0] + " !\r\n", "red");
		} else {
			Console.consoleOutput ("Failed\r\n", "red");
		}
	}
};

//if (window["System"] == null) { // System is not defined yet
	/**
	 * java.lang.System may be overriden later
	 */
	/* public */
	System = new JavaObject ();
	
	System.currentTimeMillis = function () {
		return new Date ().getTime ();
	};

	/* public */
	System.arraycopy = function (src, srcPos, dest, destPos, length) {
		if (src != dest) {
			for (var i = 0; i < length; i++) {
				dest[destPos + i] = src[srcPos + i];
			}
		} else {
			var swap = [];
			for (var i = 0; i < length; i++) {
				swap[i] = src[srcPos + i];
			}
			for (var i = 0; i < length; i++) {
				dest[destPos + i] = swap[i];
			}
		}
	};
	
	System.props = null; //new java.util.Properties ();
	System.getProperties = function () {
		return System.props;
	};
	System.getProperty = function (key, def) {
		if (System.props != null) {
			return System.props.getProperty (key, def);
		}
		if (def != null) {
			return def;
		}
		return key;
	};
	System.setProperties = function (props) {
		System.props = props;
	};
	System.setProperty = function (key, val) {
		if (System.props == null) {
			return ;
		}
		System.props.setProperty (key, val);
	};

	/* public */
	System.out = new JavaObject ();
	System.out.__CLASS_NAME__ = "java.io.PrintStream";
	
	/* public */
	System.out.print = function (s) { 
		Console.consoleOutput (s);
	};
	
	/* public */
	System.out.println = function (s) {
		if (typeof s == "undefined") {
			s = "\r\n";
		} else if (s == null) {
			s = "null\r\n";
		} else {
			s = s + "\r\n";
		}
		Console.consoleOutput (s);
	};
	
	/* public */
	System.err = new JavaObject ();
	System.err.__CLASS_NAME__ = "java.io.PrintStream";
	
	/* public */
	System.err.print = function (s) { 
		Console.consoleOutput (s, "red");
	};
	
	/* public */
	System.err.println = function (s) {
		if (typeof s == "undefined") {
			s = "\r\n";
		} else if (s == null) {
			s = "null\r\n";
		} else {
			s = s + "\r\n";
		}
		Console.consoleOutput (s, "red");
	};
	
	/**
	 * TODO: printf need more work for those quatities of formats
	 */
	/* public */
	System.out.printf = System.err.printf = function (format, args) {
		if (format == null || format.length == 0) {
			return ;
		}
		var xargs = new Array ();
		if (arguments.length != 2) {
			for (var i = 1; i < arguments.length; i++) {
				xargs[i - 1] = arguments[i];
			}
		} else if (arguments[1] instanceof Array) {
			xargs = arguments[1];
		} else {
			xargs = [args];
		}
		
		var index = 0;
		var str = format.replace (
			/%(\d+\$)?([-#+ 0,\(<]*)?(\d+)?(\.\d+)?([tT])?([a-zA-Z%])/g, 
			function ($0, $1, $2, $3, $4, $5, $6) {
				var o = null;
				if ($1 != null && $1.length != 0) {
					var i = parseInt ($1) - 1;
					o = xargs[i];
				} else if ($2 != null && $2.length != 0) {
					o = xargs[index - 1];
				} else if ($5 != null && $5.length != 0) {
					o = this.formatTime (xargs[index], $6);
					index++;
				} else if ($6 == "n") {
					o = "\r\n";
				} else if ($6 == "%") {
					o = "%";
				} else {
					o = xargs[index];
					index++;
				}
				return o.toString ();
			});
		this.print (str);
	};
	
	/* public */
	System.out.formatTime = System.err.formatTime = function (t, p) {
		var o = t;
		if (p == "H") {
			o = "" + t.getHours ();
			if (o.lenght < 2) {
				o = "0" + o;
			}
		} else if (p == "I") {
			o = "" + (t.getHours () % 12);
			if (o.lenght < 2) {
				o = "0" + o;
			}
		} else if (p == "k") {
			o = "" + t.getHours ();
		} else if (p == "l") {
			o = "" + (t.getHours () % 12);
		} else if (p == "M") {
			o = "" + t.getMinutes ();
			if (o.lenght < 2) {
				o = "0" + o;
			}
		} else if (p == "S") {
			o = "" + t.getSeconds ();
			if (o.lenght < 2) {
				o = "0" + o;
			}
		} else if (p == "L") {
			o = "000";
		} else if (p == "N") {
			o = "000000000";
		} else if (p == "k") {
			o = (t.getHours () > 12) ? "pm" : "am";
		} else if (p == "z") {
			o = "+0800";
		// ... More ...
		}
		return o;
	};
//}
}
