((app) => {
  class ArrayItems {
    //（1）依存するサービスを引数に指定
    constructor($scope) {
      this.init($scope);
    };

    //（2）依存するサービスを保存
    init($scope) {  
        this.$scope = $scope;
        this.items = [];
        //（3）各タスクに識別用のシーケンス
        this.serial = 0;
    };
    
    //（4）選択されたアイテムを保存する
    setCurrentItem(item) { 
        this.current = item;
    };
    
    //（5）選択されたアイテムを取得する
    getCurrentItem() {  
        return this.current;
    };
    
    //（6）タスクの一覧を取得するメソッド
    list(callback) {  
        callback.call(this,this.items);
    };
    
    //（7）タスクを追加するメソッド
    add(item, callback) {  
        this.serial++;
        item.id = "id_" + this.serial;  //（8）タスクにIDを付与
        var $scope = this.$scope;
        this.items.push(item);          //（9）タスクを保存
        // : (省略)
    };
    
    //（10）タスクを削除するメソッド
    remove(item,callback) {
        var id = item.id;
        var tmp = new Array();
        for(var i = 0; i < this.items.length; i++) {
            if(item.id != this.items[i].id) {
                tmp.push(this.items[i]);
            }
        }
        //（11）削除したタスクを除いたリストで更新
        this.items = tmp;                
        //（省略）
    };
  }
  
  app.ArrayItems = ArrayItems;
    
})(this.app);