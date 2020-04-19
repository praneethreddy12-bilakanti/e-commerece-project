export class LadiesWear {
    ladiesDressProductId:number
    ladiesDressImage?:string;
    ladiesDressPorductPrice:number;
    ladiesDressProductDescription:string;
    ladiesDresssQuantity:number
    constructor(ladiesDressProductId,ladiesDressImage, ladiesDressPorductPrice,ladiesDressProductDescription,ladiesDresssQuantity)
    {
        this.ladiesDressProductId=ladiesDressProductId;
        this.ladiesDressImage=ladiesDressImage;
        this.ladiesDressPorductPrice=ladiesDressPorductPrice;
        this.ladiesDressProductDescription=ladiesDressProductDescription;
        this.ladiesDresssQuantity=ladiesDresssQuantity;
    }
}

