export const compressImage = async (
  file: File,
  quality: number = 0.2,
  type: string = file.type
): Promise<File> => {
  // Get as image data
  const imageBitmap: ImageBitmap = await createImageBitmap(file);
  // Draw to canvas
  const canvas = document.createElement("canvas");
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
  if (ctx) {
    ctx.drawImage(imageBitmap, 0, 0);
  } else {
    //console.log("error with the process compress");
    return file;
  }

  // Turn into Blob
  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, type, quality)
  );
  // Turn Blob into File
  const newFile = new File([blob!], file.name, {
    type: blob!.type,
  });

  return newFile;
};
