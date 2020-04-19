export class MeansWear {
    meansDressProductId:number
    meansDressImage?:string;
    meansDressPorductPrice:number;
    meansDressProductDescription:string;
    meansDresssQuantity:number;
    dressType:string;
    constructor(meansDressProductId,meansDressImage, meansDressPorductPrice,meansDressProductDescription,meansDresssQuantity,dressType)
    {
        this.meansDressProductId=meansDressProductId;
        this.meansDressImage=meansDressImage;
        this.meansDressPorductPrice=meansDressPorductPrice;
        this.meansDressProductDescription=meansDressProductDescription;
        this.meansDresssQuantity=meansDresssQuantity;
        this.dressType=dressType;
    }
}
