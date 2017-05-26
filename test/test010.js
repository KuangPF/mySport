/**
 * Created by ForeverW on 2017/5/26.
 */
/***
 * 闭包
 */

function getGlobal() {
    var global='global';
    function getLocal() {
        var local='local';
        console.log(global);
    }
    return getLocal();
}
getGlobal();