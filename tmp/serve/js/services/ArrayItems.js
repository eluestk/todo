"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
    var ArrayItems = (function () {
        //（1）依存するサービスを引数に指定

        function ArrayItems($scope) {
            _classCallCheck(this, ArrayItems);

            this.init($scope);
        }

        _createClass(ArrayItems, [{
            key: "init",

            //（2）依存するサービスを保存
            value: function init($scope) {
                this.$scope = $scope;
                this.items = [];
                //（3）各タスクに識別用のシーケンス
                this.serial = 0;
            }
        }, {
            key: "setCurrentItem",

            //（4）選択されたアイテムを保存する
            value: function setCurrentItem(item) {
                this.current = item;
            }
        }, {
            key: "getCurrentItem",

            //（5）選択されたアイテムを取得する
            value: function getCurrentItem() {
                return this.current;
            }
        }, {
            key: "list",

            //（6）タスクの一覧を取得するメソッド
            value: function list(callback) {
                callback.call(this, this.items);
            }
        }, {
            key: "add",

            //（7）タスクを追加するメソッド
            value: function add(item, callback) {
                this.serial++;
                item.id = "id_" + this.serial; //（8）タスクにIDを付与
                var $scope = this.$scope;
                this.items.push(item); //（9）タスクを保存
                // : (省略)
            }
        }, {
            key: "remove",

            //（10）タスクを削除するメソッド
            value: function remove(item, callback) {
                var id = item.id;
                var tmp = new Array();
                for (var i = 0; i < this.items.length; i++) {
                    if (item.id != this.items[i].id) {
                        tmp.push(this.items[i]);
                    }
                }
                //（11）削除したタスクを除いたリストで更新
                this.items = tmp;
                //（省略）
            }
        }]);

        return ArrayItems;
    })();

    app.ArrayItems = ArrayItems;
})(undefined.app);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL0FycmF5SXRlbXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQ0FBQyxVQUFDLEdBQUcsRUFBSztRQUNGLFVBQVU7OztBQUVILGlCQUZQLFVBQVUsQ0FFRixNQUFNLEVBQUU7a0NBRmhCLFVBQVU7O0FBR1osZ0JBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkI7O3FCQUpHLFVBQVU7Ozs7bUJBT1YsY0FBQyxNQUFNLEVBQUU7QUFDVCxvQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsb0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVoQixvQkFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDbkI7Ozs7O21CQUdhLHdCQUFDLElBQUksRUFBRTtBQUNqQixvQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDdkI7Ozs7O21CQUdhLDBCQUFHO0FBQ2IsdUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUN2Qjs7Ozs7bUJBR0csY0FBQyxRQUFRLEVBQUU7QUFDWCx3QkFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xDOzs7OzttQkFHRSxhQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDaEIsb0JBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLG9CQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlCLG9CQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLG9CQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7YUFFekI7Ozs7O21CQUdLLGdCQUFDLElBQUksRUFBQyxRQUFRLEVBQUU7QUFDbEIsb0JBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDakIsb0JBQUksR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDdEIscUJBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2Qyx3QkFBRyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQzVCLDJCQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDM0I7aUJBQ0o7O0FBRUQsb0JBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDOzthQUVwQjs7O2VBbERHLFVBQVU7OztBQXFEaEIsT0FBRyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7Q0FFN0IsQ0FBQSxDQUFFLFVBQUssR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoic2VydmljZXMvQXJyYXlJdGVtcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoYXBwKSA9PiB7XHJcbiAgY2xhc3MgQXJyYXlJdGVtcyB7XHJcbiAgICAvL++8iDHvvInkvp3lrZjjgZnjgovjgrXjg7zjg5PjgrnjgpLlvJXmlbDjgavmjIflrppcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xyXG4gICAgICB0aGlzLmluaXQoJHNjb3BlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy/vvIgy77yJ5L6d5a2Y44GZ44KL44K144O844OT44K544KS5L+d5a2YXHJcbiAgICBpbml0KCRzY29wZSkgeyAgXHJcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIC8v77yIM++8ieWQhOOCv+OCueOCr+OBq+itmOWIpeeUqOOBruOCt+ODvOOCseODs+OCuVxyXG4gICAgICAgIHRoaXMuc2VyaWFsID0gMDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8v77yINO+8iemBuOaKnuOBleOCjOOBn+OCouOCpOODhuODoOOCkuS/neWtmOOBmeOCi1xyXG4gICAgc2V0Q3VycmVudEl0ZW0oaXRlbSkgeyBcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBpdGVtO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy/vvIg177yJ6YG45oqe44GV44KM44Gf44Ki44Kk44OG44Og44KS5Y+W5b6X44GZ44KLXHJcbiAgICBnZXRDdXJyZW50SXRlbSgpIHsgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvL++8iDbvvInjgr/jgrnjgq/jga7kuIDopqfjgpLlj5blvpfjgZnjgovjg6Hjgr3jg4Pjg4lcclxuICAgIGxpc3QoY2FsbGJhY2spIHsgIFxyXG4gICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyx0aGlzLml0ZW1zKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8v77yIN++8ieOCv+OCueOCr+OCkui/veWKoOOBmeOCi+ODoeOCveODg+ODiVxyXG4gICAgYWRkKGl0ZW0sIGNhbGxiYWNrKSB7ICBcclxuICAgICAgICB0aGlzLnNlcmlhbCsrO1xyXG4gICAgICAgIGl0ZW0uaWQgPSBcImlkX1wiICsgdGhpcy5zZXJpYWw7ICAvL++8iDjvvInjgr/jgrnjgq/jgatJROOCkuS7mOS4jlxyXG4gICAgICAgIHZhciAkc2NvcGUgPSB0aGlzLiRzY29wZTtcclxuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7ICAgICAgICAgIC8v77yIOe+8ieOCv+OCueOCr+OCkuS/neWtmFxyXG4gICAgICAgIC8vIDogKOecgeeVpSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8v77yIMTDvvInjgr/jgrnjgq/jgpLliYrpmaTjgZnjgovjg6Hjgr3jg4Pjg4lcclxuICAgIHJlbW92ZShpdGVtLGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gaXRlbS5pZDtcclxuICAgICAgICB2YXIgdG1wID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYoaXRlbS5pZCAhPSB0aGlzLml0ZW1zW2ldLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB0bXAucHVzaCh0aGlzLml0ZW1zW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL++8iDEx77yJ5YmK6Zmk44GX44Gf44K/44K544Kv44KS6Zmk44GE44Gf44Oq44K544OI44Gn5pu05pawXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IHRtcDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy/vvIjnnIHnlaXvvIlcclxuICAgIH07XHJcbiAgfVxyXG4gIFxyXG4gIGFwcC5BcnJheUl0ZW1zID0gQXJyYXlJdGVtcztcclxuICAgIFxyXG59KSh0aGlzLmFwcCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9