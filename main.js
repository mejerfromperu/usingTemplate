const app = Vue.createApp({
    data() {
        return {
            stocks: [
                {
                    name: "RXP",
                    purchasePrice: 3,
                    salePrice: null,
                    quantity: 100,
                    sum() {
                        return (this.purchasePrice ?? this.salePrice) * this.quantity;
                    }
                },
                {
                    name: "ETH",
                    purchasePrice: null,
                    salePrice: 110,
                    quantity: 43,
                    sum() {
                        return (this.purchasePrice ?? this.salePrice) * this.quantity;
                    }
                }
            ],
            newName: "",
            newPurchasePrice: null,
            newSalePrice: null,
            newQuantity: 1,
            portfolioValue: 0,
            filterType: "both", 
            errorMessage: "" 
        };
    },
    methods: { 
        addStock() {
            const newStock = {
                name: this.newName,
                purchasePrice: this.newPurchasePrice,
                salePrice: this.newSalePrice,
                quantity: this.newQuantity,
                sum() {
                    return (this.purchasePrice ?? this.salePrice) * this.quantity;
                }
            };
            this.stocks.push(newStock);

            // Reset form inputs
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
            this.portfolioValue = this.stocks.reduce((total, stock) => total + stock.sum(), 0);
        }
    },
    computed: {
        
        filteredStocks() {
            if (this.filterType === "both") return this.stocks;
            if (this.filterType === "buy") return this.stocks.filter(stock => stock.purchasePrice !== null);
            if (this.filterType === "sell") return this.stocks.filter(stock => stock.salePrice !== null);
        }
    }
});

