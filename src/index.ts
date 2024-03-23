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
    return file;
  }

  // Turn into Blob
  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, type, quality)
  );
  console.log("en construccion");
  // Turn Blob into File
  const newFile = new File([blob!], file.name, {
    type: blob!.type,
  });
  console.log(newFile);
  return newFile;
};
