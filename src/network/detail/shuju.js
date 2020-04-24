export class shuju{
    constructor(shopInfo){
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }
}
export class shuju2{
    constructor(itemParams){
        this.infoKey = itemParams.info.key;
        this.set = itemParams.info.set;
        this.disclaimer = itemParams.rule.disclaimer;
        this.ruleKey = itemParams.rule.key;
        this.tables = itemParams.rule.tables[0];
    }
}
export class shuju3{
    constructor(rate){
        this.content = rate.content;
        this.created = rate.created;
        this.explain = rate.explain;
        this.style = rate.style;
    }
}