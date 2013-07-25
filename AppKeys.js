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
  	var _ = this;
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
			fire(e, _.registryDown);
		}
		window.onkeyup = function(e) {
			fire(e, _.registryUp);
		}
		window.onkeypress = function(e) {
			fire(e, _.registryPress);
		}
		
		this.registerDown = function(keyArr, func, meta) {
			register(_.registryDown, keyArr, func, meta);
		}
		this.registerUp = function(keyArr, func, meta) {
			register(_.registryUp, keyArr, func, meta);
		}
		this.registerPress = function(keyArr, func, meta) {
			register(_.registryPress, keyArr, func, meta);
		}
	}
}();
