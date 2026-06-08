/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let childPtr = 0;
    let cookiePtr = 0;
    
    while(childPtr < g.length && cookiePtr < s.length){
        if(s[cookiePtr] >= g[childPtr]){
            childPtr++;
        }
        cookiePtr++;
    }
    return childPtr;
    
};