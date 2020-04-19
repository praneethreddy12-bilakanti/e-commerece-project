export class Mobiles {
    mobilesProductId: number;
    mobilesImage?: string;
    mobilesPorductPrice: number;
    mobilesProductDescription: string;
    mobilessQuantity: number
    mobileType: string
    constructor(mobilesProductId, mobilesImage, mobilesPorductPrice, mobilesProductDescription, mobilessQuantity, mobileType) {
        this.mobilesProductId = mobilesProductId;
        this.mobilesImage = mobilesImage;
        this.mobilesPorductPrice = mobilesPorductPrice;
        this.mobilesProductDescription = mobilesProductDescription;
        this.mobilessQuantity = mobilessQuantity;
        this.mobileType = mobileType;
    }
}

