// atlas-ui/react/static/js/Components/QRGenerator.tsx
import QRCode from "qrcode";

export interface QRGeneratorOptions {
  url: string;
  size: number;
}

export const createQRWithLogo = async (options: QRGeneratorOptions): Promise<HTMLCanvasElement> => {
  const { url, size } = options;

  return new Promise((resolve, reject) => {
    const qrCanvas = document.createElement("canvas");
    const containerSize = size;
    const qrSize = Math.floor(size * 0.8);

    QRCode.toCanvas(
      qrCanvas,
      url,
      {
        width: qrSize,
        margin: 0,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
        errorCorrectionLevel: "H",
      },
      (error) => {
        if (error) {
          reject(error);
          return;
        }

        const finalCanvas = document.createElement("canvas");
        const ctx = finalCanvas.getContext("2d");
        const scanMeSpace = Math.floor(containerSize * 0.17);
        finalCanvas.width = containerSize;
        finalCanvas.height = containerSize + scanMeSpace;

        if (ctx) {
          const radius = Math.floor(containerSize * 0.1);
          ctx.fillStyle = "#FFFFFF";
          ctx.beginPath();
          ctx.roundRect(0, 0, finalCanvas.width, finalCanvas.height, radius);
          ctx.fill();

          const qrOffset = (containerSize - qrSize) / 2;
          ctx.drawImage(qrCanvas, qrOffset, qrOffset);

          ctx.fillStyle = "#000000";
          ctx.font = `bold ${Math.floor(containerSize * 0.13)}px Arial`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("VIEW IT LIVE", containerSize / 2, containerSize + scanMeSpace * 0.2);

          resolve(finalCanvas);
        }
      }
    );
  });
};

export const addQRToScreenshot = async (ctx: CanvasRenderingContext2D, imageWidth: number, imageHeight: number, url: string) => {
  try {
    const qrSize = Math.floor(imageWidth / 8);
    const qrCanvas = await createQRWithLogo({ url, size: qrSize });

    const margin = Math.floor(imageWidth / 100);
    const qrX = imageWidth - qrCanvas.width - margin;
    const qrY = imageHeight - qrCanvas.height - margin;

    ctx.drawImage(qrCanvas, qrX, qrY);
  } catch (error) {
    console.warn("Failed to generate QR code:", error);
  }
};
