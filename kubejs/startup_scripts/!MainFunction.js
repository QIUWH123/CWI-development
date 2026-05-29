// priority: 10000

let RegisterNativeEvents = {
	onEvent: function (event, handler) {
		NativeEvents.onEvent(event, handler)
	}
}

global.toRawClass = (cls) => {
	let clsName = String(cls).match(/[\w\.]+(?=\]?$)/)[0]
	return global.loadRawClass(clsName)
}
global.loadRawClass = (clsName) => {
	Java.class.forName(clsName)
}

global.getDeclaredField = (obj, name, isStatic, superCount) => {
	superCount = superCount || 0
	let cls = obj
	if (!isStatic) {
		cls = obj.getClass()
	} else {
		cls = global.toRawClass(obj)
	}
	for (let i = 0; i < superCount; i++) {
		cls = cls.getSuperclass()
	}
	let field = cls.getDeclaredField(name)
	field.setAccessible(true)
	return field
}

global.getField = (obj, name, isStatic, superCount) => {
	return global.getDeclaredField(obj, name, isStatic, superCount).get(obj)
}
global.setField = (obj, name, value, isStatic, superCount) => {
	return global.getDeclaredField(obj, name, isStatic, superCount).set(obj, value)
}
let $ClassFilter = Java.loadClass("dev.latvian.mods.kubejs.util.ClassFilter")
global.unlockClassFilter = (javaWrapper) => {
	let sm = global.getField(javaWrapper, "manager")
	global.setField(sm, "classFilter", $ClassFilter(), 0, sm.scriptType == "SERVER" && Platform.getMcVersion() >= "1.20")
}
global.unlockClassFilter(Java)

// By YukkuriC