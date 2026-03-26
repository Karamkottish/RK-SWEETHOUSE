const Jimp = require('jimp');

async function removeBackground() {
  try {
    const image = await Jimp.read('./public/3d-logo.png');
    
    // We want to remove black background and keep the pink/red logo.
    // So for each pixel, we map its distance from pure black to alpha.
    // If it's close to black (r<30, g<30, b<30) we make it transparent.
    // To preserve smooth shadows, we interpolate alpha based on luminance.
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];
      
      // Calculate perceptive luminance/brightness
      const brightness = Math.max(red, green, blue);
      
      if (brightness < 15) {
        // Pure black or near black -> pure transparent
        image.bitmap.data[idx + 3] = 0;
      } else if (brightness < 60 && red < 80 && green < 30 && blue < 50) {
        // Smooth shadow transition
        // Scale alpha from 0 to 255 based on brightness from 15 to 60
        const alpha = Math.floor(((brightness - 15) / 45) * 255);
        image.bitmap.data[idx + 3] = alpha;
      }
      
    });

    await image.writeAsync('./public/3d-logo-transparent.png');
    console.log("Successfully removed black background");
  } catch (error) {
    console.error("Error processing image:", error);
  }
}

removeBackground();
