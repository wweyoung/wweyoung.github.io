const cropState = {
    cropModalOpen: Vue.ref(false),
    cropImageSrc: Vue.ref(''),
    cropImageRef: Vue.ref(null),
    cropContainerRef: Vue.ref(null),
    cropGridRef: Vue.ref(null),
    cropLoaded: Vue.ref(false),
    cropRect: Vue.reactive({ x: 0, y: 0, width: 0, height: 0 }),
    cropper: null
};

function drawCropGrid() {
    const canvas = cropState.cropGridRef.value;
    const container = cropState.cropContainerRef.value;
    const img = cropState.cropImageRef.value;
    if (!canvas || !container || !img || !cropState.cropper) return;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const imageData = cropState.cropper.getImageData();
    const containerRect = container.getBoundingClientRect();
    const startX = imageData.left - containerRect.left;
    const startY = imageData.top - containerRect.top;
    const scaleX = imageData.width / imageData.naturalWidth;
    const scaleY = imageData.height / imageData.naturalHeight;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= imageData.naturalWidth; x++) {
        ctx.beginPath();
        ctx.moveTo(startX + x * scaleX, startY);
        ctx.lineTo(startX + x * scaleX, startY + imageData.height);
        ctx.stroke();
    }
    for (let y = 0; y <= imageData.naturalHeight; y++) {
        ctx.beginPath();
        ctx.moveTo(startX, startY + y * scaleY);
        ctx.lineTo(startX + imageData.width, startY + y * scaleY);
        ctx.stroke();
    }
}

function initCropper(imageRef, containerRef, gridRef, onCropConfirm, onCropImportOriginal) {
    if (cropState.cropper) {
        cropState.cropper.destroy();
        cropState.cropper = null;
    }
    if (!imageRef.value) return;
    cropState.cropper = new Cropper(imageRef.value, {
        aspectRatio: NaN,
        autoCropArea: 0.8,
        viewMode: 1,
        dragMode: 'move',
        restore: false,
        guides: false,
        center: true,
        highlight: false,
        cropBoxMovable: true,
        cropBoxResizable: true,
        toggleDragModeOnDblclick: false,
        ready: function() {
            drawCropGrid();
        },
        zoom: function() {
            drawCropGrid();
        },
        move: function() {
            drawCropGrid();
        },
        drag: function() {
            drawCropGrid();
        },
        crop: function(e) {
            cropState.cropRect.x = Math.round(e.detail.x);
            cropState.cropRect.y = Math.round(e.detail.y);
            cropState.cropRect.width = Math.round(e.detail.width);
            cropState.cropRect.height = Math.round(e.detail.height);
        }
    });
    cropState.cropLoaded.value = true;
}

function destroyCropper() {
    if (cropState.cropper) {
        cropState.cropper.destroy();
        cropState.cropper = null;
    }
}

function getCropData() {
    if (!cropState.cropper) return null;
    return cropState.cropper.getData(true);
}

function setCropModalOpen(open) {
    cropState.cropModalOpen.value = open;
}

function setCropImageSrc(src) {
    cropState.cropImageSrc.value = src;
}

function setCropLoaded(loaded) {
    cropState.cropLoaded.value = loaded;
}

function getCropRect() {
    return cropState.cropRect;
}

function isCropModalOpen() {
    return cropState.cropModalOpen.value;
}

function isCropLoaded() {
    return cropState.cropLoaded.value;
}

function performCrop(imageRef, loadImageFromDataUrl) {
    if (!cropState.cropper) return;
    const cropData = cropState.cropper.getData(true);
    const img = imageRef.value;
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(cropData.width);
    canvas.height = Math.round(cropData.height);
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(
        img,
        cropData.x, cropData.y, cropData.width, cropData.height,
        0, 0, cropData.width, cropData.height
    );
    const dataUrl = canvas.toDataURL('image/png');
    destroyCropper();
    cropState.cropModalOpen.value = false;
    cropState.cropLoaded.value = false;
    cropState.cropImageSrc.value = '';
    loadImageFromDataUrl(dataUrl);
}

function importOriginal(file, setCropImageSrc, initCropper) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        setCropImageSrc(e.target.result);
        setTimeout(() => {
            const imageRef = cropState.cropImageRef;
            const containerRef = cropState.cropContainerRef;
            const gridRef = cropState.cropGridRef;
            if (imageRef.value && containerRef.value && gridRef.value) {
                initCropper(imageRef, containerRef, gridRef, null, null);
            }
        }, 100);
    };
    reader.readAsDataURL(file);
}

window.cropModule = {
    cropState,
    drawCropGrid,
    initCropper,
    destroyCropper,
    getCropData,
    setCropModalOpen,
    setCropImageSrc,
    setCropLoaded,
    getCropRect,
    isCropModalOpen,
    isCropLoaded,
    performCrop,
    importOriginal
};