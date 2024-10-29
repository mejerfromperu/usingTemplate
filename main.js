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
                        return this.purchasePrice * this.quantity;
                    }
                },
                {
                    name: "ETH",
                    purchasePrice: 10,
                    salePrice: 110,
                    quantity: 43,
                    sum: function() {
                        return this.salePrice * this.quantity;
                    }
                }
            ],
            newName: "",
            newPurchasePrice: null,
            newSalePrice: null,
            newQuantity: 1,
            portfolioValue: 0,
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
                    return (this.purchasePrice || this.salePrice) * this.quantity;
                }
            };
            this.stocks.push(newStock);
            // Nulstil inputfelterne
            this.newName = "";
            this.newPurchasePrice = null;
            this.newSalePrice = null;
            this.newQuantity = 1;
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
