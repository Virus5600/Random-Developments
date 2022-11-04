var debugMode = false;
$(document).ready(function() {
	// Toggles syntax highlighting
	hljs.highlightAll();

	// Toggles tooltip
	$('[data-toggle=tooltip]').tooltip();

	// Toggle the sidebar on smaller screen
	$('[data-toggle=sidebar-collapse]').on('click', function(e) {
		let obj = $(e.currentTarget);
		let target = $(obj.attr('data-target'));

		if (target.hasClass("show"))
			target.removeClass("show");
		else
			target.addClass("show");
	});

	// Triggers the event for those with data-trigger
	$('[data-click-condition]').on('click', function(e) {
		if (eval($(e.currentTarget).attr('data-click-condition'))) {
			eval($(e.currentTarget).attr('data-click-action'));
		}
	})

	// Allows copying of script
	$('[data-copy-for]').on('click', function(e) {
		// Get target and then text to copy
		let target = document.getElementById(e.currentTarget.getAttribute('data-copy-for'));
		let txt = $(target).val();
		
		// Set the target visible
		$(target).removeClass('hidden');
		
		// Get current focus then transfer focus to new obj
		let currentFocus = document.activeElement;
		target.focus();
		target.setSelectionRange(0, target.value.length);

		// Copy
		let success;
		try {
			success = document.execCommand("copy");
		} catch(e) {
			success = false;
		}

		// Go back to previously focused element
		if (currentFocus && typeof currentFocus.focus == "function")
			currentFocus.focus();

		// Hide the target
		$(target).addClass('hidden');

		// Alert the user regarding the status of copy
		if (success)
			Swal.fire({
				title: `Copied Successfully`,
				icon: `success`,
				position: `bottom`,
				toast: true,
				showConfirmButton: false,
				timer: 1000
			});
		else
			Swal.fire({
				title: `Failed to copy`,
				icon: `error`,
				position: `bottom`,
				toast: true,
				showConfirmButton: false,
				timer: 1000
			});
	});

	$("[data-sample").on('click', function(e) {
		let obj = $(e.currentTarget);
		if (obj.attr('data-sample') == 'easy-debug') {
			let type = obj.attr('data-ed-type');
			let msg = obj.attr('data-ed-message');
			
			switch (type) {
				case 'message':
				$("#easy-debug-output").append("<span class='my-1 mx-2' style='max-width: fit-content; color: #bdbdbd; font-weight: bold; background-color: rgba(189, 189, 189, 0.25);'>MESSAGE: "+"<span style='color: white;' class='font-weight-normal'>"+msg+"</span></span>");
				debug.message(msg);
				break;

				case 'info':
				$("#easy-debug-output").append("<span class='my-1 mx-2' style='max-width: fit-content; color: #42b0f5; font-weight: bold; background-color: rgba(66, 176, 245, 0.25);'>INFO: "+"<span style='color: white;' class='font-weight-normal'>"+msg+"</span></span>");
				debug.info(msg);
				break;

				case 'warning':
				$("#easy-debug-output").append("<span class='my-1 mx-2' style='max-width: fit-content; color: #f5e642; font-weight: bold; background-color: rgba(245, 230, 66, 0.25);'>WARNING: "+"<span style='color: white;' class='font-weight-normal'>"+msg+"</span></span>");
				debug.warning(msg);
				break;

				case 'error':
				$("#easy-debug-output").append("<span class='my-1 mx-2' style='max-width: fit-content; color: #f54242; font-weight: bold; background-color: rgba(245, 66, 66, 0.25);'>ERROR: "+"<span style='color: white;' class='font-weight-normal'>"+msg+"</span></span>");
				debug.error(msg);
				break;
			}
		}
	});
});