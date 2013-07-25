AppKeys
=======

Simple helper for keyboard shortcuts

AppKeys.registerDown([Arr], function(e) {...}, boolean);

AppKeys.registerUp([Arr], function(e) {...}, boolean); 

AppKeys.registerPress([Arr], function(e) {...}, boolean);


[Arr] = Array of keycodes to bind to. Example: [65, 66] // binds to the letter "a" and "b"

funcion(e) {...} = Callback function. Put your executable code in here!

boolean = Whether to use the metakey (control or command)


