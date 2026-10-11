// https://stackoverflow.com/questions/18650168/convert-blob-to-base64
function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result?.toString() ?? "");
        reader.readAsDataURL(blob);
    });
}

export async function fetchAsset(url: string) {
    return await fetch(decodeURIComponent(url))
        .then((resp) => {
            if (!resp.ok) throw new Error("NOT_OK_ASSET");
            return resp.blob();
        })
        .then(async (blob) => {
            // const buffer = Buffer.from(await blob.arrayBuffer());
            // return buffer.toString("base64");
            return await blobToBase64(blob);
        })
        .catch(e => {
            console.error("asset fetch err: ", e)
            return null;
        });
}

