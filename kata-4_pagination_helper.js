class PaginationHelper {
    constructor(items, pageSize) {
        this.items = items;
        this.pageSize = pageSize;
    }

    page_count() {
        return Math.ceil(this.items.length / this.pageSize);
    }
    item_count() {
        return this.items.length;
    }
    page_item_count(page) {
        if (page > this.page_count() - 1) {
            return -1;
        }
        if (page < this.page_count() - 1) {
            return this.pageSize;
        }
        return this.items.length % this.pageSize || this.pageSize;
    }
    page_index(index) {
        if (index > this.items.length - 1 || index < 0) {
            return -1
        }
        return Math.ceil(index / this.pageSize) - 1;
    }

}


helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4)
console.log('pageCount: ' + helper.page_count()); // 2
console.log('itemCount: ' + helper.item_count()); // 6
console.log('itemCount Page#1: ' + helper.page_item_count(0)); // 4
console.log('itemCount Page#2: ' + helper.page_item_count(1)); // 2
console.log('itemCount page#3: ' + helper.page_item_count(2)); // -1
console.log('page of item index 5: ' + helper.page_index(5)); // 1
console.log('page of item index 2: ' + helper.page_index(2)); // 0
console.log('page of item index 20: ' + helper.page_index(20)); // -1
console.log('page of item index -10: ' + helper.page_index(-10)); // -1