/* AppKeys
**
** Simple helper util to bind to ket events
** 
**  AppKeys.registerDown([Arr], function(e) {...}, boolean);
**  AppKeys.registerUp([Arr], function(e) {...}, boolean); 
**  AppKeys.registerPress([Arr], function(e) {...}, boolean);
**
**  [Arr] = Array of keycodes to bind to. Example: [65, 66] // binds to the letter "a" and "b"
**  funcion(e) {...} = Callback function. Put your executable code in here!
**  boolean = Whether to use the metakey (control or command)
**
*/
!function() {
  window.AppKeys = new function() {
		var _local = this;
		this.registryDown = {};
		this.registryUp = {};
		this.registryPress = {};
		
		function register(r, keyArr, func, meta) {
			if (!meta) meta = false;
			for (var i in keyArr) {
				var key = 'k' + keyArr[i];
				r[key] = {'m' : meta, 'f' : func};
			}
		}
		
		function fire(e, r) {
			var meta = (e.ctrlKey || e.metaKey) ? true : false;
			var ck = 'k'+e.keyCode;
			
			if (r[ck]) {
				var targ = r[ck];
				if ((targ.m && meta) || targ.m === false) {
					targ.f(e);
				}
			}
		}
		
		window.onkeydown = function(e) {
			fire(e, _local.registryDown);
		}
		window.onkeyup = function(e) {
			fire(e, _local.registryUp);
		}
		window.onkeypress = function(e) {
			fire(e, _local.registryPress);
		}
		
		this.registerDown = function(keyArr, func, meta) {
			register(_local.registryDown, keyArr, func, meta);
		}
		this.registerUp = function(keyArr, func, meta) {
			register(_local.registryUp, keyArr, func, meta);
		}
		this.registerPress = function(keyArr, func, meta) {
			register(_local.registryPress, keyArr, func, meta);
		}
	}
}();
