module.exports = function pkgx(string){
    if(typeof string !== "string") throw new TypeError("pkgx wants a string!");

    return string.replace(/\s/g, "");
};