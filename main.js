const app = Vue.createApp({
    data() {
        return {
            stocks: [
                {
                    name: "RXP",
                    purchasePrice: 3,
                    salePrice: 10,
                    quantity: 100,
                    sum: function() {
                        return (this.purchasePrice !== null ? this.purchasePrice : this.salePrice) * this.quantity;
                    }
                },
                {
                    name: "ETH",
                    purchasePrice: 10,
                    salePrice: 110,
                    quantity: 43,
                    sum: function() {
                        return (this.purchasePrice !== null ? this.purchasePrice : this.salePrice) * this.quantity;
                    }
                }
            ],
            newName: "",
            newPurchasePrice: null,
            newSalePrice: null,
            newQuantity: 1,
            portfolioValue: 0,
            filterType: "both", // Tracks the filter state
            errorMessage: "" // To hold error messages
            
        };
    },
    methods: { 
        addStock() {
            if (this.newSalePrice !== null) {
                const existingStock = this.stocks.find(stock => stock.name === this.newName);
                if (existingStock && existingStock.quantity < this.newQuantity) {
                    this.errorMessage = "Ikke nok aktier til salg!";
                    return; // Prevent adding the stock if validation fails
                } else {
                    this.errorMessage = ""; 
                }
            }

            const newStock = {
                name: this.newName,
                purchasePrice: this.newPurchasePrice,
                salePrice: this.newSalePrice,
                quantity: this.newQuantity,
                sum() {
                    return (this.purchasePrice || this.salePrice) * this.quantity;
                }
            };
            this.stocks.push(newStock);

            this.newName = "";
            this.newPurchasePrice = null;
            this.newSalePrice = null;
            this.newQuantity = 1;
        },
        
        showBuyOnly() {
            this.filterType = "buy";
        },
        showSellOnly() {
            this.filterType = "sell";
        },
        showAll() {
            this.filterType = "both";
        },
        
        
        totalPortofoile() {
            this.portfolioValue = this.stocks.reduce((total, stock) => {
                return total + stock.sum();
            }, 0);
        }
    },
    computed: {
        myComputed() { 
            return ''; 
        }
    }
});
