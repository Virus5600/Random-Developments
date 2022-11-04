var resizer = {
	BIG: 0,
	SMALL: 1,
	resize: async function(img, mode=0,percentage=50) {
		let imgElm = new Image();
		let canvas = document.createElement('canvas');
		let ctx = canvas.getContext('2d');
		percentage /= 100;
		imgElm.src = img;

		if (!mode)
			percentage += 1;

		let imageData = null;
		$(imgElm).on('load', (e) => {
			canvas.width = imgElm.width * percentage;
			canvas.height = imgElm.height * percentage;

			console.log(imgElm.width + " = " + canvas.width);
			console.log(imgElm.height + " = " + canvas.height);

			ctx.drawImage(imgElm, 0, 0, canvas.width, canvas.height);
			imageData = canvas.toDataURL('image/png');
		});
		console.log(imageData);

		return imageData;
	}
}