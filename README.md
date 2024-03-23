# COMPRESS-ALI

## reduce file size

reduce the size of images with JPEG extension

## Warning

It is for frontend application use

## How use

#### npm

```
npm i compress-ali
```

#### pnpm

```
pnpm i compress-ali
```

Code:

```
import { compressImage } from "compress-ali";

const file:File | null = null

// send only the file
const newFile = await compressImage(file!);

//more parameters: quality:[0.2 - 0.6](recommendation default 0.2), type: (its file.type)
const newFile = await compressImage(file,0.5,"image/jpeg");

```

## Quality

the actual range is [0.1 - 1]

The quality loss is very large at 0.1, and from 0.7 the behavior will not be as expected, it may increase.

## What files does it compress?

For now, it compresses image files with a jpg extension. Using other image formats will not reduce the size; on the contrary, it may increase.

### Package Objectives

".png,.jpg,.jpeg,.pdf,.gif"
