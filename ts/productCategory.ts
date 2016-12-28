

abstract class ProductCategory {
    protected imgPath : string = "img/";
    name: string;

    abstract getImageUrl() : string;
}

class SodaCategory extends ProductCategory{    
    name: string = "Soda";
    getImageUrl(): string{
        return this.imgPath + "SodaCan.png";
    }
}

class ChipsCategory extends ProductCategory{    
    name: string = "Potato chips";
    getImageUrl(): string{
        return this.imgPath + "Chips.png";
    }
}

class CandyCategory extends ProductCategory{    
    name: string = "Candy";
    getImageUrl(): string{
        return this.imgPath + "Candy.png";
    }
}

class CandyBarCategory extends ProductCategory{    
    name: string = "Candy Bar";
    getImageUrl(): string{
        return this.imgPath + "CandyBar.png";
    }
}

class NutsCategory extends ProductCategory {
    name = "Nuts"
    getImageUrl () {
        return this.imgPath + "Nuts.png";
    }
}