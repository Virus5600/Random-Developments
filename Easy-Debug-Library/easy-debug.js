var debug = {
	message: function(msg, onDebug=true) {
		if (onDebug)
			console.log("%cMESSAGE: %c" + msg, "color: #bdbdbd; font-weight: bold; background-color: rgba(189, 189, 189, 0.25);", "color: white; background-color: rgba(189, 189, 189, 0.25);");
	},
	info : function(msg, onDebug=true) {
		if (onDebug)
			console.log("%cINFO: %c" + msg, "color: #42b0f5; font-weight: bold; background-color: rgba(66, 176, 245, 0.25);", "color: white; background-color: rgba(66, 176, 245, 0.25);");
	},
	warning : function(msg, onDebug=true) {
		if (onDebug)
			console.log("%cWARNING: %c" + msg, "color: #f5e642; font-weight: bold; background-color: rgba(245, 230, 66, 0.25);", "color: white; background-color: rgba(245, 230, 66, 0.25);");
	},
	error : function(msg, onDebug=true) {
		if (onDebug)
			console.log("%cERROR: %c" + msg, "color: #f54242; font-weight: bold; background-color: rgba(245, 66, 66, 0.25);", "color: white; background-color: rgba(245, 66, 66, 0.25);");
	}
}